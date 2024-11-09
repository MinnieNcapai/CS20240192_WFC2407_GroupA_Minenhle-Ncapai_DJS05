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

