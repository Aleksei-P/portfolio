import { useState } from "react";

export default function Skills() {
     return(
        <section id='skills'>
            <div className="center">
            <h2>Skills</h2>
            <div className="skill-container">
                <div className="skill-box"><img src="/img/js.png" alt="JS" /><span>JS</span></div>
                <div className="skill-box"><img src="/img/css.png" alt="css" /><span>CSS</span></div>
                <div className="skill-box"><img src="/img/html.png" alt="html" /><span>HTML</span></div>
                <div className="skill-box"><img src="/img/react.png" alt="react" /><span>React</span></div>
                <div className="skill-box delay_2"><img src="/img/node.png" alt="node" /><span>Node.js</span></div>
                <div className="skill-box delay_2"><img src="/img/mongo.png" alt="mongoDB" /><span>MongoDB</span></div>
                <div className="skill-box delay_2"><img src="/img/git.png" alt="GIT" /><span>GIT</span></div>
                <div className="skill-box delay_2"><img src="/img/graphql.png" alt="graphQL" /><span>GraphQL</span></div>
                <div className="skill-box delay_3"><img src="/img/bt.png" alt="Bootstrap" /><span>Bootstrap</span></div>
                <div className="skill-box delay_3"><img src="/img/figma.png" alt="Figma" /><span>Figma</span></div>
                <div className="skill-box delay_3"><img src="/img/exp.png" alt="Figma" /><span>Express</span></div>
                <div className="skill-box delay_3"><img src="/img/next.png" alt="Next.js" /><span>Next.js</span></div>
            </div>
            </div>
        </section>
    );
}