
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos)
    document.getElementById("header").style.top = "0";
  else 
    document.getElementById("header").style.top = "-64px";
  prevScrollpos = currentScrollPos;
}

$(function(){
    $('a[href^="#"]').click(function(){
        let currentScrollPos = window.pageYOffset;

        let target = $(this).attr('href');
        let font_size = $('#text-size').css('font-size').substring(0, $('#text-size').css('font-size').length - 2);
        let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        let scroll_lenthe = $(target).offset().top - (+font_size / 1.5) * 4 + 58;

        console.log(posTop);
        console.log(scroll_lenthe);
        console.log(Math.abs(posTop - scroll_lenthe) / 3);

      
            $('html, body').animate({scrollTop: scroll_lenthe}, Math.abs(posTop - scroll_lenthe) / 4);
        return false;
    });
});
    