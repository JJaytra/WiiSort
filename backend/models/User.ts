import mongoose from "../db";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: "User",
  },
  profilePicture: {
    type: String,
    default: "default_pfp.png",
  },
  games: {
    type: [Number],
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
