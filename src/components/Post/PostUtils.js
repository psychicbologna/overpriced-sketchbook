import React from "react";

//Displays Post meta
export function Meta({ className, title, date }) {
    return <div className={`${className}-Meta`}>
        <h2 className={`${className}-Meta-h2`}>{title}</h2>
        <span className={`${className}-Meta-date`}>date: {date}</span>
    </div>
}

//Displays a paragraph
export function Paragraph({ className, body }) {
    return <p className={`${className}-p`}>{body}</p>
}

//Display a single image
export function Image({ className, src, alt }) {
    return <img className={className} src={src} alt={alt} />
}

//Display an image associated with a gallery (nested)
export function GalleryImage({ key, className, src, alt }) {
    return <li className={`${className}-li`}>
        <img
            className={`${className}-img`}
            src={src}
            alt={alt}
            onClick={(e) => lightbox(e)} />
    </li>
}


//Transform the browser for lightbox

export function lightbox(e) {

}