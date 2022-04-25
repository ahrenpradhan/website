import React, { useState, useRef, useEffect, forwardRef } from "react";
import { Skeleton } from "../skeleton";
import { DarkImageArray, LightImageArray, BlackToWhiteTransitionArray } from "./imageArray";

const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        let id = setInterval(tick, delay);
        return () => clearInterval(id);
    }, [delay]);
}

// const ImageSequence = forwardRef(({ progress }, ref) => {
const ImageSequence = forwardRef(({ progress }, ref) => {
    // let index = Math.round(progress * 1 * (newImages.length - 1));
    // const [nowtime, setNow] = useState(progress || 0);
    const videoRef = useRef();
    const handleTime = useRef();
    handleTime.current = () => {
        // console.log(videoRef.current.currentTime)
        // console.log(parseFloat(progress * 10).toFixed(2))
        // videoRef.current.currentTime = parseFloat(progress * videoRef.current.duration)
        videoRef.current.currentTime = Math.round(progress * 1000) / 100
    }
    useInterval(() => {
        if (videoRef?.current && progress != null) {
            // let now = videoRef.current.currentTime;
            // let dest = Math.round(progress * 10);
            // now += (dest - now) * 0.1;
            // videoRef.current.currentTime = now;
            videoRef.current.currentTime = Math.round(progress * 1000) / 100
        }
    }, 66.6);
    // let timer = null;
    // useEffect(() => {
    //     if (timer == null && videoRef?.current && progress != null) {
    //         console.log('start')
    //         timer = setInterval(() => {
    //             handleTime.current()
    //         }, 33.3)
    //     }
    //     return () => {
    //         console.log('end')
    //         clearInterval(timer)
    //     }
    // }, [, videoRef, progress])

    return (
        <video ref={videoRef} src="/potrait/dark/background.webm" defaultMute={true} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
    )
});

export default ImageSequence;
