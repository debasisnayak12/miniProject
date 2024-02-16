import { useState } from "react";

const Input = ({addSkill}) => {
    const [value, setValue] = useState("");

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const onEnter = (e) => {
        const skill = value.trim();
        if(e.key === 'Enter' && skill){
            addSkill(skill);
            setValue("");
        }
    }

    return (
        <input 
           className="input"
           placeholder="Enter Skill"
           onChange={onChangeInput}
           value={value}
           onKeyUp={onEnter}
        />
    )
}
export default Input;