use("blogverse");

// find all blogs
db.blogs.find();

// find a blog by ID
db.blogs.find({ _id: ObjectId("67d6ded45cf03349e6a30bfc") });

// find recent blogs
db.blogs.find().sort({ createdAt: -1 }).limit(5);

// find blogs within a date range 
db.blogs.find({
    createdAt: {
      $gte: new Date("2025-03-12T00:00:00"),
      $lte: new Date("2025-03-16T07:55:00Z")
    }
});

// find all categories
db.blogs.distinct("category");

// find blogs by category
db.blogs.find({ category: "Travel" });

// find all comments for a blog
db.blogs.find({ _id: ObjectId("67d6ded45cf03349e6a30bfc") }, { comments: 1 });
  
// find blogs by author
db.blogs.find({ author: "Michael Lee" });