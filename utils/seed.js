const connection = require('../config/connection');
const { User, Thought ,reaction} = require('../models');
const moment = require('moment');
const { get } = require('../models/reaction');

connection.on('error', (err) => err);

const timestamp = moment().format("MMM DD, YYYY [at] hh:mm a");
console.log(timestamp)




connection.once('open', async () => {
    console.log('connected');

    // Drop existing courses
    await User.deleteMany({});

    // Drop existing students
    await Thought.deleteMany({});


    let users = [
        {
            username: 'Incredible',
            email: 'incredible@gmail.com',
            
           
        },
        {
            username: 'EdnaMode',
            email: 'edna@gmail.com',

        }
    ]



    let reaction = {
        reactionBody: 'I like it ',
        username: 'Incredible',
        
        
    }

    let thought = {
        thoughtText: 'Hola a todos',
        reactions: [reaction],
        username: 'Monkeylino',
        
    }
    
    // let shirgo = {
    //     username: 'Shirgo',
    //     email: 'shirgo@bobo.com',
    //     friends: [users[1]]
    //     }

    
    
    await Thought.collection.insertOne(
        thought
    );
    await User.collection.insertMany(
        users
    );
    // await User.collection.insertOne(
    //     shirgo
    // );
  


    console.info('Seeding complete! 🌱');
    process.exit(0);
});
