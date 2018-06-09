import React, {Component} from 'react';
import notfound from '@/image/404.png'
export default class Notfound extends Component {
  state = {
    animated: ''
  };
  enter = () => {
    this.setState({animated: 'hinge'})
  };
  render (){
    return (
      <div className="center" style={{height: '100%', background: '#ececec', overflow: 'hidden'}}>
        <img src={notfound} alt="404" className={`animated swing ${this.state.animated}`} onMouseEnter={this.enter} />
      </div>
    )
  }
}
