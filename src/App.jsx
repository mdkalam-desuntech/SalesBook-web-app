import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ReportScreen from "./components/PageBody/ReportScreen";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <Header setIsShow={setIsShow} />
      <div className="flex ">
        <div
          className={`flex flex-col ${
            isShow ? "w-56" : "w-24"
          } bg-white border-r border-gray-300`}
        >
          <Sidebar isShow={isShow} />
        </div>
        <div className="flex-1 p-2">
          <ReportScreen />
        </div>
      </div>
    </>
  );
}
