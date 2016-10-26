// Profile Images Collection
ProfileImages = new FS.Collection("ProfileImages", {
	stores: [new FS.Store.GridFS("ProfileImages")]
});

// Allow users permission to see images without insecure package enabled.
ProfileImages.allow({
	insert: function(userId, doc) {
		return true;
	},
	update: function(userId, doc, fields, modifier) {
		return true;
	},
	download: function() {
		return true;
	}
});

// User Images Collection
UserImages = new Mongo.Collection("UserImages");

// Posts Collection & Schema
Posts = new Mongo.Collection("posts");

Posts.attachSchema(new SimpleSchema({
	body: {
		type: String,
		max: 500
	},
	userId: {
		type: String,
		autoValue: function() {
			return Meteor.userId()
		}
	},
	username:{
		type: String,
		autoValue: function() {
			return Meteor.users.findOne({
				_id: this.userId
			}).username
		}
	},
	createdAt: {
		type: Date,
		autoValue: function() {
			return new Date()
		}
	}
}));

// Allow users permission to add posts without insecure package enabled.
Posts.allow({
	insert: function(userId, doc) {
		return true;
	}
});