// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

// Activates floating label headings for the contact form.
$("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
}).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
}).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
});

function loadProjectSlider() {
  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: true,
    prevText: "",
    nextText: "",
    controlNav: false,
    slideshowSpeed: 5000,
    animationSpeed: 1000,
    smoothHeight: true
  });

  $('.flexslider-imac').flexslider({
    animation: "slide",
    directionNav: true,
    prevText: "",
    nextText: "",
    controlNav: false,
    slideshowSpeed: 5000,
    animationSpeed: 1000,
    smoothHeight: true
  });
};

$(document).ready(function() {
  'use strict';

    // Open Project
    $('.popup-gallery').on('click', '.portfolio-box', function(event) {
        event.preventDefault();
        var $projectUrl = $(this).attr('href');
        var request = $.get($projectUrl, function(data) {
          $('#project-extended').html(data);
          var $project = $('#project');
          loadProjectSlider();
          $('.loader').fadeIn();
          $('html, body').delay(200).animate({
                 scrollTop: $project.offset().top
             }, 1500, 'easeInOutExpo');
          $('.loader').delay(1200).fadeOut();
        }, 'html');
    });

    // Close Project
    $('#project-extended').on('click', '.fa-times-circle-o', function(event){
      var $portfolio = $('#portfolio');
      $('.loader').fadeIn();
      var scrollUp = $('html, body').stop().animate({
             scrollTop: $portfolio.offset().top
         }, 1500, 'easeInOutExpo', function() {
          $('#project-extended').html('');
         });
        $('.loader').delay(1200).fadeOut();
    });

    $('#contact').on('click', '#send-message', function(event) {
      event.preventDefault();
      var $data = $('#message-form').serialize();
      var url = 'https://formspree.io/jbkaplan@outlook.com';
      var request = $.ajax({
        url: url,
        method: 'POST',
        data: $data,
        dataType: 'JSON'
      });
      request.done(function(response){
        $('#contact-form').html(`
          <h3>Thanks for reaching out to me!</h3> 
          <p>I'll try to get back to you as soon as possible.</p>
          <p><a href="blog/index.html" class="btn btn-overlay btn-lg"><i class="fa fa-envelope fa-fw"></i> Send me another message</a></p>
        `);
      });
    });
});
