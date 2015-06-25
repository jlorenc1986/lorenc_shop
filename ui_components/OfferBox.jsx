/* @jsx REACT.DOM */

var OfferBox = React.createClass({

    click:function(){
        console.log('clicked');
    },
    render: function(){
        return <div onClick={this.click}>
            Hello {this.props.name}
            <Offer/>
        </div>
    }
});


var parent = document.getElementById("viewContainer");

React.render(<OfferBox name="lorenc"/>, parent);