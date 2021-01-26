import React, {Component} from 'react';
import Options from './Feature-Item';

class Features extends Component {

  render() {
  
  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
        <Options 
        selected = {this.props.selected}
        features = {this.props.features}
        onUpdateFeature= {this.props.onUpdateFeature}/>
    </form>
  )
}
}

export default Features;