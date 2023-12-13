import mongoose from "mongoose";

const { Schema } = mongoose;

const serieSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      minlength: 6,
      maxlength: 32,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//If the User collection does not exist create a new one.
export default mongoose.models.Series || mongoose.model("Series", serieSchema);