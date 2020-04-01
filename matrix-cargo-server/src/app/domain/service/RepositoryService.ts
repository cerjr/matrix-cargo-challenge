import { Repository } from "../entity/Repository";
import fetch from "node-fetch"

export class RepositoryService {

    async find(page: number, perPage: number = 10, language: string ): Promise<Repository[]> {
        let endpoint = `https://api.github.com/search/repositories?page=${page}&per_page=${perPage}&order=desc&q=language:${language}`;

        const response = await fetch(endpoint);
        const json = await response.json();
        return json.items.map((item:any) => new Repository(item));
    }

}