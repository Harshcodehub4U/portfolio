$(document).ready(function(){
$("#menu").click(function(){
  $(this).toggleClass("fa-microsoft");
  $("header").toggleClass("toggle")  
    });
$(window).on(`scroll load`,function(){
$("menu").removeClass("fa-microsoft");
    $("header").removeClass("toggle")  
if($(window).scrollTop() > 0){
$(".top").show();
}else{
  $(".top").hide();

}
})
})

// smooth scrolling

$(`a[href*="#"]`).on(`click`,function(e){
e.preventDefault();

$(`html`,`body`).animate({
  scrollTop : $($(this).attr("href")).offset().top,
},500,
"linear",



)
})


$("a[href='#Home']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");

})

let href = document.getElementsByClassName("top")

function TopFunction() {
  document.documentElement.scrollTop = 0;
}
console.log("hello")