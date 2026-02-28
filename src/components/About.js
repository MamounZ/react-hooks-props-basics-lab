import React from "react";
import Links from "./Links"

function BioCondition(props){
  if (props.bio && props.bio != "")
    return (
      <p>{props.bio}</p>
  )
  return null
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <BioCondition bio={props.bio} />
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;
