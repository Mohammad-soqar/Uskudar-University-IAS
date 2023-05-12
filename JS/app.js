let progressCounter = 0;


$('#startButton').on('click', startProgressAnimation);

function startProgressAnimation() {
  const circle = $('.progress-circle').eq(progressCounter);
  const line = $('.progress-line').eq(progressCounter);

  circle.addClass('progress-animation');
  line.addClass('progress-animation2');

  progressCounter++;

  if (progressCounter >= $('.progress-circle').length) {
    progressCounter = 0;
  }
}

/* dropdown menue for messages Home page student  */

$(document).ready(function () {
  var angle22 = 0;
  $('#dropdown-messages-student').click(function () {
    $('.Messagesslide').slideToggle();
    angle22 += 180;
    angle22 = angle22 % 360;
    $('#down-arrow-home-student').css({
      'transform': 'rotate(' + angle22 + 'deg)',
      'transition': 'transform 0.5s ease-in-out'
    });

    if ((angle22 / 180) % 2 != 0) {
      $('.Messages').css({
        'margin-bottom': '0',
        'transition': 'margin-bottom 0.5s ease-in-out'
      })
    }
    else {
      $('.Messages').css({
        'margin-bottom': 'calc(4.5vh)',
        'transition': 'margin-bottom 0.5s ease-in-out'
      })
    }
  });
});

/* dropdown menue for questions and answers support student page  */
function toggleAnswer(questionClass, answerClass, arrowId, angle) {
  $(questionClass).click(function () {
    $(answerClass).slideToggle();
    angle += 180;
    angle = angle % 360;
    $(arrowId).css({
      'transform': 'rotate(' + angle + 'deg)',
      'transition': 'transform 0.5s ease-in-out'
    });
  });
}
var angle1 = 0;
toggleAnswer('.question1', '.answer1', '#down-arrow1', angle1);

var angle2 = 0;
toggleAnswer('.question2', '.answer2', '#down-arrow2', angle2);

var angle3 = 0;
toggleAnswer('.question3', '.answer3', '#down-arrow3', angle3);

var angle4 = 0;
toggleAnswer('.question4', '.answer4', '#down-arrow4', angle4);





/* $(document).ready(function () {
  $('#check-all').on('click', function () {
    // Add 'collapse' class to 'right-section-widgets' div
    $('.right-section-widgets')
      .addClass('collapse')
      .css('overflow', 'hidden');

    // Animate the width of 'widget-left-side' div to 100% over 0.5 seconds
    $('.widget-left-side').animate({ width: '90%' }, 500, function () {
      // Hide the content of 'widget-left-side' div after animation completes
      $(this).css('overflow', 'hidden');
    });
    $('#back-buttons').append('<button class="back-left-btn" id="back-left">&#x2190; Back</button>');
    // Update other elements
  
    $('#searchInput').css('display', 'block');
    $('#check-all').css('display', 'none');
  });

 

  $('#back-left').on('click', function () {
    $("#searchInput").val("");
    // Remove 'collapse' class from 'right-section-widgets' div
    $('.right-section-widgets')
      .removeClass('collapse')
      .css('overflow', 'hidden');

     
    // Set the width of 'widget-left-side' div back to 50% over 0.5 seconds
    $('.widget-left-side').animate({ width: '85.5%' }, 500, function () {
      // Show the content of 'widget-left-side' div after animation completes
    });

    // Update other elements
    $('#back-buttons').on('click', '#back-left', function() {
      // Remove myButton when clicked
      $(this).remove();
    });
    $('#searchInput').css('display', 'none');
    $('#check-all').css('display', 'block');
    $('tr').css('display', '');

    // Use setTimeout to delay the execution of the overflow visible code by 200 milliseconds
    setTimeout(function () {
      $('.right-section-widgets').css('overflow', 'visible');
    }, 200);
  });
}); */

