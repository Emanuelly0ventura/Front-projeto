// let pessoa ={
//     nome: 'emanuelly',
//     sobrenome: 'ventura',
//     oi: function(){
//         console.log("oi meu nome é emanuelly!")
//     },
//     tchau: function(){
//         console.log("tchau foi umprazer te conhecer")
//     }

// }

///////////////primeira parte/////////////

let frutas = ["banana", "morango","uva", "maça"]

// frutas.push("coco"); -- adiciona no final da lista
// frutas.pop(); -- remove o ultimo item da lista
// frutas.unshift("manga"); -- adiciona no começo da lista
// frutas.shift(); -- remove o primeiro item da lista


// console.log(frutas[0])
// console.log(frutas[1])
// console.log(frutas[2])
// console.log(frutas[3])

////////////////segunda parte/////////////

// let numfrutas = frutas.length; //-- conta a quantidade de itens da lsita
// let index = frutas.indexOf("morango") //-- mostra aonde esta localizado o item da lista (se não existe ele fala -1)

frutas.reverse()


for(let fruta of frutas){
console.log(fruta);
}

