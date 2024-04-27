import Footer from "./components/home/Footer";
import Main from "./components/home/Main";
import Navbar from "./components/home/Navbar";

function App() {
  return (
    <div className="overflow-y-hidden">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
