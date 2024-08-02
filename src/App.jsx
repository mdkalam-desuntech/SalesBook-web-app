import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <>
      <Header />
      <div className="flex h-screen bg-gray-100">
        <div className="flex flex-col w-56 bg-white border-r border-gray-300">
          <Sidebar />
        </div>
        <div className="flex-1 p-6">
          <h1 className="text-3xl font-bold">Main Content</h1>
          <p className="mt-4 text-gray-600">This is the main content</p>
        </div>
      </div>
    </>
  );
  
}
