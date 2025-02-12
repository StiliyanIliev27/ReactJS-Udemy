export default function Sidebar() {
  return (
    <>
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        your projects
      </h2>
      <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
        + Add Project
      </button>
      <ul className="mt-8">
        <li className="flex justify-between my-4">
          <button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">
            Learning React
          </button>
        </li>
        <li className="flex justify-between my-4">
          <button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">
            Mastering React
          </button>
        </li>
      </ul>
    </>
  );
}
