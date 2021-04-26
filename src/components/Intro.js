import React from "react";

const Intro = () => {
  return (
    <div className={"intro-content"}>
      <p className={"content-font"}>
        {`Hey there. It’s such a relief that I’m finally here, figuring out the best way to write this to you after I've played it out in my head a thousand times. I can finally say it out loud: “I’m an engineer.” I design and build complex systems, conjuring up incantations with my keyboard like some kind of wizard. As you know, there are many unconventional paths to enlightenment, especially as a programmer, and mine was no exception.`}
      </p>
      <p className={"content-font"}>
        {`I spent twelve years behind bars. As a bartender, of course. And I got good at it. I made a comfortable living, met a lot of amazing people, figured out how to handle myself professionally, and picked up a lot of character and social finesse. But it wasn’t for me. I started to feel like I needed to adopt a bland, apathetic persona at work just to deal with high-stress situations, and after a while, battling stress with shrugs began to turn into a deep dissatisfaction.`}
      </p>
      <p className={"content-font"}>
        {`I’d always been interested in technology, so I decided to give programming a try. After poking around on reddit looking for ways to get started, I came upon a site called`}
        <a
          className={"content-link"}
          href={"https://www.theodinproject.com/paths"}
          alt={"The Odin Project"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >{`The Odin Project`}</a>
        {`. Odin was made to be a self-taught, self-paced, project-based curriculum that teaches you to become a full-stack developer, completely for free. As you can probably guess, after doing their Intro to Web Development unit and getting a taste of what it was like to actually build things with code, I was hooked.`}
      </p>
      <p className={"content-font"}>
        {`I spent my days off reading, learning, building and working my way through Odin’s many projects. Self-taught and self-disciplined, I began to adopt the ways of the old wizards like Bill Gates and Steve Wozniak, staying up all night and coding up my next feature while the world slept. And now, after late nights and long afternoons of purposeful practice, I have emerged to tell you that yes, I am ready to become a part of your development team. And I am so proud to finally be able to say that.`}
      </p>
      <p className={"content-font"}>
        {`Below, I've compiled a list of the projects that most significantly shaped me into the engineer I am today.`}
      </p>
    </div>
  );
};

export default Intro;
