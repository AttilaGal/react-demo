import React from 'react';
import ReactDOM from 'react-dom';

var HelloComponent = React.createClass({  
    render: function() {
        return <h1>Hello {this.props.name}</h1>;
    }
});

ReactDOM.render(
	<HelloComponent name="Evance"/>,
	document.getElementById('root')
);