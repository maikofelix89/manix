// Default JavaScript Functions and Initiations

// Add JS Support
var html = document.querySelector('html');
html.className = html.className.replace(/\bno-js\b/, "js");

// Setup WOW.js
var wow = new WOW({
  boxClass:     'content-block',
  animateClass: 'active',
  offset:       1,
  mobile:       true,
  live:         true
});
// Initiate WOW.js
wow.init();

// Load Custom Google Font
WebFont.load({
  google: {
    families: ['Open Sans:400,700', 'Yeseva One:400']
  }
});

