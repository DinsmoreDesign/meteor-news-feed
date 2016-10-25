// Profile Images Collection
ProfileImages = new FS.Collection("ProfileImages", {
	stores: [new FS.Store.GridFS("ProfileImages")]
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
		type: String
	},
	username:{
		type: String
	},
	createdAt: {
		type: Date
	}
}));