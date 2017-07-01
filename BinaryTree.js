var BinaryTree = function(){
    var Node = function(item){
        this.element = item|null;
        this.left = null;
        this.right = null;
    }

    this.head = null;

    this.add = function(item){
        var tempHead = this.head;
        while(tempHead != null){
            if(item < tempHead.element)
                tempHead = tempHead.left;
            else
                tempHead = tempHead.right;
        }
        tempHead = new Node(item);
    }

    this.remove = function(item){
        var tempHead = this.head;
        while(tempHead != null){
            if(tempHead.element == item)
                break;
            if(item < tempHead.left)
                tempHead = tempHead.left;
            else
                tempHead = tempHead.right;
        }
        

    }
}

