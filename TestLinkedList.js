load("LinkedList3.js");
load("CountLinkedList.js");

(function() {
   var cmd, lists = [new LinkedList(), new CountLinkedList()];
   
   while ((cmd = readline().split(/\s+/)).length) {
      if (cmd[0] === 'add')
         print (lists[cmd[1]].add(cmd[2]) + " items added");
      else if (cmd[0] === 'drop')
         print (lists[cmd[1]].drop(cmd[2]) + " items dropped");
      else if (cmd[0] === 'print')
         lists[cmd[1]].apply(function(val) {print("("+val+")");});
      else if (cmd[0] === 'count')
         print("Count is: " + (lists[cmd[1]].constructor === CountLinkedList ?
          lists[cmd[1]].getCount() : "N/A"));
      else if (cmd[0] === 'quit')
         break;    
   }
})();
