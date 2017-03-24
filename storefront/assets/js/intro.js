(function($){

  $(function(){
    console.log('działa');
    var logopoler = $('.logopoler');
    var bodysite = $('.animation');

    logopoler.on('click', function(){
      console.log('click działa');
      document.cookie = "animation=clicked";
      logopoler.fadeOut('slow', function(){
        bodysite.fadeOut('slow', function(){
          $(this).remove();
        });
      });
    });
  });

  $(function(){
    console.log('działa');
    var logopoler = $('.logopoler');
    var bodysite = $('.animation');
    var btn = $('.btn');

    btn.on('click', function(){
      console.log('click działa');
      document.cookie = "animation=clicked";
      logopoler.fadeOut('slow', function(){
        bodysite.fadeOut('slow', function(){
          $(this).remove();
        });
      });
    });
  });

  $('.cat-item a').each(function(){
  $(this).attr('data-text', $(this).text());
  })

var body = $(document);
var button = $('.buttonsz');
var btnm = $('.btnmyjka');
var btno = $('.btnodkurzacz');
console.log(btnm);

var scrubber = document.querySelector('.scrubber');

button.on('click', function(){
  body.on('mousemove', function(sz){
      $('.szor').css({
         left:  sz.pageX+3,
         top:   sz.pageY+3, //utworz osobna klase z display none;
      });
  });
  $('.szor').toggleClass('vis');
  function playScrubber(){
    if(scrubber.paused){
      scrubber.play();
    }else{
      scrubber.pause();
    }
  }
  playScrubber();
});

var washer = document.querySelector('.washer');

btnm.on('click', function(){
  body.on('mousemove', function(sz){
      $('.myjka').css({
         left:  sz.pageX+3,
         top:   sz.pageY+3, //utworz osobna klase z display none;
      });
  });
  $('.myjka').toggleClass('vis');
  function playWasher(){
    if(washer.paused){
      washer.play();
    }else{
      washer.pause();
    }
  }
  playWasher();
});

var vacum = document.querySelector('.vacum');

btno.on('click', function(){
  body.on('mousemove', function(sz){
      $('.odkurzacz').css({
         left:  sz.pageX+3,
         top:   sz.pageY+3
      });
  });
  $('.odkurzacz').toggleClass('vis');
  function playVacum(){
    if(vacum.paused){
      vacum.play();
    }else{
      vacum.pause();
    }
  }
  playVacum();
});




})(jQuery);
