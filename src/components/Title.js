import React from "react";

const Title = () => {
  return (
    <div className={"portfolio-heading"}>
      <h1 className={"title-font site-title uppercase"}>
        <span className={"dev-name"}>{"AndyHolt"}</span>
        <span className={"site-tld"}>{".dev"}</span>
      </h1>
      <h4 className={"occupation title-font"}>{"Full-Stack Web Developer"}</h4>
    </div>
  );
};

export default Title;
