import noProjectImg from "../../assets/no-projects.png";
import Button from "../util/Button/Button";
import "./LandingPage.css";

export default function LandingPage({ onCreateNewProject }) {
  return (
    <div className="landing-page">
      <img src={noProjectImg}></img>
      <h2>
        <strong>No projects selected</strong>
      </h2>
      <div>Select a project or get started with a new one</div>
      <Button onClick={onCreateNewProject}>Create a new project</Button>
    </div>
  );
}
