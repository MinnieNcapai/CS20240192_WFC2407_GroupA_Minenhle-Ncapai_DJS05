// Define Action Types
const ADD = 'ADD'; // Action type for incrementing the counter
const SUBTRACT = 'SUBTRACT'; // Action type for decrementing the counter
const RESET = 'RESET'; // Action type for resetting the counter

//Initial State
const initialState = {
    count: 0 // The initial value of the counter is set to 0
};

//Reducer Function: Handles state transitions based on the action type
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return { count: state.count + 1 };  // Increment the counter
        case SUBTRACT:
            return { count: state.count - 1 }; // Decrement the counter
        case RESET:
            return { count: 0 };  // Reset the counter to 0
        default:
            return state; // Return the current state if no action matches
}
}

//Store Class: Manages state and dispatching actions
class Store {
    constructor(reducer) {
     // Initialize store with the reducer and initial state
        this.state = reducer (undefined, { type: 'INIT' }); //Explicitly set initial state
        this.reducer = reducer;
        this.listeners = []; // Listeners to notify about state changes
    }

//Method to get the current state of the store
getState() {
    return this.state; // Return the current state
}

//Method to dispatch actions and update the state
dispatch(action) {
// Use reducer to calculate the new state based on the action
    this.state = this.reducer(this.state, action); // Use reducer to calculate new state
// Notify all listeners about the state change
   this.listeners.forEach(listener => listener(this.state));;   
}

 // Method to subscribe a listener to state changes
 subscribe(listener) {
    this.listeners.push(listener);  // Add listener to the listeners array
 }
}

//  Create store with the counterReducer
const store = new Store(counterReducer);

// Subscribe to log state changes in the console whenever the state updates
store.subscribe(state => console.log ("State has been updated:", state));

// SCENARIO 1: Initial State Verification
console.log ("Verifying initial state:", store.getState()); // Log the initial state

// SCENARIO 2: Incrementing the Counter
store.dispatch ({ type:  ADD }); // Dispatch ADD action (increment counter)
store.dispatch ({ type: ADD }); // Dispatch ADD action again (increment counter)
console.log("After performing Add action:", store.getState()); // Log state after ADD actions

// SCENARIO 3: Decrementing the Counter
store.dispatch({ type: SUBTRACT }); // Dispatch SUBTRACT action (decrement counter)
console.log("After performing Subtract action:", store.getState()); // Log state after SUBTRACT action

// SCENARIO 4: Resetting the Counter
store.dispatch({ type: RESET }); // Dispatch RESET action (reset counter to 0)
console.log("After performing Reset action:", store.getState());  // Log state after RESET action