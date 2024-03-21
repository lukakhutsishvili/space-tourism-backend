import { Request, Response } from "express";
import Crew from "../models/crew.js";

const getCrew = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    const existingdestination = await Crew.findOne({ name });
    res.status(200).json(existingdestination);
  } catch (error) {
    console.log(error);
  }
};

export default getCrew;
