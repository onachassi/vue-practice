$(document).ready(function(){

new Vue({
	el: '#app',
	data: {
		msg: 'Hello World!'
	},
	methods: {
		changeMessage: function(event) {
			this.msg = event.target.value
		}
	}
	
});























})