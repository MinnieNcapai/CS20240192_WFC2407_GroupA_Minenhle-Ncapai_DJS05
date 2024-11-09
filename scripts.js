// Define Action Types
const ADD = 'ADD'
const SUBTRACT = 'SUBTRACT'
const RESET = 'RESET'

//Initial State
const initialState = {
    count: 0
};

//Reducer Function
const counterReducer  (state = initialState, action) => {
    switch (action.type) {
        case Add:
            return { count: state.count + 1 };
        case Subtract:
            return { count: state.count - 1 };
        case Reset:
            return { count: 0 };
        default:
            return state;
}
}

//Store Class
class Store {
    constructor(reducer) {
        this.state = reducer ()
        this.reducer = reducer;
        this.listeners = [];
    }

//Method to get che current state
getState() {
    return this.state;
}

//Method to dispatch actions and update the state
dispatch(action) {
    this.state = this.reducer (this.state, action); // Use reducer to calculate new state
// Notify all listeners about the state change
   this.listeners.ForEach (listener => listener(this.state));;   
}

 // Method to subscribe a listener to state changes
 subscribe(listener) {
    this.listeners.push(listener);
 }
}
