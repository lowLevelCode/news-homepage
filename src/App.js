import Header from "./components/Header";
import SectionContent from "./components/Section-content";
import NewsContent from "./components/News-content";
import CardsContainer from "./components/Cards-container";

function App() {
  return (
    <div>
      <div className="p-4 lg:px-40 lg:py-10">
        <div className="flex flex-col gap-10">
          <Header/>
          <div className="flex justify-between gap-6 flex-col lg:flex-row">
            <div className="w-full lg:w-[70%]"><SectionContent/></div>
            <div className="w-full lg:w-[30%]"><NewsContent/></div>
          </div>
          <footer>
            <CardsContainer/>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
