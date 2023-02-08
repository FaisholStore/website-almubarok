// Select the navbar toggler
var toggler = document.querySelector('.navbar-toggler');

// Select the target element
var target = document.querySelector(toggler.getAttribute('data-bs-target'));

// Add a click event listener to the toggler
toggler.addEventListener('click', function() {
  // Toggle the "collapsed" class on the toggler
  toggler.classList.toggle('collapsed');

  // If the target has the "show" class, remove it
  if (target.classList.contains('show')) {
    target.classList.remove('show');
  }
});
