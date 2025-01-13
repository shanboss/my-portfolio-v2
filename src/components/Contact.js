"use client";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import MoneyAnimation from "./MoneyAnimation";

export default class Contact extends Component {
  render() {
    return (
      <div className="bg-neutral-00">
        <section id="contact" />
        <div className="container pb-5 mx-auto ">
          <div className="text-white font-bold text-4xl font-regular py-5 mx-8 md:mx-auto flex flex-col md:flex-row justify-start">
            Contact me here!
            <span className="md:ml-3">
              <MoneyAnimation text="$$$$" />
            </span>
          </div>
          <div>
            <ul className="font-mono list-none text-white text-2xl mx-8 md:mx-auto">
              <li
                className="p-1 hover:bg-slate-400 rounded-md max-w-sm cursor-pointer"
                onClick={() =>
                  (window.location.href = "mailto:manushanboss@gmail.com")
                }
              >
                <FontAwesomeIcon icon={faEnvelope} size="1x" className="mr-2" />
                manushanboss@gmail.com
              </li>

              <li
                className="p-1 hover:bg-slate-400 rounded-md max-w-sm cursor-pointer"
                onClick={() =>
                  window.open("https://github.com/shanboss", "_blank")
                }
              >
                <FontAwesomeIcon icon={faGithub} size="1x" className="mr-2" />
                Manu Shanbhog
              </li>

              <li
                className="p-1 hover:bg-slate-400 rounded-md max-w-sm cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/manny__phantom/",
                    "_blank"
                  )
                }
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="1x"
                  className="mr-2"
                />
                manny_phantom
              </li>

              <li
                className="p-1 hover:bg-slate-400 rounded-md max-w-sm cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/channel/UCXkIsLKPg0ODl2YefWsZetg",
                    "_blank"
                  )
                }
              >
                <FontAwesomeIcon icon={faYoutube} size="1x" className="mr-2" />
                Manu Shanbhog
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
