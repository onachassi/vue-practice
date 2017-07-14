$(document).ready(function(){

new Vue({
	el: '#app',
	data: {
		counter: 0,
		result: ''
	},
	computed: {
		output: function(){
			return this.counter > 5 ? "Greater than 5" : "Less than 5";
		}
	},
	// computed is more recommended if possible, computed cannot run async though
	watch: {
		// needs to match data property
		counter: function(value){
			var vm = this;
			setTimeout(function(){
				vm.counter = 0
			}, 3000)
		} 
	}
})





















})