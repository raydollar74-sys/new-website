/* ============================================================
   Huanqiu Precious Metal - plain JavaScript (no framework)
   ============================================================ */
(function () {
  'use strict';

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };

  /* ---------- Mobile navigation ---------- */
  var menuBtn = $('#menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      $('#mobile-nav').classList.toggle('open');
      menuBtn.textContent = menuBtn.textContent === '☰' ? '✕' : '☰';
    });
  }

  /* ---------- Hero slideshow ---------- */
  var slides = $$('.hero-slide');
  if (slides.length) {
    var current = 0;
    slides[0].classList.add('active');
    setInterval(function () {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 5000);
  }

  /* ---------- Animated counters ---------- */
  var counters = $$('[data-count]');
  if (counters.length) {
    var animate = function (el) {
      var end = parseInt(el.getAttribute('data-count'), 10);
      var start = null;
      var step = function (ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / 2000, 1);
        el.textContent = Math.floor(end * p).toLocaleString();
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); }
        });
      }, { threshold: 0.4 });
      counters.forEach(function (c) { io.observe(c); });
    } else {
      counters.forEach(animate);
    }
  }

  /* ---------- Request-an-Assay modal ---------- */
  var modal = $('#assay-modal');
  if (modal) {
    var openModal = function () { modal.classList.add('open'); };
    var closeModal = function () { modal.classList.remove('open'); };
    $$('[data-open-assay]').forEach(function (b) { b.addEventListener('click', openModal); });
    $$('[data-close-assay]').forEach(function (b) { b.addEventListener('click', closeModal); });
    $('#assay-form').addEventListener('submit', function (e) {
      e.preventDefault();
      $('#assay-form').innerHTML =
        '<div class="center" style="padding:30px 0">' +
        '<div style="font-size:44px">✅</div>' +
        '<h3>Request Sent!</h3>' +
        '<p class="muted">We\'ll contact you within 24 hours.</p></div>';
      setTimeout(closeModal, 2000);
    });
  }

  /* ---------- Gallery filters ---------- */
  var filterBtns = $$('.filter-btn');
  if (filterBtns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var cat = btn.getAttribute('data-filter');
        $$('.gallery figure').forEach(function (fig) {
          fig.style.display = (cat === 'all' || fig.getAttribute('data-cat') === cat) ? '' : 'none';
        });
      });
    });
  }

  /* ---------- Contact form (EmailJS REST API) ---------- */
  var contactForm = $('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var fd = new FormData(contactForm);
      fd.append('service_id', 'service_fcgw92b');
      fd.append('template_id', 'template_ptn31nq');
      fd.append('user_id', '84ih5THokCK_-adoF');
      fetch('https://api.emailjs.com/api/v1.0/email/send-form', { method: 'POST', body: fd })
        .then(function (r) {
          if (!r.ok) throw new Error('send failed');
          contactForm.reset();
          banner('ok', 'Message sent! We will get back to you within 24 hours.');
        })
        .catch(function () {
          banner('err', 'Something went wrong. Please email info@huanqiupreciousmetal.com or use WhatsApp.');
        });
      function banner(kind, text) {
        var el = $('#form-banner');
        el.className = 'form-banner ' + kind;
        el.textContent = text;
        el.style.display = 'block';
        setTimeout(function () { el.style.display = 'none'; }, 6000);
      }
    });
  }

  /* ---------- Footer year ---------- */
  $$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
