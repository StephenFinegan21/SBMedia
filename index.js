$(document).ready(function(){

   /* 1. User clicks on the small nav (contains burger menu)
      2. Toggle the 'burger-menu-open' class - (if its on, it will turn off, and vice versa) */
    $("#small-nav").click(function(){                           
      document.body.classList.toggle('burger-menu-open');
      
      if($("#mobile-menu").is(':hidden')){  //If the mobile nav menu is hidden
        
      //Just a slide function was working at first but the bootstrap on the contact page seemed to be stopping it from working
      //$("#mobile-menu").slideDown(500);

      //So had to manually remove the 'hide' class and then slide up - 500 referes to the speed
        $("#mobile-menu").removeClass("hide").slideDown(500);
        }else{
        $("#mobile-menu").slideUp(500); //otherwise slide the mobile nav menu (hide it)
    }
})

//When the window is resized
$(window).resize(function() {
        if ($(window).width() > 1000) {               //if it is more than 1000px
            $("#mobile-menu").css("display", "none"); //hide the mobile menu (Stops the mobile nav showing if user resizes screen)
          }
      });

//When a user scrolls     
$(document).scroll(function () {
  var y = $(this).scrollTop(); //The height value of the top of the screen (to keep track of where the user is)

    if($("#mobile-menu").is(':hidden')){  //If the hamburger menu has not been clicked
            if (y > 40) {
              $(".burger-menu").hide();   //Hide it (it is fixed but only want to show it when the nav is open)
            }
            else if(y < 40){
              $(".burger-menu").show();
            }
    
            //Some functions just for appearance, will fade the paragraphs in when a certain point is reached
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