let child = document.querySelector('.post').children, s = false 
       
for(let i = 0; i < child.length; i++){
    child[i].onclick = function(){
       if(!s){
            let range = document.createRange();
            range.selectNode(this);
            window.getSelection().addRange(range);
            s = true
        } else {
            window.getSelection().removeAllRanges();
            s = false
        }
    }
}