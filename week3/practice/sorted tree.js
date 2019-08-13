    var root = null;  //the root pointer of the binary sort tree 
    //the function of the binary sort tree
    function BinaryTree() {
            //node class
            var Node = function(key) {
                this.key = key;
                this.left = null;
                this.right = null;
            }

            //insert a node 
            this.insert = function(key) {
                var newNode = new Node(key)                  //creat a new node
                if(root === null) {                          //if root node pointer is null, then make root pointer to the newNode 
                    root = newNode;
                }else {                                      //otherwise, find the appropriate location from the root node
                    insertNode(root, newNode);
                }
            }
            var insertNode = function(node, newNode) {
                if(node !== null)                            //if current node is not null
                {
                    if(newNode.key < node.key) {             //if newNode.key<node.key
                        if(node.left == null)                //if node.left pointer is null, then make node.left pointer to the newNode
                        {
                            node.left = newNode;}
                        else
                            insertNode(node.left, newNode);  //otherwise, keep searching
                    }
                    else{                                    //if newNode.key>=node.key
                        if(node.right == null) {             //if node.left pointer is null, then make node.left pointer to the newNode
                            node.right = newNode;
                        }
                        else  
                            insertNode(node.right, newNode)  //otherwise, keep searching
                    }
                }
                return null;
            }
            //output every element of the binary sort tree 
            this.getTree = function(node) { 
             if(node==null)  return ;
                this.getTree(node.left);
                console.log(node.key);
                this.getTree(node.right); 
            } 
            //judge whether the element is in a binary sort tree
            this.find =function( key){                      
                if(root==null) console.log("can not find it");  //if the binary sort tree is empty, then output"can not find it"
                findelement(root,key);                          //otherwise, keep searching the element from the root node pointer
            }
            var findelement = function(node,element){
                if(node==null )                                 //if the current node pointer is null, then output"can not find it"
                     {console.log("can not find it"); return ;}
                if(node.key===element){                         //if node.key=element, then output" find it"
                  console.log("find it"); return ;
                }
                else if(element<node.key)                      //if element<node.key, then keep searching from node.left node pointer
                     findelement(node.left,element);          
                else if(element>node.key)                      //if element<node.key, then keep searching from node.left node pointer
                    findelement(node.right,element);
            } 
        } 
        //creat a new tree
        var tree = new BinaryTree();  
        //insert each element                         
        var nodes = ["red","green","black","yellow","white","pink","blacd"];
        nodes.forEach(function(item) {
        tree.insert(item);   })
        //output the current binary sort tree
        tree.getTree(root);
        //judge whether the element is in a binary sort tree
        tree.find("ak"); 
        tree.find("red");
        
