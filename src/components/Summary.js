import React, { Component } from "react";
import SummaryOption from './SummaryOption';
import Total from './Total'


class Summary extends Component {

  render () {  
    return (
      <section className="main__summary">
        <h2>Your cart</h2>

        <SummaryOption selected={this.props.selected}/>

        <Total selected={this.props.selected}/>
       
      </section>
    )
  }
  
}

export default Summary;