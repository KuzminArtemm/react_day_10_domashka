import "./App.css";
import TodoListProvider from "./components/Contexts/ToDoListContext";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  

  return (
    <TodoListProvider>
      <div className="container py-3 px-3 mx-0">
        <Header />
        <hr />
        <Main />
        <Footer />
      </div>
    </TodoListProvider>
  );
}

export default App;
