import {useDispatch} from "react-redux";
import {asyncFunctionAction} from "../../redux/actions";

import (useDispatch)

const AboutPage = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=> dispatch(asyncFunctionAction())}>after 2s</button>
        </div>
    )
}
export default AboutPage;