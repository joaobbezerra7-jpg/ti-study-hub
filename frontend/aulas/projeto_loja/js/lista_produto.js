const produtos = [
    // Seção 1: Hortifruti
    { id_produto: 1, descricao_produto: "Alface Crespa", valor_unitario: 3.50, unidade: "un", caminho_imagem: "img/alface.jpg", id_secao: 1, secao: "Hortifruti" },
    { id_produto: 2, descricao_produto: "Tomate Italiano", valor_unitario: 8.90, unidade: "kg", caminho_imagem: "img/tomate.jpg", id_secao: 1, secao: "Hortifruti" },
    { id_produto: 3, descricao_produto: "Cebola Branca", valor_unitario: 4.20, unidade: "kg", caminho_imagem: "img/cebola.jpg", id_secao: 1, secao: "Hortifruti" },
    { id_produto: 4, descricao_produto: "Batata Inglesa", valor_unitario: 5.50, unidade: "kg", caminho_imagem: "img/batata.jpg", id_secao: 1, secao: "Hortifruti" },
    { id_produto: 5, descricao_produto: "Banana Nanica", valor_unitario: 6.00, unidade: "kg", caminho_imagem: "img/banana.jpg", id_secao: 1, secao: "Hortifruti" },
    { id_produto: 6, descricao_produto: "Maçã Gala", valor_unitario: 10.50, unidade: "kg", caminho_imagem: "img/maca.jpg", id_secao: 1, secao: "Hortifruti" },
    { id_produto: 7, descricao_produto: "Cenoura", valor_unitario: 4.80, unidade: "kg", caminho_imagem: "img/cenoura.jpg", id_secao: 1, secao: "Hortifruti" },
    { id_produto: 8, descricao_produto: "Alho", valor_unitario: 25.00, unidade: "kg", caminho_imagem: "img/alho.jpg", id_secao: 1, secao: "Hortifruti" },
  
    // Seção 2: Laticínios
    { id_produto: 9, descricao_produto: "Leite Integral 1L", valor_unitario: 5.80, unidade: "un", caminho_imagem: "img/leite.jpg", id_secao: 2, secao: "Laticínios" },
    { id_produto: 10, descricao_produto: "Manteiga com Sal 200g", valor_unitario: 12.50, unidade: "un", caminho_imagem: "img/manteiga.jpg", id_secao: 2, secao: "Laticínios" },
    { id_produto: 11, descricao_produto: "Iogurte Natural", valor_unitario: 3.20, unidade: "un", caminho_imagem: "img/iogurte.jpg", id_secao: 2, secao: "Laticínios" },
    { id_produto: 12, descricao_produto: "Queijo Mussarela", valor_unitario: 45.00, unidade: "kg", caminho_imagem: "img/queijo_mussarela.jpg", id_secao: 2, secao: "Laticínios" },
    { id_produto: 13, descricao_produto: "Queijo Prato", valor_unitario: 48.00, unidade: "kg", caminho_imagem: "img/queijo_prato.jpg", id_secao: 2, secao: "Laticínios" },
    { id_produto: 14, descricao_produto: "Requeijão Cremoso", valor_unitario: 9.90, unidade: "un", caminho_imagem: "img/requeijao.jpg", id_secao: 2, secao: "Laticínios" },
    { id_produto: 15, descricao_produto: "Creme de Leite", valor_unitario: 4.50, unidade: "un", caminho_imagem: "img/creme_leite.jpg", id_secao: 2, secao: "Laticínios" },
    { id_produto: 16, descricao_produto: "Leite Condensado", valor_unitario: 7.20, unidade: "un", caminho_imagem: "img/leite_condensado.jpg", id_secao: 2, secao: "Laticínios" },
  
    // Seção 3: Mercearia
    { id_produto: 17, descricao_produto: "Arroz Tipo 1 5kg", valor_unitario: 28.90, unidade: "un", caminho_imagem: "img/arroz.jpg", id_secao: 3, secao: "Mercearia" },
    { id_produto: 18, descricao_produto: "Feijão Carioca 1kg", valor_unitario: 8.50, unidade: "un", caminho_imagem: "img/feijao.jpg", id_secao: 3, secao: "Mercearia" },
    { id_produto: 19, descricao_produto: "Açúcar Refinado 1kg", valor_unitario: 4.90, unidade: "un", caminho_imagem: "img/acucar.jpg", id_secao: 3, secao: "Mercearia" },
    { id_produto: 20, descricao_produto: "Café Torrado 500g", valor_unitario: 18.00, unidade: "un", caminho_imagem: "img/cafe.jpg", id_secao: 3, secao: "Mercearia" },
    { id_produto: 21, descricao_produto: "Óleo de Soja 900ml", valor_unitario: 7.40, unidade: "un", caminho_imagem: "img/oleo.jpg", id_secao: 3, secao: "Mercearia" },
    { id_produto: 22, descricao_produto: "Macarrão Espaguete", valor_unitario: 4.30, unidade: "un", caminho_imagem: "img/macarrao.jpg", id_secao: 3, secao: "Mercearia" },
    { id_produto: 23, descricao_produto: "Molho de Tomate", valor_unitario: 2.50, unidade: "un", caminho_imagem: "img/molho.jpg", id_secao: 3, secao: "Mercearia" },
    { id_produto: 24, descricao_produto: "Farinha de Trigo 1kg", valor_unitario: 5.20, unidade: "un", caminho_imagem: "img/farinha.jpg", id_secao: 3, secao: "Mercearia" },
  
    // Seção 4: Bebidas
    { id_produto: 25, descricao_produto: "Refrigerante Cola 2L", valor_unitario: 9.50, unidade: "un", caminho_imagem: "img/refri_cola.jpg", id_secao: 4, secao: "Bebidas" },
    { id_produto: 26, descricao_produto: "Água Mineral 500ml", valor_unitario: 2.00, unidade: "un", caminho_imagem: "img/agua.jpg", id_secao: 4, secao: "Bebidas" },
    { id_produto: 27, descricao_produto: "Suco de Laranja 1L", valor_unitario: 11.00, unidade: "un", caminho_imagem: "img/suco_laranja.jpg", id_secao: 4, secao: "Bebidas" },
    { id_produto: 28, descricao_produto: "Cerveja Lata 350ml", valor_unitario: 4.50, unidade: "un", caminho_imagem: "img/cerveja.jpg", id_secao: 4, secao: "Bebidas" },
    { id_produto: 29, descricao_produto: "Vinho Tinto 750ml", valor_unitario: 35.00, unidade: "un", caminho_imagem: "img/vinho.jpg", id_secao: 4, secao: "Bebidas" },
    { id_produto: 30, descricao_produto: "Chá Gelado 1.5L", valor_unitario: 8.00, unidade: "un", caminho_imagem: "img/cha.jpg", id_secao: 4, secao: "Bebidas" },
    { id_produto: 31, descricao_produto: "Energético 250ml", valor_unitario: 7.50, unidade: "un", caminho_imagem: "img/energetico.jpg", id_secao: 4, secao: "Bebidas" },
    { id_produto: 32, descricao_produto: "Água de Coco 1L", valor_unitario: 10.00, unidade: "un", caminho_imagem: "img/agua_coco.jpg", id_secao: 4, secao: "Bebidas" },
  
    // Seção 5: Limpeza
    { id_produto: 33, descricao_produto: "Detergente Líquido", valor_unitario: 2.20, unidade: "un", caminho_imagem: "img/detergente.jpg", id_secao: 5, secao: "Limpeza" },
    { id_produto: 34, descricao_produto: "Sabão em Pó 1kg", valor_unitario: 14.90, unidade: "un", caminho_imagem: "img/sabao_po.jpg", id_secao: 5, secao: "Limpeza" },
    { id_produto: 35, descricao_produto: "Amaciante 2L", valor_unitario: 16.50, unidade: "un", caminho_imagem: "img/amaciante.jpg", id_secao: 5, secao: "Limpeza" },
    { id_produto: 36, descricao_produto: "Desinfetante 1L", valor_unitario: 6.80, unidade: "un", caminho_imagem: "img/desinfetante.jpg", id_secao: 5, secao: "Limpeza" },
    { id_produto: 37, descricao_produto: "Água Sanitária 2L", valor_unitario: 5.50, unidade: "un", caminho_imagem: "img/agua_sanitaria.jpg", id_secao: 5, secao: "Limpeza" },
    { id_produto: 38, descricao_produto: "Esponja de Aço", valor_unitario: 3.00, unidade: "un", caminho_imagem: "img/esponja.jpg", id_secao: 5, secao: "Limpeza" },
    { id_produto: 39, descricao_produto: "Limpador Multiuso", valor_unitario: 5.90, unidade: "un", caminho_imagem: "img/multiuso.jpg", id_secao: 5, secao: "Limpeza" },
    { id_produto: 40, descricao_produto: "Saco de Lixo 50L", valor_unitario: 12.00, unidade: "un", caminho_imagem: "img/saco_lixo.jpg", id_secao: 5, secao: "Limpeza" }
  ];

  export {produtos}
  