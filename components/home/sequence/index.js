import React, { forwardRef } from "react";
import { Skeleton } from "../skeleton";
import { DarkImageArray, LightImageArray, BlackToWhiteTransitionArray } from "./imageArray";


var locallyStoredImages = null;

const ImageSequence = forwardRef(({ progress }, ref) => {
    const temp_DarkImageArray = DarkImageArray()
    const tenp_LightImageArray = LightImageArray();
    const temp_BlackToWhiteTransition = BlackToWhiteTransitionArray();
    const newImages = [
        ...temp_DarkImageArray,
        ...temp_DarkImageArray.reverse().filter((e, i) => i % 2 == 0),
        ...temp_BlackToWhiteTransition,
        ...tenp_LightImageArray,
        ...tenp_LightImageArray.reverse().filter((e, i) => i % 2 == 0),
        ...temp_BlackToWhiteTransition.reverse().filter((e, i) => i % 2 == 0),
    ];

    let index = Math.round(progress * 1 * (newImages.length - 1));
    if (newImages[index][1] !== undefined) {
        if (newImages[index][1] === "loading") {
            return <Skeleton width="100%" height="100%" />;
        } else {
            return newImages.map((item, i, self) => {
                return (
                    // <img src={item[0] ? item[0].src : null} style={{
                    //     display: (i !== index) ? "none" : "block",
                    //     display: 'block',
                    //     // height: (i !== index) ? "0" : "100%",
                    //     height: "100%",
                    //     width: "100%",
                    //     objectFit: 'cover'
                    // }}
                    // />
                    <span
                        ref={ref}
                        key={i}
                        style={{
                            // display: (i !== index) ? "none" : "block",
                            // height: "100%",
                            display: 'block',
                            height: (i !== index) ? "0" : "100%",
                            width: "100%",
                            backgroundImage: `url('${item[0] ? item[0].src : null}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    />
                )
            });
        }
    }
});

export default ImageSequence;
