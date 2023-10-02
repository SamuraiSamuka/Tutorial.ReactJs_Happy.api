import { Router } from "express";
import OrphanaesController from "./controllers/OrphanaesController";

const routes = Router();

// index, show, create, update, delete

routes.get("/orphanages", OrphanaesController.all);
routes.get("/orphanages/:id", OrphanaesController.one);
routes.post("/orphanages", OrphanaesController.create);
routes.delete("/orphanages/:id", OrphanaesController.delete);

export default routes;
