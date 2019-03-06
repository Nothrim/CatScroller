import React, {FunctionComponent, useEffect, useState} from 'react';
import {PictureFrame} from "../PictureFrame/PictureFrame";
import {ScrollHook} from "./ScrollHook";


export const PictureScroller:FunctionComponent<{urls:Array<string>}> = ({urls}) => {
    const [listItems, setListItems] = useState(urls);
    const [isFetching, setIsFetching] = ScrollHook(fetchMoreListItems);

    function fetchMoreListItems() {
        setTimeout(() => {
            setListItems(prevState => ([...prevState,"https://i.imgur.com/7nLm7si.mp4"]));
            setIsFetching(false);
        }, 1);
    }

    return <div className={"pictureScroller"}>
        {listItems.map(listItem => <PictureFrame url={listItem}/>)}
        {isFetching}
    </div>
};


export default PictureScroller