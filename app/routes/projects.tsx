import CourseProject from "~/components/projects/CourseProject";
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
        <h1>Personal Projects</h1>
        <h3>// TODO: Write these up!</h3>
      </div>
      <div className="projects-section">
        <div style={{ paddingBottom: "2em" }}>
          <h1>University Coursework Projects</h1>
          <p>
            A subset of "Machine Problems" (MPs) and other Projects I've worked
            on as part of coursework while an undergraduate Computer Science
            student at UIUC.
          </p>
        </div>

        <CourseProject
          title="Scalable Topic Models on Live Streamed Speech Transcription (Group
          Research Project)"
          course="CS 525 Advanced Distributed Systems"
        >
          <p>// TODO: Write this up</p>
        </CourseProject>
        <CourseProject
          title="Variational Bayes Autoencoder"
          course="CS 446 Machine Learning (Spring 2021)"
        >
          <p>// TODO: Write this up</p>
        </CourseProject>
        <CourseProject
          title="Cloud MQTT System for Simulated IoT Watch Heartbeat Classification
            (Group Project)"
          course="CS 498 IT Internet of Things (Fall 2020)"
        >
          <YoutubeEmbed src="https://www.youtube.com/embed/bWrG4QEmEkw" />
        </CourseProject>
        <CourseProject
          title="Simulated Shopping-Gaze Data Warehousing System (Group Project)"
          course="CS 498 IT Internet of Things (Fall 2020)"
        >
          <YoutubeEmbed src="https://www.youtube.com/embed/uc4vjlZqEoE" />
        </CourseProject>
        <CourseProject
          title="Wireless Mesh Sensor Network (Group Project)"
          course="CS 498 IT Internet of Things (Fall 2020)"
        >
          <YoutubeEmbed src="https://www.youtube.com/embed/MOy-me35__M" />
        </CourseProject>
        <CourseProject
          title="Stripped-down Advanced Driver-Assistance System (Group Project)"
          course="CS 498 IT Internet of Things (Fall 2020)"
        >
          <YoutubeEmbed src="https://www.youtube.com/embed/ppEiWGtd6eQ" />
        </CourseProject>
        <CourseProject
          title="Distributed File System with MapReduce (Group Project)"
          course="CS 425 Distributed Systems (Fall 2020)"
        >
          <p>// TODO: Write this up</p>
        </CourseProject>
        <CourseProject
          title="Q-Learning Agent for Snake"
          course="CS 440 Artificial Intelligence (Fall 2020)"
        >
          <p>// TODO: Write this up</p>
        </CourseProject>
        <CourseProject
          title="Parts-of-Speech Tagging HMM Model"
          course="CS 440 Artificial Intelligence (Fall 2020)"
        >
          <p>// TODO: Write this up</p>
        </CourseProject>
        <CourseProject
          title="React Timeseries COVID-19 Visualization"
          course="CS 242 Programming Studio (Spring 2020)"
        >
          <p>// TODO: Write this up</p>
        </CourseProject>
        <CourseProject
          title="Goodreads React Clone"
          course="CS 242 Programming Studio (Spring 2020)"
        >
          <p>// TODO: Write this up</p>
        </CourseProject>
        <CourseProject
          title="React Native Github App"
          course="CS 242 Programming Studio (Spring 2020)"
        >
          <p>// TODO: Write this up</p>
        </CourseProject>
        <CourseProject
          title="Chess in Java"
          course="CS 242 Programming Studio (Spring 2020)"
        >
          <p>// TODO: Write this up</p>
        </CourseProject>
        <CourseProject
          title="HTTP Web Server in C"
          course="CS 241 Systems Programming (Spring 2019)"
        >
          <p>// TODO: Write this up</p>
        </CourseProject>
        <CourseProject
          title="Shell in C"
          course="CS 241 Systems Programming (Spring 2019)"
        >
          <p>// TODO: Write this up</p>
        </CourseProject>
        <CourseProject
          title="Malloc"
          course="CS 241 Systems Programming (Spring 2019)"
        >
          <p>// TODO: Write this up</p>
        </CourseProject>
      </div>
    </>
  );
}
