import { Request, Response } from "express";
import Destination from "../models/destination.js";

const getdestination = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    const existingdestination = await Destination.findOne({ name });
    res.status(200).json(existingdestination);
  } catch (error) {
    console.log(error);
  }
};

export default getdestination;
