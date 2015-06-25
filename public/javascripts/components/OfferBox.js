/* @jsx REACT.DOM */

var OfferBox = React.createClass({displayName: "OfferBox",

    click:function(){
        console.log('clicked');
    },
    render: function(){
        return React.createElement("div", {onClick: this.click}, 
            "Hello ", this.props.name, 
            React.createElement(Offer, null)
        )
    }
});


var parent = document.getElementById("viewContainer");

React.render(React.createElement(OfferBox, {name: "lorenc"}), parent);