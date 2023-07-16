import { CountStore } from "./CountStore";
import { GithubUserDetailsStore } from "./GithubUserDetailsStore";

export interface IRootStore {
    countStore: CountStore;
}

export class RootStore implements IRootStore {
    countStore: CountStore;
    githubUserDetails: GithubUserDetailsStore;

    constructor() {
        this.countStore = new CountStore(this);
        this.githubUserDetails = new GithubUserDetailsStore(this);
    }
}