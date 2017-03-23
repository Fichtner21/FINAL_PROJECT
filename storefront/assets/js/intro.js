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
    console.log($(this).attr('data-text', $(this).text()));
  })

var body = $(document);
var button = $('.buttonsz');
var btnm = $('.btnmyjka');
var btno = $('.btnodkurzacz');
console.log(btnm);



button.on('click', function(){
  body.on('mousemove', function(sz){
      $('.szor').css({
         left:  sz.pageX+3,
         top:   sz.pageY+3
      });
  });
});

btnm.each(function(){
  $(this).on('click', function(){
    body.on('mousemove', function(sz){
        $('.myjka').css({
           left:  sz.pageX+3,
           top:   sz.pageY+3
        });
    });
  });
});

// btnm.on('click', function(){
//   body.on('mousemove', function(sz){
//       $('.myjka').css({
//          left:  sz.pageX+3,
//          top:   sz.pageY+3
//       });
//   });
// });
//
// btno.on('click', function(){
//   body.on('mousemove', function(sz){
//       $('.odkurzacz').css({
//          left:  sz.pageX+3,
//          top:   sz.pageY+3
//       });
//   });
// });
//






})(jQuery);
