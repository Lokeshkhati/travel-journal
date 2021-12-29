import Header from "./components/Header";
import Main from "./components/Main";
import data from "./components/data";

function App() {
  const journalList = data.map((item) => {
    return (
      <Main
        item = {item}
      />
    );
  });

  return (
    <div className="App">
      <Header />
      {journalList}
    </div>
  );
}

export default App;
