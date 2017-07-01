/* Kevin Yang
 * CSC490 Web Intro
 * Expander Lab - .js file
 * kyang09@calpoly.edu
 */

 var Expander = {};

Expander.makeExpander = function (root){
  //console.log(root.childNodes[0]);
  var i = tempNode = 0;
  //root.className = "roots";
  //for(var i = 0; i < root.childNodes.length; i++){

  //}
  while(tempNode = root.childNodes[i]){
    console.log(i)
    if(tempNode.nodeType !== 3){
      var newdiv = document.createElement("div");
      //newdiv.className = "sub";
      //console.log(root.childNodes[i]);
      //newdiv.innerHTML = tempNode.getAttribute("title");
      //root.insertBefore(newdiv, tempNode);
    }
    //console.log((root.childNodes[i].nodeType != 3));
    i++
  }
  //root.insertBefore(newdiv, root.childNodes[0]);
  
}