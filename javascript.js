
let gorilas = document.querySelector('.gorilas');
let btn = document.querySelector('#btn');
btn.onclick = run;
function run(){
   
    if(gorilas.hidden == true){
        
         return gorilas.hidden = false;
       
        
    }
    if(gorilas.hidden == false){
         
       return gorilas.hidden = true;
        
    }


}
window.onkeydown = function(e){
    console.log(e.keyCode);
    if(e.keyCode == 27){
        return gorilas.hidden = true;
    }
    if(e.keyCode == 13){
        return gorilas.hidden = false;
    }
}
