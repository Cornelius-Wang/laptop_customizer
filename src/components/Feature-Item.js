import React, {Component} from 'react';
import Specs from './Specifications';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class FeatureItem extends Component {
    
    render() {
        return(
          <form className="main__form">
          <h2>Customize your laptop</h2>
          <Specs 
          selected = {this.props.selected}
          features = {this.props.features}
          onUpdateFeature= {this.props.onUpdateFeature}
          />
          </form>
        )
    }
}

export default FeatureItem;