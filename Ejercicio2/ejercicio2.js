const dato1 =  document.getElementById('dato1');
const dato2 =  document.getElementById('dato2');
const dato3 =  document.getElementById('dato3');
const dato4 =  document.getElementById('dato4');
const res =  document.getElementById('res');
const btn = document.getElementById('btnEjecutar');
btn.addEventListener('click',flujo);

function flujo() {
    
    let array = [];
    let a = parseInt(dato1.value);
    let b = parseInt(dato2.value);
    let c = parseInt(dato3.value);
    let d = parseInt(dato4.value);
    array.push(a,b,c,d);
    //TODO: Verifica que sean # != y que sean [+]
    if((a > 0 ) && ( b > 0 ) && (c > 0) && (d > 0)  && (a != b &&  a != c && a != d) 
                              && (b != a &&  b != c && b != d)  
                              && (c != a &&  c != b && c != d)  
                              && (d != a &&  d != b && d != c)  
    ){
        let max = Math.max(a,b,c,d);
        let min = Math.min(a,b,c,d);    
        res.innerHTML = 'El número mayor es: '+max+'<br>El número menor es: '+min;
    }else if((a == b ||  a == c || a == d) //TODO: Verifica que # sean diferentes entre sí  
        || (b == a ||  b == c || b == d)  
        || (d == a ||  d == b || d == c) 
        || (c == a ||  c == b || c == d)  
    ){
        res.innerHTML = 'Has introducido números iguales, por favor verifica';
    }else if ( !((a > 0 ) && ( b > 0 ) && (c > 0) && (d > 0)) ) {  //TODO: Verifica que sean # [+]
       res.innerHTML = 'Estas introduciendo número negativos y solo se admiten, [+]';
    }else{
        res.innerHTML = 'ERROR_INTENTA NUEVAMENTE';
    }
}

