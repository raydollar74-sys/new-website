/* Static blog post page - fetches a single post from the Blogger API in the browser */
(function () {
  'use strict';
  var API_KEY = 'AIzaSyAhTsBmQQ5dqZwssBPkVhciQ45T-UwBqU4';
  var BLOG_ID = '4135913305621527920';

  var y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();

  var id = new URLSearchParams(location.search).get('id');
  var titleEl = document.getElementById('post-title');
  var metaEl = document.getElementById('post-meta');
  var contentEl = document.getElementById('post-content');

  if (!id) {
    titleEl.textContent = 'Post not found';
    contentEl.innerHTML = '<p class="text-gray-500">No article was specified.</p>';
    return;
  }

  function sanitize(html) {
    return html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/\son\w+="[^"]*"/gi, '')
      .replace(/\son\w+='[^']*'/gi, '')
      .replace(/(href|src)="javascript:[^"]*"/gi, '$1="#"');
  }

  fetch('https://www.googleapis.com/blogger/v3/blogs/' + BLOG_ID + '/posts/' + id + '?key=' + API_KEY)
    .then(function (r) {
      if (!r.ok) throw new Error('status ' + r.status);
      return r.json();
    })
    .then(function (post) {
      document.title = post.title + ' | Huanqiu Precious Metal Blog';
      titleEl.textContent = post.title;
      var date = '';
      try {
        date = new Date(post.published).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      } catch (e) { /* ignore */ }
      metaEl.textContent = date + (post.author && post.author.displayName ? ' • ' + post.author.displayName : '');
      contentEl.innerHTML = sanitize(post.content || '');
    })
    .catch(function () {
      titleEl.textContent = 'Article unavailable';
      contentEl.innerHTML = '<p class="text-gray-500">This article could not be loaded. Please check your internet connection and try again.</p>';
    });

  document.getElementById('share-btn').addEventListener('click', function () {
    var url = location.href;
    if (navigator.share) {
      navigator.share({ title: document.title, url: url }).catch(function () {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard.');
    }
  });
  document.getElementById('print-btn').addEventListener('click', function () {
    window.print();
  });
})();
