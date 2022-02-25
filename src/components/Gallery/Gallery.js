import React, { useState } from "react";
import { GalleryImage } from '../../components/Post/PostUtils';

//Displays all images associated with a post
export default function Gallery({ className, imgList }) {

    const [slide, setSlide] = useState(0);

    return (<div className={`${className}-Gallery`}>
        <div className="Post-Gallery-left" onClick={(event) => setSlide(slide > 0 ? slide - 1 : imgList.length)}></div>
        <div className="Post-Gallery-right" onClick={(event) => setSlide(slide < imgList.length ? slide + 1 : 0)}></div>
        <ul className="Post-Gallery-ul">
            {imgList.map(({ src, alt }, i) =>
                <GalleryImage key={i} className={`${className}-Gallery`} src={src} alt={alt} active={slide} />
            )}
        </ul>
    </div >
    )
}