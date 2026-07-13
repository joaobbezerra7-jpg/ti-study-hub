<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=
    , initial-scale=1.0">
    <style>

        .container{
            display: flex;
            width: 500px;
            height: 300px;
            border: solid 3px;
            justify-content: center;
            align-items: center;
            margin: auto;

        }

        .item{
            text-align: center;
            width: 100px;
            height: 50px;
            border: solid 3px;
        }	

        
    </style>
    <title>Exercicio 1</title>
</head>
<body>
   <h1>Flexbox</h1>
   <hr>

   <div class="container">
    <div class="item">Item Centralizado</div>
    

    

   </div>

</body>
</html>  -->


<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio 2</title>
    <style>
        .container {
            width: 300px;
            margin: 0 auto;
            border: solid 3px;

            display: flex;
            align-items: start;
            justify-content: space-evenly;
            
        }
        .item {
            width: 80px;
            height: 50px;
            background-color: lightblue;
            
           
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
    </div>
</body>
</html> 

Diferença entre os 3:
Between: Espaço entre os elementos, o primeiro e o último elemento ficam colados nas bordas do container.
Around: Espaço entre os elementos, o primeiro e o último elemento ficam afastados das bordas do container.
Evenly: Espaço entre os elementos, o primeiro e o último elemento ficam afastados das bordas do container, e o espaço entre todos os elementos é igual.
-->

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=
    , initial-scale=1.0">
    <title>Exercicio 3</title>

    <style>
        .container{
            display: flex;
            /* flex-direction: column; Main assis: Horizontal Cross assis: vertical  */
            /* flex-direction: column-reverse; Mesma coisa, mas os itens se invertem */
            /* flex-direction: row; Main assis: Vertical Cross assis: horizontal*/
            /* flex-direction: row-reverse;  Mesma coisa, mas os itens se invertem*/
            border: solid 2px;
            width: 700px;
            height: 200px;
            gap:10px;

        }

        .item{
            border: solid 2px;
            width: 100px;
            height: 100px;
            
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
    </div>
</body>
</html> -->

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio 4</title>

    <style>

.container{
        display: flex;
        justify-content: center;
        border: solid 3px;
        height: 500px;
        /* align-items: flex-start; Alinhamento Cross axis no inicio */
        /* align-items: flex-end; Alinhamento Cross axis no fim */
        /* align-items: center; Alinhamento Cross axis no centro */
        /* align-items: stretch; Valor padrão */
    }
.item
{
    border: solid 3px;
    width: 30px;
    height: 40px;
}
    </style>
</head>
<body>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
    </div>
</body>
</html> -->

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=
    , initial-scale=1.0">
    <title>Exercicio 5</title>
    <style>
        .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: antiquewhite;
            width: 300px;
            height: 100px;
            margin: 0 auto;
        }

        .item{
            border: solid 3px;
            width: 30px;
        }

        .s{
            align-self: flex-start;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">1</div>
        <div class="item s">2</div>
        <div class="item">3</div>
    </div>
</body>
</html> -->


<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio 6</title>
    <style>
        .container {
            display: flex;
            justify-content: space-around;
            width: 300px;
            margin: 0 auto;
            border: solid 2px;
            background-color: lightblue;
        }
        .item{
            border: solid 2px;
            background-color: antiquewhite;
        }

        .a{
            flex-grow: 1;
        }

        .b{
            flex-grow: 2;
        }

        .c{
            flex-grow: 1;
        }

        /* O item b ficou maior que os outros, ficando na proporção 1:2:1 */
    </style>
</head>
<body>
    <div class="container">
        <div class="item a">1</div>
        <div class="item b">2</div>
        <div class="item c">3</div>
    </div>
</body>
</html> -->


<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercicio 7</title>
    <style>
        .container {
            display: flex;
            justify-content: space-around;
            width: 200px;
            margin: 0 auto;
            border: solid 2px;
            background-color: lightblue;
        }
        .item{
            border: solid 2px;
            background-color: antiquewhite;
            width: 40px;
            height: 40px;
        }

        .a{
            width: 100px;
            flex-shrink: 0;
        }

        .b{
            width: 100px;
            flex-shrink: 1;
        }

        .c{
            width: 100px;
            flex-shrink: 2;
        }

        /* O item a não diminuiu, o item c diminuiu mais */
    </style>
</head>
<body>
    <div class="container">
        <div class="item a">1</div>
        <div class="item b">2</div>
        <div class="item c">3</div>
    </div>
</body>
</html> -->

