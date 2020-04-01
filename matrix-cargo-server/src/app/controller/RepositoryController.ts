import { Request, Response } from "express";
import { RepositoryService } from "../domain/service/RepositoryService";

const repositoryService = new RepositoryService();

class RepositoryController {
    async list (request: Request, response: Response): Promise<Response> {
        const query = request.query;
        const repositories = await repositoryService.find(query.page, query.perPage, query.language);
      return response.json(repositories);
    }
}

export default new RepositoryController();
