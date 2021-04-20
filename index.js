$(document).ready(function(){
  
    $("#small-nav").click(function(){

        document.body.classList.toggle('burger-menu-open');

      

      if($("#mobile-menu").is(':hidden')){
        
        //Just a slide up was working at first but the bootstrap on the contact page seemed to be stopping it from working
        //$("#mobile-menu").slideDown(500);

        //So had to manually remove the 'hide' class and then slide up
        $("#mobile-menu").removeClass("hide").slideDown(500);
        
        
      }else{
        $("#mobile-menu").slideUp(500);
      
    }
})

$(window).resize(function() {
        if ($(window).width() > 1000) {
            $("#mobile-menu").css("display", "none");
          }
      });


      
$(document).scroll(function () {
  var y = $(this).scrollTop();

    if($("#mobile-menu").is(':hidden')){
            if (y > 40) {
              $(".burger-menu").hide();
            }
            else if(y < 40){
              $(".burger-menu").show();
            }
    
            if (y > 250) {
                $("#seo-text").fadeTo("4000", 1);
                $("#Social-media-text").fadeTo("4000", 1);
            } 

           if (y > 600) {
                $("#branding-text").fadeTo("4000", 1);
                $("#website-text").fadeTo("4000", 1);
            } 

          }
        });





        
    
    


    
  });
  //https://stackoverflow.com/questions/7715124/do-something-if-screen-width-is-less-than-960-px