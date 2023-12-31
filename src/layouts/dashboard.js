import {Routes, Route} from "react-router-dom";
import {Cog6ToothIcon} from "@heroicons/react/24/solid";
import {IconButton} from "@material-tailwind/react";
import {
    Configurator,
    DashboardNavbar,
    Footer,
    Sidenav
} from "../widgets/layout";
import {routes} from "../routes";
import {setOpenConfigurator, useMaterialTailwindController} from "../context";
import {Presentacion} from "../pages/information/presentacion";

export function Dashboard({pageTitle, children}) {
    const [controller, dispatch] = useMaterialTailwindController();
    const {sidenavType} = controller;

    return (
        <div className="min-h-screen bg-blue-gray-50/50">
            <Sidenav
                routes={routes}
                brandImg={
                    sidenavType === "dark" ? "../logo.svg" : "../logo.svg"
                }
            />
            <div className="p-4 xl:ml-80">
                <DashboardNavbar/>
                <Configurator/>
                <IconButton
                    size="lg"
                    color="white"
                    className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
                    ripple={false}
                    onClick={() => setOpenConfigurator(dispatch, true)}
                >
                    <Cog6ToothIcon className="h-5 w-5"/>
                </IconButton>
                <h1>{pageTitle}</h1>
                <div>{children}</div>
                <Routes>
                    {routes.map(
                        ({layout, pages}) =>
                            layout === "dashboard" &&
                            pages.map(({path, element}) => (
                                <Route exact path={path} element={element}/>
                            ))
                    )}
                </Routes>
                <div className="text-blue-gray-600">
                    <Footer/>
                </div>
            </div>
        </div>
    )

}

export default Dashboard;
