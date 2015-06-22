/* @jsx REACT.DOM */

var HelloMessage = React.class({

    click:function(){
        console.log('clicked');
    },
    render: function(){
        return <div onClick={this.click}> Hello {this.props.name}</div>
    }
});


var parent = document.getElementById('viewContainer');

React.renderComponent(<HelloMessage name="lorenc"/>, parent);