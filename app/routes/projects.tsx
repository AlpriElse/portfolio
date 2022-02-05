import CourseworkProject from "~/components/projects/CourseworkProject";
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
        <h2>Something</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac varius
          sem. Duis lacinia et mauris vel congue. Nulla vel mauris leo. Donec
          rutrum luctus quam, a vehicula diam pharetra ut. Aliquam posuere nunc
          in eros semper consequat. Nunc eget sapien sagittis, cursus urna eu,
          faucibus eros. Sed interdum tellus leo, non eleifend erat condimentum
          sed. Mauris molestie pulvinar eros, vel sollicitudin justo vehicula
          id. Phasellus elementum, augue vel pharetra interdum, nibh arcu
          condimentum leo, vitae pulvinar erat orci non massa. Mauris aliquet
          velit eget ligula ullamcorper, cursus fringilla urna accumsan. Integer
          volutpat vestibulum libero quis facilisis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed condimentum luctus purus. Ut commodo
          sodales placerat. Nulla sed tempor dolor. Vestibulum lacinia dolor id
          semper vehicula.
        </p>
        <h2>Something</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac varius
          sem. Duis lacinia et mauris vel congue. Nulla vel mauris leo. Donec
          rutrum luctus quam, a vehicula diam pharetra ut. Aliquam posuere nunc
          in eros semper consequat. Nunc eget sapien sagittis, cursus urna eu,
          faucibus eros. Sed interdum tellus leo, non eleifend erat condimentum
          sed. Mauris molestie pulvinar eros, vel sollicitudin justo vehicula
          id. Phasellus elementum, augue vel pharetra interdum, nibh arcu
          condimentum leo, vitae pulvinar erat orci non massa. Mauris aliquet
          velit eget ligula ullamcorper, cursus fringilla urna accumsan. Integer
          volutpat vestibulum libero quis facilisis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed condimentum luctus purus. Ut commodo
          sodales placerat. Nulla sed tempor dolor. Vestibulum lacinia dolor id
          semper vehicula.
        </p>
        <h2>Something</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac varius
          sem. Duis lacinia et mauris vel congue. Nulla vel mauris leo. Donec
          rutrum luctus quam, a vehicula diam pharetra ut. Aliquam posuere nunc
          in eros semper consequat. Nunc eget sapien sagittis, cursus urna eu,
          faucibus eros. Sed interdum tellus leo, non eleifend erat condimentum
          sed. Mauris molestie pulvinar eros, vel sollicitudin justo vehicula
          id. Phasellus elementum, augue vel pharetra interdum, nibh arcu
          condimentum leo, vitae pulvinar erat orci non massa. Mauris aliquet
          velit eget ligula ullamcorper, cursus fringilla urna accumsan. Integer
          volutpat vestibulum libero quis facilisis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed condimentum luctus purus. Ut commodo
          sodales placerat. Nulla sed tempor dolor. Vestibulum lacinia dolor id
          semper vehicula.
        </p>
      </div>
      <div className="projects-section">
        <h1>UIUC Coursework Projects</h1>
        <CourseworkProject>
          <CourseworkProject.Title>
            Scalable Topic Models on Live Streamed Speech Transcription
            (Research)
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 525 Advanced Distributed Systems
          </CourseworkProject.Course>
          <CourseworkProject.Body>TODO</CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            Cloud MQTT System for Simulated IoT Watch Heartbeat Classification
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 498 IT (Internet of Things)
          </CourseworkProject.Course>
          <CourseworkProject.Body>TODO</CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            Simulated Shopping-Gaze Data Warehousing System
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 498 IT (Internet of Things)
          </CourseworkProject.Course>
          <CourseworkProject.Body>TODO</CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            Wireless Mesh Sensor Network
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 498 IT (Internet of Things)
          </CourseworkProject.Course>
          <CourseworkProject.Body>TODO</CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            Stripped-down Advanced Driver-Assistance System (ADAS)
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 498 IT (Internet of Things)
          </CourseworkProject.Course>
          <CourseworkProject.Body>TODO</CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            Distributed File System with MapReduce
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 498 IT (Internet of Things)
          </CourseworkProject.Course>
          <CourseworkProject.Body>TODO</CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            Distributed Logfile Grep
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 525 Distributed Systems
          </CourseworkProject.Course>
          <CourseworkProject.Body>TODO</CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            Hand-implemented Pytorch Variational Autoencoder
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 446 Machine Learning
          </CourseworkProject.Course>
          <CourseworkProject.Body>TODO</CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            Q-Learning Agent for Snake
          </CourseworkProject.Title>
          <CourseworkProject.Course>CS 440</CourseworkProject.Course>
          <CourseworkProject.Body>TODO</CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            Hand-implemented Viterbi HMM Parts-of-Speech Tagging Model
          </CourseworkProject.Title>
          <CourseworkProject.Course>CS 440</CourseworkProject.Course>
          <CourseworkProject.Body>TODO</CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            React Timeseries COVID-19 Visualization
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 242 Programming Studio
          </CourseworkProject.Course>
          <CourseworkProject.Body>TODO</CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            Goodreads React Clone
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 242 Programming Studio
          </CourseworkProject.Course>
          <CourseworkProject.Body>TODO</CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            React Native Github App
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 242 Programming Studio
          </CourseworkProject.Course>
          <CourseworkProject.Body>TODO</CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>Java Swing Chess</CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 242 Programming Studio
          </CourseworkProject.Course>
          <CourseworkProject.Body>TODO</CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            HTTP Web Server in C
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 241 Systems Programming
          </CourseworkProject.Course>
          <CourseworkProject.Body>TODO</CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>Shell written in C</CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 241 Systems Programming
          </CourseworkProject.Course>
          <CourseworkProject.Body>TODO</CourseworkProject.Body>
        </CourseworkProject>
      </div>
    </>
  );
}
