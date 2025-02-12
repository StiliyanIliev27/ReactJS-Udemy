import Sidebar from "./components/Sidebar";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
          <Sidebar />
        </aside>
        <div className="w-[35rem] mt-16">
          <ProjectDetails />
        </div>
      </main>
    </>
  );
}

export default App;
