use("blogverse");

// find blogs within a date range 
db.blogs.find({
    createdAt: {
      $gte: new Date("2025-03-12T00:00:00"),
      $lte: new Date("2025-03-14T23:59:59")
    }
});

// find blog with most comments
db.blogs.aggregate([
    { 
        $project: { 
            title: 1, 
            commentsCount: { $size: { $ifNull: ["$comments", []] } } 
        } 
    },
    { $sort: { commentsCount: -1 } },
    { $limit: 5 }
]);

// find recent 5 blogs
db.blogs.aggregate([
    { $sort: { createdAt: -1 } },
    { $limit: 5 }
]);

// find the most active commenters 
db.blogs.aggregate([
    { $unwind: "$comments" },
    { $group: { _id: "$comments.user", totalComments: { $sum: 1 } } },
    { $sort: { totalComments: -1 } },
    { $limit: 5 }
]);

// find blogs with the longest content
db.blogs.aggregate([
    { $project: { title: 1, contentLength: { $strLenCP: "$content" } } },
    { $sort: { contentLength: -1 } },
    { $limit: 5 }
]);

// count the number of blogs per category
db.blogs.aggregate([
    { $group: { _id: "$category", totalBlogs: { $sum: 1 } } },
    { $sort: { totalBlogs: -1 } } 
]);


