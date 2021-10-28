import * as React from "react"
import './LikeButton.css'
import Like from './baseline_favorite_black_18dp.png'

export interface LikeButton {
}

export const LikeButton = (props: LikeButton) => {
    return <button><img src={Like}/></button>
};
