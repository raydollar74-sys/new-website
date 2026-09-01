/* Huanqiu Precious Metal - static site interactivity (vanilla JS, no framework) */
(function () {
  'use strict';

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  /* ---------- Mobile menu ---------- */
  var menuBtn = $('header nav button.lg\\:hidden');
  var mobileMenu = null;
  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      if (mobileMenu) { mobileMenu.remove(); mobileMenu = null; return; }
      mobileMenu = document.createElement('div');
      mobileMenu.className = 'lg:hidden mt-4 pb-4';
      var col = document.createElement('div');
      col.className = 'flex flex-col space-y-3';
      $$('header nav div.hidden.lg\\:flex a').forEach(function (a) {
        var c = a.cloneNode(true);
        c.className = 'text-sm font-medium hover:text-yellow-500 transition-colors py-2';
        col.appendChild(c);
      });
      var contact = document.createElement('a');
      contact.href = menuBtn.closest('nav') ? rel('contact.html') : 'contact.html';
      contact.className = 'bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold text-center';
      contact.textContent = 'CONTACT US';
      col.appendChild(contact);
      mobileMenu.appendChild(col);
      menuBtn.closest('nav').appendChild(mobileMenu);
    });
  }

  /* Resolve a root-relative page/file against this page's folder (works in subfolders too) */
  function rel(p) {
    var here = location.pathname.split('/');
    here.pop();
    var depth = here.length - 1; // 0 when served from root
    // static-site pages live at root or one level deep (services/)
    return (location.pathname.indexOf('/services/') === 0 ? '../' : '') + p;
  }

  /* ---------- Hero image slider ---------- */
  var layers = $$('section .transition-opacity.duration-1000');
  if (layers.length) {
    var spinner = $('.spinner');
    if (spinner && spinner.parentElement) spinner.parentElement.style.display = 'none';
    var avail = [];
    layers.forEach(function (el, idx) {
      var img = el.querySelector('img');
      var brokenNow = img && img.complete && img.naturalWidth === 0;
      if (brokenNow) el.style.display = 'none';
      else avail.push(idx);
      if (img) img.addEventListener('error', function () {
        el.style.display = 'none';
        avail = avail.filter(function (i) { return i !== idx; });
      });
    });
    var pos = 0;
    var show = function (i) {
      layers.forEach(function (el, idx) {
        var on = idx === i && el.style.display !== 'none';
        el.classList.toggle('opacity-100', on);
        el.classList.toggle('opacity-0', !on);
      });
    };
    if (avail.length) show(avail[0]);
    setInterval(function () {
      if (!avail.length) return;
      layers.forEach(function (el) { el.classList.add('opacity-0'); el.classList.remove('opacity-100'); });
      setTimeout(function () { pos = (pos + 1) % avail.length; show(avail[pos]); }, 500);
    }, 5000);
  }

  /* ---------- Stats count-up ---------- */
  var targets = [250, 7, 3, 27];
  $$('div.text-3xl span').forEach(function (span, i) {
    var end = targets[i] || 0;
    var t0 = null;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / 2000, 1);
      span.textContent = Math.floor(end * p).toLocaleString();
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });

  /* ---------- Request-an-Assay modal (working version) ---------- */
  var modal = null;
  function closeModal() { if (modal) { modal.remove(); modal = null; } }
  function openModal() {
    if (modal) return;
    modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-50';
    modal.innerHTML =
      '<div class="absolute inset-0 modal-backdrop" data-close style="background:rgba(0,0,0,0.5)"></div>' +
      '<div class="relative min-h-screen flex items-center justify-center p-4 pointer-events-none">' +
        '<div class="pointer-events-auto bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">' +
          '<div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">' +
            '<h2 class="text-2xl font-bold text-gray-900">Request an Assay</h2>' +
            '<button data-close class="p-1 hover:bg-gray-100 rounded-lg transition" aria-label="Close">' +
              '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>' +
            '</button>' +
          '</div>' +
          '<div class="p-6">' +
            '<div class="bg-gold-50 p-4 rounded-lg mb-6">' +
              '<p class="text-sm text-gray-700">WhatsApp: +256757319091</p>' +
              '<p class="text-sm text-gray-700 mt-1">assay@huanqiupreciousmetal.com</p>' +
            '</div>' +
            '<form class="space-y-4" data-assay-form>' +
              '<div><label class="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>' +
              '<input type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"/></div>' +
              '<div><label class="block text-sm font-medium text-gray-700 mb-1">Email *</label>' +
              '<input type="email" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"/></div>' +
              '<div><label class="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>' +
              '<input type="tel" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"/></div>' +
              '<div><label class="block text-sm font-medium text-gray-700 mb-1">Metal Type</label>' +
              '<select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500">' +
              '<option value="gold">Gold</option><option value="silver">Silver</option><option value="platinum">Platinum</option><option value="other">Other Precious Metals</option></select></div>' +
              '<div><label class="block text-sm font-medium text-gray-700 mb-1">Approximate Weight (kg/g)</label>' +
              '<input type="text" placeholder="e.g., 2.5 kg" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500"/></div>' +
              '<div><label class="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>' +
              '<textarea rows="3" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500"></textarea></div>' +
              '<button type="submit" class="w-full bg-gold-500 text-gray-900 font-semibold py-3 rounded-lg hover:bg-gold-400 transition-colors">Submit Request</button>' +
            '</form>' +
          '</div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(modal);
    modal.addEventListener('click', function (e) {
      if (e.target.closest('[data-close]')) closeModal();
    });
    modal.querySelector('[data-assay-form]').addEventListener('submit', function (e) {
      e.preventDefault();
      this.outerHTML =
        '<div class="text-center py-8">' +
          '<div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4Z"/></svg>' +
          '</div>' +
          '<h3 class="text-xl font-semibold mb-2">Request Sent!</h3>' +
          '<p class="text-gray-600">We\'ll contact you within 24 hours.</p>' +
        '</div>';
      setTimeout(closeModal, 2000);
    });
  }

  $$('button').forEach(function (b) {
    var t = (b.textContent || '').trim().toUpperCase();
    if (t.indexOf('ASSAY') !== -1 || t === 'OUR COMPANY') b.addEventListener('click', openModal);
    if (t === 'EXPLORE SERVICES') b.addEventListener('click', function () { location.href = rel('services.html'); });
  });

  /* ---------- Gallery category filter ---------- */
  var filterBtns = $$('button.px-4.py-2.rounded-full');
  if (filterBtns.length) {
    var items = $$('.group.cursor-pointer');
    function catOf(el) {
      var img = el.querySelector('img,video');
      var src = img ? (img.getAttribute('src') || '') : '';
      if (src.indexOf('community') !== -1) return 'community';
      if (src.indexOf('trading') !== -1) return 'trading';
      if (src.indexOf('events') !== -1) return 'events';
      if (src.indexOf('lab') !== -1) return 'laboratory';
      if (src.indexOf('team') !== -1) return 'team';
      return 'mining';
    }
    function keyOf(btn) {
      var t = (btn.textContent || '').toLowerCase();
      if (t.indexOf('all') !== -1) return 'all';
      if (t.indexOf('community') !== -1) return 'community';
      if (t.indexOf('trading') !== -1) return 'trading';
      if (t.indexOf('events') !== -1) return 'events';
      if (t.indexOf('lab') !== -1) return 'laboratory';
      if (t.indexOf('team') !== -1) return 'team';
      if (t.indexOf('mining') !== -1) return 'mining';
      return 'all';
    }
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) {
          var on = b === btn;
          b.className = on
            ? 'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 bg-yellow-500 text-gray-900 shadow-md'
            : 'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 bg-gray-100 text-gray-600 hover:bg-gray-200';
        });
        var k = keyOf(btn);
        items.forEach(function (it) {
          it.style.display = (k === 'all' || catOf(it) === k) ? '' : 'none';
        });
      });
    });
  }

  /* ---------- Contact form via EmailJS REST API ---------- */
  var contactForm = $('input[name="user_name"]');
  if (contactForm) {
    var form = contactForm.closest('form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      fd.append('service_id', 'service_fcgw92b');
      fd.append('template_id', 'template_ptn31nq');
      fd.append('user_id', '84ih5THokCK_-adoF');
      var banner = $('#form-banner');
      function note(ok) {
        if (!banner) {
          banner = document.createElement('div');
          banner.id = 'form-banner';
          form.parentElement.insertBefore(banner, form);
        }
        banner.className = ok
          ? 'mb-4 p-3 rounded-lg bg-green-100 text-green-800 text-sm'
          : 'mb-4 p-3 rounded-lg bg-red-100 text-red-800 text-sm';
        banner.textContent = ok
          ? 'Message sent! We will get back to you within 24 hours.'
          : 'Something went wrong. Please email info@huanqiupreciousmetal.com or use WhatsApp.';
        setTimeout(function () { banner.remove(); }, 6000);
      }
      fetch('https://api.emailjs.com/api/v1.0/email/send-form', { method: 'POST', body: fd })
        .then(function (r) {
          if (!r.ok) throw new Error('emailjs ' + r.status);
          form.reset();
          note(true);
        })
        .catch(function () { note(false); });
    });
  }

  /* ---------- Video fallback: if a clip can't play, show a repo image instead ---------- */
  $$('video').forEach(function (v) {
    var done = false;
    function fail() {
      if (done) return;
      done = true;
      var img = document.createElement('img');
      img.src = rel('images/1.jpeg');
      img.alt = 'Video unavailable';
      img.className = 'w-full h-full object-cover';
      v.replaceWith(img);
    }
    v.addEventListener('error', fail);
    var srcEl = v.querySelector('source');
    if (srcEl) srcEl.addEventListener('error', fail);
    setTimeout(function () { if (v.readyState === 0) fail(); }, 5000);
  });

  /* ---------- Gallery fallback for missing images (like the original ImageWithFallback) ---------- */
  $$('.group.cursor-pointer img').forEach(function (img) {
    function fallback() {
      var box = document.createElement('div');
      box.className = 'bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center absolute inset-0';
      box.innerHTML =
        '<div class="text-center">' +
          '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-2"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>' +
          '<p class="text-xs text-gray-500">Image coming soon</p>' +
        '</div>';
      img.replaceWith(box);
    }
    if (img.complete && img.naturalWidth === 0) fallback();
    else img.addEventListener('error', fallback);
  });

  /* ---------- Floating WhatsApp ---------- */
  var wa = $('.fixed.bottom-6');
  if (wa) {
    var closeBtn = wa.querySelector('button[aria-label="Close WhatsApp button"]');
    if (closeBtn) closeBtn.addEventListener('click', function () { wa.remove(); });
    setTimeout(function () {
      var tip = document.createElement('div');
      tip.className = 'absolute bottom-16 right-0 mb-2 w-64 animate-fadeIn';
      tip.innerHTML =
        '<div class="bg-gray-900 text-white text-sm rounded-lg py-2 px-4 shadow-lg relative">' +
          '<p class="font-medium">Chat with us on WhatsApp!</p>' +
          '<p class="text-xs text-gray-300 mt-1">Click to start a conversation</p>' +
          '<div class="absolute -bottom-2 right-4 w-3 h-3 bg-gray-900 transform rotate-45"></div>' +
        '</div>';
      wa.appendChild(tip);
      setTimeout(function () { tip.remove(); }, 5000);
    }, 3000);
  }
})();
