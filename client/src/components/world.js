import React, { Component } from 'react';
import axios from "axios";

export class World extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             numbers: [],
             source:""
        }
    }

componentDidMount(){
    axios.get("http://localhost:5000")
    .then((res)=>{
        console.log(res.data) 
        this.setState({
            numbers: res.data.numbers,
            source: res.data.source
        })
    })

    .catch((err)=>{ return console.log(err) });
}

    render() {
      
const {numbers, source} = this.state;
        return (
            <div>
                <h1> world </h1>
             { numbers &&  (
                 <>
                 <h2> Confirmed cases globally:  { numbers[0] } </h2> 
                <h2> Recovered cases globally:  { numbers[1] } </h2>
                <h2> Deths cases globally:  { numbers[2] } </h2>
                </>)}

            </div>
        )
    }
}

export default World
