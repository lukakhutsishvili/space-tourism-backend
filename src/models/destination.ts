import { Schema, model } from "mongoose";
import { destiniationtype } from "type";

const { String } = Schema.Types;

const destiniationSchema = new Schema<destiniationtype>({
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
  },
  description: {
    type: String,
    require: true,
  },
  distance: {
    type: String,
    require: true,
  },
  travel: {
    type: String,
    require: true,
  },
});

const Destination = model("Destination", destiniationSchema);

export default Destination;
