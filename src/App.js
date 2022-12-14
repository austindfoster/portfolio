import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Intro from "./components/Intro";
import Art from "./pages/Art";
import Programming from "./pages/Programming";
import About from "./pages/About";
import content from "./mockdata/Item-List";
import languages from "./mockdata/Language-List";
import software from "./mockdata/Software-List";
import tools from "./mockdata/Tool-List";
import "./App.css";
import { useEffect } from "react";
import JobExperience from "./pages/JobExperience";

export default function App() {
  //console.log(cN);
  useEffect(() => {
    const cN = document.getElementsByClassName("item");
    for (let i = 0; i < cN.length; i++) {
    console.log(cN[i].childNodes[0].firstChild.textContent);
    if (i % 2 === 0) {
      cN[i].classList.replace("item", "item-left");
    }
  }
  },[]);
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="#home" smooth>
              Home();
            </Link>
          </li>
          <li>
            <Link to="#cs" smooth>
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
      <Intro />
      <About />
      <Programming
        languages={languages}
        software={software}
        tools={tools}
        items={content.filter((item) => item.category === "cs")}
      />
      <Art
        software={software}
        items={content.filter((item) => item.category === "art")}
      />
      <JobExperience/>
    </BrowserRouter>
  );
}

// const cards = document.querySelectorAll(".detail-block");
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     entries.target.classList.toggle("show", entry.isIntersecting);
//   })
// });

// cards.forEach(card => {
//   observer.observe(card);
// })
