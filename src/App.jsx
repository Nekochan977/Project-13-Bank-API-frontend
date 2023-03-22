import './App.css'
import Navigation from "./components/navigation/Navigation"
import Hero from "./components/hero/Hero"
import Features from "./components/features/Features";

function App() {
    return (
        <div className="App">

            <header className="App-header">
                <Navigation/>
            </header>
            <main>
                <Hero/>
                <Features />
            </main>
        </div>
    )
}

export default App
