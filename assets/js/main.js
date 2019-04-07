var counter = function(num){
  counter.count = num !== undefined ? num : counter.count;
  return counter.count++;
};
	counter.count = 0;
		console.log(counter());
		console.log(counter());         //задание 1
		console.log(counter());
		console.log(counter());
		console.log(counter(20));
		console.log(counter());
		console.log(counter());
		console.log(counter());

		
console.log('');


	function someFunction(x, y, callback){
		var pow = function (x, n){
			if (n !== 1){ 
					return x *= pow(x, n - 1);             //задание 2
			} 
			else{
					return x;
			}
	};
	callback(pow(x, y));
}
		someFunction(4, 2, function (result){
		
		console.log('число 4 в степени 2 = ' + result);
}); 


console.log('');


var greet = function(){
	return 'My name is ' + this.name;
}
	var person1 ={
  name: 'John',
  greet: greet
}
	var person2 ={														//задание 3
  name: 'Bob',
  greet: greet
}
	var Person ={
  name: 'Fin',
  greet: greet
}

console.log(person1.greet());
console.log(Person.greet.call(person1));


console.log('');


var car = {
	mark: 'nissan',
	carcass: 'sedan',
	_year: 2017,														//задание 4
	get year(){
		return this._year;
	},
	set year(value){
		this._year = value;
	} 	
}
console.log(car.year);