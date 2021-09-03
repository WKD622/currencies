import {makeStyles} from "@material-ui/core/styles";
import {DRAWER_WIDTH} from "./consts";

export const useStyles = makeStyles((theme) => ({
    drawer: {
        width: DRAWER_WIDTH,
        flexShrink: 0,
    },
    drawerPaper: {
        width: DRAWER_WIDTH,
    },
    toolbar: theme.mixins.toolbar,
}));
