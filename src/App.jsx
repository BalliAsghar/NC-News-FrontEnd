import Navbar from "./components/Narbar";
import Headlines from "./components/Headlines";
function App() {
  return (
    <div>
      <Navbar />
      <div className="ml-5 p-4">
        <button className=" bg-transparent raleway font-semibold text-5xl  py-5 px-10 box-border cursor-default border border-gray-600 rounded hover:translate-x-1 hover:bg-gray-900 hover:text-white">
          HEADLINES
        </button>
        <Headlines />
      </div>
    </div>
  );
}

export default App;
