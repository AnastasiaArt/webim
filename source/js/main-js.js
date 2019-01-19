$( document ).ready(function() {
  $("#navToggle").click(function() {
      $(this).toggleClass("active");
      $(".main-nav").toggleClass("open");
    });
 // findHeight=function(){
 //   topMargin=$(".main-header").height();
 //   console.log(topMargin);
 //   console.log($(".main-content").css("margin-top", topMargin));
 // };
 // findHeight();
 // $(window).resize(findHeight);
});