/* $(document).ready(function () {
  $('#check-all').on('click', function () {
   
    $('.right-section-widgets')
      .addClass('collapse')
      .css('overflow', 'hidden');


    $('.widget-left-side').animate({ width: '90%' }, 500, function () {
     
      $(this).css('overflow', 'hidden');
    });


    $('#back-buttons').append('<button class="back-left-btn" id="back-left">&#x2190; Back</button>');
    $('#back-left').on('click', function () {
      $("#searchInput").val("");
    
      $('.right-section-widgets')
        .removeClass('collapse')
        .css('overflow', 'hidden');

      
      $('.widget-left-side').animate({ width: '85.5%' }, 500, function () {
       
      });

      
      $('#back-left').remove();
      $('#searchInput').css('display', 'none');
      $('#check-all').css('display', 'block');
      $('tr').css('display', '');

    
      setTimeout(function () {
        $('.right-section-widgets').css('overflow', 'visible');
      }, 200);
    });

    $('#searchInput').css('display', 'block');
    $('#check-all').css('display', 'none');
  });
});



$(document).ready(function () {
  $('#Add-User-btn').on('click', function () {
 
    $('.left-section')
      .addClass('collapse')
      .css({'overflow': 'hidden'});
 
      $('#widget2')
      .css({'display': 'none'});

      $('#widget3')
      .css({'display': 'none'});

      $('#widget4')
      .css({'display': 'none'});

    
    $('.right-section-widgets').animate({ width: '100%' }, 100, function () {
     
      $(this).css('overflow', 'hidden');
    });
    $('#widget1').animate({ height: '100%' }, 200, function () {
    });
    $('.Add-User-Form-invisible').addClass('Add-User-Form');
    $('#back-left1').addClass('back-left-btn');
    setTimeout(function () {
      $('.right-section-widgets').css('overflow', 'visible');
    }, 200);
  });


  $('#back-left1').on('click', function () {
    $('.left-section')
      .removeClass('collapse')
      .css({
        'overflow': 'hidden',
        
      });

      $('#widget2')
      .css({'display': ''});

      $('#widget3')
      .css({'display': ''});

      $('#widget4')
      .css({'display': ''});


      $('.Add-User-Form-invisible').removeClass('Add-User-Form');
      
    $('.right-section-widgets').animate({ width: '70%' }, 200, function () {
    });
    $('#widget1').animate({ height: 'auto' }, 00, function () {
    });

   
    $('#back-left1').removeClass('back-left-btn');
   

   
    setTimeout(function () {
      $('.right-section-widgets').css('overflow', 'visible');
    }, 00);
    setTimeout(function () {
      $('.left-section').css('overflow', 'visible');
    }, 700);
  });
}); */


