import { useRouteError } from "react-router-dom";

export default function Error(){

    const error = useRouteError();

    return(

        <div>
            <h4>error</h4>
        </div>
    )
}