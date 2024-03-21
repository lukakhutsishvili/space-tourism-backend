import { Schema, model } from "mongoose";
import { crewtype } from "type";

const { String } = Schema.Types;

const crewSchema = new Schema<crewtype>({
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
    bio: {
      type: String,
      require: true,
    },
  },
});

const Crew = model("Crew", crewSchema);

export default Crew;
