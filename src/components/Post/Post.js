import React from "react";
import './Post.css';
import Gallery from '../Gallery/Gallery';
import { Meta, Paragraph, Image } from "./PostUtils";


export default function Post(props) {
    const { title, body, date, imgList } = props;
    const className = "Post";
    const { src, alt } = imgList[0];

    return (
        <div className={className}>
            <Meta className={className} title={title} date={date} />
            <Paragraph className={className} body={body} />
            {imgList.length > 1 ?
                <Gallery className={className} imgList={imgList} />
                :
                <Image className={`${className}-img`} src={src} alt={alt} />
            }
        </div>
    )
}