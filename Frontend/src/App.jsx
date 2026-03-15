import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";

function App() {
  return (
    <div>
      <h1>Notes Dashboard</h1>

      <AddNote />
      <NotesList />
    </div>
  );
}

export default App;