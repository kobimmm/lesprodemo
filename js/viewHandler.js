$( document ).ready(function() {
    function clearViews(){
        $("section[class^='section-']").hide();
    }
    function showMainView(){
        $(".section-main-page").show();
    }
    function hideMainView(){
        $(".section-main-page").hide();
    }
    function showSearchView(){
        $(".section-search-page").show();
    }
    function showCalendarView(){
        $(".section-calendar-page").show();
    }
    function backToHome(){
        $(".section-home-page").show();
    }
    
    //=========================================
    clearViews();
    showMainView();
    //=========================================

    $("#findCoworker").on('click',function(){
        clearViews();
        showSearchView();
    });
    $("#viewCalendar").on('click',function(){
        clearViews();
        showCalendarView();
    });
    $(".back-to-home-btn").on('click',function(){
        clearViews();
        showMainView();
    });
    
    // === search page ===//
    $(".pro-category-element").on('click',function(){
        $(this).toggleClass("selected");
        $(this).find(".vam").toggleClass("selected");
        $(this).find(".svg-vam").toggleClass("selected");
    });
    
});