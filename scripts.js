// Define Action Types
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const RESET = 'RESET';

//Initial State
const initialState = {
    count: 0
};

//Reducer Function
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return { count: state.count + 1 };
        case SUBTRACT:
            return { count: state.count - 1 };
        case RESET:
            return { count: 0 };
        default:
            return state;
}
}

//Store Class
class Store {
    constructor(reducer) {
        this.state = reducer (undefined, {});
        this.reducer = reducer;
        this.listeners = [];
    }

//Method to get the current state
getState() {
    return this.state;
}

//Method to dispatch actions and update the state
dispatch(action) {
    this.state = this.reducer(this.state, action); // Use reducer to calculate new state
// Notify all listeners about the state change
   this.listeners.forEach(listener => listener(this.state));;   
}

 // Method to subscribe a listener to state changes
 subscribe(listener) {
    this.listeners.push(listener);
 }
}

// Create store with reducer
const store = new Store(counterReducer);

// Subscribe to log state changes in the console
store.subscribe(state => console.log ("State has been updated:", state));

// SCENARIO 1: Initial State Verification
console.log ("Verifying initial state:", store.getState());

// SCENARIO 2: Incrementing the Counter
store.dispatch ({ type:  ADD }); // First Add
store.dispatch ({ type: ADD });  // Second Add
console.log("After performing Add action:", store.getState());

// SCENARIO 3: Decrementing the Counter
store.dispatch({ type: SUBTRACT }); // Subtract action
console.log("After performing Subtract action:", store.getState());

// SCENARIO 4: Resetting the Counter
store.dispatch({ type: RESET }); // Reset action
console.log("After performing Reset action:", store.getState());