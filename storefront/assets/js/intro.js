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


})(jQuery);
