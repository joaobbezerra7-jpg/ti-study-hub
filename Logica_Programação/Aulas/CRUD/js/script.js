import {calcDesconto} from "./scriptCalculo.js";

const formPessoa = document.getElementById('form-pessoa');
const divListaPessoas = document.getElementById('div-lista-pessoas');
const divResultado = document.getElementById('div-resultado');

const pessoas = [];

formPessoa.addEventListener('submit', (evt) => {
    evt.preventDefault();
    
    const dadosFormPessoa  = new FormData(formPessoa);

        const pessoa = {
            nome: dadosFormPessoa.get('nome'),  
            idade: dadosFormPessoa.get('idade'),
            renda: dadosFormPessoa.get('renda'),

            
}

addPessoa(pessoa)

formPessoa.reset()

divListaPessoas.innerHTML += `<p>Nome: ${pessoa.nome} - Idade: ${pessoa.idade} - Renda: ${pessoa.renda}</p>`

divResultado.innerHTML = calcDesconto(pessoa);

// Essse IF else fiz sozinho na sala

// if (pessoa.idade < 18 || pessoa.renda < 1700) {
//     divResultado.innerHTML = `<p>${pessoa.nome} é isento(a)`;	
    
// } else if (pessoa.renda <= 5000) {
//     divResultado.innerHTML = `<p>${pessoa.nome} tem desconto de 5%, o valor final é ${pessoa.renda * 0.05}`;
// } else if (pessoa.renda <= 8000) {
//     divResultado.innerHTML = `<p>${pessoa.nome} tem desconto de 10% , o valor final é ${pessoa.renda * 0.1}`;
// }else if (pessoa.renda <= 12000) {
//     divResultado.innerHTML = `<p>${pessoa.nome} tem desconto de 15%, o valor final é ${pessoa.renda * 0.15}`;
    
// }else{
//     divResultado.innerHTML = `<p>${pessoa.nome} tem desconto de 20%, o valor final é ${pessoa.renda * 0.2}`;
    
// } 


});

const addPessoa = (objPessoa) => {
    pessoas.push(objPessoa);
    
    listPessoas();
}

const listPessoas = () => {
    divListaPessoas.innerHTML = '';
    pessoas.forEach((elem,i) => {
        divListaPessoas.innerHTML += `${i} - ${elem.nome} - ${elem.idade} - ${parseFloat(elem.renda).toFixed(2).replace(',', ',')} <br>`;
    })
}