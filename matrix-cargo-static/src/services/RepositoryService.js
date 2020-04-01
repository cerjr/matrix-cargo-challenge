import environment from "../enviroment";
import {Repository} from "../models/Repository";

const RepositoryService = {
    find: (page, perPage = 10, language) => {
        return fetch(`${environment.baseApiUrl}/repository?page=${page}&perPage=${perPage}&language=${language}`)
            .then(response => response.json())
            .then(json => json.map(data => new Repository(data)))
    }
};

export default RepositoryService;