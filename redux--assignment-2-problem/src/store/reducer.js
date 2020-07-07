import * as actionTypes from "./actions";

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.personData.name,
                age: action.personData.age
            }
            const newPersonList = [...state.persons, newPerson];
            return {
                persons: newPersonList
            };
        case actionTypes.DELETE:
            return { persons: state.persons.filter(person => person.id !== action.personId)};
        default:
            return state;
    }
}

export default reducer;