import {BrowserRouter, Switch, Route} from 'react-dom'



export default function Router() {
    return (

<BrowserRouter>
<Switch>
    <Route exact path="/">
        <Pokelist/>
    </Route>
    <Route exact path="/page/:page">
        <Pokelist/>
    </Route>
    <Route exact path="/character/:id">
        <PokeDetail/>
    </Route>
    <Route>
        <Pokedex/>
    </Route>
    <Route>
        <ErrorPage/>
    </Route>
</Switch>
</BrowserRouter>
    )
}