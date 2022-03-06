import React, { useState, useEffect } from "react";
import GalleryImage from './GalleryImage/GalleryImage';
import { Button } from '../../Utils';


//Displays all images associated with a post
const Gallery = ({ className, imgList }) => {

    const [state, setState] = useState(
        {
            slideList: imgList,
            direction: ''
        }
    )
    const [resetDirection, setResetDirection] = useState(false)

    useEffect(() => {
        if (!!state.direction && resetDirection) {
            setTimeout(() => {
                setState({
                    ...state,
                    direction: ''
                })
                setResetDirection(!resetDirection);
            }, 200)
        }
    });

    // const [slideList, setSlide] = useState(imgList);
    // const [exitDirection, setExitDirection] = useState('');
    // const [enterDirection, setEnterDirection] = useState('');
    // const [hide, toggleHide] = useState('false');

    const handleRightClick = (slides) => {

        const newSlides = [...slides];

        const slideSplice = newSlides.splice(newSlides.length - 1)

        newSlides.splice(0, 0, slideSplice[0]);
        return newSlides

    }

    const handleLeftClick = (slides) => {

        const newSlides = [...slides];

        const slideSplice = newSlides.splice(0, 1)

        newSlides.splice((newSlides.length), 0, slideSplice[0]);

        return newSlides;
    }

    return (
        <div className={`${className}-Gallery`}>
            <Button
                className="Post-Gallery-left"
                onClick={(event) => {
                    if (!resetDirection) {
                        setState({
                            ...state,
                            slideList: handleLeftClick(state.slideList),
                            direction: 'left'
                        });
                        setResetDirection(!resetDirection);
                    }
                }
                } />
            <Button
                className="Post-Gallery-right"
                onClick={(event) => {
                    if (!resetDirection) {
                        setState({
                            ...state,
                            slideList: handleRightClick(state.slideList),
                            direction: 'right'
                        });
                        setResetDirection(!resetDirection);
                    }
                }
                } />
            <ul className="Post-Gallery-ul">
                {/* <GalleryImage className={`${className}-Gallery`} src={src} alt={alt} props={{ exitDirection: state.exitDirection, enterDirection: state.enterDirection }} /> */}
                {state.slideList.map(({ src, alt }, i) => {

                    switch (i) {
                        case 0:
                            return <GalleryImage key={i} id={i} className={`Gallery-left ${className}-Gallery`} src={src} alt={alt} direction={!!state.direction ? `left-${state.direction}` : 'left'} />;
                        case 1:
                            return <GalleryImage key={i} id={i} className={`Gallery-center ${className}-Gallery`} src={src} alt={alt} direction={!!state.direction ? `center-${state.direction}` : 'center'} />;
                        case 2:
                            return <GalleryImage key={i} id={i} className={`Gallery-right ${className}-Gallery`} src={src} alt={alt} direction={!!state.direction ? `right-${state.direction}` : 'right'} />;
                        default:
                            return null;
                    }
                }
                )}
            </ul>
        </div >
    )
}

export default Gallery;