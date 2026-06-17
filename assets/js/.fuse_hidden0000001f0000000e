/* Shared footer + sticky mobile CTA injector for inner pages */
(function () {
  var mount = document.querySelector('[data-footer]');
  if (!mount) return;
  mount.outerHTML = '\
<footer class="site-footer">\
  <div class="wrap">\
    <div class="footer__grid">\
      <div class="footer__brand">\
        <img src="https://images.squarespace-cdn.com/content/v1/5cd36d3faadd343a1b4e7133/1561011271362-WZL18BUPBZLLY5ZI9XCS/StLukes_Logo_RGB_WhiteText.png?format=500w" alt="St Luke\'s Preschool">\
        <p>Christian, play-based early learning in the heart of Dapto. Caring for local families since 1953.</p>\
      </div>\
      <div class="footer__col"><h4>Explore</h4><ul>\
        <li><a href="philosophy.html">Our Approach</a></li>\
        <li><a href="safety.html">Child Safety</a></li>\
        <li><a href="team.html">Our Educators</a></li>\
        <li><a href="history.html">Our Story</a></li>\
        <li><a href="contact.html">Contact</a></li></ul></div>\
      <div class="footer__col"><h4>Enrol</h4><ul>\
        <li><a href="enrol.html#tour">Book a Tour</a></li>\
        <li><a href="enrol.html">Waiting List</a></li>\
        <li><a href="enrol.html#how">How Enrolment Works</a></li>\
        <li><a href="contact.html">Ask a Question</a></li></ul></div>\
      <div class="footer__col"><h4>Visit Us</h4><address>\
        Lot 100, Moombara Street<br>Dapto, NSW 2530<br>PO Box 25, Dapto NSW 2530<br><br>\
        <a href="tel:+61242614122">(02) 4261 4122</a><br>\
        <a href="mailto:office@stlukespreschool.org.au">office@stlukespreschool.org.au</a></address></div>\
    </div>\
    <div class="footer__bottom">\
      <span>&copy; <span data-year>2026</span> St Luke\'s Preschool, Dapto. In partnership with Dapto Anglican Church.</span>\
      <div class="footer__social">\
        <a href="https://www.facebook.com/stlukespreschooldapto/" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-9h3l.5-3.5H13V7.3c0-1 .3-1.7 1.8-1.7H17V2.5C16.6 2.4 15.4 2.3 14 2.3c-2.8 0-4.7 1.7-4.7 4.8v2.4H6V13h3.3v9z"/></svg></a>\
        <a href="http://instagram.com/stlukespreschooldapto" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>\
        <a href="mailto:office@stlukespreschool.org.au" aria-label="Email"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg></a>\
      </div>\
    </div>\
  </div>\
</footer>\
<div class="sticky-cta">\
  <a class="btn btn--ghost" href="tel:+61242614122" aria-label="Call St Luke\'s Preschool">Call</a>\
  <a class="btn btn--primary" href="enrol.html#tour">Book a Tour</a>\
</div>';
  var yr = document.querySelector('[data-year]');
  if (yr) yr.textContent = new Date().getFullYear();
})();
