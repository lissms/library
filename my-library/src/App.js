import "./App.css";

//REACT-ROUTER-DOM
import { Switch, Route } from "react-router-dom";

//Component
import BookList from "./app/components/bookList/BookList.jsx";
import BookDetail from "./app/components/bookDetail/BookDetail";
import UpdateBook from "./app/components/update/UpdateBook";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <BookList></BookList>
      </Route>

      <Route exact path="/book/detail/:id">
        <BookDetail></BookDetail>
      </Route>

      <Route exact path="/book/update/:id">
        <UpdateBook />
      </Route>
    </Switch>
  );
}

export default App;
