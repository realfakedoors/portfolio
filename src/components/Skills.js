import React from "react";

import ReactLogo from "../assets/tech_logos/react.png";
import RubyLogo from "../assets/tech_logos/ruby.png";
import RailsLogo from "../assets/tech_logos/rails.png";
import JsLogo from "../assets/tech_logos/js.png";
import HtmlLogo from "../assets/tech_logos/html.png";
import CssLogo from "../assets/tech_logos/css.png";

const Skills = () => {
  return (
    <div className={"skills"}>
      <div className={"skill-icons"}>
        <a
          href={"https://reactjs.org/"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <img src={ReactLogo} alt={"react"} />
        </a>
        <a
          href={"https://ruby-doc.org/"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <img src={RubyLogo} alt={"ruby"} />
        </a>
        <a
          href={"https://guides.rubyonrails.org/index.html"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <img src={RailsLogo} alt={"rails"} />
        </a>
        <a
          href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <img src={JsLogo} alt={"javascript"} />
        </a>
        <a
          href={"https://developer.mozilla.org/en-US/docs/Web/HTML"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <img src={HtmlLogo} alt={"html"} />
        </a>
        <a
          href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <img src={CssLogo} alt={"css"} />
        </a>
      </div>
    </div>
  );
};

export default Skills;
