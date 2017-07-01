/* Kevin Yang
 * kyang09@calpoly.edu
 * CSC490 WebIntro Expander.js
 */
var Expander = { makeExpander : function(root){
   var children = root.children, sect=[], button=[], topic=[], content=[];
   if (children.length > 0){ root.setAttribute("class", "root");
      function createImg(src, alt, cls){
        var updown = document.createElement("IMG");
        updown.src = src;
        updown.width = "25";
        updown.height = "25"; 
        updown.alt = alt;
        updown.setAttribute("class", cls);
        return updown;
      }

      function bannerSect(cont, cls){
        var bantxt = document.createElement("DIV");
        bantxt.innerHTML = cont.getAttribute("title");
        bantxt.setAttribute("class", cls);
        return bantxt;
      }
      (function(){var block, length=children.length; 
        while(length > 0){
            button.push(createImg("up.png", "Up", "up"),
              createImg("down.png", "Down", "down"));
            block = document.createElement("DIV");
            block.appendChild(button[button.length-2]);
            block.appendChild(button[button.length-1]);
            content.push(children[0]);
            topic.push(bannerSect(content[content.length-1], "topic"));
            block.appendChild(topic[topic.length-1]);
            block.appendChild(content[content.length-1]);
            sect.push(block);
            root.appendChild(block);
            length--
      }})();

      (function(){var count = 0; for(var i = 0; i < button.length; i++){
        button[i].block = sect[count];
        
        if(i % 2 !== 0){
          button[i].addEventListener("click", function(){
          if (this.block !== root.lastChild){
            root.insertBefore(this.parentNode.nextSibling, this.block);}
          });
          count++
        }
        else{
        button[i].addEventListener("click", function(){
          if (this.block !== root.getElementsByTagName("DIV")[0]){
            root.insertBefore(this.block, this.parentNode.previousSibling);}
        });
        }}
      
        for (var i = 0; i < topic.length; i++){
          topic[i].cont = content[i];
          topic[i].cont.className += ' content';
          topic[i].addEventListener('click', function(){
            if (this.classList.contains("pink")){
              this.classList.remove("pink");
              this.cont.classList.remove("hideText");
            } 
            else{
              this.classList.add("pink");
              this.cont.classList.add("hideText");
            }})}
      })();
}}};