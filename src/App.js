import {Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./layouts/dashboard";
import {Presentacion} from "./pages/information/presentacion";
import {Blog} from "./pages/information/blog";
import {License} from "./pages/information/license";
import {Prueba} from "./pages/information/prueba";
import {Auth} from "./layouts";


function App() {
    return (
        <Routes>

            <Route path="/dashboard/*" element={<Dashboard/>}/>
            <Route path="/auth/*" element={<Auth/>}/>
            {/*    <Route path="/auth/*" element={<Auth/>}/>*/}
            <Route path="" element={<Navigate to="/dashboard/home" replace/>}/>
            <Route path="/dashboard/presentation" element={<Presentacion/>}/>
            <Route path="/dashboard/blog" element={<Blog/>}/>
            <Route path="/dashboard/license" element={<License/>}/>
            <Route path="/dashboard" element={<Prueba/>}/>

        </Routes>
    );
}

export default App;
