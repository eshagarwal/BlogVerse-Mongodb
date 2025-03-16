use("blogverse");

// update a blog
db.blogs.updateOne(
    { _id: ObjectId("67d6ded45cf03349e6a30bfc") },
    {
      $set: {
        title: "Updated Blog Title - Budgeting for Young Adults",
        content: "Updated Content - Managing finances in your 20s is crucial...",
        createdAt: new Date()
      }
    }
);