/* Kevin Yang
 * kyang09@calpoly.edu
 * CSC490 WebAdv Expander.js
 */
$.makeExpander = function(root){
  if(root.children().length > 0){ root.addClass("root").children().each(
  	function(){ root.append($('<div class="container">\
  	  <img class="up"/><img class="down"/><div class="banner">'+
  	  $(this).attr("title")+'</div></div>').append($(this).addClass("gap")))});
    $(".up,.down").unbind().click(function(){ 
      var parent=$(this).parent();
      if($(this).attr("class")=="up") parent.prev().before(parent); 
      else parent.next().after(parent)});
    $(".banner").unbind("click").click(
    	function(){$(this).next().toggle(); $(this).toggleClass("pink")});
}};