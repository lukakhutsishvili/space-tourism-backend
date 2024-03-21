import mongoose from "mongoose";

const connect = () => {
  try {
    const Url = "mongodb+srv://lukakhutsishvili777:barcelona@cluster0.d9lbycm.mongodb.net/space_tourism";
    mongoose.connect(Url);
  } catch (error) {
    console.log(error);
  }
};

export default connect;
