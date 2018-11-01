if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/Users/Krishna/udacity projects/mws-restaurant-stage-1/Sw.js')
	.then(function() {
		console.log('Registration worked!');
	})
	.catch(function() {
		console.log('Registration failed!');
	});
}
