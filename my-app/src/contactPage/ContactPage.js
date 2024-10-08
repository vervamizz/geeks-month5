import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const ContactPage = () => {

    const [input, setInput] = useState('')
    const contactsTitle = useSelector(state => state.contactTitle)
    const dispatch = useDispatch()

    const withParams = () => {
        dispatch({
            type: "WITH_PARAMS",
            payload: 'hello geeks'
        })
    }
    const addInput = () => {
        dispatch({
            type: "WITH_PARAMS",
            payload: 'hello geeks'
        })
    }
    return (
        <div>
            <h1>{contactsTitle}</h1>
            <button onClick={withParams}>change title with params</button>
            <p>-----------------------------------</p>
            <input type="text" onChange={(event) => setInput(event.target.value)}/>
            <button >add</button>
        </div>
    );
};

export default ContactPage;