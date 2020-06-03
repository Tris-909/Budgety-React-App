import  * as actionTypes from '../action/actionsTypes';

const initialState = {
    IncList: [],
    ExpList: [],
    TotalInc: 0,
    TotalExp: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(actionTypes.ADD_PERSON_PLUS):
            let newItemOfPlus = action.newItem;
            let newArrayOfPlus = [...state.IncList];
            newArrayOfPlus.push(newItemOfPlus);
            let totalPlus = 0;
            newArrayOfPlus.map(item => {
                let curValue = parseInt(item.val);
                return totalPlus += curValue;
            });
            return {
                ...state,
                IncList: [].concat(newArrayOfPlus),
                TotalInc: totalPlus 
            }
        case(actionTypes.ADD_PERSON_MINUS):
            let newItemOfMinus = action.newItem;
            let newArrayOfMinus = [...state.ExpList];
            newArrayOfMinus.push(newItemOfMinus);
            let totalMinus =  0;
            newArrayOfMinus.map(item => {
                let curValue = parseInt(item.val);
                return totalMinus += curValue;
            })
            return {
                ...state,
                ExpList: [].concat(newArrayOfMinus),
                TotalExp: totalMinus
            }
        case(actionTypes.REMOVE_PERSON_PLUS):
            return {
                ...state,
                IncList: state.IncList.filter(inc => inc.id !== action.id)
            }
        case(actionTypes.REMOVE_PERSON_MINUS):
            return {
                ...state,
                ExpList: state.ExpList.filter(exp => exp.id !== action.id)
            }
        default: 
            return state
    }
}

export default reducer;