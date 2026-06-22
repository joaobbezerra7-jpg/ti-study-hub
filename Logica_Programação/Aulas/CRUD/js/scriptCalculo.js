const calcDesconto = (objPessoa) =>{
    let resulCalculo = "";

    if ((objPessoa.idade < 18) || (objPessoa.renda < 1700)) {
        resulCalculo = `${objPessoa.nome} é isento(a)`;
        
    } else if (objPessoa.renda <= 5000) {
        resulCalculo = `${objPessoa.nome} tem desconto de 5%, o valor final é ${objPessoa.renda * 0.05}`;
        
    } else if (objPessoa.renda <= 8000) {
        resulCalculo = `${objPessoa.nome} tem desconto de 10% , o valor final é ${objPessoa.renda * 0.1}`;
        
    } else if (objPessoa.renda <= 12000) {
        resulCalculo = `${objPessoa.nome} tem desconto de 15%, o valor final é ${objPessoa.renda * 0.15}`;
        
    } else{
        resulCalculo = `${objPessoa.nome} tem desconto de 20%, o valor final é ${objPessoa.renda * 0.2}`;
    }

    return resulCalculo;
}

export{calcDesconto};