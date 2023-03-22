import './App.css'
import Navigation from "./components/navigation/Navigation"
import Home from "./pages/Home";

function App() {
    return (
        <div className="App">

            <header className="App-header">
                <Navigation/>
            </header>
            <main>
                <Home/>
            </main>
        </div>
    )
}

export default App
