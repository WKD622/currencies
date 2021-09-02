import './App.css';
import {renderRoutes} from "helpers/routes";
import routesDefinitions from "routes";
import {Switch} from "react-router-dom";

function App() {
    return (
        <Switch>
            {renderRoutes(routesDefinitions)}
        </Switch>
    );
}

export default App;
