import getCrew from "../controllers/crew-controller.js"; 
import getdestination from "../controllers/destination-controller.js";
import getTechnology from "../controllers/technology.js";
import express from "express";

const Router = express.Router();

Router.get("/destination/:name", getdestination);
Router.get("/crew/:name", getCrew);
Router.get("/technology/:name", getTechnology);

export default Router;
