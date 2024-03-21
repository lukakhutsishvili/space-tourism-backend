import mongoose from "mongoose";

const connect = () => {
  try {
    const Url = process.env.MONGO_URL;
    mongoose.connect(Url || "");
  } catch (error) {
    console.log(error);
  }
};

export default connect;
