import YoutubeEmbed from "~/components/projects/YoutubeEmbed";

import styles from "../styles/projects.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function Projects() {
  return (
    <>
      <div className="projects-section">
        <div style={{ paddingBottom: "2em" }}>
          <h1>UIUC Machine Problems and Projects</h1>
          <p>
            On top of regular Homework, the UIUC's Computer Science program
            assigns undergraduates Machine Problems (MPs). These are
            project-oriented assignments that often involved reimplementing
            fundamental Computer Science primatives and systems from scratch.
            They range from implementing B-Trees and Hash-Maps from scratch in
            C++ to using AWS to spin up a mock IoT/Machine Learning system with
            simulated data to building a strip down version of Hadoop.
          </p>
          <p>Below is a subset of them:</p>
        </div>
        <ProjectListing
          title="Scalable Topic Models on Live Streamed Speech Transcription (Group
            Research Project)"
          course="CS 525 Advanced Distributed Systems"
        >
          <a href="/files/scalable-topic-models-on-live-streamed-speech-transcription.pdf">
            Paper
          </a>
        </ProjectListing>
        <ProjectListing
          title="Cloud MQTT System for Simulated IoT Watch Heartbeat Classification
            (Group Project)"
          course="CS 498 IT Internet of Things (Fall 2020)"
        >
          <YoutubeEmbed src="https://www.youtube.com/embed/bWrG4QEmEkw" />
        </ProjectListing>
        <ProjectListing
          title="Simulated Shopping-Gaze Data Warehousing System (Group Project)"
          course="CS 498 IT Internet of Things (Fall 2020)"
        >
          <YoutubeEmbed src="https://www.youtube.com/embed/uc4vjlZqEoE" />
        </ProjectListing>
        <ProjectListing
          title="Wireless Mesh Sensor Network (Group Project)"
          course="CS 498 IT Internet of Things (Fall 2020)"
        >
          <YoutubeEmbed src="https://www.youtube.com/embed/MOy-me35__M" />
        </ProjectListing>
        <ProjectListing
          title="Stripped-down Advanced Driver-Assistance System (Group Project)"
          course="CS 498 IT Internet of Things (Fall 2020)"
        >
          <YoutubeEmbed src="https://www.youtube.com/embed/ppEiWGtd6eQ" />
        </ProjectListing>
        <ProjectListing
          title="React Timeseries COVID-19 Visualization"
          course="CS 242 Programming Studio (Spring 2020)"
        >
          <p>// TODO: Write this up</p>
        </ProjectListing>
        <ProjectListing
          title="React Native Github App"
          course="CS 242 Programming Studio (Spring 2020)"
        >
          <p>// TODO: Write this up</p>
        </ProjectListing>

        <h3>Other MPs and Projects</h3>
        <ul>
          <li>
            Variational Bayes Autoencoder from Scratch with numpy - CS 446
            Machine Learning (Spring 2021)
          </li>
          <li>
            Distributed File System with MapReduce (Group Project) - CS 425
            Distributed Systems
          </li>
          <li>
            Reinforcement Learning (Q-Learning) Agent for Snake - CS 440
            Artificial Intelligence (Fall 2020)
          </li>
          <li>
            Parts-of-Speech Tagging HMM Model with Viterbi's Algorithm for
            calculating MAP - CS 440 Artificial Intelligence (Fall 2020)
          </li>
          <li>
            Goodreads React Clone with MongoDB - CS 242 Programming Studio
            (Spring 2020)
          </li>
          <li>
            HTTP Web Server implemented from Scratch in C - CS 241 Systems
            Programming (Spring 2019)
          </li>
          <li>
            Shell Implemented from Scratch in C - CS 241 Systems Programming
            (Spring 2019)
          </li>
          <li>
            Malloc Implement from Scratch in C - CS 241 Systems Programming
            (Spring 2019)
          </li>
        </ul>
      </div>
    </>
  );
}

const ProjectListing = ({ title, course, children }) => (
  <div className="coursework-project">
    <div>
      <p className="coursework-project__title">{title}</p>
      <p className="coursework-project__course">{course}</p>
    </div>
    <div style={{ paddingTop: "1em" }}>{children}</div>
  </div>
);
