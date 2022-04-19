//o que são vetores ou arrays

let array = ['string', 1, true, ['array1'],['array2'],['array3'],['array4']];
//console.log(array[3]);

//foreach
//array.forEach(function(item, index){console.log(item, index)});

//push
//array.push('novo item');
//pop
//array.pop();
//shift
//array.shift();
//unshift
//array.unshift('new item');
//indexOf
//console.log(array.indexOf(true));
//splice
//array.splice(0,3);
//slice
//let newArray = array.slice(0,3);
//console.log(newArray);

let object = {string: 'string', number: 1, boolean: true, array:["array"],objectInterno: {objectInterno: 'objetoInterno'}};
console.log(object);

var nome = object.string;
console.log(nome);