/* Plain-JS blog: lists posts on blog.html, renders one post on blog-post.html.
   Reads the public Blogger API - same blog and key the original site used. */
(function () {
  'use strict';
  var API_KEY = 'AIzaSyAhTsBmQQ5dqZwssBPkVhciQ45T-UwBqU4';
  var BLOG_ID = '4135913305621527920';
  var BASE = 'https://www.googleapis.com/blogger/v3/blogs/' + BLOG_ID;

  function fmt(d) {
    try { return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }); }
    catch (e) { return ''; }
  }
  function strip(html) {
    var t = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    return t.length > 180 ? t.slice(0, 180) + '…' : t;
  }
  function sanitize(html) {
    return html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/\son\w+="[^"]*"/gi, '')
      .replace(/(href|src)="javascript:[^"]*"/gi, '$1="#"');
  }

  var list = document.getElementById('post-list');
  if (list) {
    fetch(BASE + '/posts?key=' + API_KEY)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var items = data.items || [];
        if (!items.length) { list.innerHTML = '<p class="muted">No blog posts available at the moment.</p>'; return; }
        list.innerHTML = items.map(function (p) {
          return '<article class="card post-card">' +
            '<div class="post-meta">' + fmt(p.published) + ' &bull; ' + (p.author && p.author.displayName ? p.author.displayName : '') + '</div>' +
            '<h3><a href="blog-post.html?id=' + p.id + '">' + p.title + '</a></h3>' +
            '<p>' + strip(p.content) + '</p>' +
            '<p><a class="gold" href="blog-post.html?id=' + p.id + '">Read More &rarr;</a></p></article>';
        }).join('');
      })
      .catch(function () { list.innerHTML = '<p class="muted">The blog could not be loaded right now.</p>'; });
  }

  var content = document.getElementById('post-content');
  if (content) {
    var id = new URLSearchParams(location.search).get('id');
    if (!id) { document.getElementById('post-title').textContent = 'Post not found'; return; }
    fetch(BASE + '/posts/' + id + '?key=' + API_KEY)
      .then(function (r) { return r.json(); })
      .then(function (p) {
        document.title = p.title + ' | Huanqiu Precious Metal Blog';
        document.getElementById('post-title').textContent = p.title;
        document.getElementById('post-meta').textContent = fmt(p.published) +
          (p.author && p.author.displayName ? ' • ' + p.author.displayName : '');
        content.innerHTML = sanitize(p.content || '');
      })
      .catch(function () {
        document.getElementById('post-title').textContent = 'Article unavailable';
        content.innerHTML = '<p class="muted">This article could not be loaded.</p>';
      });
    var share = document.getElementById('share-btn');
    if (share) share.addEventListener('click', function () {
      if (navigator.share) navigator.share({ title: document.title, url: location.href }).catch(function () {});
      else if (navigator.clipboard) navigator.clipboard.writeText(location.href);
    });
    var print = document.getElementById('print-btn');
    if (print) print.addEventListener('click', function () { window.print(); });
  }
})();
