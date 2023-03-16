import "./App.css";
import Navbar from "./components/NavbarComponent";
import Searchbar from "./components/SearchComponent";

function App() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      {/* <div className="max-w-2xl mx-auto px-4 py-8 lg:max-w-7xl grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3">
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
      <Recipe />
      </div> */}
    </div>
  );
}

export default App;
