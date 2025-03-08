import { createPortal } from "react-dom";
import { useRef } from "react";
import Input from "./Input";

const form = {
    name: '',
    description: '',
    date: ''
};

export default function CreateProjectModal({ isOpen, toggleSubmit }) {
    const name = useRef(null);
    const description = useRef(null);
    const date = useRef(null);

    function handleAddProject() {
        form.name = name.current.value;
        form.description = description.current.value;
        form.date = date.current.value;

        toggleSubmit(form);
    }
  return createPortal(
    <dialog open={isOpen} className="backdrop:bg-stone-900/90 p-8 rounded-md shadow-md">
        <form className="flex flex-col gap-4 mt-4 text-right">
            <button className="absolute top-2 right-3 text-xl text-stone-700 hover:text-red-500">X</button>
            <Input ref={name} type="text" placeholder="Project name..." label="Name"/>
            <Input ref={description} type="text" placeholder="Project description..." label="Description"/>
            <Input ref={date} type="date" label="Date"/>        
            <button onClick={handleAddProject} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Add</button> 
        </form>
    </dialog>,
    document.getElementById('modal-root')
  );
}
