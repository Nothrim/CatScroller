import React, {Component} from 'react';
import './App.css';
import {PictureFrame} from "./components/PictureFrame/PictureFrame";
import PictureScroller from "./components/PictureScroller/PictureScroller";

class App extends Component<{}, { catVideo: string, catImage: string }> {
    constructor(props: any) {
        super(props);
        this.state = {catVideo: "https://i.imgur.com/7nLm7si.mp4", catImage: "https://i.imgur.com/XSzjKZO.png"}
    }

    render() {
        return (
            <div className="App">
               <PictureFrame url={this.state.catVideo}/>
               <PictureFrame url={this.state.catImage}/>
               <PictureScroller/>
            </div>
        );
    }
}


export default App;