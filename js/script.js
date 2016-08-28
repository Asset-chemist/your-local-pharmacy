$(document).ready(function(){
 $("section.strip a").each(function(i){
   setTimeout(function(){
     $("section.strip a").eq(i).addClass("fade-in");
   }, 200 * i);

 });
 $(".fall-in").each(function(i){
   setTimeout(function(){
     $(".fall-in").eq(i).css({'opacity': 1, 'transform':'translateY(0px)'});
   }, 200 * i);
 });
});
