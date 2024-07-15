import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return(
        <div className="flex items-center min-h-screen justify-center flex-col">
            <h1 className="font-bold text-8xl">Oops!</h1>
            <p className="my-4 text-2xl font-semibold">Sorry, an unexpected error has occurred.</p>
            <p className="text-xl">{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage