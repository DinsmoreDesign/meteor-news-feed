Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	
	// Posts route
	this.route('posts', {
		path: '/',
		template: 'posts'
	});

	// About route
	this.route('about');

	// About route
	this.route('profile');

});