import {ZOOMLEVELS} from "../constants";

const getZoomLevel = (area: number): number => {
    for (let i = 0; i < ZOOMLEVELS.length; i++) {
        if (area >= ZOOMLEVELS[i].area) {
            return ZOOMLEVELS[i].zoom;
        }
    }
    return ZOOMLEVELS[ZOOMLEVELS.length - 1].zoom;
}

export default getZoomLevel