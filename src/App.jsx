import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/loginPage/LoginPage";
import OrderPage from "./components/pages/orderPage/OrderPage";
import ErrorPage from "./components/pages/errorPage/ErrorPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/order/:userName" element={<OrderPage />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
    );
}

export default App;
