/* Tracking spine — GA4 (external for strict CSP — no inline JS).
 *
 * Ported from hitlai.net js/analytics.js (GA4-only: no Meta pixel here).
 * Loads gtag.js as a dynamically-inserted <script> tag, then exposes:
 *
 *   window.mmTrack(event, params)   — mirrors one event to gtag('event', ...)
 *
 * Auto-wired, site-wide, no per-page opt-in required:
 *   - buy_click   on click of any a[href*="buy.stripe.com"]
 *                 (param: promo_code, read from ?prefilled_promo_code= on the href)
 *
 * Inbound ?code= / ?utm_* is captured once and persisted to sessionStorage so
 * attribution survives navigation across pages in the same session; the stored
 * values are merged into every gtag config call and every mmTrack() event as
 * default params.
 */
(function () {
  'use strict';

  var GA4_ID = 'G-CMXZ55S9BL';

  // ---- Attribution: capture inbound code/utm_*, persist across navigation ----
  var ATTR_KEY = 'aictrlnet_attr';
  var ATTR_FIELDS = ['code', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

  function readStoredAttribution() {
    try {
      var raw = sessionStorage.getItem(ATTR_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function captureAttribution() {
    var params = new URLSearchParams(window.location.search);
    var stored = readStoredAttribution();
    var changed = false;
    ATTR_FIELDS.forEach(function (key) {
      var v = (params.get(key) || '').trim();
      if (v) {
        stored[key] = v.slice(0, 80);
        changed = true;
      }
    });
    if (changed) {
      try { sessionStorage.setItem(ATTR_KEY, JSON.stringify(stored)); } catch (e) {}
    }
    return stored;
  }

  var attribution = captureAttribution();

  var urlParams = new URLSearchParams(window.location.search);
  var debugMode = urlParams.get('debug_mode') === '1' || urlParams.get('debug_mode') === 'true';

  // ---- GA4 (gtag.js) ----
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA4_ID, Object.assign({}, attribution, debugMode ? { debug_mode: true } : {}));

  var gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
  document.head.appendChild(gtagScript);

  // ---- window.mmTrack(event, params) ----
  window.mmTrack = function (event, params) {
    var merged = Object.assign({}, attribution, params || {});
    try { window.gtag('event', event, merged); } catch (e) {}
  };

  // ---- Auto-wire: buy_click on any Stripe buy-button click ----
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href*="buy.stripe.com"]') : null;
    if (!a) return;
    var promo = '';
    try {
      var href = a.getAttribute('href') || '';
      var qIndex = href.indexOf('?');
      if (qIndex > -1) {
        promo = new URLSearchParams(href.slice(qIndex)).get('prefilled_promo_code') || '';
      }
    } catch (err) {}
    var params = promo ? { promo_code: promo } : {};
    var merged = Object.assign({}, attribution, params);
    // gtag needs beacon transport to guarantee delivery before page unload on navigation
    try { window.gtag('event', 'buy_click', Object.assign({ transport_type: 'beacon' }, merged)); } catch (e) {}
  }, true);
})();
