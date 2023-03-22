import './App.css'
import Navigation from "./components/navigation/Navigation"
import Hero from "./components/hero/Hero"

function App() {
    return (
        <div className="App">

            <header className="App-header">
                <Navigation/>
                <Hero/>
            </header>
        </div>
    )
}

export default App
