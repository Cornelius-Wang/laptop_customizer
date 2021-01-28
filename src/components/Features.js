import React, {Component} from 'react';
import Options from './Feature-Item';

class Features extends Component {

  render() {
  
  return (
        <Options 
        selected = {this.props.selected}
        features = {this.props.features}
        onUpdateFeature= {this.props.onUpdateFeature}/>

  )
}
}

export default Features;