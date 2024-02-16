import { useState } from "react";
import Input from "./Input";
import Chip from "./Chip";
import "./skills.css"
import "material-icons/iconfont/material-icons.css";

const App = () => {
   const [skills, setSkills] = useState([]);

  const addSkill = (newSkill) =>{
      setSkills([...skills,newSkill])
  }
  
  const deleteSkill = (skillTobeDeleted) => {
    const remainingSkills = skills.filter((skill)=> skill !== skillTobeDeleted);
    setSkills(remainingSkills);
  }

  return (
    <div>
      <Input addSkill={addSkill}/>
      <div className="skills-container"> 
      {
        skills.map((skill,index) => <Chip deleteSkill={deleteSkill} key={index} skill={skill}/>)
      }
      </div>
    </div>
  );
}

export default App;
