import React, { useState } from "react";

import { motion } from "framer-motion";

function App() {
  const [navbar, setNavbar] = useState("");

  const svgVariants = {
    hidden: { opacity: 0, rotateY: -180 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 2 },
    },
  };
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };
  const polygonVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 2, duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <>
      <section
        className="hero is-fullheight is-dark"
        style={{
          background: "transparent url(/bg.jpg) center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <nav
          className="navbar"
          role="navigation"
          aria-label="main navigation"
          style={{ backgroundColor: "rgba(30, 39, 46,0.3)" }}
        >
          <div className="navbar-brand">
            <div className="navbar-item is-size-2" href="/">
              Tipi Party Compani
            </div>

            <button
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={() => setNavbar(!navbar)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>

          <div
            id="navbarBasicExample"
            className={`navbar-menu ${navbar && "is-active"}`}
          >
            <div className="navbar-end">
              <div className="navbar-item is-size-3">
                <p>About us</p>
              </div>
              <div className="navbar-item is-size-3">
                <p>Contact us</p>
              </div>
            </div>
          </div>
        </nav>
        <div
          className="hero-body"
          style={{ backgroundColor: "rgba(30, 39, 46,0.3)" }}
        >
          <div className="container">
            <div className="has-text-centered">
              <motion.svg
                className="my-6"
                variants={svgVariants}
                initial="hidden"
                animate="visible"
                height="260"
                width="200"
              >
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop
                      offset="0%"
                      style={{ stopColor: "#e15f41", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#f5cd79", stopOpacity: 1 }}
                    />
                  </linearGradient>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop
                      offset="0%"
                      style={{ stopColor: "#f8a5c2", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#e66767", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <motion.polygon
                  variants={polygonVariants}
                  points="100,25 200,200 150,225 100,150"
                  style={{ fill: "url(#grad2)" }}
                />
                <motion.polygon
                  variants={polygonVariants}
                  points="100,25 0,200 50,225 100,150"
                  style={{ fill: "url(#grad2)" }}
                />
                <motion.polygon
                  variants={polygonVariants}
                  points="100,150 150,225 100,250 50,225"
                  style={{
                    fill: "url(#grad1)",
                  }}
                />
                <motion.path
                  variants={pathVariants}
                  d="M90 5 L200 200 L150 225"
                  style={{ fill: "none", stroke: "white", strokeWidth: 4 }}
                />
                <motion.path
                  variants={pathVariants}
                  d="M110 5 L0 200 L50 225"
                  style={{ fill: "none", stroke: "white", strokeWidth: 4 }}
                />
                <motion.path
                  variants={pathVariants}
                  d="M100 0 L100 150 L50 225 L100 250 L150 225 L100 150"
                  style={{ fill: "none", stroke: "white", strokeWidth: 4 }}
                />
              </motion.svg>
              <p className="title is-1">TIPI PARTY COMPANY</p>
              <p className="subtitle is-2">
                A party they will remeber for ever
              </p>
              <hr />
              <button className="button is-primary is-rounded is-size-3">
                Contact Us !
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="hero">
        <div className="hero-body">
          <div className="container my-6">
            <p className="title is-1">Different themes</p>
            <div className="columns is-multiline">
              {[1, 2, 1, 2, 1, 2].map((theme, index) => (
                <div className="column is-4" key={index}>
                  <p className="title">Theme name</p>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="box"
                    style={{
                      background: `transparent url(/${theme}.jpg) center center`,
                      backgroundSize: "cover",
                      height: 250,
                    }}
                  ></motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-danger">
        <div className="hero-body">
          <div className="container mt-6">
            <div className="columns">
              <div className="column is-2"></div>
              <div className="column">
                <p className="title">How does it work ?</p>
                <p className="is-size-4">
                  We take care of evrything, you can relax and let the childs
                  have the best time of their life
                </p>
                <ul className="steps is-vertical mt-6">
                  <motion.li
                    whileHover={{ scale: 1.2 }}
                    className="steps-segment"
                  >
                    <span href="#" className="steps-marker">
                      1
                    </span>
                    <div className="steps-content">
                      <p className="is-size-2">
                        You decide how the party should be
                      </p>
                      <p className="mb-6 is-size-4">
                        Choose the theme of your party and let us do the rest.
                        We will deliver the cabins for you with all the
                        necessary accessories for the night, set up and prepare
                        everything perfectly and everything will be ready before
                        the first guests arrive.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.2 }}
                    className="steps-segment"
                  >
                    <span href="#" className="steps-marker">
                      2
                    </span>
                    <div className="steps-content">
                      <p className="is-size-2">We prepare everything for you</p>
                      <p className="mb-6 is-size-4">
                        The next day, when allthe guests have gone home, we come
                        to you and remove everything.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.2 }}
                    className="steps-segment"
                  >
                    <span className="steps-marker">3</span>
                    <div className="steps-content">
                      <p className="is-size-2">Your party will be wonderful</p>
                      <p className="mb-6 is-size-4">
                        The assembly of the tipis is usually in the afternoon on
                        the day of the event and disassembled the morning of the
                        following day. Assembly and disassembly time is
                        approximately 2 hours.
                      </p>
                    </div>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.2 }}
                    className="steps-segment"
                  >
                    <span className="steps-marker">4</span>
                    <div className="steps-content">
                      <p className="is-size-2">
                        You take care of what matters most
                      </p>
                      <p className="mb-6 is-size-4">
                        The most important to us is to offer your children and
                        guests a pleasant experience for a celebration so you
                        can focus on your family and guests.
                      </p>
                    </div>
                  </motion.li>
                </ul>
              </div>
              <div className="column is-2"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-large">
        <div className="hero-body">
          <div className="container">
            <p className="title">About us</p>
          </div>
        </div>
      </section>
      <section className="hero is-medium is-dark">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <p className="title">Contact info</p>
              </div>
              <div className="column">
                <p className="title">Contact Form</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
