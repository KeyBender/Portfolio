import { NavLink } from "./navLink";
import {motion} from 'framer-motion'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export { Nav };

function Nav(): React.ReactElement {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
      <nav className="fixed top-0 right-0 left-0 flex flex-wrap items-center justify-between px-2 py-3 bg-slate-200 bg-opacity-90 shadow-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full flex justify-between lg:w-auto lg:block lg:justify-start">
            <NavLink
              to="home"
              className="text-2xl cursor-pointer font-bold font-logo uppercase bg-clip-text bg-gradient-to-tr from-yellow to-red text-transparent"
              noActiveClass
            >
              Cameron Crooks
            </NavLink>

            <motion.button
              whileTap={{scale: 0.8}}
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} style={{ color: "#000000" }} />
            </motion.button>
          </div>
          <div
              className={"lg:flex hidden lg:visible flex-row list-none gap-3"}
            >
              <ul className="flex justify-center gap-5">
                <li>
                  <a href="https://github.com/KeyBender" target="_blank">
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ color: "#00000" }}
                  />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/cameron-crooks/" target="_blank">  
                <FontAwesomeIcon icon={faLinkedin} style={{color: "#000000",}} />
                </a>
                </li>
              </ul>
            </div>
          <div
            className={
              "lg:flex items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li>
                <NavLink
                  to="projects"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span>Projects</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="experience"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <span>Experience</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="contact-me"
                onClick={()=> setNavbarOpen(!navbarOpen)}>
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}
