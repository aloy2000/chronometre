/**
 * auteur: aloy
 * the trambo is mandady
 */

 // variable global
 var start = document.getElementById('btn-start');
 var stop = document.getElementById('btn-stop');
 var reset = document.getElementById('btn-reset');
 var second = document.getElementById('seconde');
 var msecond = document.getElementById('mseconde');
 var i = 0;
 var j = 0;
 var interval;

 //function miasa refa mande ny chronometre
function begin(){
    clearInterval(interval);
    interval = setInterval(function(event){
        msecond.textContent = i+1;
        if(i == 99){
            if(j < 9){
                second.innerHTML = '0'+(j+1);
               
            }
            else{
                second.textContent = j+1;
            }
            j++;
            i = 0
        }
        else{
            i++;
        }
        
    },10)
}

//function miasa refa pausena
function pause(){
    clearInterval(interval);
    if(i != 0 || j != 0){
        start.textContent = "continuer";
    }
    
}

//function reinitialiser ito
function clear(){
    i = 0;
    j = 0;
    second.textContent = '00';
    msecond.textContent = '00';
    clearInterval(interval);
    start.textContent = "Début";
}

//évènements
 start.addEventListener('click', begin);
 stop.addEventListener('click',pause);
 reset.addEventListener('click',clear);


