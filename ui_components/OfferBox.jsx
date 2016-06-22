/* @jsx REACT.DOM */

var OfferBox = React.createClass({

    click:function() {
        console.log('offerBox Clicked');
    },

    render: function() {

        var offers =this.props.data;


        return <div className="offerBox">

        </div>
    }
});