import { useEffect, useState } from "react";

export default function Intro() {
  const [classes, setClasses] = useState("");
  useEffect(() => {
    setClasses("visible");
  }, []);

  return (
    <section id="intro" className={classes}>
      <div>
        <p>
          I'm <span>Alex</span>
          <br />
          Solution-oriented front-end developer with knowledge of JavaScript and APIs as well as experience with React.
        </p>
        <a href="#contact">Contact me</a>
      </div>
      <div>
        <img src="/img/intro-monohrom.png" alt="foto" />
      </div>
    </section>
  );
}
