import React from 'react';
import {Person} from './person';

export class Attendants extends React.Component {

		constructor(props) {
				super(props);
				this.state = {
						people: [
								{name: 'Attila', company: 'Evance'},
								{name: 'Dieter', company: 'Dots & Arrows'}
				]};
		}


		printPerson(person) {
				return (<Person key={person.name} name={person.name} company={person.company}></Person>);
		}
		
		render() {
				return (
						<div>
								<h3>Attendants:</h3>
								{this.state.people.map(this.printPerson)}
						</div>
				);
		}
		
}