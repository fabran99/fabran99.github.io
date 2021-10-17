import React from 'react';
import { GitHub, Mail } from 'react-feather'
import data from "./../../../data/data";
import { FooterStyle, FooterBody, FooterLinks } from './style'
import {ContainerLayout, ButtonDefault} from '../../common'

const Footer = () => {
	return (
		<>
			<FooterStyle>
				<ContainerLayout>
					<FooterBody>
				
						<div>
							<p className="text-primary quote"> ¿Te interesa mi trabajo? </p>
							<ButtonDefault href={`mailto:${data.SiteContact.email}`}> Contáctame </ButtonDefault>
						</div>
					</FooterBody>
					<FooterLinks>
						<div>
						<GitHub/> <strong>Github:</strong> <a href="https://github.com/fabran99">github.com/fabran99</a>
						</div>
						<div>
							<Mail/> <strong>Email:</strong> fabran99@gmail.com
						</div>
					</FooterLinks>
				</ContainerLayout>
			</FooterStyle>
		</>
	)
}

export default Footer;