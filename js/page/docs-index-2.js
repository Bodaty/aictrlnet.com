    // fx-layer effects
    (function () {
        var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var fine = window.matchMedia('(pointer: fine)').matches;

        var canvas = document.getElementById('net-bg');
        if (canvas && !reduced) {
            var ctx = canvas.getContext('2d');
            var dpr = Math.min(window.devicePixelRatio || 1, 2);
            var W = 0, H = 0, nodes = [], pulses = [];
            var mouse = { x: -9999, y: -9999 };
            var LINK = 150, running = true, tick = 0;
            function makeNode() {
                return {
                    x: Math.random() * W, y: Math.random() * H,
                    vx: (Math.random() - 0.5) * 0.28,
                    vy: (Math.random() - 0.5) * 0.28,
                    r: 1 + Math.random() * 1.7
                };
            }
            function resize() {
                W = window.innerWidth; H = window.innerHeight;
                canvas.width = Math.floor(W * dpr); canvas.height = Math.floor(H * dpr);
                canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
                ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                var target = Math.max(28, Math.min(110, Math.floor(W * H / 16000)));
                while (nodes.length < target) nodes.push(makeNode());
                nodes.length = target;
            }
            resize();
            window.addEventListener('resize', resize);
            if (fine) {
                window.addEventListener('mousemove', function (e) { mouse.x = e.clientX; mouse.y = e.clientY; });
                window.addEventListener('mouseout', function () { mouse.x = -9999; mouse.y = -9999; });
            }
            document.addEventListener('visibilitychange', function () {
                running = !document.hidden;
                if (running) requestAnimationFrame(frame);
            });
            function frame() {
                if (!running) return;
                tick++;
                ctx.clearRect(0, 0, W, H);
                for (var i = 0; i < nodes.length; i++) {
                    var n = nodes[i];
                    n.x += n.vx; n.y += n.vy;
                    if (n.x < -20) n.x = W + 20; else if (n.x > W + 20) n.x = -20;
                    if (n.y < -20) n.y = H + 20; else if (n.y > H + 20) n.y = -20;
                }
                for (var a = 0; a < nodes.length; a++) {
                    for (var b = a + 1; b < nodes.length; b++) {
                        var dx = nodes[a].x - nodes[b].x;
                        if (dx > LINK || dx < -LINK) continue;
                        var dy = nodes[a].y - nodes[b].y;
                        if (dy > LINK || dy < -LINK) continue;
                        var d = Math.sqrt(dx * dx + dy * dy);
                        if (d > LINK) continue;
                        var alpha = (1 - d / LINK) * 0.16;
                        ctx.strokeStyle = 'rgba(34, 211, 238, ' + alpha.toFixed(3) + ')';
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(nodes[a].x, nodes[a].y);
                        ctx.lineTo(nodes[b].x, nodes[b].y);
                        ctx.stroke();
                        if (tick % 50 === 0 && pulses.length < 7 && Math.random() < 0.06) {
                            pulses.push({ ax: nodes[a].x, ay: nodes[a].y, b: nodes[b], t: 0 });
                        }
                    }
                }
                if (mouse.x > -999) {
                    for (var m = 0; m < nodes.length; m++) {
                        var mdx = nodes[m].x - mouse.x, mdy = nodes[m].y - mouse.y;
                        var md = Math.sqrt(mdx * mdx + mdy * mdy);
                        if (md < 170) {
                            var ma = (1 - md / 170) * 0.4;
                            ctx.strokeStyle = 'rgba(103, 232, 249, ' + ma.toFixed(3) + ')';
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(mouse.x, mouse.y);
                            ctx.lineTo(nodes[m].x, nodes[m].y);
                            ctx.stroke();
                        }
                    }
                }
                for (var p = pulses.length - 1; p >= 0; p--) {
                    var pl = pulses[p];
                    pl.t += 0.022;
                    if (pl.t >= 1) { pulses.splice(p, 1); continue; }
                    var px = pl.ax + (pl.b.x - pl.ax) * pl.t;
                    var py = pl.ay + (pl.b.y - pl.ay) * pl.t;
                    var fade = Math.sin(pl.t * Math.PI);
                    var g = ctx.createRadialGradient(px, py, 0, px, py, 7);
                    g.addColorStop(0, 'rgba(165, 243, 252, ' + (0.85 * fade).toFixed(3) + ')');
                    g.addColorStop(1, 'rgba(34, 211, 238, 0)');
                    ctx.fillStyle = g;
                    ctx.beginPath();
                    ctx.arc(px, py, 7, 0, Math.PI * 2);
                    ctx.fill();
                }
                for (var k = 0; k < nodes.length; k++) {
                    var nd = nodes[k];
                    ctx.fillStyle = 'rgba(34, 211, 238, 0.55)';
                    ctx.beginPath();
                    ctx.arc(nd.x, nd.y, nd.r, 0, Math.PI * 2);
                    ctx.fill();
                }
                requestAnimationFrame(frame);
            }
            requestAnimationFrame(frame);
        }

        var beam = document.querySelector('.scroll-beam');
        if (beam && !reduced) {
            var beamQueued = false;
            function setBeam() {
                beamQueued = false;
                var max = document.documentElement.scrollHeight - window.innerHeight;
                beam.style.transform = 'scaleX(' + (max > 0 ? window.scrollY / max : 0) + ')';
            }
            window.addEventListener('scroll', function () {
                if (!beamQueued) { beamQueued = true; requestAnimationFrame(setBeam); }
            }, { passive: true });
            setBeam();
        }

        if (fine) {
            document.querySelectorAll('.feature-item, .value-card, .stat, .problem-box, .solution-box, .step, .channel-card, .capability-card, .doc-item, .contribute-card').forEach(function (card) {
                card.classList.add('fx-card');
                var spot = document.createElement('div');
                spot.className = 'fx-spot';
                spot.setAttribute('aria-hidden', 'true');
                card.appendChild(spot);
                card.addEventListener('mousemove', function (e) {
                    var r = card.getBoundingClientRect();
                    card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
                    card.style.setProperty('--my', (e.clientY - r.top) + 'px');
                });
            });
        }
    })();
