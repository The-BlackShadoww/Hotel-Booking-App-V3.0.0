import Main from "./components/Main";
import { Provider } from "react-redux";
import reduxStore from "./redux/store";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div>
            <Provider store={reduxStore}>
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
