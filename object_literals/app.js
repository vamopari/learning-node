var person = {
	firstname: 'Vishal',
	lastname: 'Mopari',
	greet: function() {
		console.log('Hello, ' + this.firstname + ' ' + this.lastname);
	}
};

person.greet();
console.log(person.firstname)
console.log(person['firstname']);