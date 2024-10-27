// index-js

// section 5
$(document).ready(function() {
    $('#gallery').flexPhotoGallery({
        imageArray: imageArray,
        isViewImageOnClick: true
    });
});

var imageArray =
[
    {
        "url": "images/picture1.png",
        "width": 382,
        "height": 223
    },
    {
        "url": "images/picture2.png",
        "width": 382,
        "height": 223
    },
    {
        "url": "images/picture3.png",
        "width": 352,
        "height": 223
    },
    {
        "url": "images/picture4.png",
        "width": 246,
        "height": 223
    },
    {
        "url": "images/picture5.png",
        "width": 401,
        "height": 223
    },
    {
        "url": "images/picture6.png",
        "width": 469,
        "height": 223
    },

];
$(document).ready(function(){
  $('#slicksliderimg').slick({
    infinite: true, 
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true, 
    centerMode: true,
  });
});

// about-us-js

$(document).ready(function(){
    $('#slidebox').slick({
      infinite: true, 
      slidesToShow: 1, 
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      dots: true, 
      centerMode: true,
      variableWidth: true,
    });
  });


//   contact-us-js

// date picker
$( function() {
    $( "#datepicker" ).datepicker();
  } );

  // form validation
  $(document).ready(function () {
    $("#myform").validate({
      rules: {
        FirstName: "required",
        LastName: "required",
        email:{
          required: true,
          email:true
        },
        datepicker:"required",
      },
      messages: {
        FirstName: "Please enter your First Name",
        LastName: "Please enter your Last Name",
        email:{
          required:"Please enter your E-mail address",
          email:"Enter your valid E-mail address",
        },
        datepicker:"Please select your appointment",
      },
      errorClass: "error-message",
      submitHandler: function (form) {
        $("#thankYouPage").show();
    }
    });
    
    $("#thankYouPage").click(function () {
    $("#thankYouPage").hide();
    });
    
    
    let alphabeticInputFirstName = document.getElementById('FirstName');
    
    alphabeticInputFirstName.addEventListener('keydown', function(event) {
      let keyCodeFirstName = event.keyCode || event.which;
      let isAlphabeticFirstName = (keyCodeFirstName >= 65 && keyCodeFirstName <= 90)
         || (keyCodeFirstName >= 97 && keyCodeFirstName <= 122) || (keyCodeFirstName == 8);
      
      if (!isAlphabeticFirstName) {
        event.preventDefault();
      }
    });

    let alphabeticInputLastName = document.getElementById('LastName');
    
    alphabeticInputLastName.addEventListener('keydown', function(event) {
      let keyCodeLastName = event.keyCode || event.which;
      let isAlphabeticLastName = (keyCodeLastName >= 65 && keyCodeLastName <= 90) || 
        (keyCodeLastName >= 97 && keyCodeLastName <= 122) || (keyCodeLastName == 8);
      
      if (!isAlphabeticLastName) {
        event.preventDefault();
      }
    });
  });
    // latest-js

    $( function() {
        $( "#accordion" ).accordion();
      } );


    //   services-js

    $( document ).ready(function(){

        $('.readmore1').on('click',function(){
            $('.p-8').toggleClass('toggle');
        })
        
        $('.readmore').on('click',function(){
            $('.p-9').toggleClass('toggle');
        })
        $('.readmore2').on('click',function(){
          $('.p-10').toggleClass('toggle');
      })
        
        
           
        function startCounter() {
            const numElements = $('.num');
            const targetCounts = [90, 30, 90];
            const duration = 800; 
        
            numElements.each(function (index) {
                const targetCount = targetCounts[index];
                const interval = duration / targetCount;
                let currentCount = 0;
        
                const counterInterval = setInterval(() => {
                    currentCount++;
                    $(this).text(currentCount + "+");
        
                    if (currentCount === targetCount) {
                        clearInterval(counterInterval);
                    }
                }, interval);
            });
        }
        
        startCounter();
        });
        
           
        