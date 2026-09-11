"use client";

import { useEffect, useState } from "react";

type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
  caption: string;
};

type Project = {
  number: string;
  icon: "drone" | "arm" | "hand" | "system";
  title: string;
  period: string;
  context: string;
  summary: string;
  challenge: string;
  contribution: string;
  outcome: string;
  tools: string[];
  media?: ProjectMedia[];
};

const projects: Project[] = [
  {
    number: "01",
    icon: "drone",
    title: "Perception-Aware Drone Navigation",
    period: "2026 · Ongoing",
    context: "Master’s Thesis · Robotics and Perception Group",
    summary:
      "An efficient and safe RL + differentiable MPC framework for perception-aware autonomous flight.",
    challenge:
      "A drone must follow an agile trajectory while actively preserving visual information for reliable state estimation.",
    contribution:
      "I am building the complete vision-in-the-loop simulation and control stack: SVO-based visual-inertial estimation, MPC flight control, and an RL layer that adapts trajectory and perception cost weights online.",
    outcome:
      "The current pipeline achieves closed-loop flight using estimated state and provides a structured route toward sample-efficient perception-aware learning and sim-to-real validation.",
    tools: ["Python", "C++", "ROS", "SVO", "MPC", "RL", "acados", "Habitat-Sim"],
    media: [
      {
        type: "image",
        src: "./projects/rollout_leapc_svo_color.gif",
        alt: "Perception-aware drone navigation rollout with trajectory and SVO feature visualization",
        caption: "Learned SAC-ZOP LEAP-C MPC rollout using ground-truth state and SVO features",
      },
    ],
  },
  {
    number: "02",
    icon: "arm",
    title: "RL Force & Pose Control",
    period: "2025",
    context: "Semester Thesis · Robotic Systems Lab",
    summary:
      "Reinforcement-learning policies for contact-rich force and pose control on the ALMA mobile manipulator.",
    challenge:
      "Contact tasks require a controller that can regulate interaction forces while maintaining accurate motion under real-world uncertainty.",
    contribution:
      "I trained and evaluated reinforcement-learning policies in simulation and prepared the system for transfer to the physical robot.",
    outcome:
      "The project connected policy learning, force control and sim-to-real deployment in a full robotics workflow.",
    tools: ["Python", "Reinforcement Learning", "Simulation", "Robot Control", "Sim-to-Real"],
    media: [
      {
        type: "video",
        src: "./projects/Force_Cut.mp4",
        alt: "ALMA mobile manipulator demonstrating learned force control",
        caption: "Force-control policy demonstration on the ALMA mobile manipulator",
      },
    ],
  },
  {
    number: "03",
    icon: "hand",
    title: "Dexterous Robotic Hand",
    period: "2025",
    context: "Hands-on Project · Soft Robotics Lab",
    summary:
      "A dexterous robotic hand designed, built and controlled from scratch by a student team.",
    challenge:
      "Transform a mechanical concept into a working, controllable system capable of reproducing dexterous motions.",
    contribution:
      "I contributed across mechanical design, integration and the learning-based control pipeline, including imitation-learning policies.",
    outcome:
      "A functional end-to-end prototype combining rapid hardware iteration with data-driven control.",
    tools: ["CAD", "Rapid Prototyping", "Python", "Imitation Learning", "Mechatronics"],
    media: [
      {
        type: "image",
        src: "./projects/IMG-20250112-WA0000.jpg",
        alt: "Dexterous robotic hand prototype reproducing human grasps",
        caption: "The hand prototype reproducing several dexterous grasp configurations",
      },
      {
        type: "video",
        src: "./projects/Movement_Of_FInger.mp4",
        alt: "Dexterous robotic hand moving an individual finger",
        caption: "Individual finger movement during prototype testing",
      },
    ],
  },
  {
    number: "04",
    icon: "system",
    title: "Thermal Control for Insect Breeding",
    period: "2023",
    context: "Bachelor Thesis · ETH Zürich",
    summary:
      "Data-driven modelling and controller synthesis for the nonlinear thermal dynamics of an insect-breeding system.",
    challenge:
      "Identify a useful model from measured process data despite nonlinear, time-varying thermal behaviour.",
    contribution:
      "I performed extensive data analysis, system identification and model validation before synthesising a closed-loop controller.",
    outcome:
      "A complete modelling-to-control workflow grounded in real process data.",
    tools: ["MATLAB", "Data Analysis", "System Identification", "Control Design"],
  },
];

