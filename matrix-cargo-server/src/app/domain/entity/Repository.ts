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
    owner: IGitHubRepositoryOwner;

    constructor(data: IGitHubRepository | any) {
        this.id = data.id;
        this.name = data.name;
        this.fullName = data.fullName || data.full_name;
        this.description = data.description;
        this.url = data.url;
        this.gitUrl = data.gitUrl || data.git_url;
        this.sshUrl = data.sshUrl || data.ssh_url;
        this.createdAt = data.createdAt || data.created_at;
        this.updatedAt = data.updatedAt || data.updated_at;
        this.pushedAt = data.pushedAt || data.pushed_at;
        this.language = data.language;
        this.openIssuesCount = data.openIssuesCount || data.open_issues_count;
        this.openIssues = data.openIssues || data.open_issues;
        this.watchers = data.watchers;
        this.forks = data.forks;
        this.owner = new RepositoryOwner(data.owner)
    }

}