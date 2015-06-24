/* @jsx REACT.DOM */

var HelloMessage = React.createClass({displayName: "HelloMessage",

    click:function(){
        console.log('clicked');
    },
    render: function(){
        return React.createElement("div", {onClick: this.click}, " Hello ", this.props.name)
    }
});


var parent = document.getElementById("viewContainer");

React.render(React.createElement(HelloMessage, {name: "lorenc"}), parent);