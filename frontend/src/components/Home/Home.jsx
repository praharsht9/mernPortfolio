import React from 'react';
import './Home.css';
import Galaxy from '../../Video/Gvideo.mp4';
// import Galaxy from '../../Video/ani.mp4';
// import Galaxy from '../../Video/gal.mp4';
import { Typography } from '@mui/material';

import Timeline from '../TimeLine/TimeLine';
import { FaHtml5, FaReact, FaNodeJs, FaCss3, FaFigma } from 'react-icons/fa';

import { SiMongodb, SiJavascript } from 'react-icons/si';
import { Link } from 'react-router-dom';
const expresslogo = (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 32 32'
		width='64'
		height='64'
	>
		<path d='M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z' />
	</svg>
);

const Home = ({ timelines, skills }) => {
	return (
		<div className='home'>
			<div className='homeCanvas'>
				<video autoPlay loop muted>
					<source src={Galaxy} type='video/mp4' />
				</video>

				<div className='hero-description'>
					<div className='hero-text'>
						<h4>Hi, my name is</h4>

						<h1>Praharsh Tembhurne</h1>
						<h2>I turn ideas into reality.</h2>
						<div className='btn-one'>
							<Link to='/projects'>VIEW WORKS</Link>
						</div>
						{/* <h3>
							I'm a frontend developer based in India, with keen
							interest and skills in building beautiful and eye
							catching websites.
						</h3> */}
					</div>
				</div>
			</div>

			<div className='homeContainer'>
				<Typography variant='h3'> TIMELINE</Typography>
				<Timeline timelines={timelines} />
			</div>

			<div className='homeSkills'>
				<Typography variant='h3'>SKILLS</Typography>
				<div className='homeCubeSkills'>
					<div className='homeCubeSkillsFaces homeCubeSkillsFace1'>
						<img src={skills.image1.url} alt='Face1' />
					</div>

					<div className='homeCubeSkillsFaces homeCubeSkillsFace2'>
						<img src={skills.image2.url} alt='Face2' />
					</div>

					<div className='homeCubeSkillsFaces homeCubeSkillsFace3'>
						<img src={skills.image3.url} alt='Face3' />
					</div>

					<div className='homeCubeSkillsFaces homeCubeSkillsFace4'>
						<img src={skills.image4.url} alt='Face4' />
					</div>

					<div className='homeCubeSkillsFaces homeCubeSkillsFace5'>
						<img src={skills.image5.url} alt='Face5' />
					</div>

					<div className='homeCubeSkillsFaces homeCubeSkillsFace6'>
						<img src={skills.image6.url} alt='Face6' />
					</div>
				</div>
				<div className='cubeShadow'></div>
				<div className='homeskillsBox' id='homeskillsBox'>
					<FaFigma />
					<FaHtml5 />
					<FaCss3 />
					<SiJavascript />
					<FaReact />
					<FaNodeJs />
					{/* <SiExpress /> */}
					{expresslogo}
					<SiMongodb />
				</div>
			</div>
		</div>
	);
};

export default Home;
