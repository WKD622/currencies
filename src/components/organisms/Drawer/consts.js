import {CONVERTER_SCREEN_URL, EXCHANGE_RATES_SCREEN_URL} from "config/urls";
import TrendingUpIcon from "components/atoms/icons/TrendingUpIcon";
import SyncIcon from "components/atoms/icons/SyncIcon";

export const DRAWER_WIDTH = 240;

export const DRAWER_ITEMS = [
    {
        url: CONVERTER_SCREEN_URL,
        title: 'Currencies Converter',
        icon: <SyncIcon/>
    },
    {
        url: EXCHANGE_RATES_SCREEN_URL,
        title: 'Exchange Rates',
        icon: <TrendingUpIcon/>
    }
]
