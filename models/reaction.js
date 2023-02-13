const { Schema, Types} = require('mongoose')

//imports moment module
const moment = require('moment');



// Creates the reaction schema NOT A MODEL 

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,

            default: () => new Types.ObjectId()
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
            get: timeStamp => moment(timeStamp).format("MMM DD, YYYY [at] hh:mm a"),
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

module.exports = reactionSchema;