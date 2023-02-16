const { Schema, model, Types } = require('mongoose');

const reactionSchema = require("./reaction");

const moment = require('moment')

const thoughtSchema = new Schema(

    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a")
            
        },
        //The user that created this thought
        username: {
            type: String,
            required: true,
        },

        //These are like replies
        reactions: [reactionSchema],

    },
    {
        
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
         
    }
);

// Gets total count of reactions
thoughtSchema.virtual('reactionCount')
    .get(function () {
        return  this.reactions.length ;

    });        


const Thought = model('Thought', thoughtSchema);

module.exports = Thought;    