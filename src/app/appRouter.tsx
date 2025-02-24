import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import { AllCats } from "@/pages/allCats";
import { FavoriteCats } from "@/pages/favoriteCats";
import { AppRouter } from "@/shared/const/router";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: AppRouter.ALL_CATS,
        element: <AllCats />,
      },
      {
        path: AppRouter.FAVORITE_CATS,
        element: <FavoriteCats />,
      },
    ],
  },
]);
