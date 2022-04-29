const task1 = () => {
	const num1 = '1000';
	const num2 = '1001';
	let result = num1;

//Додоємо до результату яукий складається з восьми нулів перше число
for(let i = 1; i <= 8 - num1.length; i++){
	result += '0';
}

//Проходимось по другому числу з права на ліво,
// та в залежності від значення біту - змінюємо біти в першому числі з ліва на право
for(let i = num2.length - 1; i >= 0 ; i--){
	result = num2[i] === '1' 
	? '1' + result.slice(1, result.length) 
	: '0' + result.slice(1, result.length);

	//Зсуваємо отримано число вправо на один біт
	result = '0' + result.slice(0, result.length - 1)
	console.log(result)
}
//Виводтмо отримані значення
console.log(parseInt(num1, 2))
console.log(parseInt(num2, 2))
console.log(parseInt(result, 2))

}



const dividend = '1100111';
const devisor = '1010';
let remainder = '';
let currentNumber = devisor.length;

let quotient = dividend.slice(0, currentNumber);


if(parseInt(quotient, 2) < parseInt(devisor, 2)){
	currentNumber++;
	quotient = dividend.slice(0, currentNumber)
	remainder += '0';
}

while(currentNumber <= dividend.length){
	remainder += '1';
	quotient = (parseInt(quotient, 2) - parseInt(devisor, 2)).toString(2);
	currentNumber++;
	quotient += dividend[currentNumber - 1];
	
	
	while(parseInt(quotient, 2) < parseInt(devisor, 2)){
		remainder += '0';
		currentNumber++;
		if((currentNumber - 1) >= dividend.length){
			break;
		}
		quotient += dividend[currentNumber - 1];
		console.log(quotient)
	}

}

console.log('remainder: ' + remainder )


