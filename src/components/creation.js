import React, { Component } from 'react';
import './creation.css';

export default class creation extends Component {
    render() {
        return (
            <div className="creation">
                <div class="creations__header">
                    <h2 class="creations__title">our creations</h2>
                    <button class="button">see all</button>
                </div>
                <div className="creation-content">
                    <div className="creations__content__item earth">
                        <h3 className="creation-content-title" >
                            DEEP EARTH
                        </h3>
                    </div>
                    <div className="creations__content__item night">
                        <h3 className="creation-content-title" >
                            NIGHT ARCADE
                        </h3>
                    </div>
                    <div className="creations__content__item soccer">
                        <h3 className="creation-content-title" >
                            SOCCER TEAM VR
                        </h3>
                    </div>
                    <div className="creations__content__item gried">
                        <h3 className="creation-content-title" >
                            THE GRID
                        </h3>
                    </div>
                    <div className="creations__content__item above">
                        <h3 className="creation-content-title" >
                            FROM UP ABOVE VR
                        </h3>
                    </div>
                    <div className="creations__content__item pocket">
                        <h3 className="creation-content-title" >
                            POCKET BOREALIS
                        </h3>
                    </div>
                    <div className="creations__content__item curiosity">
                        <h3 className="creation-content-title" >
                            THE CURIOSITY
                        </h3>
                    </div>
                    <div className="creations__content__item fish">
                        <h3 className="creation-content-title" >
                            MAKE IT FISHEYE
                        </h3>
                    </div>
                </div>
                <div className="btn1" >
                    <button className="button1">see all</button>    
                    </div>
            </div>
        )
    }
}
