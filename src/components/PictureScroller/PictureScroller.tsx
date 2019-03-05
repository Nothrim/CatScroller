import React, {useEffect, useState} from 'react';
import {PictureFrame} from "../PictureFrame/PictureFrame";


const PictureScroller = () => {
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            setIsLoading(true)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);
    const [listItems, loadScrollerData] = useState(Array.from(Array(4).keys(), n => n + 1));
    const [isLoading, setIsLoading] = useState(false)
    return <div className={"pictureScroller"}>
        {listItems.map(listItem => <PictureFrame url={"https://i.imgur.com/7nLm7si.mp4"}/>)}
    </div>
};


export default PictureScroller