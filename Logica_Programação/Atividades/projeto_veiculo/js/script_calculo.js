function calculoCarro(objCarro) {
    if (2026 - (objCarro.ano) >= 20) {
        return `Modelo: ${objCarro.modelo}<br>
        Marca: ${objCarro.marca} <br>
        Placa: ${objCarro.placa} <br>
        Idade do veiculo: ${2026 - (objCarro.ano)} anos <br>
        Valor do seguro: ${((objCarro.valor) * 0.1).toFixed(2)}
        <br>
        Valor do IPVA: Isento <br>
        Valor final (com 250 de licenciamento): ${(objCarro.valor) + (((objCarro.valor) * 0.1))}<br> <br>`
    } 

    else if (objCarro.tipo === "G") {
        return `Modelo: ${objCarro.modelo}<br>
        Marca: ${objCarro.marca} <br>
        Placa: ${objCarro.placa} <br>
        Idade do veiculo: ${2026 - (objCarro.ano)} anos <br>
        Valor do seguro: ${((objCarro.valor) * 0.1).toFixed(2)}
        <br>
        Valor do IPVA: ${((objCarro.valor) * 0.2).toFixed(2)} <br>
        Valor final (com 250 de licenciamento): ${((objCarro.valor) + (((objCarro.valor) * 0.1) + (((objCarro.valor) * 0.2))) + 250).toFixed(2)} <br> <br>
        `
    }

    else if (objCarro.tipo === "E") {
        return `Modelo: ${objCarro.modelo}<br>
        Marca: ${objCarro.marca} <br>
        Placa: ${objCarro.placa} <br>
        Idade do veiculo: ${2026 - (objCarro.ano)} anos <br>
        Valor do seguro: ${((objCarro.valor) * 0.1).toFixed(2)}
        <br>
        Valor do IPVA: ${((objCarro.valor) * 0.15).toFixed(2)} <br>
        Valor final (com 250 de licenciamento): ${((objCarro.valor) + (((objCarro.valor) * 0.1) + (((objCarro.valor) * 0.15))) + 250).toFixed(2)} <br> <br>
        `
    }

    else if (objCarro.tipo === "bio") {
        return `Modelo: ${objCarro.modelo}<br>
        Marca: ${objCarro.marca} <br>
        Placa: ${objCarro.placa} <br>
        Idade do veiculo: ${2026 - (objCarro.ano)} anos <br>
        Valor do seguro: ${((objCarro.valor) * 0.1).toFixed(2)}
        <br>
        Valor do IPVA: ${((objCarro.valor) * 0.1).toFixed(2)} <br>
        Valor final (com 250 de licenciamento): ${((objCarro.valor) + (((objCarro.valor) * 0.1) + (((objCarro.valor) * 0.1))) + 250).toFixed(2)} <br> <br>
        `
    }

    else if (objCarro.tipo === "H") {
        return `Modelo: ${objCarro.modelo}<br>
        Marca: ${objCarro.marca} <br>
        Placa: ${objCarro.placa} <br>
        Idade do veiculo: ${2026 - (objCarro.ano)} anos <br>
        Valor do seguro: ${((objCarro.valor) * 0.1).toFixed(2)}
        <br>
        Valor do IPVA: ${((objCarro.valor) * 0.08).toFixed(2)} <br>
        Valor final (com 250 de licenciamento): ${((objCarro.valor) + (((objCarro.valor) * 0.1) + (((objCarro.valor) * 0.08))) + 250).toFixed(2)} <br> <br>
        `
    }

    else  {
        return `Modelo: ${objCarro.modelo}<br>
        Marca: ${objCarro.marca} <br>
        Placa: ${objCarro.placa} <br>
        Idade do veiculo: ${2026 - (objCarro.ano)} anos <br>
        Valor do seguro: ${((objCarro.valor) * 0.1).toFixed(2)}
        <br>
        Valor do IPVA: ${((objCarro.valor) * 0.02).toFixed(2)} <br>
        Valor final (com 250 de licenciamento): ${((objCarro.valor) + (((objCarro.valor) * 0.1) + (((objCarro.valor) * 0.02))) + 250).toFixed(2)} <br> <br>
        `
    }




  
}


export {calculoCarro}