$(window).scroll(function () {

  if ($(window).scrollTop() > 0) {
    $(".menu").addClass("menufixed")
  } else {
    $(".menu").removeClass("menufixed")
  }

  if ($(window).scrollTop() > 300) {
    $(".wrapper2").fadeIn()
  } else {
    $(".wrapper2").fadeOut()
  }
})

$(".wrapper2").click(function () {
  $("html,body").animate({
    scrollTop: 0,
  },1000)
})



$(".searchclick").click(function () {
  $(".search").slideToggle()
})

$(".bar").click(function () {
  $(".sideinfo").addClass("right")
})

$(".close").click(function () {
  $(".sideinfo").removeClass("right")
})

$(".banner-slider").slick({
  prevArrow: '<i class="fas fa-angle-left prev"></i>',
  nextArrow: '<i class="fas fa-angle-right next"></i>',
})



/* Store the element in el */
let el = document.getElementById('tilt')

/* Get the height and width of the element */
const height = el.clientHeight
const width = el.clientWidth

/*
 * Add a listener for mousemove event
 * Which will trigger function 'handleMove'
 * On mousemove
 */
el.addEventListener('mousemove', handleMove)

/* Define function a */
function handleMove(e) {
  /*
   * Get position of mouse cursor
   * With respect to the element
   * On mouseover
   */
  /* Store the x position */
  const xVal = e.layerX
  /* Store the y position */
  const yVal = e.layerY

  /*
   * Calculate rotation valuee along the Y-axis
   * Here the multiplier 20 is to
   * Control the rotation
   * You can change the value and see the results
   */
  const yRotation = 5 * ((xVal - width / 2) / width)

  /* Calculate the rotation along the X-axis */
  const xRotation = -5 * ((yVal - height / 2) / height)

  /* Generate string for CSS transform property */
  const string = 'perspective(500px) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'

  /* Apply the calculated transformation */
  el.style.transform = string
}

/* Add listener for mouseout event, remove the rotation */
el.addEventListener('mouseout', function () {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

/* Add listener for mousedown event, to simulate click */
el.addEventListener('mousedown', function () {
  el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
})

/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener('mouseup', function () {
  el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
})

// ===============3d hover2==============================================
$('.hover2').tilt({
  maxTilt: 5,
})

$('.counter').counterUp({
  delay: 10,
  time: 1000
});

$(".testimonial-slider").slick({
  slidesToShow: 3,
  arrows: true,
  
  prevArrow: '<i class="fas fa-angle-left prev"></i>',
  nextArrow: '<i class="fas fa-angle-right next"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})

$(".client-slider").slick({
  arrows: false,
  slidesToShow: 5,
  autoplay: true,
  autoplaySpeed: 1000,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

})

$(".Checkout-slider").slick({
  prevArrow: '<i class="fas fa-angle-left prev1"></i>',
  nextArrow: '<i class="fas fa-angle-right next1"></i>',
  slidesToShow: 4,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

})

new VenoBox({
  selector: '.my-video-links',
});

$(".wrapper2").click(function () {
  $("html,body").animate({
    scrollTop: 0,
  },10000)
})