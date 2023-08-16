## React Project with mobX for state management.

1.  `counter App`
2.  `Github user data fetching`

### Flow: 
```
1. Create a file inside store folder and use observable, action, computed, makeObservable from mobX.
    a. observable: states we need to track or observe.
    b. action: events or functions, where we'll perform some operations.
    c. computed: the returned value we get after the end of the computation.
2. Inside store we need to create another file name rootStore, where we'll export our different store files through constructor.
3. index.ts to export our rootStore from store folder.
4. need to make a custom hook where we'll be using useContext and export our rootStore.
5. now we can import our custom hook in our component and destructure that rootstore and use it.
```
