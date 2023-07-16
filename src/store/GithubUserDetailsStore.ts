import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "./RootStore";
import axios from "axios";

export interface IUserDetails {
    id: number;
    name: string;
    url: string;
    location: string;
}

export class GithubUserDetailsStore {
    userDetails: IUserDetails = {} as IUserDetails;
    rootStore: IRootStore;

    constructor(rootStore: IRootStore) {
        makeObservable(this, {
            userDetails: observable,
            fetchGithubUserDetails: action,
            getUserDetails: computed,
        });
        this.rootStore = rootStore;
    }

    async fetchGithubUserDetails(userName: string) {
        const response = await axios.get(`https://api.github.com/users/${userName}`);
        this.userDetails = response?.data;
    }

    get getUserDetails() {
        return this.userDetails;
    }
}


