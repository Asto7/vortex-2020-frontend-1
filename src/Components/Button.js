import * as React from 'react';
import '../styles/Button.css';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
      }
render(){
        return (
<div  class="cover">
    <div className="wrapper">
         <a href={this.props.href} style={{padding:'15px 30px',border:'2px solid #FFF'}} className="btn10">
                <span>{this.props.text}</span>
             <div className="transition"></div>
         </a>
  </div>
</div>
        )
    }
}