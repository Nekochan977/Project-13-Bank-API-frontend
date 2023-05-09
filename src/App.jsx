import './App.css'
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import User from "./pages/User"
import {HOME, LOGIN, USER} from "./routes"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
/**
 * @returns the parent and the nested routes
 */

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path={HOME} element={<Layout />}>  {/* adds the layout on all pages */}
                        <Route index element={<Home />} />
                        <Route path={LOGIN} element={<Login />} />
                        <Route path={USER} element={<User />} />
                    </Route>

                </Routes>
            </Router>
        </div>
    )
}

export default App
