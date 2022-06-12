import { Link, LoaderFunction, useLoaderData } from "@remix-run/react";

import CourseProjects from "~/components/projects/CourseProjects";
import UnderConstruction from "~/components/util/UnderConstructions";
import useEnvironment from "~/hooks/useEnvironment";

import styles from "../styles/projects.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export const loader: LoaderFunction = async ({ request }) => ({ request });

export default function Projects() {
  const { request } = useLoaderData();
  const { isDevMode } = useEnvironment(request);

  if (!isDevMode) {
    return <UnderConstruction />;
  }

  return (
    <>
      <div className="projects-section">
        <h1>Personal Projects</h1>
        <h3>Coming soon...</h3>
      </div>
      <div className="projects-section">
        <h1>UIUC Coursework Projects</h1>

        <CourseProjects>
          <CourseProjects.Course>
            CS 525 Advanced Distributed Systems
          </CourseProjects.Course>
          <CourseProjects.Title>
            Scalable Topic Models on Live Streamed Speech Transcription (Group
            Research Project)
          </CourseProjects.Title>
        </CourseProjects>
        <CourseProjects>
          <CourseProjects.Course>
            CS 446 Machine Learning (Spring 2021)
          </CourseProjects.Course>
          <CourseProjects.Title>
            Variational Bayes Autoencoder
          </CourseProjects.Title>
        </CourseProjects>
        <CourseProjects>
          <CourseProjects.Course>
            CS 498 IT Internet of Things (Fall 2020)
          </CourseProjects.Course>
          <CourseProjects.Title>
            <a
              href="https://www.youtube.com/watch?v=bWrG4QEmEkw"
              target="_blank"
            >
              Cloud MQTT System for Simulated IoT Watch Heartbeat Classification
              (Group Project)
            </a>
          </CourseProjects.Title>
          <CourseProjects.Title>
            <a
              href="https://www.youtube.com/watch?v=uc4vjlZqEoE"
              target="_blank"
            >
              Simulated Shopping-Gaze Data Warehousing System (Group Project)
            </a>
          </CourseProjects.Title>
          <CourseProjects.Title>
            <a
              href="https://www.youtube.com/watch?v=MOy-me35__M"
              target="_blank"
            >
              Wireless Mesh Sensor Network (Group Project)
            </a>
          </CourseProjects.Title>
          <CourseProjects.Title>
            <a
              href="https://www.youtube.com/watch?v=ppEiWGtd6eQ&ab_channel=AlpriB.Else"
              target="_blank"
            >
              Stripped-down Advanced Driver-Assistance System (Group Project)
            </a>
          </CourseProjects.Title>
        </CourseProjects>
        <CourseProjects>
          <CourseProjects.Course>
            CS 425 Distributed Systems (Fall 2020)
          </CourseProjects.Course>
          <CourseProjects.Title>
            Distributed File System with MapReduce (Group Project)
          </CourseProjects.Title>
          <CourseProjects.Title>Distributed Logfile Grep</CourseProjects.Title>
        </CourseProjects>
        <CourseProjects>
          <CourseProjects.Course>
            CS 440 Artificial Intelligence (Fall 2020)
          </CourseProjects.Course>
          <CourseProjects.Title>
            Q-Learning Agent for Snake
          </CourseProjects.Title>
          <CourseProjects.Title>
            Parts-of-Speech Tagging HMM Model
          </CourseProjects.Title>
        </CourseProjects>
        <CourseProjects>
          <CourseProjects.Course>
            CS 242 Programming Studio (Spring 2020)
          </CourseProjects.Course>
          <CourseProjects.Title>
            React Timeseries COVID-19 Visualization
          </CourseProjects.Title>
          <CourseProjects.Title>Goodreads React Clone</CourseProjects.Title>
          <CourseProjects.Title>React Native Github App</CourseProjects.Title>
          <CourseProjects.Title>Chess implemented in Java</CourseProjects.Title>
        </CourseProjects>
        <CourseProjects>
          <CourseProjects.Course>
            CS 241 Systems Programming (Spring 2019)
          </CourseProjects.Course>
          <CourseProjects.Title>HTTP Web Server in C</CourseProjects.Title>
          <CourseProjects.Title>Shell written in C</CourseProjects.Title>
          <CourseProjects.Title>Malloc</CourseProjects.Title>
        </CourseProjects>
      </div>
    </>
  );
}
