/* @jsx REACT.DOM */

var HelloMessage = React.class({

    click:function(){
        console.log('clicked');
    },
    render: function(){
        return React.createElement("div", {onClick: this.click}, " Hello ", this.props.name)
    }
});


var parent = document.getElementById('viewContainer');

React.renderComponent(React.createElement(HelloMessage, {name: "lorenc"}), parent);
//# sourceMappingURL=HelloMessage.js.map