import Sidebar from "./components/Sidebar";
import ProjectDetails from "./components/ProjectDetails";
import CreateProjectModal from "./components/CreateProjectModal";
import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Learning React",
    description: "Learn React from the group up.",
    date: "Dec 29, 2024",
    tasks: [
      {
        id: 1,
        title: "Learn advanced concepts",
      },
      {
        id: 2,
        title: "Learn the basics",
      },
    ],
  },
];

function App() {
  const [isModalShown, setShowModal] = useState(false);
  const [projectsInfo, setProjects] = useState([...projects]);
  const [selectedProjectId, setSelectedProjectId] = useState(
    projects.length > 0 ? projects[0].id : null
  );

  function getProjectInfo(id) {
    return projectsInfo.find((project) => project.id === id);
  }

  function toggleModal() {
    setShowModal(true);
  }

  function toggleSubmit(form) {
    setShowModal(false);

    setProjects([
      ...projectsInfo,
      {
        id: projectsInfo.length + 1,
        name: form.name,
        description: form.description,
        date: form.date,
        tasks: [],
      },
    ]);
  }

  function toggleClick(id) {
    setSelectedProjectId(id);
  }

  function toggleAddTask(task) {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === selectedProjectId
          ? {
              ...project,
              tasks: [
                ...project.tasks,
                { id: project.tasks.length + 1, title: task },
              ],
            }
          : project
      )
    );
  }

  function toggleRemoveTask(taskId) {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === selectedProjectId
          ? {
              ...project,
              tasks: project.tasks.filter((task) => task.id !== taskId),
            }
          : project
      )
    );
  }

  function toggleDeleteProject(projectId){
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== projectId) 
    );
    setSelectedProjectId(null);
  }

  return (
    <>
      {isModalShown ? (
        <CreateProjectModal isOpen={isModalShown} toggleSubmit={toggleSubmit} />
      ) : undefined}
      <main className="h-screen my-8 flex gap-8">
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
          {projectsInfo && (
            <Sidebar
              toggleClickProject={toggleClick}
              toggleModal={toggleModal}
              projects={[...projectsInfo]}
            />
          )}
          {!projectsInfo && <Sidebar toggleModal={toggleModal} />}
        </aside>
        <div className="w-[35rem] mt-16">
          <ProjectDetails
            toggleModal={toggleModal}
            toggleAddTask={toggleAddTask}
            toggleRemoveTask={toggleRemoveTask}
            toggleDeleteProject={toggleDeleteProject}
            projectInfo={projectsInfo.find((p) => p.id === selectedProjectId)}
          />
        </div>
      </main>
    </>
  );
}

export default App;
