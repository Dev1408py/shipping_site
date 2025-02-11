import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import "./mediaquery.css";
export const backend_url = "http://localhost:5000";

function App() {
  return (
    <div as="body" className="App">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
