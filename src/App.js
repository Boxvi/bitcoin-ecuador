import './App.css';

function App() {
    const ambiente = process.env.REACT_APP_AMBIENTE;

    return (
        <>
            <h1>hola mundo del ambiente de:  {ambiente}</h1>
        </>
    );
}

export default App;
