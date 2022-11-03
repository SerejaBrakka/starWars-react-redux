import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";
import NotFoundPage from "@containers/NotFoundPage";
import PersonPage from "@containers/PersonPage";
import FavouritePage from "@containers/FavouritePage";
import SearchPage from "@containers/SearchPage/SearchPage";

const routesConfig = [
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/people",
    element: <PeoplePage />,
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
