// ============ tabs ============
// an tabs - show tab 1
$('.tabs__brandhub .brandhub__item:first-child').addClass('active-tabs');
$('#tabsContent .tabsContent').hide();
$('#tabsContent .tabsContent:first-child').show();

/////
$('.tabs__brandhub .brandhub__item').click(function(){
    $('.tabs__brandhub .brandhub__item').removeClass('active-tabs');
    $(this).addClass('active-tabs');
    $('#tabsContent .tabsContent').hide();
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
});

///// show item
$(".tabsContent__item").hide();
$(document).ready(function(){
    $(".tabsContent1 .tabsContent__item").slice(0,9).show();
    $(".tabsContent2 .tabsContent__item").slice(0,9).show();
    $(".tabsContent3 .tabsContent__item").slice(0,9).show();
    $("#seeMore").click(function(e){
      e.preventDefault();
      $(".tabsContent1 .tabsContent__item:hidden").slice(0,3).fadeIn("slow");
      $(".tabsContent2 .tabsContent__item:hidden").slice(0,3).fadeIn("slow");
      $(".tabsContent3 .tabsContent__item:hidden").slice(0,3).fadeIn("slow");
      // if($(".tabsContent1 .tabsContent__item:hidden").length == 0){
      //    $("#seeMore").fadeOut("slow");
      //   }
      //   if($(".tabsContent2 .tabsContent__item:hidden").length == 0){
      //     $("#seeMore").fadeOut("slow");
      //    }
      //    if($(".tabsContent3 .tabsContent__item:hidden").length == 0){
      //     $("#seeMore").fadeOut("slow");
      //    }
    });
  })
