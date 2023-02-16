const connection = require('../config/connection');
const { User, Thought,reactionSchema } = require('../models');


connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // Drop existing courses
    await Thought.deleteMany({});

    // Drop existing students
    await User.deleteMany({});

    
    const users = [
        {
            username: "Leo Tolstoy",
            email: "LeoTolstoy@gmail.com"
        },
        {
            username: "Virginia Woolf",
            email: "VirginiaW@gmail.com"
        },
    ]

    // Add students to the collection and await the results
    

    const thoughts = [
        {
            thoughtText: "God is the same everywhere. ...",
            username: "Leo Tolstoy",
            
        },
        {
            thoughtText: "You cannot find peace by avoiding life. ...",
            username: "Virginia Woolf"
        }
    ]

    await User.collection.insertMany(users);

    await Thought.collection.insertMany(thoughts);

   
    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});
