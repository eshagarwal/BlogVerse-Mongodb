use("blogverse");

// inserting comments on blogs

// Blog: "The Rise of AI in Everyday Life"
db.blogs.updateOne(
    { _id: ObjectId("67d6ded45cf03349e6a30bf5") },
    { $push: { comments: { author: "David Clark", text: "AI is indeed revolutionizing industries! Excited to see where this goes." } } }
  );
  db.blogs.updateOne(
    { _id: ObjectId("67d6ded45cf03349e6a30bf5") },
    { $push: { comments: { author: "Sarah Adams", text: "Great article! AI in healthcare is particularly fascinating." } } }
  );
  
  // Blog: "Healthy Eating Habits"
  db.blogs.updateOne(
    { _id: ObjectId("67d6ded45cf03349e6a30bf6") },
    { $push: { comments: { author: "Chris Walker", text: "I love this! Eating healthy is a lifestyle, not just a temporary change." } } }
  );
  db.blogs.updateOne(
    { _id: ObjectId("67d6ded45cf03349e6a30bf6") },
    { $push: { comments: { author: "Liam Johnson", text: "Can you recommend some good meal-prepping strategies?" } } }
  );
  
  // Blog: "Exploring the Beauty of Paris"
  db.blogs.updateOne(
    { _id: ObjectId("67d6ded45cf03349e6a30bf7") },
    { $push: { comments: { author: "Emma Wilson", text: "Paris is my dream destination! Which season is best for visiting?" } } }
  );
  db.blogs.updateOne(
    { _id: ObjectId("67d6ded45cf03349e6a30bf7") },
    { $push: { comments: { author: "Oliver Smith", text: "Great read! Don't forget to visit Montmartre." } } }
  );
  db.blogs.updateOne(
    { _id: ObjectId("67d6ded45cf03349e6a30bf7") },
    { $push: { comments: { author: "Sophia Brown", text: "I just came back from Paris, and this blog is spot on!" } } }
  );
  
  // Blog: "Investing 101: A Beginner’s Guide"
  db.blogs.updateOne(
    { _id: ObjectId("67d6ded45cf03349e6a30bf8") },
    { $push: { comments: { author: "Nathan Green", text: "Solid advice! Investing early is the best decision one can make." } } }
  );
  db.blogs.updateOne(
    { _id: ObjectId("67d6ded45cf03349e6a30bf8") },
    { $push: { comments: { author: "Charlotte Miller", text: "Would love a follow-up article on ETFs and mutual funds!" } } }
  );
  
  // Blog: "Understanding Mental Health"
  db.blogs.updateOne(
    { _id: ObjectId("67d6ded45cf03349e6a30bf9") },
    { $push: { comments: { author: "Mason Scott", text: "Mental health discussions should be normalized. Thanks for sharing this." } } }
  );
  db.blogs.updateOne(
    { _id: ObjectId("67d6ded45cf03349e6a30bf9") },
    { $push: { comments: { author: "Amelia King", text: "What are some ways to manage stress better?" } } }
  );
  
  // Blog: "The Evolution of Web Development"
  db.blogs.updateOne(
    { _id: ObjectId("67d6ded45cf03349e6a30bfa") },
    { $push: { comments: { author: "Ethan Harris", text: "Frontend frameworks are evolving so fast! Which one do you prefer?" } } }
  );
  
  // Blog: "Solo Traveling: Pros and Cons"
  db.blogs.updateOne(
    { _id: ObjectId("67d6ded45cf03349e6a30bfb") },
    { $push: { comments: { author: "Isabella Moore", text: "Solo travel is so liberating! It teaches you a lot about yourself." } } }
  );
  db.blogs.updateOne(
    { _id: ObjectId("67d6ded45cf03349e6a30bfb") },
    { $push: { comments: { author: "Lucas White", text: "Do you have tips for staying safe while traveling alone?" } } }
  );
  
  // Blog: "Budgeting for Young Adults"
  db.blogs.updateOne(
    { _id: ObjectId("67d6ded45cf03349e6a30bfc") },
    { $push: { comments: { author: "Sophia Carter", text: "Budgeting is key! I use the 50/30/20 rule and it works great." } } }
  );
  db.blogs.updateOne(
    { _id: ObjectId("67d6ded45cf03349e6a30bfc") },
    { $push: { comments: { author: "William Thomas", text: "What apps do you recommend for managing expenses?" } } }
  );
  