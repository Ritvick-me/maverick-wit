import { Schema, model, models, type Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  mobile: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  gender: string;
  dob: Date;
}

const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    middleName: {
      type: String,
      required: false,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export default models.User || model<IUser>("User", userSchema);
