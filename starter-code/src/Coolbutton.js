import React from 'react';

class Coolbutton extends React.Component{
    render(){
        return(
            <div>
            <button class={this.props.classes}>Button 1</button>
            <button class="button is-small is-success">Button 2</button>
            </div>
        )
    }
}

export default Coolbutton;