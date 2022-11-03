import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";
import NotFoundPage from "@containers/NotFoundPage";
import PersonPage from "@containers/PersonPage";
import FavouritePage from "@containers/FavouritePage";

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
];

export default routesConfig;
