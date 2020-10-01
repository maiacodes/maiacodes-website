import React from 'react';
import getMOTD from '../api/getMOTD';
import BeatLoader from 'react-spinners/BeatLoader';

export default class MOTD extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			motd: null
		};
	}

	render() {
		const { isLoading, motd } = this.state;
		if (isLoading) {
			return <BeatLoader color="#f638dc" size={15} />;
		} else {
			return <p>{motd}</p>;
		}
	}

	async componentDidMount() {
		const motd = await getMOTD();
		console.log('Updated!' + motd);
		this.setState({
			isLoading: false,
			motd
		});
	}
}
