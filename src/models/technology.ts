import { Schema, model } from "mongoose";
import { crewtype } from "type";

const { String } = Schema.Types;

const technologySchema = new Schema<crewtype>({
  name: {
    type: String,
    require: true,
  },
  images: {
    png: {
      type: String,
      require: true,
    },
    webp: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
});

const Technology = model("Technology", technologySchema);

export default Technology;
