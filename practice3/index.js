$(document).ready(function(){

new Vue({
	el: '#app',
	data: {
		counter: 0,
		x: 0,
		y: 0
	},
	methods: {
		increaseCounter: function(int, event){
			this.counter += int;
		},
		// you have access to all the normal event properties
		updateCoordinates: function(event){
			this.x = event.clientX;
			this.y = event.clientY;
		},
		dummy: function(event){
			event.stopPropagation();
		},
		alertMe: function(event){
			var text = event.target.value
			alert(text);
		}
	}
})





















})