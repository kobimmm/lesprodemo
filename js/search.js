/* The settimeout function is for IE */
/* use the event handeling in you framework to deal with it (angular)*/
$(function() {
    setTimeout(function(){
      $(".b-search .nb-x").click(function () {
        $(".b-search .b-search-input").val('').focus();
    });
    }, 1000);
    
    setTimeout(function(){
      $(".b-search-astyped .nb-x").click(function () {
        $(".b-search-astyped .b-search-input").val('').focus();
    });
    }, 1000);
  
    //error border remove when typing new value
    $(".b-search .b-search-input.error").on("change paste keyup", function() {
       $(this).removeClass("error"); 
    });
    $(".b-search-astyped .b-search-input.error").on("change paste keyup", function() {
       $(this).removeClass("error"); 
    });
});