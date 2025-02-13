export default function Sidebar({ toggleModal, toggleClickProject, projects }) {
    let projectNames = [];
    if(projects) {
        projectNames = projects.filter(project => project.name && project.id);
    }

    function addProject() {
        toggleModal();
    }

    function toggleClick(id){
        toggleClickProject(id);
    }

  return (
    <>
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        your projects
      </h2>
      <button onClick={addProject} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
        + Add Project
      </button>
      {projectNames.length > 0 && (
        <ul className="mt-8">
          {projectNames.map(project => (
            <li key={project.id} className="flex justify-between my-4">
              <button onClick={() => toggleClick(project.id)} className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">
                {project.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
