import * as React from "react"
import './PictureFrame.css'
import {LikeButton} from "../LikeButton/LikeButton";

export interface PictureFrame {
    url: string
}

export const PictureFrame = (props: PictureFrame) => {
    let content;

    if (props.url.endsWith("mp4")) {
        content =
            <video className={"picture"} width="600px" height="600px" loop autoPlay muted={true}>
                <source src={props.url} type="video/mp4"/>
            </video>
    } else {
        content = <img className={"picture"} src={props.url}/>
    }
    const style = {
        backgroundImage: props.url
    };
    return <div style={style} className={"pictureFrame"}>{content}
        <LikeButton/>
    </div>
};
