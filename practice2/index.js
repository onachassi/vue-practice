$(document).ready(function(){

new Vue({
	el: '#app',
	data: {
		msg: 'Hello World!',
		link: 'http://google.com',
		linkName: 'Google',
		fullLink: '<a href="http://google.com">Google</a>'
	}, 
	methods: {
		sayHello: function(){
			// return "hello!";
			// to access any data within view element use this
			// return this.msg;
			this.msg = "Hello!";
			return this.msg
		}
	}
	
});























})