const mongooose = require("mongoose");
const schema = mongoose.Schema;

const tweetSchema = schema({
  content: {
    type: String,
    maxlength: 140,
    minlength: 1,
    required: true,
  },
});

const Tweet = mongooose.model("tweet", tweetSchema);

module.exports = Tweet;
