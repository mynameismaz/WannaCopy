child = document.querySelector('.post').children
for(let i=0;  i<child.length; i++){
    child[i].onclick = function(){
        let range = document.createRange();
        range.selectNode(this);
        window.getSelection().addRange(range);
    }
}