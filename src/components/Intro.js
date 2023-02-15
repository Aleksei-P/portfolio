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
          Solution-oriented developer with knowledge of JavaScript and browser APIs as well as experience with React and the ability to develop responsive apps capable of
          functioning on any device.
        </p>
        <a href="#contact">Contact me</a>
      </div>
      <div>
        <img src="/img/intro-monohrom.png" alt="foto" />
      </div>
    </section>
  );
}
