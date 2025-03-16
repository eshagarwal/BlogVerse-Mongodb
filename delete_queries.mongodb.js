use("blogverse");

// delete a blog
db.blogs.deleteOne({ _id: ObjectId("67d6ded45cf03349e6a30bf9") });

// delete blogs by author
db.blogs.deleteMany({ author: "Robert Brown" });