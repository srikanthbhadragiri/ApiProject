import React, {Component} from 'react';

import classes from './PicOfDay.css';
import api from '../utilities/AllApis';

class PicOfDay extends Component {
	constructor(props){
		super(props);
		this.state = {
			date:'',
			title:'',
			description:'',
			url:'',
			hdurl:''
		};
	}

	componentWillMount(){
		this.setState({
			date: '12-Nov-2017',
			title: 'Comet Machholz Approaches the Sun',
			description: "Why is Comet Maccholz so depleted of carbon-containing chemicals?  Comet 96P/Machholz's original fame derives from its getting closer to the Sun than any other short period comet -- half as close as Mercury -- and doing so every five years. To better understand this unusual comet, NASA's Sun-monitoring SOHO spacecraft tracked the comet during its latest approach to the Sun in October.  The featured image composite shows the tail-enhanced comet swooping past the Sun. The Sun's bright surface is hidden from view behind a dark occulter, although parts of the Sun's extended corona are visible. Neighboring stars dot the background. One hypothesis holds that these close solar approaches somehow cause Comet Machholz to shed its carbon, while another hypothesis posits that the comet formed with this composition far away -- possibly even in another star system.    Free APOD Lectures: January 5 in NYC & January 9 in DC",
			url: 'https://cdn.pixabay.com/photo/2014/10/21/18/22/full-moon-496873_1280.jpg',
			hdurl: 'https://cdn.pixabay.com/photo/2014/10/21/18/22/full-moon-496873_1280.jpg',
		});
		// api.getPicOfDay().then( (res) => {
		// 	this.setState({
		// 		date: res.date,
		// 		title: res.title,
		// 		description: res.explanation,
		// 		url: res.url,
		// 		hdurl: res.hdurl
		// 	});
		// })
	}

	render() {
		console.log(this.state.title);
		return(
			<div>
				<h1 className={classes.PicTitle}>Title: {this.state.title}</h1>
				<h1 className={classes.PicTitle}>Description: </h1>
				<p className={classes.PicContent}>{this.state.description}</p>
				<div>
					<img src={this.state.url} />
				</div>
			</div>
		);
	}
};

export default PicOfDay;
