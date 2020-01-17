import React from 'react';
import './whoami.css'
import meme from '../assets/meme.jpg';
import bgl from '../assets/hidoc.png';
import dnd from '../assets/dnd.png';
import noimg from '../assets/noimage.png';

const Whoami: React.FC = () => {
    return (
        <div className="whoami-container">
            <div className="whoami-me">
                <img src={meme} className="image-cropper flow-right" alt="me" />
                <h1>Hi, I'm Wioleta Jemieljańczuk, but Violet is perfectly fine</h1>
                <p>
                    I live in Białystok, Poland, with my beloved husband and soon-to-be-born son. I have been writing code professionally for a couple of years (8 or more?), but it all started in early childhood when my older brother purchased Commodore 64 and Amiga 1200 after that. 
                </p>
                <p>
                    Dabbled mostly in Microsoft stack: from databases (SQL Server, SSAS, SSIS, SSRS), through desktop (Windows Forms, WPF, Windows Embedded Compact), to web (IIS, webservices, WCF, MVC, API, also JS, jQuery). I'm a back-end developer more than front-end, but I enjoy challenges and new learning opportunities. I don't consider myself a senior, there's so many things I don't know... even though I eventually learn them, well... unless it's boring/useless/will pass in 2 weeks.
                </p>
                <p>
                    Aside from work environment, if I have the time, I write stuff for fun/to make my or my friends life easier.
                </p>
                <p>
                    I graduated University of Technology with MSc in Automatic Control and Robotics, since then I have worked at Multi Packaging Solutions in a international team, doing projects for entire corporation, after that at C&S Software startup - creating systems for optimizing trading space and maximizing retail profits - both of those relied on tech stack mentioned above, and dev team brain power ofc.
                </p>
                <p>
                    Currently I am seeking opportunities that would help me improve as a <strong>Python</strong> developer. If you're interested in my fun projects (helping out, code review, making fun of me, or offering me a position), check out my <a href="https://github.com/innsmthdwlr">github</a>.
                </p>
                <p>
                    If I had to describe myself with one word, I would say I am <strong>curious</strong>, always look for new things to learn, take something apart to understand how it works, and push myself to finish given task with the most domain knowledge I can obtain from it. Another word is <strong>stubborn</strong>, because I hate giving up a task, no matter how difficult or complex. Also I'm a perfectionist, rewriting each method endlessly until it's succinct, neat and clear, but I try to fight it.
                </p>
                <p>
		    Sometimes I fail, sometimes I'm dumb, sometimes I ask stupid questions, sometimes I cry with frustration. But all in all, I really enjoy what I do, even though my self-doubt is overwhelming. You may call it impostor syndrome, or being realistic (if you're a cruel person), but it's a struggle many of us face regardless of years of experience, for me the key is to believe we all are allowed to try, and try again, and we need to err in order to achieve true mastery.
                </p>
            </div>

            <div className="whoami-funzies">

                <div className="funzies-container">                
                    {/* <div className="funzies-thumb"><img src={noimg} alt="sweethandy" /></div> */}
                    <div className="funzies-content-right">
                        <h3 className="funzies-title"><a href="https://sweethandy-qa.herokuapp.com/" target="_blank" rel="noopener noreferrer">SweetHandy</a></h3> | <a href="https://github.com/innsmthdwlr/sweet-handy-client" target="_blank" rel="noopener noreferrer">client src</a> | <a href="https://github.com/innsmthdwlr/sweet-handy-api" target="_blank" rel="noopener noreferrer">src</a>
                        <p>DRF. Diabetes self-management thing. My mother and brother suffer from type 2 diabetes, I have gestational diabetes. It's PitA to write down every meal, time, glucose level measurements in a tiny notebook.</p>
                    </div>
                </div>       

                <div className="funzies-container">                
                    {/* <div className="funzies-thumb-right"><img src={dnd} alt="do not die API" /></div> */}
                    <div className="funzies-content">
                        <h3 className="funzies-title">DoNotDie API</h3> | <a href="https://gitlab.com/innsmouth.dweller/dontdie" target="_blank" rel="noopener noreferrer">src</a>
                        <p>Flask API to help my friends with spell descriptions in our D&D 5E campaign. Scanning through book kills the session flow, it's easier to search for spell in a mobile app (or PWA app?). PostgreSQL database, SQLAlchemy, the usuall.</p>
                    </div>
                </div>

                <div className="funzies-container">                
                    {/* <div className="funzies-thumb"><img src={noimg} alt="do not die" /></div> */}
                    <div className="funzies-content-right">
                        <h3 className="funzies-title">DoNotDie</h3> | <a href="https://github.com/innsmthdwlr/dontdie-cli" target="_blank" rel="noopener noreferrer">src</a>
                        <p>Client for the thingy above.</p>
                    </div>
                </div>

                <div className="funzies-container">                
                    {/* <div className="funzies-thumb-right"><img src={noimg} alt="do not die tiles" /></div> */}
                    <div className="funzies-content">
                        <h3 className="funzies-title">DoNotDie Tiles</h3> | <a href="https://github.com/innsmthdwlr/dontdie-tiles" target="_blank" rel="noopener noreferrer">src</a>
                        <p>HTML Canvas test to help with remote D&D session.</p>
                    </div>
                </div>
            </div>

            <div className="whoami-letmedie">
                Languages I know of
                <ul>
                    <li>C#</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>HTML/CSS</li>
                </ul>

                Frameworks/libraries/tech I have struggled with
                <ul>
                    <li>ASP.NET/ASP.NET Core</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Django</li>
                    <li>DRF</li>
                    <li>Flask</li>
                    <li>SQL Server</li>
                    <li>PostgreSQL</li>
                    <li>Redis</li>
                    <li>RabbitMQ</li>
                    <li>numpy</li>
                    <li>pandas</li>
                </ul>

                Tools I misuse
                <ul>
                    <li>git</li>
                    <li>Visual Studio</li>
                    <li>Visual Studio Code</li>
                    <li>PyCharm</li>
                    <li>bash</li>
                    <li>Powershell</li>
                    <li>Docker</li>
                    <li>Docker Compose</li>
                    <li>Postman</li>
                    <li>Anaconda/pipenv/venv</li>
                    <li>TravisCI</li>
                    <li>Heroku</li>
                </ul>
            </div>

        </div>
    );
}

export default Whoami;
