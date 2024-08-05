import "./App.css";
import Header from "./components/Header";
import ReportScreen from "./components/PageBody/ReportScreen";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex ">
        <div className="flex flex-col w-56 bg-white border-r border-gray-300">
          <Sidebar />
        </div>
        <div className="flex-1 p-2">
          <ReportScreen />
        </div>
      </div>
    </>
  );
}
