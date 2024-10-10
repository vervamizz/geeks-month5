import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNum1, setNum2, calculate, reset } from './redux/calculatorSlice';

const Calculator = () => {
    const dispatch = useDispatch();
    const num1 = useSelector((state) => state.calculator.num1);
    const num2 = useSelector((state) => state.calculator.num2);
    const result = useSelector((state) => state.calculator.result);

    const handleCalculate = (operation) => {
        dispatch(calculate({ operation }));
    };

    return (
        <div>
            <h1>Калькулятор</h1>
            <input
                type="number"
                value={num1}
                onChange={(e) => dispatch(setNum1(e.target.value))}
                placeholder="Первое число"
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => dispatch(setNum2(e.target.value))}
                placeholder="Второе число"
            />
            <div>
                <button onClick={() => handleCalculate('ADD')}>+</button>
                <button onClick={() => handleCalculate('SUBTRACT')}>-</button>
                <button onClick={() => handleCalculate('MULTIPLY')}>*</button>
                <button onClick={() => handleCalculate('DIVIDE')}>/</button>
                <button onClick={() => dispatch(reset())}>Сброс</button>
            </div>
            <h2>Результат: {result}</h2>
        </div>
    );
};

export default Calculator;
