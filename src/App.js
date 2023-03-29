import { Provider } from "react-redux";
import "./App.css";
import InputBtn from "./Components/InputBtn";
import PrintBtn from "./Components/PrintBtn";
import { store } from "./Components/Redux/store"

function App() {
  return (
    <div>
      <Provider store={store}>
        <InputBtn />
        <PrintBtn />
      </Provider>
    </div>
  );
}

export default App;
