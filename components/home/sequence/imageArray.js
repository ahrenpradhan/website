import { defaults } from "lodash";
import { Images as DarkImages } from "public/potrait/background/dark";
import { Images as LightImages } from "public/potrait/background/light";
import { Images as BlackToWhiteTransitionImages } from 'public/potrait/effects/blackToWhite'
import { useImage } from "../hook";

export const BlackToWhiteTransitionArray = () => {
    return BlackToWhiteTransitionImages.map(e => useImage(e));
}

export const LightImageArray = () => {
    return LightImages.map(e => useImage(e));
}

export const DarkImageArray = () => {
    return DarkImages.map(e => useImage(e));
}
