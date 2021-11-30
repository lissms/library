import "./App.css";
import Layaut from "./app/layaut/Layaut";

import BookList from "./app/components/bookList/BookList.jsx";

function App() {
  return (
    <div className="App">
      <Layaut>
        <BookList></BookList>
      </Layaut>
    </div>
  );
}

export default App;
