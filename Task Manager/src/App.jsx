import { useState, useRef } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import CreateProjectDialog from "./components/CreateProjectDialog/CreateProjectDialog";
import LandingPage from "./components/LandingPage/LandingPage";
import Project from "./components/Project/Project";

/* project = {
  title: "",
  description: "",
  dueDate: "",
  tasks: ["", ""],
}; */

function App() {
  const [selectedProject, setSelectedProject] = useState();
  const [projectList, setProjectsList] = useState([]);
  const dialogRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();

  function onCreateNewProject() {
    dialogRef.current.showModal();
  }

  function onNewProjectSave() {
    setProjectsList((prevProjects) =>
      titleRef.current.value && descriptionRef.current.value
        ? [
            ...prevProjects,
            {
              id: Math.random().toString(),
              title: titleRef.current.value,
              description: descriptionRef.current.value,
              tasks: [],
            },
          ]
        : prevProjects,
    );

    dialogRef.current.close();
  }

  function onCloseDialog() {
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    dialogRef.current.close();
  }

  function onClickProjectItem(project) {
    dialogRef.current.close();
    setSelectedProject(project);
  }

  function onAddTask(task, id) {
    if (task) {
      setSelectedProject((prevProject) => ({
        ...prevProject,
        tasks: [...prevProject.tasks, task],
      }));

      setProjectsList((prevProjects) =>
        prevProjects.map((project) => {
          if (project.id === id) {
            return { ...project, tasks: [...project.tasks, task] };
          }
          return project;
        }),
      );
    }
  }

  function onDeleteProject(id) {
    setProjectsList((prevProjects) =>
      prevProjects.filter((project) => project.id !== id),
    );
    setSelectedProject();
  }

  return (
    <div className="project-container">
      <Sidebar
        projectsList={projectList}
        onCreateNewProject={onCreateNewProject}
        onClickProject={onClickProjectItem}
      ></Sidebar>
      {selectedProject && (
        <Project
          current={selectedProject}
          onAddTask={onAddTask}
          onDeleteProject={onDeleteProject}
        ></Project>
      )}
      {!selectedProject && (
        <LandingPage onCreateNewProject={onCreateNewProject}></LandingPage>
      )}
      <CreateProjectDialog
        ref={dialogRef}
        descriptionRef={descriptionRef}
        titleRef={titleRef}
        onNewProjectSave={onNewProjectSave}
        onCloseDialog={onCloseDialog}
      ></CreateProjectDialog>
    </div>
  );
}

export default App;