const experiences = [
  {
    period: "2026 · Current",
    role: "Master’s Thesis Researcher",
    organisation: "Robotics and Perception Group",
    detail: "Perception-aware autonomous drone navigation with RL, MPC and visual-inertial estimation.",
  },
  {
    period: "2024 · Current",
    role: "Robotics Workshop Tutor",
    organisation: "mint & pepper · Wyss Zurich",
    detail: "Leading practical robotics workshops for children and teenagers aged 8–18.",
  },
  {
    period: "Feb–Aug 2024",
    role: "R&D Engineering Intern",
    organisation: "Borobotics · Winterthur",
    detail: "Designed complex SolidWorks assemblies and helped deliver the drilling robot’s second prototype.",
  },
  {
    period: "2022–2023",
    role: "Teaching Assistant",
    organisation: "ETH Zürich",
    detail: "Taught weekly Mechanics II and Control Systems I exercise sessions for groups of up to 30 students.",
  },
];

function ProjectIcon({ type }: { type: Project["icon"] }) {
  if (type === "drone") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M16 21h16l-4 9h-8l-4-9Zm8 0v-6m-10 0h20M14 15l-6-5m26 5 6-5M14 15l-6 5m26-5 6 5M8 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm32 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM8 17a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm32 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM20 34v4m8-4v4m-11 0h14" />
      </svg>
    );
  }
  if (type === "arm") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M9 39h25M13 39v-7h11l5-10m-3-4-7-6m10 10 7 5m-19-17 4-4m-10 25 9-16m7 4 4-4m-22 8h8m20 2 4 4m-7 6h8" />
        <circle cx="17" cy="12" r="3" />
        <circle cx="29" cy="20" r="3" />
      </svg>
    );
  }
  if (type === "hand") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M16 26V13a3 3 0 0 1 6 0v10-14a3 3 0 0 1 6 0v14-11a3 3 0 0 1 6 0v12-7a3 3 0 0 1 6 0v11c0 9-6 15-15 15-7 0-11-4-14-10l-3-7a3 3 0 0 1 5-3l3 3Zm6 8h13" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M8 34h32M12 34V20l7-7 7 7v14m0-8 7-7 5 5v10M7 11h10m-5-5v10M33 8h8m-4-4v8" />
      <circle cx="19" cy="25" r="3" />
      <circle cx="33" cy="28" r="3" />
    </svg>
  );
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", close);
    document.body.classList.toggle("modal-open", Boolean(selectedProject));
    return () => window.removeEventListener("keydown", close);
  }, [selectedProject]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Matteo Stürm, home">
          <span className="brand-mark">MS</span>
          <span className="brand-rule" />
          <span>Matteo Stürm</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a className="contact-link" href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="coordinate coordinate-top">X&nbsp;&nbsp;320.000<br />Y&nbsp;&nbsp;180.000<br />Z&nbsp;&nbsp;240.000</div>
          <p className="eyebrow">Robotics · Control · Learning</p>
          <h1>Matteo Stürm</h1>
          <span className="blue-rule" />
          <h2>Robotics Engineer —<br />Learning, Control &amp;<br />Autonomous Systems</h2>
          <p className="hero-intro">
            MSc Robotics, Systems and Control at ETH Zürich.<br />
            I build intelligent systems from algorithms<br />to real-world deployment.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore projects <span>↗</span></a>
            <a className="resume-link" href="./assets/matteo-stuerm-cv.pdf" target="_blank" rel="noreferrer">
              View résumé <span>→</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="trajectory" aria-hidden="true">
            <span className="orbit orbit-one" /><span className="orbit orbit-two" />
          </div>
          <img src="./assets/matteo-stuerm.jpg" alt="Portrait of Matteo Stürm" width="1920" height="1280" />
          <span className="crosshair" aria-hidden="true" />
        </div>
      </section>

      <section className="project-index" aria-label="Featured projects">
        {projects.slice(0, 3).map((project) => (
          <button className="project-index-item" type="button" key={project.number} onClick={() => setSelectedProject(project)}>
            <span className="project-number">{project.number}</span>
            <span className="project-icon"><ProjectIcon type={project.icon} /></span>
            <span className="project-title">{project.title}</span>
            <span className="project-arrow">→</span>
          </button>
        ))}
        <span className="index-crosshair" aria-hidden="true" />
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-label"><span>01</span> Selected work</div>
        <div className="section-heading">
          <h2>Engineering intelligent systems,<br />from model to machine.</h2>
          <p>Click a project to explore the problem, my contribution and the technology behind it.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <button className="project-card" type="button" key={project.number} onClick={() => setSelectedProject(project)}>
              <div className="project-card-top">
                <span className="project-icon project-icon-large"><ProjectIcon type={project.icon} /></span>
                <span className="project-number">{project.number}</span>
              </div>
              <p className="project-context">{project.context}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="project-card-footer">
                <span>{project.period}</span><span className="project-arrow">Explore →</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-label"><span>02</span> Experience</div>
        <div className="section-heading">
          <h2>Research depth.<br />Hands-on delivery.</h2>
          <p>Experience across autonomous systems, product development, teaching and technical leadership.</p>
        </div>
        <div className="timeline">
          {experiences.map((item) => (
            <article className="timeline-item" key={`${item.period}-${item.role}`}>
              <p className="timeline-period">{item.period}</p>
              <div><h3>{item.role}</h3><p className="timeline-org">{item.organisation}</p></div>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-label"><span>03</span> About</div>
        <div className="about-grid">
          <div>
            <p className="about-kicker">Structured thinking, genuine curiosity and responsibility for the complete system.</p>
            <h2>I like problems that cross the boundary between software and the physical world.</h2>
          </div>
          <div className="about-copy">
            <p>I am completing an MSc in Robotics, Systems and Control at ETH Zürich after graduating in Mechanical Engineering with a weighted grade average of 5.71/6.0.</p>
            <p>My work combines control, machine learning and computer vision with practical experience in mechanical design and real-world deployment.</p>
            <div className="education-block">
              <span>2024–2026</span><strong>MSc Robotics, Systems and Control</strong><em>ETH Zürich</em>
              <span>2020–2023</span><strong>BSc Mechanical Engineering</strong><em>ETH Zürich · GPA 5.71/6.0</em>
            </div>
          </div>
        </div>
        <div className="skills">
          {["Python", "C / C++", "ROS", "Machine Learning", "MPC & Control", "Computer Vision", "Ubuntu", "CAD"].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-label light"><span>04</span> Let’s connect</p>
        <h2>Looking for someone who can connect learning, control and real hardware?</h2>
        <div className="contact-actions">
          <a className="button button-light" href="mailto:matteo.stuerm@gmail.com">Send an email <span>↗</span></a>
          <a href="https://www.linkedin.com/in/matteo-stuerm/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="./assets/matteo-stuerm-cv.pdf" target="_blank" rel="noreferrer">Résumé ↗</a>
        </div>
        <footer><span>Matteo Stürm · Zürich, Switzerland</span><span>Robotics · Control · Learning</span></footer>
      </section>

      {selectedProject && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSelectedProject(null);
        }}>
          <article className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
            <button className="modal-close" type="button" onClick={() => setSelectedProject(null)} aria-label="Close project">×</button>
            <div className="modal-header">
              <span className="project-icon project-icon-large"><ProjectIcon type={selectedProject.icon} /></span>
              <span className="project-number">{selectedProject.number}</span>
              <p>{selectedProject.context}</p>
              <h2 id="project-modal-title">{selectedProject.title}</h2>
              <p className="modal-summary">{selectedProject.summary}</p>
            </div>
            <div className={selectedProject.media?.length ? "modal-media has-media" : "modal-media"}>
              {selectedProject.media?.length ? (
                selectedProject.media.map((item) => (
                  <figure className="media-item" key={item.src}>
                    {item.type === "video" ? (
                      <video src={item.src} aria-label={item.alt} controls autoPlay muted loop playsInline preload="metadata" />
                    ) : (
                      <img src={item.src} alt={item.alt} loading="lazy" />
                    )}
                    <figcaption>{item.caption}</figcaption>
                  </figure>
                ))
              ) : (
                <>
                  <span>Project media</span>
                  <strong>Photos &amp; videos coming next</strong>
                  <p>This area is ready for your project footage, diagrams and results.</p>
                </>
              )}
            </div>
            <div className="modal-details">
              <div><span>Challenge</span><p>{selectedProject.challenge}</p></div>
              <div><span>My contribution</span><p>{selectedProject.contribution}</p></div>
              <div><span>Outcome</span><p>{selectedProject.outcome}</p></div>
            </div>
            <div className="tool-list">{selectedProject.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
          </article>
        </div>
      )}
    </main>
  );
}
