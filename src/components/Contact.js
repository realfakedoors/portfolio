import React from "react";

import mailIcon from "../assets/mail.svg";

const Contact = () => {
  return (
    <div className={"contact"}>
      <a
        className={"email-button button is-large is-link"}
        href={"mailto:andy@andyholt.dev"}
      >
        Drop Me A Line
        <img className={"mail-icon"} src={mailIcon} alt={"email me"} />
      </a>
    </div>
  );
};

export default Contact;
