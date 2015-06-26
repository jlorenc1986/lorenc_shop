/* @jsx REACT.DOM */

var OfferBox = React.createClass({displayName: "OfferBox",

    click:function() {
        console.log('clicked');
    },

    render: function() {
        return React.createElement("div", {className: "box"}, 
            "List of ", this.props.name, 
            React.createElement(Offer, {name: "ciao", id: "1", price: "33"})
        )
    }
});