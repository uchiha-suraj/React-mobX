import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "./RootStore";

export class CountStore {
    count: number = 1;
    rootStore: IRootStore;

    constructor(rootStore: IRootStore) {
        makeObservable(this, {
            count: observable,
            increment: action,
            decrement: action,
            getCountValue: computed,
        });
        this.rootStore = rootStore;
    }

    increment = () => {
        this.count++;
    }

    decrement = () => {
        this.count--;
    }

    get getCountValue() {
        return this.count;
    }
}