import {Dashboard} from "../../layouts";
import {Typography} from "@material-tailwind/react";

export function Prueba() {
    return (
        <Dashboard pageTitle="">
            <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
                <div
                    className="absolute top-0 h-full w-full bg-[url('https://www.criptonoticias.com/wp-content/uploads/2021/03/comprar-vender-Ecuador-bitcoin.jpg.webp')] bg-cover bg-center"/>
                <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center"/>
                <div className="max-w-8xl container relative mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-6 font-black"
                            >
                                ECUADOR BTC
                            </Typography>
                            <Typography variant="lead" color="white" className="opacity-80">
                                ¡Bienvenido a ECUADOR BTC! Somos una plataforma diseñada por ecuatorianos, para
                                ecuatorianos, que te permite comprar y vender criptomonedas de forma rápida y sencilla
                                en Ecuador. Nuestro compromiso es brindarte una experiencia segura y accesible para que
                                puedas participar en el emocionante mundo de las criptomonedas sin
                                complicaciones. </Typography>

                        </div>
                    </div>

                </div>
            </div>
        </Dashboard>
    )
}
