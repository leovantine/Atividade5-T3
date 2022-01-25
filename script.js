 // Crie um array que receba 5 itens e exiba no console.

 let hpMovies = ["Harry Potter and the Philosopher's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Azkaban", "Harry Potter and the Globet of fire", "Harry Potter and the Order of the Phoenix"]
 console.log(hpMovies)

 // Utilize um método para adicionar um nome ao inicio do array.

 let names = [`Emma Watson`, `Rupert Grint`]

 names.unshift("Daniel Radcliffe")
 console.log(names)

 // Utilize um método para remover o último nome do array.

 let nomes = [`Daniel Radcliffe`, `Emma Watson`, `Rupert Grint`, `Tom Felton`]

 nomes.pop("Tom Felton")
 console.log(nomes)

 // Utilize um método para adicionar dois nomes ao fim do array.

 names.push(`Gary Oldman`, `Bonnie Wright`)
 console.log(names)

 // Utilize um método para remover o primeiro nome do array.

 names.shift()
 console.log(names)

 // Utilize um método para organizar em ordem crescente o seguinte array:
// const numbers = [7,5,6,3,8,9,2,1,4]

const numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort(function(a,b) {return a-b})
console.log(numbers)