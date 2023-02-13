const { Schema, model, Types } = require("mongoose");
const reactionSchema = require("./reaction");


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
            default: Date.now(),
            get: timeStamp => moment(timeStamp).format("MMM DD, YYYY [at] hh:mm a"),
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

        timestamps: true,
        
        toJSON: {
            virtuals: true,
            getters: true,
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



