(function($) {
  // Closes the Responsive Menu on Menu Item Click
      $('.navbar-collapse ul li a').click(function() {
          $('.navbar-toggle:visible').click();
      });

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })
});