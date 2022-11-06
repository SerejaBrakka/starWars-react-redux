import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";
import NotFoundPage from "@containers/NotFoundPage";
import PersonPage from "@containers/PersonPage";
import FavouritePage from "@containers/FavouritePage";
import SearchPage from "@containers/SearchPage/SearchPage";
import PlanetsPage from "@containers/PlanetsPage";
import PlanetPage from "@components/PlanetPage";

const routesConfig = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/people",
    element: <PeoplePage />,
  },
  {
    path: "/planet",
    element: <PlanetsPage />,
  },
  {
    path: "/planet/:id",
    element: <PlanetPage />,
  },
  {
    path: "/people/:id",
    element: <PersonPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/favourites",
    element: <FavouritePage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
];

export default routesConfig;
