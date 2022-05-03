const meuArray = [2,4,6,8,10,12,14,16];

function teste(arr, numero){
    try{
        if (!arr && !numero) throw new ReferenceError("Envie os parâmetros!");

        if (typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");

        if (typeof numero !== 'number') throw new TypeError("Numero precisa ser do tipo number");

        if (arr.length === numero){
            return arr;
        }else{
            throw new RangeError("Tamanho Invalido");
        }
    }
    catch(e){
        if (e instanceof ReferenceError){
            console.log("Erro do tipo ReferenceError!");
            console.log(e.message);
        } else if (e instanceof TypeError){
            console.log("Erro do tipo TypeError!");
            console.log(e.message);
        }else if (e instanceof RangeError){
            console.log("Erro do tipo RangeError!");
            console.log(e.message);
        }
    }
}

console.log(teste([], 5));