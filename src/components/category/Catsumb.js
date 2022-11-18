import React, { Component } from 'react'
import Counter from './ex'

class Cat extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            first : "rate if u like ",
            sub : "like"
        };
    }
    
    componentDidMount() {
        // initial data fetch() calls here
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(data => this.setState(data))
          .catch(err => console.error(err));
      }

Downclick = ()=>{
    this.setState({
        first : "thanks",
        sub : "liked"
    })
}


    render() {
        return (
            <>
            <Counter />
        <h5>{this.state.first}</h5>
        <button onClick={this.Downclick}>{this.state.sub}</button>
        </>
        )
    }
}

export default Cat ;


