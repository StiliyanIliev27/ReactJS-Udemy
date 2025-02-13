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
    tasks: ["Learn advanced concepts", "Learn the basics"],
  },
];

function getProjectInfo(id) {
  return projects.find((project) => project.id === id);
}

function App() {
  const [isModalShown, setShowModal] = useState(false);
  const [projectsInfo, setProjects] = useState(projects);
  const [selectedProjectId, setSelectedProjectId] = useState(
    projects.length > 0 ? projects[0].id : null
  );

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

    console.log(projectsInfo);
  }

  function toggleClick(id) {
    setSelectedProjectId(id);
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
            projectInfo={() => getProjectInfo(selectedProjectId)}
          />
        </div>
      </main>
    </>
  );
}

export default App;
