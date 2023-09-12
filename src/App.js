import {Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./layouts/dashboard";


function App() {
    const ambiente = process.env.REACT_APP_AMBIENTE;

    return (
        <Routes>
            <Route path="/dashboard/*" element={<Dashboard/>}/>
            {/*    <Route path="/auth/*" element={<Auth/>}/>*/}
            <Route path="*" element={<Navigate to="/dashboard/home" replace/>}/>
        </Routes>

        // <>
        //
        //     {/*<DashboardNavbar/>*/}
        //
        //     <Navbar routes={['1','2']}/>
        //
        //
        //
        //     <h1>hola mundo del ambiente de: {ambiente}</h1>
        //
        //     <h1 className=" text-3xl font-bold underline">
        //         Hello world!
        //     </h1>
        //
        //
        //
        //     <Footer/>
        //
        // </>


    );
}

export default App;


/*
@import url('https://fonts.googleapis.com/css2?family=Lunasima:wght@400;700&family=Roboto:wght@100;300;400;500;700&display=swap');

*{
  margin: 0;
  padding: 0;
  font-family: 'Lunasima', sans-serif;
}

 */
