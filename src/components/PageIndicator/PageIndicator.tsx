import React, { Component } from 'react';

type MyProps = {
    color: string
};

type MyState = {
    scrolled: any,
    scrollColor: string
};

class PageIndicator extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            scrolled: 0,
            scrollColor: this.props.color ? this.props.color : '#0b299f'
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollProgress);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollProgress);
    }

    scrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const windowHeight = scrollHeight - clientHeight;
        const scrolled = `${scrollPx / windowHeight * 100}%`;

        this.setState({
            scrolled: scrolled
        });
    }

    render() {
        const pageIndicatorStyle: React.CSSProperties = {
            background: '#d9d9d9',
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
            height: "2px",
            position: "fixed",
            top: "51px",
            left: 0,
            width: "100vw",
            zIndex: 99
        };

        const pageBarStyle: React.CSSProperties = {
            height: "3px",
            background: this.state.scrollColor,
            width: this.state.scrolled
        };

        return (
            <div className="pageIndicator" style={pageIndicatorStyle}>
                <div className="pageIndicator__bar" style={pageBarStyle}></div>
            </div>
        )
    }
}

export default PageIndicator
