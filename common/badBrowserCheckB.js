var badBrowser = false;

try {
  // Local storage
  window.localStorage.setItem('test', 'test');
  window.localStorage.removeItem('test');

  // Flexbox
  var elTest = document.createElement('div');
  elTest.style.display = 'flex';
  if (elTesdt.style.display !== 'flex') {
    badBrowser = true;
  }

  // const and let check from badBrowserCheckA.js
  if (window.localStorage.goodBrowser !== 'true') {
    badBrowser = true;
  }
  window.localStorage.removeItem('goodBrowser');
    
} catch (err) {
  badBrowser = true;
}

if (badBrowser) {
  var el = document.getElementById('BadBrowserWarning');
  el.className += ' is-open';
  // Dumb check for known mobile OS's. Not important to catch all, just
  // displays more appropriate information.
  if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    el.className += ' is-mobile';
  }
}