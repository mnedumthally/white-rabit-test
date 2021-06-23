import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { Home } from "./components/Home";

export const App = () => (
    <div>
        <Home/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'))