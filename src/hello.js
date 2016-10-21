import React from 'react';
import {Attendants} from './attendants';

export class Hello extends React.Component {

		render() {
				return (
					<div>
							<h1>Hello {this.props.name}!</h1>
							<Attendants></Attendants>
					</div>
				);
		}

}
