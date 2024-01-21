import "./App.css";
import PostsList from "./features/post/PostsList";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <main className="app">
        <PostsList />
      </main>
    </Provider>
  );
}

export default App;
