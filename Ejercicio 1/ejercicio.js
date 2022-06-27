const btn = document.getElementById('btnUser');
btn.addEventListener('click',informacionPersonal)
const inf = document.getElementById('inf');
let nombre = document.getElementById("nombre");


function informacionPersonal() {
  if(nombre.value !== ''){
    inf.innerHTML = 'El nombre del estudiante es: <br>'+ nombre.value;
  }else{
    alert('Por favor ingresar el nombre del estudiante');
  }
}

$(document).ready(function(){
  let addBtn = $('#btnAdd'); 
  let asignaturas = $('#asignaturas'); 
  let maxAsignaturas = 5; //TODO: Maximo 5 asignaturas
  let insertAsignatura = '<tr><td><input type="text" name="asignatura" id="asignatura" class="form-control" placeholder="Nombre asignatura" value=""></td><td><div class="input-group"><span class="input-group-text">$</span><input onchange="calcular()" type="number" name="valorAsignatura" class="form-control valorAsignatura text-end" placeholder="Valor asignatura" value=""></div></td><td class="d-grid"> <button class="btn btn-danger btnDelete" id="btn-delete" name="">-</button> </td></tr>'; 
  let x = 1; 
  
  $(addBtn).click(function(){
    if(x < maxAsignaturas){ 
      x++; 
      $(asignaturas).append(insertAsignatura); 
      if(x == maxAsignaturas){
        alert('No puedes matricular mas asignaturas');
      }
    }
  });
  
  $(asignaturas).on('click', '.btnDelete', function(obj){
    obj.preventDefault();
    $(this).parent('tr').remove(); 
    x--; 
  });

  $("body").on("click",".btnDelete", function() {
      $(this).parent().parent().remove();
  });
});

function calcular() {
  const papeleria = 20000;
  const carnet = 8000;
  const porcentajeDescuento = 0.2; 

  let addValor = 0;  
  let total = 0;
  let actual = 0;
  
  $('.valorAsignatura').each(function() {
    if (!isNaN($(this).val())) {
      addValor += Number($(this).val());
      if (addValor < 0) {
        console.log('OK')
        addValor = (addValor * -1);
      }else{
        valor = addValor;
      }
    }
  });

  actual = (valor * porcentajeDescuento);
  total = (valor - actual);
  totalPagar = (papeleria + carnet + total);
  
  $('#asignaturasSin').val(valor);
  $('#descuento').val(actual);
  $('#total').val(total); 
  $('#totalPagar').val(totalPagar); 
};
