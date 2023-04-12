import {
    faCloudBolt,
    faCloudMeatball,
    faCloudRain,
    faCloudShowersHeavy,
    faCloudSun,
    faSmog,
    faSnowflake,
    faSun
} from "@fortawesome/free-solid-svg-icons";
import { WeatherCode } from './types'


const ZOOMLEVELS = [
    {area: 9500000, zoom: 2},
    {area: 800000, zoom: 3},
    {area: 600000, zoom: 4},
    {area: 100000, zoom: 4},
    {area: 30000, zoom: 6},
    {area: 10000, zoom: 7},
    {area: 2000, zoom: 8},
    {area: 600, zoom: 9},
    {area: 400, zoom: 10},
    {area: 300, zoom: 11},
    {area: 10, zoom: 12},
    {area: 2, zoom: 13},
    {area: 1, zoom: 14},
    {area: 0, zoom: 15}
];

const WEATHERCODES: WeatherCode[] = [
    {
        icon: faSun,
        name: 'Clear sky',
        codes: [0, 1, 2]
    }, {
        icon: faCloudSun,
        name: 'Partly cloudy',
        codes: [3],
    }, {
        icon: faSnowflake,
        name: 'Snowy',
        codes: [70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 85, 86, 87, 88],
    }, {
        icon: faCloudMeatball,
        name: 'Sandstorm / Snowstorm',
        codes: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
    }, {
        icon: faSmog,
        name: 'Fog',
        codes: [4, 5, 6, 7, 8, 9, 10, 11, 28, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
    }, {
        icon: faCloudRain,
        name: 'Drizzle',
        codes: [20, 21, 22, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
    }, {
        icon: faCloudShowersHeavy,
        name: 'Rain',
        codes: [60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 91, 92],
    }, {
        icon: faCloudShowersHeavy,
        name: 'Rain shower',
        codes: [25, 80, 81, 82],
    }, {
        icon: faCloudBolt,
        name: 'Thunderstorm',
        codes: [29, 95, 96, 97, 98, 99],
    },
    {
        icon: faCloudRain,
        name: 'Coming rain',
        codes: [12, 13, 14, 15, 16, 17, 18, 19]
    },
    {
        icon: faCloudMeatball,
        name: 'Rain and snow',
        codes: [23, 24, 26, 83, 84, 93, 94]
    },
    {
        icon: faCloudMeatball,
        name: 'Hail',
        codes: [27, 89, 90]
    }
]

export {ZOOMLEVELS, WEATHERCODES}