$(document).ready(function () {
  $('#check-all').on('click', function () {
    var rightSectionWidgets = $('.right-section-widgets');
    var widgetLeftSide = $('.widget-left-side');
    var backLeftBtn = $('<button class="back-left-btn" id="back-left">&#x2190; Back</button>');
    var searchInput = $('#searchInput');

    rightSectionWidgets
      .addClass('collapse')
      .css('overflow', 'hidden');

    widgetLeftSide.animate({ width: '90%' }, 500, function () {
      $(this).css('overflow', 'hidden');
    });

    $('#back-buttons').append(backLeftBtn);

    backLeftBtn.on('click', function () {
      searchInput.val("");
      rightSectionWidgets
        .removeClass('collapse')
        .css('overflow', 'hidden');

      widgetLeftSide.animate({ width: '85.5%' }, 500);

      backLeftBtn.remove();
      searchInput.css('display', 'none');
      $('#check-all').css('display', 'block');
      $('tr').css('display', '');

      setTimeout(function () {
        rightSectionWidgets.css('overflow', 'visible');
      }, 200);
    });

    searchInput.css('display', 'block');
    $('#check-all').css('display', 'none');
  });

  $('#Add-User-btn').on('click', function () {
    var leftSection = $('.left-section');
    var rightSectionWidgets = $('.right-section-widgets');
    var widget1 = $('#widget1');
    var backLeftBtn1 = $('<button class="back-left-btn" id="back-left1">&#x2190; Back</button>');

    leftSection
      .addClass('collapse')
      .css({ 'overflow': 'hidden' });

    $('#widget2, #widget3, #widget4').css({ 'display': 'none' });

    rightSectionWidgets.animate({ width: '100%' }, 100, function () {
      $(this).css('overflow', 'hidden');
    });

    $('#back-buttons').append(backLeftBtn1);


    $('.Add-User-Form-invisible').addClass('Add-User-Form');

    $('#back-buttons').append(backLeftBtn1);

    backLeftBtn1.on('click', function () {
      $('#widget2, #widget3, #widget4').css({ 'display': '' });
      $('.Add-User-Form-invisible').removeClass('Add-User-Form');

      leftSection
        .removeClass('collapse')
        .css('overflow', 'hidden');

      rightSectionWidgets.animate({ width: '70%' }, 500);

      backLeftBtn1.remove();


      setTimeout(function () {
        leftSection.css('overflow', 'visible');
      }, 400);
    });



    setTimeout(function () {
      rightSectionWidgets.css('overflow', 'visible');
    }, 200);
  });

  $('#old-HealthI-btn').on('click', function () {
    var leftSection = $('.left-section');
    var rightSectionWidgets = $('.right-section-widgets');
    var widget3 = $('#widget3');
    var backLeftBtn1 = $('<button class="back-left-btn" id="back-left4">&#x2190; Back</button>');

    leftSection
      .addClass('collapse')
      .css({ 'overflow': 'hidden' });

    $('#widget1, #widget3, #widget4').css({ 'display': 'none' });

    rightSectionWidgets.animate({ width: '100%' }, 100, function () {
      $(this).css('overflow', 'hidden');
    });

    $('#back-buttons').append(backLeftBtn1);


    $('#datatable').removeClass('Add-User-Form-invisible');

    $('#back-buttons').append(backLeftBtn1);

    backLeftBtn1.on('click', function () {
      $('#widget1, #widget3, #widget4').css({ 'display': '' });
      $('#datatable').addClass('Add-User-Form-invisible');

      leftSection
        .removeClass('collapse')
        .css('overflow', 'hidden');

      rightSectionWidgets.animate({ width: '70%' }, 500);

      backLeftBtn1.remove();


      setTimeout(function () {
        leftSection.css('overflow', 'visible');
      }, 400);
    });



    setTimeout(function () {
      rightSectionWidgets.css('overflow', 'visible');
    }, 200);
  });

  $('#Add-Announcement-btn').on('click', function () {
    var leftSection = $('.left-section');
    var rightSectionWidgets = $('.right-section-widgets');
    var widget3 = $('#widget3');
    var backLeftBtn1 = $('<button class="back-left-btn" id="back-left3">&#x2190; Back</button>');

    leftSection
      .addClass('collapse')
      .css({ 'overflow': 'hidden' });

    $('#widget2, #widget1, #widget4').css({ 'display': 'none' });

    rightSectionWidgets.animate({ width: '100%' }, 100, function () {
      $(this).css('overflow', 'hidden');
    });

    $('#back-buttons').append(backLeftBtn1);


    $('.Add-User-Form-invisible').addClass('Add-User-Form');

    $('#back-buttons').append(backLeftBtn1);

    backLeftBtn1.on('click', function () {
      $('#widget2, #widget1, #widget4').css({ 'display': '' });
      $('.Add-User-Form-invisible').removeClass('Add-User-Form');

      leftSection
        .removeClass('collapse')
        .css('overflow', 'hidden');

      rightSectionWidgets.animate({ width: '70%' }, 500);

      backLeftBtn1.remove();


      setTimeout(function () {
        leftSection.css('overflow', 'visible');
      }, 400);
    });



    setTimeout(function () {
      rightSectionWidgets.css('overflow', 'visible');
    }, 200);
  });

  $('#Add-Job-btn').on('click', function () {
    var leftSection = $('.left-section');
    var rightSectionWidgets = $('.right-section-widgets');
    var widget3 = $('#widget3');
    var backLeftBtn1 = $('<button class="back-left-btn" id="back-left4">&#x2190; Back</button>');

    leftSection
      .addClass('collapse')
      .css({ 'overflow': 'hidden' });

    $('#widget2, #widget3, #widget1').css({ 'display': 'none' });

    rightSectionWidgets.animate({ width: '100%' }, 100, function () {
      $(this).css('overflow', 'hidden');
    });

    $('#back-buttons').append(backLeftBtn1);


    $('.Add-User-Form-invisible').addClass('Add-User-Form');

    $('#back-buttons').append(backLeftBtn1);

    backLeftBtn1.on('click', function () {
      $('#widget2, #widget3, #widget1').css({ 'display': '' });
      $('.Add-User-Form-invisible').removeClass('Add-User-Form');

      leftSection
        .removeClass('collapse')
        .css('overflow', 'hidden');

      rightSectionWidgets.animate({ width: '70%' }, 500);

      backLeftBtn1.remove();


      setTimeout(function () {
        leftSection.css('overflow', 'visible');
      }, 400);
    });



    setTimeout(function () {
      rightSectionWidgets.css('overflow', 'visible');
    }, 200);
  });
});

