import './App.css'
import Navigation from "./components/navigation/Navigation"
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <main>
                <Home/>
            </main>
            <Footer />
        </div>
    )
}

export default App
