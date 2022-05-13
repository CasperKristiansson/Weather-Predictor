import { Placeholder } from "react-bootstrap";

export const promiseNoWeather = (promise, data, error) => {
    if (promise === null || promise === undefined) {
        return <span>no data</span>;
    } else if (data === null || data === undefined) {
        return (
            <Placeholder animation="glow">
                <Placeholder style={{ width: '100%' }} />
            </Placeholder>
        );
    } else if (error != null) {
        return <h1>ERROR</h1>;
    }
    return false;
}