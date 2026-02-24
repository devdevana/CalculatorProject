function insert(num){
   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function back(){
    var resultado=document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado=document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}

document.addEventListener('keydown', function(event){
    const tecla = event.key;

   
    if((tecla >= '0' && tecla <= '9') || ['+', '-', '*', '/', '.'].includes(tecla)){
        insert(tecla);
    }
    
    else if(tecla === 'Enter'){
        calcular();
    }
   
    else if(tecla === 'Backspace'){
        back();
    }
    
    else if(tecla === 'Escape'){
        clean();
    }
});