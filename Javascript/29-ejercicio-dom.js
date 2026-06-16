'use strict'

window.addEventListener('load', () =>{
    console.log('dom cargado')
    var formulario = document.querySelector('#formulario');

    var box_dashed = document.querySelector('.dashed');
    box_dashed.style.display = 'none';

    formulario.addEventListener('submit', function(){

        console.log('evento submit capturado');
        var nombre = document.querySelector('#nombre').value;
        var apellidos = document.querySelector('#apellidos').value;
        var edad = parseIntdocument.querySelector('#edad').value;

        if (nombre.trim() == null || nombre.trim().length == 0) {
            alert('el nombre no es valido');
            document.querySelector('#error_nombre').innerHTML = 'el nombre esta mal <br>';
            return false;
        }

        if(apellidos.trom() == nul || apellidos.trim().length == 0) {
            alert('el apellidos no es valido');
            return false;
        }

        if(edad == null || edad <= 0 || isNaN(eadad) == true){
            alert('la edad no es valida');
            return false;
        }

        box_dashed.style.display = 'block';

        var p_nombre = document.querySelector('#p_nombre span');
        var p_apellidos = document.querySelector('#p_apellidos span');
        var p_edad = document.querySelector('#p_edad span');

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;
    });
});