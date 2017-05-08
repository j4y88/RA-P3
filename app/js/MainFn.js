export default class MainFn{
    constuctor(){
        console.log('loading MainMF')
        //Smooth Scrolling
        $(function() {
          $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 500);
                return false;
              }
            }
          });
        });  

        //Email Validation Check
        function EmailCheck(inputText){  
          var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
          if(inputText.value.match(mailformat)){  
            alert("Thanks for subscribing!");
            document.form1.email1.focus();  
            return true;  
          } else {  
            alert("You have entered an invalid email address!");  
            document.form1.email1.focus();  
            return false;
          }
        };
    }
}