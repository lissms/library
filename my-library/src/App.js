import "./App.css";

//REACT-ROUTER-DOM
import { Switch, Route } from "react-router-dom";
//REDUX
import { connect } from "react-redux";

import Loader from "./app/components/loader/Loader";

//COMPONENT
import BookList from "./app/components/bookList/BookList.jsx";
import BookDetail from "./app/components/bookDetail/BookDetail";
import UpdateBook from "./app/components/update/UpdateBook";
import UpdateAuthor from "./app/components/update/UpdateAuthor";
import AddBook from "./app/components/addBook/AddBook";
import AddAuthor from "./app/components/addAuthor/AddAuthor";

function App(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <BookList></BookList>
        </Route>

        <Route exact path="/book/add">
          <AddBook />
        </Route>

        <Route exact path="/author/add">
          <AddAuthor />
        </Route>

        <Route exact path="/book/detail/:id">
          <BookDetail></BookDetail>
        </Route>

        <Route exact path="/book/update/:id">
          <UpdateBook />
        </Route>
        <Route exact path="/author/update/:authorId">
          <UpdateAuthor />
        </Route>
      </Switch>
      {props.isLoadingData ? <Loader /> : null}
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoadingData: state.isLoadingData,
});

export default connect(mapStateToProps, null)(App);
