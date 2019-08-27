import React, { Component } from 'react';
import { Swipeable } from 'react-swipeable';

import Slide from './Slide';
import LeftArrow from './LeftNavigation';
import RightArrow from './RightNavigation';
import Pagination from './Pagination';

/* Styles */
import './Slider.scss';

class slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
            ],
            currentIndex: 0,
            translateValue: 0
        }
    }

    goToPrevSlide = () => {
        if (this.state.currentIndex === 0)
            return;

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth()
        }))
    }

    goToNextSlide = () => {
        console.warn(this.state.currentIndex, this.props.item.length - 1)
        if (this.state.currentIndex === this.props.item.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        // This will not run if we met the if condition above
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }

    goToSlide = (currentIndex) => {
        console.warn('click', this.state.translateValue + - ((this.slideWidth() * currentIndex) ))

        this.setState(prevState => ({
            currentIndex: currentIndex,
            translateValue: 0 + - ((this.slideWidth() * currentIndex) )
        }));
    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }

    render() {
        const config = {
            onSwipedLeft: this.goToNextSlide,
            onSwipedRight: this.goToPrevSlide,
            preventDefaultTouchmoveEvent: true,
            trackMouse: true,
            delta: 0,
            rotationAngle: 30
        };

        return (
            <div className="slider">
                <div className="slider__wrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s'
                    }}>
                    <Swipeable {...config} className="swipe">

                        {
                            this.props.item.map((item, i) => (
                                <Slide item={item} key={i} />
                            ))
                        }

                    </Swipeable>
                </div>

                <LeftArrow goToPrevSlide={this.goToPrevSlide} />
                <RightArrow goToNextSlide={this.goToNextSlide} />
                
                <Pagination item={this.props.item} action={this.goToSlide} />
            </div>
        )
    }
}

export default slider
