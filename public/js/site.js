// Mobile menu + quote form. Kept external so the CSP can stay script-src 'self'.
(function () {
  var btn = document.querySelector('.menu-btn');
  var menu = document.getElementById('mobile-nav');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      var open = menu.toggleAttribute('data-open');
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  }

  var form = document.getElementById('quote-form');
  var msg = document.getElementById('form-msg');
  if (!form) return;
  function show(state, text) {
    if (!msg) return;
    msg.hidden = false;
    msg.dataset.state = state;
    msg.textContent = text;
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;
    var submit = form.querySelector('button[type=submit]');
    if (submit) { submit.disabled = true; submit.textContent = 'Sending\u2026'; }
    fetch(form.action, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) })
      .then(function (res) {
        if (res.ok) { form.reset(); show('ok', 'Request sent. We reply within one business day.'); }
        else show('error', 'Couldn\u2019t send. Try again or use the Google Form link below.');
      })
      .catch(function () { show('error', 'Couldn\u2019t send. Check your connection and try again.'); })
      .finally(function () { if (submit) { submit.disabled = false; submit.textContent = 'Send request'; } });
  });
})();
