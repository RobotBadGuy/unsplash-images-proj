import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";

const App = () => {
  return (
    <main>
      <ThemeToggle></ThemeToggle>
      <SearchForm></SearchForm>
      <Gallery></Gallery>
    </main>
  );
};
export default App;

// npm i @tanstack/react-query-devtools
