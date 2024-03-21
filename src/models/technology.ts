import { Schema, model } from "mongoose";
import { technologytype } from "type";

const { String } = Schema.Types;

const technologySchema = new Schema<technologytype>({
  name: {
    type: String,
    require: true,
  },
  images: {
    portrait: {
      type: String,
      require: true,
    },
    landscape: {
      type: String,
      require: true,
    },
  },
  description: {
    type: String,
    require: true,
  },
});

const Technology = model("Technology", technologySchema);

export default Technology;
