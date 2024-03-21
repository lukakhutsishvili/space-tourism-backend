import { Request, Response } from "express";
import Technology from "../models/technology.js";

const getTechnology = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    const existingdestination = await Technology.findOne({ name });
    res.status(200).json(existingdestination);
  } catch (error) {
    console.log(error);
  }
};

export default getTechnology;
