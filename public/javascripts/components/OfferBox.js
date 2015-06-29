/* @jsx REACT.DOM */

var OfferBox = React.createClass({displayName: "OfferBox",

    click:function() {
        console.log('offerBox Clicked');
    },

    render: function() {

        var offers =this.props.data;


        return React.createElement("div", {className: "offerBox"}

        )
    }
});