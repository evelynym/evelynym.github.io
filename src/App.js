import React from "react"
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom"
import Header from "./components/Header"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Experiences from "./pages/Experiences"

class App extends React.Component{
    render(){
        return(
            <div className="portfolio">
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/portfolio" element ={<Home />}> </Route>
                        <Route path="/portfolio/about" element ={<About />}> </Route>
                        <Route path="/portfolio/experiences" element ={<Experiences />}> </Route>
                        <Route path="/portfolio/contact" element ={<Contact />}> </Route>
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default App