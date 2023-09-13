import {
    HomeIcon,
    UserCircleIcon,
    TableCellsIcon,
    BellIcon,
    ArrowRightOnRectangleIcon,
    UserPlusIcon, PresentationChartLineIcon
} from "@heroicons/react/24/solid";
import {Home} from "./pages/dashboard/home";
import {Estadisticas} from "./pages/dashboard/estadisticas";
import {Ingresar} from "./pages/auth";
import Registrarse from "./pages/auth/registrarse";


const icon = {
    className: "w-5 h-5 text-inherit",
};

export const routes = [
    {
        layout: "dashboard",
        pages: [
            // {
            //     // icon: <HomeIcon {...icon} />,
            //     // name: "dashboard",
            //     // path: "",
            //     element: <Home/>,
            // },
            {
                icon: <HomeIcon {...icon} />,
                name: "divisas",
                path: "/home",
                element: <Home/>,
            },
            // {
            //     icon: <PresentationChartLineIcon {...icon} />,
            //     name: "estadisticas",
            //     path: "/estadisticas",
            //     element: <Estadisticas/>,
            // },
            //
            // {
            //     icon: <UserCircleIcon {...icon} />,
            //     name: "profile",
            //     path: "/profile",
            // },
            // {
            //     icon: <TableCellsIcon {...icon} />,
            //     name: "tables",
            //     path: "/tables",
            // },
            // {
            //     icon: <BellIcon {...icon} />,
            //     name: "notofications",
            //     path: "/notifactions",
            // },
            // {
            //     icon: <UserIcon {...icon} />,
            //     name: "sobre nosotros",
            //     path: "/presentacion",
            //     element: <Presentacion/>,
            // },
            // {
            //     icon: <GlobeAltIcon {...icon}/>,
            //     name: "blog",
            //     path: "/blog",
            //     element: <Blog/>,
            //
            // },
            // {
            //     icon: <ClipboardIcon {...icon}/>,
            //     name: "licencias",
            //     path: "/licencias",
            //     element: <License/>,
            //
            // },

        ],
    },

    {
        title: "Authorizacion",
        layout: "auth",
        pages: [
            {
                icon: <ArrowRightOnRectangleIcon {...icon} />,
                name: "Ingresar",
                path: "/ingresar",
                element: <Ingresar/>,
            },
            {
                icon: <UserPlusIcon {...icon} />,
                name: "Registrarse",
                path: "/registrarse",
                element: <Registrarse/>,

            },
        ],
    },
]

export default routes;
