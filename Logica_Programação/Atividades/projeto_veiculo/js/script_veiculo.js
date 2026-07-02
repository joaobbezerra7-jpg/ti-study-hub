import { calculoCarro } from "./script_calculo.js";
const form = document.querySelector("#form");
const resultado = document.querySelector("#resultado");

form.addEventListener('submit', (evt)=>{
    evt.preventDefault();

    const objFormDados = new FormData(form);
    let modelo = objFormDados.get('modelo');
    let marca = objFormDados.get('marca');
    let placa = objFormDados.get('placa');
    let ano = parseFloat(objFormDados.get('ano'));
    let valor = parseFloat(objFormDados.get('valor'));
    let tipo = objFormDados.get('tipo');

    const carro = {
        modelo,
        marca,
        placa,
        ano,
        valor,
        tipo
    }

    

    resultado.innerHTML += calculoCarro(carro);

    form.reset();
});