$(document).ready(function () {
  $('#search-input').keyup(function () {
    const searchQuery = $(this).val().toLowerCase();

    $('#list li').each(function () {
      const text = $(this).text().toLowerCase();
      const match = text.indexOf(searchQuery) !== -1;

      $(this).toggle(match);
    });
  });
});


//account page for changing the paragraphe to text-box

$(document).ready(function () {
  $(".edit-button").click(function () {
    const email = $(".email");
    const phone = $(".phone");
    email.replaceWith('<input type="text" class="email" value="' + email.text() + '">');
    phone.replaceWith('<input type="text" class="phone" value="' + phone.text() + '">');
    $(".edit-button").css('display', 'none');
    $(".sendButton").css('display', 'block');
  });
  $("#saveButton").click(function () {
    const emailInput = $(".email");
    const phoneInput = $(".phone");
    const newEmail = emailInput.val();
    const newPhone = phoneInput.val();
    emailInput.replaceWith('<p class="email">' + newEmail + '</p>');
    phoneInput.replaceWith('<p class="phone">' + newPhone + '</p>');
    $(".edit-button").css('display', 'block');
    $(".sendButton").css('display', 'none');
  });
});





$(document).ready(function () {
  $(".edit-button2").click(function () {
    const district = $(".district");
    const city = $(".city");
    district.replaceWith('<input type="text" class="district" value="' + district.text() + '">');
    city.replaceWith('<input type="text" class="city" value="' + city.text() + '">');
    $(".edit-button2").css('display', 'none');
    $("#saveButton2").css('display', 'block');
  });

  $("#saveButton2").click(function () {
    const districtInput = $(".district");
    const cityInput = $(".city");
    districtInput.replaceWith('<p class="district">' + districtInput.val() + '</p>');
    cityInput.replaceWith('<p class="city">' + cityInput.val() + '</p>');
    $(".edit-button2").css('display', 'block');
    $("#saveButton2").css('display', 'none');
  });
});


//notification box on click

$(document).click(function(e) {
  var notificationContainer = $(".notificationContiner");
  if (!notificationContainer.is(e.target) && notificationContainer.has(e.target).length === 0) {
    notificationContainer.hide();
  }
});

$("#NotificationButton").click(function (e) {
  e.stopPropagation();
  if($(".notificationContiner").css("display") === "none") {
    $(".notificationContiner").show();
  } else if ($(".notificationContiner").is(":visible")) {
    $(".notificationContiner").hide();
  }
});


// Messages box on click

$(document).click(function(e) {
  var notificationContainer = $(".messagingboxContiner");
  if (!notificationContainer.is(e.target) && notificationContainer.has(e.target).length === 0) {
    notificationContainer.hide();
  }
});

$("#MessagesButton").click(function (e) {
  e.stopPropagation();
  if($(".messagingboxContiner").css("display") === "none") {
    $(".messagingboxContiner").show();
  } else if ($(".messagingboxContiner").is(":visible")) {
    $(".messagingboxContiner").hide();
  }
});



