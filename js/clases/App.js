import { datosCita, nuevaCita} from '../funciones.js';
import {
    nombreInput,
    apellidoInput,
    telefonoInput, 
    fechaInput, 
    horaInput, 
    sintomasInput, 
    formulario } from '../selectores.js';

class App{
    constructor(){
        this.initApp();
    }
    initApp(){
        nombreInput.addEventListener('change', datosCita);
        apellidoInput.addEventListener('change', datosCita);
        telefonoInput.addEventListener('keyup',limitarTelefono);
        telefonoInput.addEventListener('change', datosCita);
        fechaInput.addEventListener('change', datosCita);
        horaInput.addEventListener('change', datosCita);
        sintomasInput.addEventListener('change', datosCita);

        //Formulario para nuevas citas
        formulario.addEventListener('submit', nuevaCita);
    }
}