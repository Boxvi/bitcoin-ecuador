import './App.css';

function App() {

    const desarrollo = process.env.REACT_APP_DEVELOPMENT;
    const produccion = process.env.REACT_APP_PRODUCTION;

    return (
        <>
            <h1>hola mundo del desarrollo:  {desarrollo}</h1>
            <h1>hola mundo de produccion:  {produccion}</h1>
        </>
    );
}

export default App;
