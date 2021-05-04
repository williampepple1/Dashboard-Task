import "./App.css";
import SearchForm from "./comp/SearchForm";
import Categories from "./comp/Categories";
import Profits from "./comp/ProfitableItems";
import Statistics from "./comp/Statistics";
import Products from "./comp/Products";
import Overview from "./comp/Overview";
import Latest from "./comp/Latest";
import Sales from "./comp/Sales";

function App() {
  return (
    <div className="App">
      <div className="second-column">
        <SearchForm />
        <Categories />
        <section className="statistics-profits">
          <Profits />
          <Statistics />
        </section>
        <Products />
      </div>
      <div className="third-column">
        <Overview />
        <Latest />
        <Sales />
      </div>
    </div>
  );
}

export default App;
