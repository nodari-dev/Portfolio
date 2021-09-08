import React from 'react';
import './style.scss'

class CustomLink extends React.Component<any, any>{
    constructor(props: string ) {
        super(props);
        this.state = {
            link: '#',
            text: 'link'
        };
    }
    componentDidMount() {
        this.setState({
            link: this.props.link,
            text: this.props.text
        })
    }

    render(){
        const link = this.state.link;
        const text = this.state.text;
        return(
            <a href={link} className={'button-style'}>{text}</a>
        )
    }
}

export default CustomLink;
