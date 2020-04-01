export interface IGitHubRepositoryOwner {
    id: number,
    login: string,
    avatarUrl: string,
}

export interface IGitHubRepository {
    id: number;
    name: string;
    fullName: string;
    description: string;
    url: string;
    gitUrl: string;
    sshUrl: string;
    createdAt: string;
    updatedAt: string;
    pushedAt: string;
    language: string;
    openIssuesCount: number;
    openIssues: number;
    watchers: number;
    forks: number;
    owner: IGitHubRepositoryOwner;
}

export class RepositoryOwner implements IGitHubRepositoryOwner {
    id: number;
    login: string;
    avatarUrl: string;

    constructor(data: IGitHubRepositoryOwner | any) {
        this.id = data.id;
        this.login = data.login;
        this.avatarUrl = data.avatarUrl || data.avatar_url;
    }

}

export class Repository implements IGitHubRepository {
    id: number;
    name: string;
    fullName: string;
    description: string;
    url: string;
    gitUrl: string;
    sshUrl: string;
    createdAt: string;
    updatedAt: string;
    pushedAt: string;
    language: string;
    openIssuesCount: number;
    openIssues: number;
    watchers: number;
    forks: number;

    constructor(data: IGitHubRepository) {
        this.id = data.id;
        this.name = data.name;
        this.fullName = data.fullName;
        this.description = data.description;
        this.url = data.url;
        this.gitUrl = data.gitUrl;
        this.sshUrl = data.sshUrl;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
        this.pushedAt = data.pushedAt;
        this.language = data.language;
        this.openIssuesCount = data.openIssuesCount;
        this.openIssues = data.openIssues;
        this.watchers = data.watchers;
        this.forks = data.forks;
        this.owner = new RepositoryOwner(data.owner)
    }

}