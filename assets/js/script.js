
$(document).ready(function () {
  $('#navToggleBtn').click(function () {
    $('#fullscreenMenu')
      .removeClass('animate__fadeOut d-none')
      .addClass('show animate__fadeIn');
  });

  $('#closeMenu').click(function () {
    $('#fullscreenMenu')
      .removeClass('animate__fadeIn')
      .addClass('animate__fadeOut');

    setTimeout(function () {
      $('#fullscreenMenu').removeClass('show').addClass('d-none');
    }, 500); // match animation duration
  });
});



  document.getElementById('currentYear').textContent = new Date().getFullYear();
