import "./Sidebar.css";

export default function Sidebar({
  projectsList,
  onCreateNewProject,
  onClickProject,
}) {
  return (
    <aside className="sidebar">
      <h2>Your projects</h2>
      <button onClick={onCreateNewProject}>+ Add Project</button>

      <div className="project-item-container">
        {projectsList.map((project, index) => (
          <div
            className="project-item"
            key={index}
            onClick={() => onClickProject(project)}
          >
            {project.title}
          </div>
        ))}
      </div>
    </aside>
  );
}
