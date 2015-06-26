/* @jsx REACT.DOM */

var OfferBox = React.createClass({

    click:function() {
        console.log('clicked');
    },

    render: function() {
        return <div className="box">
            List of {this.props.name}
            <Offer name="ciao" id="1" price="33" />
        </div>
    }
});