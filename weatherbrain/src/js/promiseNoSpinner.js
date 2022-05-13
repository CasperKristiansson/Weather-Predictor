import { Spinner } from "react-bootstrap";

export const promiseNoSpinner = (promise, data, error) => {
    if (promise === null || promise === undefined) {
        return <span>no data</span>;
    } else if (data === null || data === undefined) {
        return (
            <Spinner animation="border" role="status" size="lg">
                <span></span>
            </Spinner>
        );
    } else if (error != null) {
        return <h1>ERROR</h1>;
    }
    return false;
}