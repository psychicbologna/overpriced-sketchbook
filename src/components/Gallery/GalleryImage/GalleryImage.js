import React, { useState, useEffect } from "react";

//Display an image associated with a gallery (nested)
export default function GalleryImage({ id, className, src, alt, direction }) {

    return <li key={id} className={`${className}-li`} direction={direction}>
        <img
            className={`${className}-img`}
            src={src}
            alt={alt}
        />
    </li >
}