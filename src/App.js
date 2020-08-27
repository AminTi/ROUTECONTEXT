import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Names } from "./context/NameContext"

import InputComp from "./components/InputComp"
import AboutUs from "./components/AboutUs"
import NavList from "./components/NavList"

function App() {
    const [save, setSave] = useState({ fristName: "", lastName: "" })

    return (
        <Router>
            <div className="App">
                <Names.Provider value={{ save, setSave }}>
                    <NavList />
                    <Switch>
                        <Route path="/" exact component={InputComp} />
                        <Route path="/aboutus" component={AboutUs} />
                    </Switch>
                </Names.Provider>
            </div>
        </Router>
    )
}

export default App
