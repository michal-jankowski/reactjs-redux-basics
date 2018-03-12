const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD":
            // state = state + action.payload; => ZŁE PODEJŚCIE do zmiany stanu (muttable way - nadpisuje stary stan)!

            state = { // new JS object
                ...state, // daj mi wszystkie propertiesy z przekazanego do reducera state object, nawet jeżeli nie będę ich wszystkich zmieniał
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case "SUBTRACT":
            state = { // new JS object
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
    }
    return state; // new state of our application
}

export default mathReducer;
