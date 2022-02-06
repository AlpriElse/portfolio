import { Link, LoaderFunction, useLoaderData } from "remix";

import CourseworkProject from "~/components/projects/CourseworkProject";
import UnderConstruction from "~/components/util/UnderConstructions";
import useEnvironment from "~/hooks/useEnvironment";
import YoutubeEmbed from "~/components/projects/YoutubeEmbed";

import styles from "../styles/projects.css";
import UIFlex from "~/components/util/UIFlex";

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
        <h2>Coming soon...</h2>
      </div>
      <div className="projects-section">
        <h1>UIUC Coursework Projects</h1>
        <CourseworkProject>
          <CourseworkProject.Title>
            Scalable Topic Models on Live Streamed Speech Transcription (Group
            Research Project)
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 525 Advanced Distributed Systems (Spring 2021)
          </CourseworkProject.Course>
          <CourseworkProject.Body>
            Latent Dirichlet Allocation (LDA) is a Natural Language Processing
            (NLP)
            <Link
              target="_blank"
              reloadDocument
              to="/files/scalable-topic-models-on-live-streamed-speech-transcription.pdf"
            >
              Full Paper
            </Link>
          </CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            Variational Bayes Autoencoder
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 446 Machine Learning (Spring 2021)
          </CourseworkProject.Course>
          <CourseworkProject.Body>
            Hand-implemented Variational Bayes Autoencoder in Pytorch trained
            against MNIST.
          </CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            Cloud MQTT System for Simulated IoT Watch Heartbeat Classification
            (Group Project)
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 498 IT (Internet of Things - Fall 2020)
          </CourseworkProject.Course>
          <CourseworkProject.Body>
            <UIFlex justify="center">
              <YoutubeEmbed src="https://www.youtube.com/embed/bWrG4QEmEkw" />
            </UIFlex>
          </CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            Simulated Shopping-Gaze Data Warehousing System (Group Project)
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 498 IT (Internet of Things - Fall 2020)
          </CourseworkProject.Course>
          <CourseworkProject.Body>
            <UIFlex justify="center">
              <YoutubeEmbed src="https://www.youtube.com/embed/uc4vjlZqEoE" />
            </UIFlex>
          </CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            Wireless Mesh Sensor Network (Group Project)
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 498 IT (Internet of Things - Fall 2020)
          </CourseworkProject.Course>
          <CourseworkProject.Body>
            <UIFlex justify="center">
              <YoutubeEmbed src="https://www.youtube.com/embed/MOy-me35__M" />
            </UIFlex>
          </CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            Stripped-down Advanced Driver-Assistance System (Group Project)
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 498 IT (Internet of Things - Fall 2020)
          </CourseworkProject.Course>
          <CourseworkProject.Body>
            <UIFlex justify="center">
              <YoutubeEmbed src="https://www.youtube.com/embed/ppEiWGtd6eQ" />
            </UIFlex>
          </CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            Distributed File System with MapReduce (Group Project)
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 425 Distributed Systems (Fall 2020)
          </CourseworkProject.Course>
          <CourseworkProject.Body>TODO</CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            Distributed Logfile Grep
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 425 Distributed Systems (Fall 2020)
          </CourseworkProject.Course>
          <CourseworkProject.Body>TODO</CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            Q-Learning Agent for Snake
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 440 Artificial Intelligence (Fall 2020)
          </CourseworkProject.Course>
          <CourseworkProject.Body>
            Reinforcement Learning (RL) is a form of Machine Learning where an
            "agent" learns through trial and error in an interactive environment
            with the goal of maximizing some Reward by taking actions.{" "}
            <a href="https://en.wikipedia.org/wiki/Q-learning" target="_blank">
              Q-Learning
            </a>{" "}
            is a model-free algorithm for Reinforcement Learning where an agent
            estimates the anticipated Reward for a particular action. In the
            course's Machine Problem, I implemented a Temporal Difference (TD)
            Q-Learning agent to play Snake.
          </CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            Parts-of-Speech Tagging HMM Model
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 440 Artificial Intelligence (Fall 2020)
          </CourseworkProject.Course>
          <CourseworkProject.Body>
            Hand-implemented a Hidden Markov Model for Parts-of-Speech tagging
            using Viterbi's algorithm, a dynamic programming algorithm for
            finding a Maximum a Posteriori (MAP) probability estimate, in
            vanilla Python.
          </CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            React Timeseries COVID-19 Visualization
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 242 Programming Studio (Spring 2020)
          </CourseworkProject.Course>
          <CourseworkProject.Body>TODO</CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            Goodreads React Clone
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 242 Programming Studio (Spring 2020)
          </CourseworkProject.Course>
          <CourseworkProject.Body>TODO</CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            React Native Github App
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 242 Programming Studio (Spring 2020)
          </CourseworkProject.Course>
          <CourseworkProject.Body>TODO</CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>
            HTTP Web Server in C
          </CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 241 Systems Programming (Spring 2019)
          </CourseworkProject.Course>
          <CourseworkProject.Body>
            Implemented an{" "}
            <a
              target="_blank"
              href="https://man7.org/linux/man-pages/man7/epoll.7.html"
            >
              `epoll`
            </a>{" "}
            driven HTTP web server in C that manually parsed HTTP Header and
            performed file system operations with{" "}
            <a
              target="_blank"
              href="https://man7.org/linux/man-pages/man7/ip.7.html"
            >
              TCP Sockets
            </a>
            .
          </CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>Shell written in C</CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 241 Systems Programming (Spring 2019)
          </CourseworkProject.Course>
          <CourseworkProject.Body>Implemented </CourseworkProject.Body>
        </CourseworkProject>
        <CourseworkProject>
          <CourseworkProject.Title>Malloc</CourseworkProject.Title>
          <CourseworkProject.Course>
            CS 241 Systems Programming (Spring 2019)
          </CourseworkProject.Course>
          <CourseworkProject.Body>
            Implemented a simplified{" "}
            <a
              target="_blank"
              href="https://man7.org/linux/man-pages/man3/free.3.html"
            >
              `malloc(size_t size)`
            </a>{" "}
            in C using{" "}
            <a target="_blank" href="https://linux.die.net/man/2/sbrk">
              `sbrk`
            </a>
            .
          </CourseworkProject.Body>
        </CourseworkProject>
      </div>
    </>
  );
}
