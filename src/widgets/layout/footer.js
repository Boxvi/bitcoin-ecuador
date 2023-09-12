import {Typography} from "@material-tailwind/react";
import {HeartIcon} from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

export function Footer({brandName, brandLink, routes}) {
    const year = new Date().getFullYear();

    return (
        <footer className="py-2">
            <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
                <Typography variant="small" className="font-normal text-inherit">
                    &copy; {year}, echo con {" "}
                    <HeartIcon className="-mt-0.5 inline-block h-3.5 w-3.5"/> de {" "}
                    <a
                        href={brandLink}
                        target="_blank"
                        className="transition-colors hover:text-blue-500"
                    >
                        {brandName}
                    </a>{" "}
                    para una mejor web.
                </Typography>
                <ul className="flex items-center gap-4">
                    {routes.map(({name, path}) => (
                        <li key={path}>
                            <Typography
                                as="a"
                                href={path}
                                target="_blank"
                                variant="small"
                                className="py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
                            >
                                {name}
                            </Typography>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}

const ambiente = process.env.REACT_APP_AMBIENTE;

Footer.defaultProps = {
    brandName: "ECUADOR BTC",
    brandLink: "https://bitcoin-ecuador.vercel.app/",
    routes: [
        {name: "ECUADOR BTC", path: "https://bitcoin-ecuador.vercel.app/"},
        {name: "Sobre Nosotros", path: "https://bitcoin-ecuador.vercel.app/presentation"},
        {name: "Blog", path: "https://bitcoin-ecuador.vercel.app/blog"},
        {name: "Licencias", path: "https://bitcoin-ecuador.vercel.app/license"},
        {name: `${ambiente}`, path: "https://bitcoin-ecuador.vercel.app/"},

    ],
};

Footer.propTypes = {
    brandName: PropTypes.string,
    brandLink: PropTypes.string,
    routes: PropTypes.arrayOf(PropTypes.object),
};

Footer.displayName = "/src/widgets/layout/footer";

export default Footer;
