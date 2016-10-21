import React from 'react';
import {Person} from './person';

export class Attendants extends React.Component {

		constructor(props) {
				super(props);
				this.state = {
						people: [
								{name: 'Attila', company: 'Evance'},
								{name: 'Dieter', company: 'Dots & Arrows'}
						],
						newPerson: {name: '', company: ''}
					};
		}


		printPerson(person) {
				return (<Person key={person.name} name={person.name} company={person.company}></Person>);
		}

		stateChange = (event) => {
				let propName = event.target.name;
				let propValue = event.target.value;
				let person = this.state.newPerson;
				person[propName] = propValue;
				this.setState({newPerson: person});
		};

		addPerson = () => {
				let people = this.state.people;
				people.push(this.state.newPerson);
				this.setState({people: people});
				this.setState({newPerson: {name: '', company: ''}});
		};
		
		render() {
				return (
						<div>
								<h3>Add attendent</h3>
								<label htmlFor="name">Name</label>
								<input name="name" type="text" value={this.state.newPerson.name} onChange={this.stateChange}/>
								<label htmlFor="company">Company</label>
								<input name="company" type="text" value={this.state.newPerson.company} onChange={this.stateChange} />
								<button onClick={this.addPerson}>add</button>

								<h3>Attendants:</h3>
								{this.state.people.map(this.printPerson)}
						</div>
				);
		}
		
}