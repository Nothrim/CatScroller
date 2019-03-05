import React, {useEffect, useState} from 'react';
import {PictureFrame} from "../PictureFrame/PictureFrame";
import {ScrollHook} from "./ScrollHook";


export const PictureScroller = () => {
    const [listItems, setListItems] = useState(Array.from(Array(30).keys(), n => n + 1));
    const [isFetching, setIsFetching] = ScrollHook(fetchMoreListItems);

    function fetchMoreListItems() {
        setTimeout(() => {
            setListItems(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
            setIsFetching(false);
        }, 2000);
    }

    return <div className={"pictureScroller"}>
        {listItems.map(listItem => <PictureFrame url={"https://i.imgur.com/7nLm7si.mp4"}/>)}
        {isFetching}
    </div>
};



export default PictureScroller