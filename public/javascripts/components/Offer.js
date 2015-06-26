/* @jsx REACT.DOM */

var Offer = React.createClass({displayName: "Offer",

    click:function() {
        console.log(' Offer clicked');
    },

    render: function() {
        return React.createElement("table", {className: "table table-hover"}, 
            React.createElement("thead", null, 
                React.createElement("tr", null, 
                    React.createElement("th", null, " id  "), 
                    React.createElement("th", null, " name "), 
                    React.createElement("th", null, " price ")
                )
            ), 
            React.createElement("tbody", null, 

                React.createElement("tr", null, 
                        React.createElement("td", null, " ",  this.props.id, " "), 
                        React.createElement("td", null, " ",  this.props.name, " "), 
                        React.createElement("td", null, " ",  this.props.price, " ")
                ), "ga", 

                React.createElement("tr", null, 
                        React.createElement("td", null, " ",  this.props.id, " "), 
                        React.createElement("td", null, " ",  this.props.name, " "), 
                        React.createElement("td", null, " ",  this.props.price, " ")
                ), 

                React.createElement("tr", null, 
                        React.createElement("td", null, " ",  this.props.id, " "), 
                        React.createElement("td", null, " ",  this.props.name, " "), 
                        React.createElement("td", null, " ",  this.props.price, " ")
                )

            )
        )
    }
});