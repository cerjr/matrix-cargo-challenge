import { Router } from "express";
import RepositoryController from "../controller/RepositoryController";

const routes = Router();
routes.get("/repository", RepositoryController.list);

export default routes;