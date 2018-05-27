import React from 'react';
import ButtonsComponent from './CountButtons';
import './count.css'
export default class App extends React.Component{
        constructor(props){
        super(props);
        this.state = {
            count:0
        }
        this.plusHandler = this.plusHandler.bind(this);
        this. minusHandler =this. minusHandler.bind(this);
        this.resetHandler = this.resetHandler.bind(this);
        }
        render(){
            return(
                <div>
                <div className="col-md-2"></div>
                <div className="col-md-8 card">
                    <h2 className="count-title">Count: {this.state.count}</h2>
                    <ButtonsComponent plusHandler = {this.plusHandler}
                    minusHandler = {this.minusHandler} resetHandler={this.resetHandler}/>
                </div>
                <div className="col-md-2"></div>
                </div>
            );
        }
        plusHandler(){
            this.setState((state) =>{
                return{
                    count: state.count+1
                }
            })
            
        }
        minusHandler(){
            this.setState((state) => ({
                count: state.count-1
            }))
        }
        resetHandler(){
            this.setState({
                count:0
            })
        }
}