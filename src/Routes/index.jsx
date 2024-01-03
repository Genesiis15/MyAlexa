import {
    createBrowserRouter,
} from "react-router-dom";
import App from '../App'
import { HomeView } from "../Page/Home/Home";
import { Echo } from '../Page/Echo/Echo'
import { Fire } from '../Page/Fire Tv/FireTv'
import { Shooping } from "../Page/Shooping/Shooping";
import { Swtich } from "../Page/Swtich/Swtich";
import { Ir } from '../Page/Ir/Ir'
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,

        children:

            [
                {
                    path: "/",
                    element: <HomeView />
                },

                {
                    path: "/echo",
                    element: <Echo />,
                },

                {
                    path: "/fire tv",
                    element: <Fire />,
                },
                {
                    path: "/swtich",
                    element: <Swtich />,
                },
                {
                    path: "/controlir",
                    element: <Ir />,
                },
                {
                    path: "/car",
                    element: <Shooping />
                }

            ],
    },
]);