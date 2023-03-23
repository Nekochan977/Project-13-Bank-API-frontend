import './App.css'
// import Navigation from "./components/navigation/Navigation"
// import Footer from "./components/footer/Footer"
import Layout from "./components/layout/Layout";
import Home from "./pages/Home"
import {HOME} from "./routes"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path={HOME} element={<Layout />}>  {/* adds the layout on all pages */}
                        <Route index element={<Home />} />
                    </Route>

                </Routes>
            </Router>
        </div>
    )
}

export default App
