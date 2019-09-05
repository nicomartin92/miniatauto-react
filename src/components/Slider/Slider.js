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
            translateValue: 0,
            testValue: 0,
            mobile: false
        }
    }

    goToPrevSlide = () => {
        if (this.state.currentIndex === 0)
            return;

        let s = this.state.mobile ? document.querySelector('.swipe').clientWidth : document.querySelector('.swipe').clientWidth / this.props.view;
        let index = this.state.currentIndex;

        this.setState(prevState => ({
            currentIndex: this.state.currentIndex - 1,
            testValue: -(s*(index -1))
        }));
    }

    goToNextSlide = () => {
        if (this.state.currentIndex === this.props.item.length - 1) {
            return this.setState({
                currentIndex: 0,
                testValue: 0
            })
        }

        // This will not run if we met the if condition above
        let index = this.state.currentIndex + 1;
        let s = this.state.mobile ? document.querySelector('.swipe').clientWidth : document.querySelector('.swipe').clientWidth / this.props.view;

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: -(s*index),
            testValue: -(s*index)
        }));
    }

    goToSlide = (currentIndex) => {
        let s = this.state.mobile ? document.querySelector('.swipe').clientWidth : document.querySelector('.swipe').clientWidth / this.props.view

        this.setState(prevState => ({
            currentIndex: currentIndex,
            testValue: 0 + - ((s * currentIndex))
        }));
    }

    slideWidth = () => {
        let s = this.state.mobile ? document.querySelector('.swipe').clientWidth : document.querySelector('.swipe').clientWidth / this.props.view;
        let index = this.state.currentIndex
        this.setState(prevState => ({
            testValue: -(s*index)
        }));
        return -(s*index);
    }

    resize = () => {
        this.setState({mobile: window.innerWidth <= 760});
    }

    componentDidMount() {
        window.addEventListener("resize", this.slideWidth);
        window.addEventListener("resize", this.resize);
        this.resize();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.slideWidth);
        window.removeEventListener("resize", this.resize);
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
            <div className={ this.state.mobile ? `slider mobile slider-${this.props.view}` : `slider slider-${this.props.view}` }>
                <div className="slider__wrapper"
                    style={{
                        transform: `translateX(${this.state.testValue}px)`,
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

                <Pagination
                    item={this.props.item}
                    action={this.goToSlide}
                    active={this.state.currentIndex} />
            </div>
        )
    }
}

export default slider
