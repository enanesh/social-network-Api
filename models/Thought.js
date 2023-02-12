const { Schema, model, Types } = require("mongoose");

//imports moment module
const moment = require('moment');



//Creates the model "Thought"

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
            get: createdAt => moment(createdAt).format("MMM DD, YYYY [at] hh:mm a"),
        },

        username: {
            type: String,
            required: true,
            
        },
        reactions: [
            reactionSchema
        ],
        
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
        
       

    }
);



// Creates the reaction schema NOT A MODEL 

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId(),
        },

        reactionBody: {
            type: String,
            maxlength: 280,
        },

        username: {
            type: String,
            required: true,

        },

        createdAt: {
            type: String,
            default: Date.now,
            get: createdAt => moment(createdAt).format("MMM DD, YYYY [at] hh:mm a"),
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
);



thoughtSchema.virtual("reactionCount")
    .get(function () {
        return this.reactions.length;
    }
)



const Thought = model('Thought', thoughtSchema);

module.exports = Thought;



