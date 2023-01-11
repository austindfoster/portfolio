import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useEffect } from "react";
import Intro from "./components/Intro";
import Art from "./pages/Art";
import Programming from "./pages/Programming";
import About from "./pages/About";
import JobExperience from "./pages/JobExperience";
import content from "./mockdata/Item-List";
import languages from "./mockdata/Language-List";
import software from "./mockdata/Software-List";
import tools from "./mockdata/Tool-List";
import jobs from "./mockdata/Job-List";
import wips from "./mockdata/WIP_List";
import links from "./mockdata/Links";
import "./App.css";
import WIPMasonry from "./pages/WIPMasonry";
import Contact from "./pages/Contact";

export default function App() {
  // useEffect(() => {
  //   const cN = document.getElementsByClassName("item");
  //   for (let i = 0; i < cN.length; i++) {
  //     if (parseInt(cN[i].id.substring(1)) % 2 === 0) {
  //       cN[i].classList.replace("item", "item-left");
  //     }
  //   }
  // }, []);
  document.addEventListener('mousemove', event => {
    let x = event.clientX / window.innerWidth;
    let y = event.clientY / window.innerHeight;

    document.documentElement.style.setProperty('--mouse-x', x);
    document.documentElement.style.setProperty('--mouse-y', y);
  })
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="#top" smooth>
              Home();
            </Link>
          </li>
          <li>
            <Link to="#programming" smooth>
              Programming();
            </Link>
          </li>
          <li>
            <Link to="#art" smooth>
              Art();
            </Link>
          </li>
        </ul>
      </nav>
      <div id="top" className="spacer"></div>
      <Intro />
      <div className="sidebar">
        <div className="sidebar-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li>
            <Link to="#top" smooth>
              Home();
            </Link>
          </li>
          <li>
            <Link to="#programming" smooth>
              Programming();
            </Link>
          </li>
          <li>
            <Link to="#art" smooth>
              Art();
            </Link>
          </li>
        </ul>
      </div>
      <About />
      <Contact links={links} />
      <div id="programming" className="spacer"></div>
      <Programming
        languages={languages}
        software={software}
        tools={tools}
        items={content.filter((item) => item.category === "cs")}
      />
      <div id="art" className="spacer"></div>
      <Art
        software={software}
        items={content.filter((item) => item.category === "art")}
      />
      <div id="jobs" className="spacer"></div>
      {/* <JobExperience jobs={jobs} /> */}
      <WIPMasonry wips={wips} />
    </BrowserRouter>
  );
}