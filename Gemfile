source "https://rubygems.org"

# Pinned to the version GitHub Pages actually builds with (reported by the
# live site's generator meta tag: Jekyll v3.10.0). Keep in sync if Pages moves.
gem "jekyll", "~> 3.10"
gem "minima"
gem "webrick"

# System Ruby here is 2.6.10; ffi >= 1.17 requires Ruby >= 3.0.
gem "ffi", "< 1.17"

# GFM markdown parser — Jekyll 3.x needs this explicitly
gem "kramdown-parser-gfm"

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
end
