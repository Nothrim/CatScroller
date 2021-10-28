import React, {FunctionComponent, useEffect, useState} from 'react';
import {PictureFrame} from "../PictureFrame/PictureFrame";
import {ScrollHook} from "./ScrollHook";


export const PictureScroller: FunctionComponent<{ urls: Array<string> }> = ({urls}) => {
    const [listItems, setListItems] = useState(urls);
    const [isFetching, setIsFetching] = ScrollHook(fetchMoreListItems);
    const [catCounter,setCatCounter] = useState(0);
    function fetchMoreListItems() {
        setTimeout(() => {
            setListItems(prevState => ([...prevState,getCat()]));
            setIsFetching(false);
        }, 1);
    }

    function getCat() {
        let cats = ["https://i.imgur.com/7nLm7si.mp4", "https://i.imgur.com/dRxnay8.jpg", "https://i.imgur.com/grXqcNw.mp4", "https://i.imgur.com/wYTCtRu.jpeg"]
        setCatCounter(prevState => (prevState + 1) % cats.length)

        return cats[catCounter]
    }

    return <div className={"pictureScroller"}>
        {listItems.map(listItem => <PictureFrame url={listItem}/>)}
        {isFetching}
    </div>
};


export default PictureScroller
