import React from "react";
import { store } from '../src/store';
import  setTechnology  from '../src/actions';

const ButtonGroup = ({ technologies }) => (
  <div style={{width:'20%'}}>
    {technologies.map((tech, i) => (
      <button 
        data-tech={tech}
        key={`btn-${i}`}
        className="hello-btn"
        onClick={dispatchBtnAction}
      >
        {tech}
      </button>
    ))}
  </div>
);

function dispatchBtnAction(e) {
    const tech = e.target.dataset.tech;
    store.dispatch(setTechnology(tech));
  }

export default ButtonGroup;