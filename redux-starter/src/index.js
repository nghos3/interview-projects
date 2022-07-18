import store from "./store";

const unsubscribe = store.subscribe(() => {
    console.log('Store has Changes!!', store.getState());
})
store.dispatch({
    type: "bugAdded",
    payload: {
        description:  "Bug1"
    }
});


// unsubscribe();  subscription creates memory leak 
store.dispatch({
    type: "bugRemoved",
    payload: {
        id:  1
    }
})

console.log(store.getState());