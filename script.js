let output = ""; 
let buttons = document.querySelectorAll('.button'); 
Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e)=>{
        if( e.target.innerHTML == '='){ 
            output = eval(output);
            document.querySelector('.output').innerHTML = output;  
        }
        else if( e.target.innerHTML == "AC"){ 
            output = ""
            document.querySelector('.output').innerHTML = output;  
        }
        else if( e.target.innerHTML == '×'){ 
            output = output + "*"; 
            document.querySelector('.output').innerHTML = output;  
        }
        else if( e.target.innerHTML == '−'){ 
            output = output + "-"; 
            document.querySelector('.output').innerHTML = output;  
        }
        else if( e.target.innerHTML == '÷'){ 
            output = output + "/"; 
            document.querySelector('.output').innerHTML = output;  
        }
        else if( e.target.innerHTML == 'C'){ 
            output = output.substring(0, output.length-1);  
            document.querySelector('.output').innerHTML = output;  
        }
       else{ 
        let num = e.target.innerHTML
        output = output + num; 
        document.querySelector('.output').innerHTML = output; 
       }
    }); 
});
