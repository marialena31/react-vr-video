import React from 'react'
import {
    View,
    asset,
    Environment,
    NativeModules
} from 'react-360';
import VideoModule from 'VideoModule';


export default class RockStarBeach extends React.Component {
    rockStarBeachVideo = VideoModule.createPlayer('rockstar');

    componentDidMount() {
        this.rockStarBeachVideo.play({
            source: {url: asset('./video/rockstar_beach.mp4').uri},
            muted: false,
            volume: 0.1
        });

        Environment.setBackgroundVideo(
            'rockstar',
            { rotateTransform: [{rotateY: '180deg'}]}
        )
    }

    componentWillUnmount() {
        this.rockStarBeachVideo.destroy();
    }

    render() {
        return(
            <View style={{width: 800, height: 450}} />
        )
    }
}