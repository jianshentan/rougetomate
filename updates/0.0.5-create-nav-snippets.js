/* create navigation-scoped snippets */

default_snippet = '\
<!-- social media links -->\
<div style="padding: 10px 0 10px 0;"><a href="https://www.twitter.com/rougetomatenyc" target="_blank"><img src="/images/twitter-icon.png" alt="" width="30" /></a>&nbsp; <a href="https://www.facebook.com/rougetomatechelsea" target="_blank"><img src="/images/fb-icon.png" alt="" width="30" /></a>&nbsp; <a href="https://www.instagram.com/rougetomatechelsea" target="_blank"><img src="/images/ig-icon.png" alt="" width="30" /></a></div>\
<!-- info/directions link -->\
<div class="rt-nav-link"><a href="/info">126 W 18th St, New York, NY 10011</a></div>\
<!-- email link -->\
<div class="rt-nav-link"><a href="mailto:chelsea@rougetomate.com">chelsea@rougetomate.com</a></div>\
<!-- telephone link -->\
<div class="rt-nav-link"><a href="tel:646-395-3978">(646)-395-3978</a></div>\
<!-- link to Fishbowl subscription -->\
<div style="margin-top: 10px;"><a style="text-transform: uppercase; color: red;" href="http://rougetomatechelsea.fbmta.com/members/UpdateProfile.aspx?Action=Subscribe">Subscribe to newsletter &gt;</a></div>\
'

mobile_snippet = '\
<!-- info/directions link -->\
<div class="rt-nav-mobile-link rt-shadow"><a href="/info">126 W 18th St,<br />New York, NY 10011</a></div>\
<!-- email link -->\
<div class="rt-nav-mobile-link rt-shadow"><a href="mailto:chelsea@rougetomate.com">chelsea@rougetomate.com</a></div>\
<!-- telephone link -->\
<div class="rt-nav-mobile-link rt-shadow"><a href="tel:646-395-3978">(646)-395-3978</a></div>\
<!-- social media links -->\
<div class="rt-shadow" style="padding: 10px 0 10px 0;"><a href="https://www.twitter.com/rougetomatenyc" target="_blank"><img src="/images/twitter-icon.png" alt="" width="30" /></a>&nbsp; <a href="https://www.facebook.com/rougetomatechelsea" target="_blank"><img src="/images/fb-icon.png" alt="" width="30" /></a>&nbsp; <a href="https://www.instagram.com/rougetomatechelsea" target="_blank"><img src="/images/ig-icon.png" alt="" width="30" /></a></div>\
<!-- link to Fishbowl subscription -->\
<div class="rt-nav-mobile-link rt-shadow" style="margin-top: 10px;"><a href="http://rougetomatechelsea.fbmta.com/members/UpdateProfile.aspx?Action=Subscribe">Subscribe to newsletter &gt;</a></div>\
'

exports.create = {
  Snippets: [
    { scope: 'nav', key: 'navdefault', name: 'Default Navigation', text: default_snippet } ,
    { scope: 'nav', key: 'navmobile', name: 'Mobile Navigation', text: mobile_snippet } ,
  ]
};

