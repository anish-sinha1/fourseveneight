//Implements database schema for posts

import slugify from "slugify";
import { Schema, model, Document, ObjectId } from "mongoose";

import User from "./userModel";
import Question from "./questionModel";

export interface IPost extends Document {
  user: ObjectId;
  question?: Schema.Types.ObjectId;
  image: string;
  imageAlt: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  likes?: ObjectId[];
  rootComments?: ObjectId[];
  slug: string;
  deleted: boolean;
  date: Date;
  tags: string[];
  category: string;
  embeddedMediaFiles: string[];
}

const postSchema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  question: {
    type: Schema.Types.ObjectId,
    ref: "Question",
  },
  image: {
    type: String,
  },
  imageAlt: {
    type: String,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
  },
  author: {
    type: String,
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
  rootComments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  date: {
    type: Date,
    default: Date.now(),
  },
  deleted: {
    type: Boolean,
    default: false,
  },
  tags: [{ type: String }],
  category: { type: String },
  embeddedMediaFiles: [{ type: String }],
  slug: {
    type: String,
    unique: true,
  },
});

postSchema.pre("save", async function (next) {
  this.slug = slugify(this.title, { lower: true });
  const author = await User.findById(this.user);
  if (author) this.author = `${author.firstName} ${author.lastName}`;
  next();
});

postSchema.pre(/^find/, function (next) {
  this.populate({
    path: "rootComments",
    select: "-deleted",
    match: { deleted: false },
  });
  next();
});

const Post = model<IPost>("Post", postSchema);

export default Post;
