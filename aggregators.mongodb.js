use("blogverse");

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

// find the most active commenters 
db.blogs.aggregate([
    { $unwind: "$comments" },
    { $group: { _id: "$comments.author", totalComments: { $sum: 1 } } },
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