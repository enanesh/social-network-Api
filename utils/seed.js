const connection = require('../config/connection');
const { User, Thought } = require('../models');
const moment = require('moment');
const { get } = require('../models/reaction');

connection.on('error', (err) => err);



// connection.once('open', async () => {
//     console.log('connected');

//     // Drop existing courses
//     await User.deleteMany({});

//     // Drop existing students
//     await Thought.deleteMany({});

//     let reaction = {
//         reactionBody: 'I like it ',
//         username: 'Monkeylina',
        
        
//     }

//     let thought = {
//         thoughtText: 'Hola a todos',
//         reactions: [reaction],
//         username: 'Monkeylino',
       
//     }

//     let users = [
//         {
//             username: 'Monkeylino',
//             email: 'monkeylino@gmail.com',
//             thoughts:[thought]

//         },
//         {
//             username: 'Monkeylina',
//             email: 'monkeylina@gmail.com',

//         }
//     ]

//     let shirgo = {
//         username: 'Shirgo',
//         email: 'shirgo@bobo.com',
//         friends: [users[1]]
//         }

    
    
//     await Thought.collection.insertOne(
//         thought
//     );
//     await User.collection.insertMany(
//         users
//     );
//     await User.collection.insertOne(
//         shirgo
//     );
  


//     console.info('Seeding complete! 🌱');
//     process.exit(0);
// });
