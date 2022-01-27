import './App.css';
import "./scss/style.scss";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <>
       <div className="app">
        <Sidebar />
        <Dashboard />
         
       </div>
    </>
  );
}

export default App;
