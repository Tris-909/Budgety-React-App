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
                let curValue = parseFloat(item.val);
                return totalPlus += curValue;
            });
            let ShortNumberPlus = Math.round(totalPlus * 1000)/1000;
            // Add Items in LocalStorage so data won't be lost the next time you open the app
            window.localStorage.setItem('IncomeList', JSON.stringify([].concat(newArrayOfPlus)));
            window.localStorage.setItem('IncomeTotal', ShortNumberPlus);
            return {
                ...state,
                IncList: [].concat(newArrayOfPlus),
                TotalInc: ShortNumberPlus 
            }
        case(actionTypes.ADD_PERSON_MINUS):
            let newItemOfMinus = action.newItem;
            let newArrayOfMinus = [...state.ExpList];
            newArrayOfMinus.push(newItemOfMinus);
            let totalMinus =  0;
            newArrayOfMinus.map(item => {
                let curValue = parseFloat(item.val);
                return totalMinus += curValue;
            })
            let ShortNumberMinus = Math.round(totalMinus * 1000)/1000;
            // Add Items in LocalStorage so data won't be lost the next time you open the app
            window.localStorage.setItem('ExpenseList', JSON.stringify([].concat(newArrayOfMinus)));
            window.localStorage.setItem('ExpenseTotal', ShortNumberMinus);
            return {
                ...state,
                ExpList: [].concat(newArrayOfMinus),
                TotalExp: ShortNumberMinus
            }
        case(actionTypes.REMOVE_PERSON_PLUS):
            let newArray = state.IncList.filter(inc => inc.id !== action.id);
            let UpdateTotalPlus = 0;
            newArray.map(item => {
                let curValue = parseFloat(item.val);
                return UpdateTotalPlus += curValue;
            });
            let UpdateShortNumberPlus = Math.round(UpdateTotalPlus * 1000)/1000;
            // Add Items in LocalStorage so data won't be lost the next time you open the app
            window.localStorage.setItem('IncomeList', JSON.stringify(newArray));
            window.localStorage.setItem('IncomeTotal', UpdateShortNumberPlus);
            return {
                ...state,
                IncList: newArray,
                TotalInc: UpdateShortNumberPlus
            }
        case(actionTypes.REMOVE_PERSON_MINUS):
            let MinusDeleteArray =  state.ExpList.filter(exp => exp.id !== action.id);
            let UpdateTotalMinus = 0;
            MinusDeleteArray.map(item => {
                let curValue = parseFloat(item.val);
                return UpdateTotalMinus += curValue;
            });
            let UpdateShortNumberMinus = Math.round(UpdateTotalMinus * 1000)/1000;
            // Add Items in LocalStorage so data won't be lost the next time you open the app
            window.localStorage.setItem('ExpenseList', JSON.stringify(MinusDeleteArray));
            window.localStorage.setItem('ExpenseTotal', UpdateShortNumberMinus);
            return {
                ...state,
                ExpList: MinusDeleteArray,
                TotalExp: UpdateShortNumberMinus
            }
        default: 
            return state
    }
}

export default reducer;