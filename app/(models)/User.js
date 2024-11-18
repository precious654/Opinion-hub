import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://odukwechiemeka:" +
    process.env.MONGODB_PWD +
    "@opinion-hub.otxx2.mongodb.net/?retryWrites=true&w=majority&appName=opinion-hub"
);
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    // posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    // followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    // following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
