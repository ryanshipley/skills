import { useState } from "react";
import "./App.css";

export default function App() {
  const [state, setState] = useState({
    skills: [{ skill: "JavaScript", level: "4" }],
    skill: "JS",
    level: "3"
  });

  function handleSubmit() {
    alert("ADD SKILL CLICKED");
  }

// Add the onChange event handler
function handleChange(e) {
  /* 
   the setter function 
   allows us to access previous state 
   and override it with new values 
  */
   setState({
     ...state,
     skill: e.target.value
   });
 };

  return (
    <section>
      <h2>DEV SKILLS</h2>
      <hr />
      {state.skills.map((s) => (
        <article key={s.skill}>
          <div>{s.skill}</div> <div>{s.level}</div>
        </article>
      ))}
      <hr />
      <form>
        <label>
          <span>SKILL</span>
          <input name="skill" value={state.skill}
          onChange={handleChange}/>
        </label>
        <label>
          <span>LEVEL</span>
          <select name="level" value={state.level}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <button>ADD SKILL</button>
      </form>
    </section>
  );
}