import "./App.css";
import StickyNotesAdd from "./components/StickyNotesAdd";
import StickyNotesList from "./components/StickyNotesList";

function App() {
  return (
    <div className="App">
      <StickyNotesAdd />
      <StickyNotesList />
    </div>
  );
}

export default App;
