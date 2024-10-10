import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        num1: '',
        num2: '',
        result: null,
    },
    reducers: {
        setNum1: (state, action) => {
            state.num1 = action.payload;
        },
        setNum2: (state, action) => {
            state.num2 = action.payload;
        },
        calculate: (state, action) => {
            const { operation } = action.payload;
            const num1 = parseFloat(state.num1);
            const num2 = parseFloat(state.num2);

            if (operation === 'ADD') {
                state.result = num1 + num2;
            } else if (operation === 'SUBTRACT') {
                state.result = num1 - num2;
            } else if (operation === 'MULTIPLY') {
                state.result = num1 * num2;
            } else if (operation === 'DIVIDE') {
                state.result = num2 !== 0 ? num1 / num2 : 'Error';
            }
        },
        reset: (state) => {
            state.num1 = '';
            state.num2 = '';
            state.result = null;
        }
    },
});

export const { setNum1, setNum2, calculate, reset } = calculatorSlice.actions;
export default calculatorSlice.reducer;
