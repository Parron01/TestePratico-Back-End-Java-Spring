import { Routes, Route } from "react-router-dom";
import { Users } from "./pages/Users";
import { Transactions } from "./pages/Transactions";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { MyTransactions } from "./pages/MyTransactions";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />} >
                <Route path="/" element={<Users />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/mytransactions" element={<MyTransactions />} />
            </Route>
            
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}
