import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
	return (
		<>
			<div className='footer'>
				<div>
					<Typography variant='h5'>About Me</Typography>
					<Typography>
						Hi, I'm Praharsh Tembhurne I am an experienced FullStack
						Developer with vast experience in creating web apps with
						React, Redux, Node.js, Express.js and MongoDB. I am a
						responsible team player who is passionate about
						technology and always interested in learning and
						innovating as I move forward.
					</Typography>

					<Link to='/contact' className='footerContactBtn'>
						<Typography>Contact Us</Typography>
					</Link>
				</div>
				<div>
					<Typography variant='h6'>Social Media</Typography>
					<a href='https://github.com/praharsht9' target='black'>
						<FaGithub />
					</a>

					<a
						href='https://www.instagram.com/praharsht/'
						target='black'
					>
						<FaInstagram />
					</a>
					<a
						href='https://www.linkedin.com/in/praharsh-tembhurne-8432a8118/'
						target='black'
					>
						<FaLinkedin />
					</a>
				</div>
			</div>

			<div className='footer-bottom'>
				Copyright ©2022 Praharsh Tembhurne | Made By Praharsh Tembhurne
			</div>
		</>
	);
};

export default Footer;
