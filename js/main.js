
function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://digitalinnovation.one/"); //abre o site em outra janela
    //window.location.href = "https://digitalinnovation.one/"; //abre na mesma janela
}

function trocar(elemento){
    //document.getElementById(elemento).innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById(elemento).innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function change(elemento){
    console.log(elemento.value);
}
/*
function soma(n1, n2){
    return n1 + n2;
}
*/

/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade ?");
console.log(validaIdade(idade));
*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
*/

//alert(soma(5, 10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMonth()+1);
*/

/*
var count = 0;
for(count=0; count<=5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    count++;  //= count + 1;
}
*/

/*
var idade = prompt("Qual sua idade ?");
//var idade = 18;
if (idade >= 18)
{
   alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/


/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"verde"}];
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome: "maça", cor:"vermelha"};
console.log(fruta);
alert(fruta.cor);
*/

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva"); //por elemento na lista
//lista.pop(); //retirar o último elemento da lista
//console.log(lista); //informa a lista toda
//console.log(lista[0]);
//console.log(lista.length); //quantidade de elementos na lista
//console.log(lista.reverse()); //inverte a ordem dos elementos na lista
//console.log(lista.toString()); //traz a lista em formato String. Perde a referencia de array
//console.log(lista.toString()[0]); //imprime só a primeira letra do elemento da lista
//onsole.log(lista.join(" | ")); //concatena a string entre parenteses com os elementos da lista
//alert(lista[1]);

//var nome = "Fabio Canalonga";
//var n1 = 50;
//var n2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.replace("Japão","Brasil"));
//console.log(frase.toLocaleLowerCase());
//alert(frase.replace("Japão","Brasil"));