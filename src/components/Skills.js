import React from "react";

const Skills = () => {
  return (
    <div className={"skills"}>
      <div className={"skill-icons"}>
        <a
          href={"https://reactjs.org/"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <img src={"/tech_icons/react.png"} alt={"react"} />
        </a>
        <a
          href={"https://ruby-doc.org/"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <img src={"/tech_icons/ruby.png"} alt={"ruby"} />
        </a>
        <a
          href={"https://guides.rubyonrails.org/index.html"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <img src={"/tech_icons/rails.png"} alt={"rails"} />
        </a>
        <a
          href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <img src={"/tech_icons/js.png"} alt={"javascript"} />
        </a>
        <a
          href={"https://developer.mozilla.org/en-US/docs/Web/HTML"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <img src={"/tech_icons/html.png"} alt={"html"} />
        </a>
        <a
          href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <img src={"/tech_icons/css.png"} alt={"css"} />
        </a>
      </div>
    </div>
  );
};

export default Skills;
