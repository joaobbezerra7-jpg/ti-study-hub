 //dados
 const nome = document.querySelector("#nome");
 const idade = document.querySelector("#idade");
 const sexo = document.querySelector("#sexo");

 const pessoa = {
    nome,
    idade,
    sexo,
}


 //botões
 const botaoEnviar = document.querySelector("#btn-enviar");
 const botaoMenor = document.querySelector("#btn-menor");
 const botaoMaior = document.querySelector("#btn-maior");
 const botaoMeio = document.querySelector("#btn-meio");
 const botaoSexo = document.querySelector("#btn-sexo");

 //resultados
 const divResultadoMenor = document.querySelector("#div-result-menor");
 const divResultadoMaior = document.querySelector("#div-result-maior");
 const divResultadoMeio = document.querySelector("#div-result-meio");
 const divResultadoHomem = document.querySelector("#div-result-homem");
 const divResultadoMulher = document.querySelector("#div-result-mulher");

 

 let menoresIdade = [];
 let acima65 = [];
 let entre18e65 = [];
 let masculino = [];
 let feminino = [];

 

 botaoEnviar.addEventListener('click', function() {
       

     if ((Number(pessoa.idade.value) <= 18) && (pessoa.sexo.value === "masculino")) {
     menoresIdade.push(pessoa);
     masculino.push(pessoa);
     console.log("passou aqui");
 } else if (((Number(pessoa.idade.value) >= 18) && (pessoa.idade <=65)) && (pessoa.sexo === "masculino")) {
     entre18e65.push(pessoa);
     masculino.push(pessoa);
 } else if ((Number(pessoa.idade.value > 65)) && (pessoa.sexo === "masculino")) {
     acima65.push(pessoa);
     masculino.push(pessoa);
 } else if ((Number(pessoa.idade.value) < 18) && (pessoa.sexo === "feminino")) {
     menoresIdade.push(pessoa);
     feminino.push(pessoa);
 }else if (((Number(pessoa.idade.value) >= 18) && (pessoa.idade <=65)) && (pessoa.sexo === "feminino")) {
     entre18e65.push(pessoa);
     feminino.push(pessoa);
 }else{
     acima65.push(pessoa);
     feminino.push(pessoa);
 } 

pessoa.nome.value = "";
pessoa.idade.value = "";
pessoa.sexo.value = ""; 


 })


 botaoMenor.addEventListener('click', function() {
     divResultadoMenor.innerHTML = `O numero total de pessoas menores de 18 anos é: ${menoresIdade.length}`
 })

 botaoMaior.addEventListener('click', function () {
     divResultadoMaior.innerHTML =  `O numero total de pessoas maiores de 65 anos é: ${acima65.length}`
 })

 botaoMeio.addEventListener('click', function () {
     divResultadoMeio.innerHTML =  `O numero total de pessoas com idade entre 18 e 65 anos é: ${entre18e65.length}`
     
 })

 botaoSexo.addEventListener('click', function () {
     divResultadoHomem.innerHTML =  `O numero total de pessoas do gênero masculino é: ${masculino.length} <br>`
     divResultadoMulher.innerHTML = `O numero total de pessoas do gênero feminino é: ${feminino.length} <br>`
 })   