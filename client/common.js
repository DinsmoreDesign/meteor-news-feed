// Subscribe to collections to show on front-end.
Meteor.subscribe("posts");
Meteor.subscribe("ProfileImages");
Meteor.subscribe("UserImages");

// Accounts package setups
Meteor.startup(function () {

    AccountsEntry.config({        
      homeRoute: '/',            
      dashboardRoute: '/',
      passwordSignupFields: 'USERNAME_AND_EMAIL'
    });

    Accounts.ui.config({
    	passwordSignupFields: 'USERNAME_AND_EMAIL'
    });
 });


// Pull user image - BROKEN DUE TO DEPRICATED PLUGIN!
// Template.registerHelper('getProfileImg', function(userId){
// 	var imgUrl = UserImages.findOne({userId: userId}).image;
// 	return imgUrl;
// });