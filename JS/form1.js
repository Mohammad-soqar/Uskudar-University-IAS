
//student form1 stauts bar and pages 

$(document).ready(function () {
    $('.stepInfo1').css("display", "block");
    $(".stepInfo1, .stepInfo2, .stepInfo3, stepInfo4").addClass('visable');
    $('#Next-Button').click(function () {
      if ($('.firstPageStudentInfoInputs').is(":visible")) {
        $('.firstPageStudentInfoInputs').fadeOut(200, function () {
          $('.SecondPageStudentInfoInputs').fadeIn(500);
          $(".step1Selected").addClass('progressColorSelected');
          $('#Back-Button, .stepInfo2').css("display", "block");
          $('.stepInfo1').css("display", "none");
        });
      } else if ($('.SecondPageStudentInfoInputs').is(":visible")) {
        $('.SecondPageStudentInfoInputs').fadeOut(200, function () {
          $('.ThiredPageStudentInfoInputs').fadeIn(500);
          $(".step2Selected").addClass('progressColorSelected');
          $('.stepInfo2').css("display", "none");
          $('.stepInfo3').css("display", "block");
        });
      } else if ($('.ThiredPageStudentInfoInputs').is(":visible")) {
        $('.ThiredPageStudentInfoInputs').fadeOut(200, function () {
          $('.ForthPageStudentInfoInputs').fadeIn(0, function() {
            $(this).css("display", "flex");
            $(".step3Selected").addClass('progressColorSelected');
            $('#Next-Button, .stepInfo3').css("display", "none");
            $('.stepInfo4').css("display", "block");
          });
          
          
        });
      }
    });
  
    $('#Back-Button').click(function () {
      if ($('.ForthPageStudentInfoInputs').is(":visible")) {
        $('.ForthPageStudentInfoInputs').fadeOut(200, function () {
          $('.ThiredPageStudentInfoInputs').fadeIn(200);
          $(".step3Selected").removeClass('progressColorSelected');
          $('#Next-Button, .stepInfo3').css("display", "block");
          $('.stepInfo4').css("display", "none");
        });
      } else if ($('.ThiredPageStudentInfoInputs').is(":visible")) {
        $('.ThiredPageStudentInfoInputs').fadeOut(200, function () {
          $('.SecondPageStudentInfoInputs').fadeIn(200);
          $(".step2Selected").removeClass('progressColorSelected');
          $('.stepInfo3').css("display", "none");
          $('.stepInfo2').css("display", "block");
        });
      } else if ($('.SecondPageStudentInfoInputs').is(":visible")) {
        $('.SecondPageStudentInfoInputs').fadeOut(200, function () {
          $('.firstPageStudentInfoInputs').fadeIn(200);
          $(".step1Selected").removeClass('progressColorSelected');
          $('#Back-Button, .stepInfo2').css("display", "none");
          $('.stepInfo1').css("display", "block");
        });
      }
    });
  });
  