var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var text = document.getElementById('text');
var result = 0;


plus.addEventListener('click',function(){
    result++;
    text.innerHTML=result;
})


minus.addEventListener('click',function(){
    result--;
    text.innerHTML=result;
})
