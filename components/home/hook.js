import { useState, useEffect } from "react";

const defaultState = { image: undefined, status: "loading" };
export const useImage = ({ src, crossOrigin }) => {
    const [state, setState] = useState(defaultState);
    useEffect(() => {
        if (!src) return;
        const img = document.createElement("img");

        function onload() {
            setState({ image: img, status: "loaded" });
        }

        function onerror() {
            setState({ image: undefined, status: "failed" });
        }

        img.addEventListener("load", onload);
        img.addEventListener("error", onerror);
        // crossOrigin && (img.crossOrigin = crossOrigin);
        img.src = src;

        return () => {
            img.removeEventListener("load", onload);
            img.removeEventListener("error", onerror);
            setState(defaultState);
        };
    }, [src, crossOrigin]);

    // return array because it it better to use in case of several useImage hooks
    // const [background, backgroundStatus] = useImage(url1);
    // const [patter] = useImage(url2);
    return [state.image, state.status];
};
