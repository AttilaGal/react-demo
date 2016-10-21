import React from 'react';

export class Person extends React.Component {
		
		render() {
				return <p>{this.props.name} ({this.props.company})</p>
		}
		
}