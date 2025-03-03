import { useRef } from 'react';
import formatDate from '../utils/dateFormatter';

export default function ProjectDetails({ projectInfo, toggleModal, toggleAddTask, toggleRemoveTask, toggleDeleteProject }) {
  const inputTask = useRef();

  if (!projectInfo) {
    return (
      <div className="mt-18 text-center w-2/3">
        <img src="logo.png" className="w-16 h-16 object-contain mx-auto" />
        <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
        <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
        <button onClick={toggleModal} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
          Create new project
        </button>
      </div>
    );
  }

  function addNewTask() {
    if (inputTask.current.value) {
      toggleAddTask(inputTask.current.value);
      inputTask.current.value = "";
    }
  }

  function removeTask(taskId) {
    toggleRemoveTask(taskId);
  }

  function removeProject(projectId){
    toggleDeleteProject(projectId);
  }

  return (
    <>
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{projectInfo.name}</h1>
          <button onClick={() => removeProject(projectInfo.id)} className="text-stone-600 hover:text-stone-950">Delete</button>
        </div>
        <p className="mb-4 text-stone-400">{formatDate(projectInfo.date)}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{projectInfo.description}</p>
      </header>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex gap-4">
        <input ref={inputTask} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
        <button onClick={addNewTask} className="text-stone-800 hover:text-stone-950">
          Add Task
        </button>
      </div>
      {projectInfo.tasks.length > 0 ? (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {projectInfo.tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <p className="text-stone-800 whitespace-pre-wrap">{task.title}</p>
              <button
                onClick={() => removeTask(task.id)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-stone-500 mt-8">No tasks available. Add a new task to get started.</p>
      )}
    </>
  );
}
