import React from "react";
import {BrowserRouter, Switch, Route} from 'react-dom'
import CardDetails from "../Components/CardDetails";
import CardPoke from "../Components/CardPoke";
import ErrorPage from "../Pages/Error/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";



export default function Router() {
    return (

<BrowserRouter>
<Switch>
    <Route exact path="/">
        <CardPoke/>
    </Route>
    <Route exact path="/page/:page">
        <CardPoke/>
    </Route>
    <Route exact path="/character/:id">
        <CardDetails/>
    </Route>
    <Route>
        <HomePage/>
    </Route>
    <Route>
        <ErrorPage/>
    </Route>
</Switch>
</BrowserRouter>
    )
}