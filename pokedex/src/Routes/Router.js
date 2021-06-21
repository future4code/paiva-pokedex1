import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import ErrorPage from "../Pages/Error/ErrorPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/pokedex">
          <PokedexPage />
        </Route>

        <Route exact path="/pokemon/:id">
          <DetailsPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router