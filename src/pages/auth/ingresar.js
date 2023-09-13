import {Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Input, Typography} from "@material-tailwind/react";
import {Link} from "react-router-dom";

export function Ingresar() {
    return (
        <>
            <img
                src="https://www.criptonoticias.com/wp-content/uploads/2021/03/comprar-vender-Ecuador-bitcoin.jpg.webp"
                className="absolute inset-0 z-0 h-full w-full object-cover"
                alt={"btc ecuador"}/>
            <div className="absolute inset-0 z-0 h-full w-full bg-black/50"/>
            <div className="container mx-auto p-4">
                <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
                    <CardHeader
                        variant="gradient"
                        color="yellow"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="h3" color="white">
                            INGRESAR
                        </Typography>
                    </CardHeader>

                    <CardBody className="flex flex-col gap-4">
                        <Input type="email" label="Email" size="lg" color="blue"/>
                        <Input type="password" label="Password" size="lg" color="blue"/>
                        <div className="-ml-2.5">
                            <Checkbox color="blue" label="Remember Me"/>
                        </div>
                    </CardBody>

                    <CardFooter className="pt-0"
                    >
                        <Button variant="gradient" fullWidth color="red">
                            INGRESAR
                        </Button>
                        <Typography variant="small" className="mt-6 flex justify-center">
                            No tienes una cuenta?{" "}
                            <Link to={"/auth/registrarse"}>
                                <Typography
                                    as="span"
                                    variant="small"
                                    color="blue"
                                    className="ml-1 font-bold"
                                >
                                    Registrarse
                                </Typography>
                            </Link>
                        </Typography>

                    </CardFooter>
                </Card>
            </div>

        </>
    )
}

export default Ingresar;
