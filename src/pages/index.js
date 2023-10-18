/* eslint-disable react/prop-types */
import {ThemeProvider} from '@emotion/react';
import * as React from 'react';
import sneakers from '../images/sneakers.png';
import bird from '../images/bird.png';
import golf from '../images/golf.png';
import ssgoIso from '../images/ssgoIso.png'
import '../styles.css'
import { useState } from 'react'

const imageList = [
  {
	title: 'silver sneakers go',
	src: sneakers,
	size: 250,
	styles: {
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		marginLeft: '-35%',
	}
  },
  {
	title: 'little bird llc',
    src: bird,
    size: 200,
	styles: {
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		marginLeft: '35%',
		marginTop: '-5%'
	}
  },
  {
	title: 'ping dot com',
    src: golf,
    size: 150,
	styles: {
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
		marginLeft: '0',
		marginTop: '-2%'
	}
  },
];

const theme = {
	color:{
		gray: {
			100: '#fff',
			200: '#f9f9f9',
			300: '#eee',
			400: '#ddd',
			700: '#333',
			900: '#000',
		},
	}
};

const borderMap = {
	0: {
		borderTopLeftRadius: '255px 15px',
		borderTopRightRadius: '15px 225px',
		borderBottomRightRadius: '225px 15px',
		borderBottomLeftRadius: '15px 255px',
	},
	1: {
		borderTopLeftRadius: '255px 15px',
		borderTopRightRadius: '225px 15px',
		borderBottomRightRadius: '15px 255px',
		borderBottomLeftRadius: '255px 15px',
	},
	2: {
		borderTopLeftRadius: '15px 255px',
		borderTopRightRadius: '225px 15px',
		borderBottomRightRadius: '225px 15px',
		borderBottomLeftRadius: '15px 15px',
	}
}

const Card = ({ 
	otherCardState: [otherCardList, setOtherCardList], 
	image:{ src, size, styles, title }, 
	index
}) => {
	const onCardMouseOver = (currentCard, currentCardIndex) => {
		const allCards = [...currentCard.target.parentNode.children]
		const otherCards = allCards.filter((card)=>{
			return !card.classList.contains(`card-${currentCardIndex}`)
		})
		setOtherCardList([...otherCards])
		otherCards.forEach((e)=>{
			if(e.classList.contains('card')) e.style.opacity=0
		})

		document.querySelector('#background-1').style.opacity=1
	}

	const onCardMouseLeave = () => {
		otherCardList.forEach((e)=>{
			e.style.opacity=''
		})
		document.querySelector('#background-1').style.opacity=0
	}

	return (
	<div 
		css={theme => ({
			backgroundColor: theme.color.gray[200],
			width: size,
			height: size,
			display: 'flex',
			flexDirection: 'column',
			padding: 20,
			border: 'solid 3px #41403E',
			transition: '0.3s',
			...borderMap[index],
			...styles,
		})}
		className={`card card-${index}`}
		onMouseLeave={(e)=>onCardMouseLeave(e)}
		onMouseOver={(e)=>onCardMouseOver(e, index)}
	>
		<img src={src} style={{width: 50, height: 50}} />
		<p style={{marginTop: -5}}>{title}</p>
	</div>
	);
};

const IndexPage = () => {
	const [otherCardList, setOtherCardList] = useState([])
	return (
		<ThemeProvider theme={theme}>
			<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Gamja' />
			<main >
				<nav style={{ backgroundColor: '#f9f9f9', width:'100%', height: 100, position:'absolute' }}>
				</nav>
				<div>
					<img 
						src={ssgoIso} 
						style={{ 
							position:'absolute', 
							top: 0, 
							zIndex: -1, 
							transition: '0.4s', 
							opacity: 0 
						}} 
						id={`background-${1}`} 
					/>
					<div 
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							height: '100vh',
							justifyContent: 'center',
						}}
						className='card-container'
					>
						{imageList.map((image, index)=> 
							<Card
								otherCardState={[otherCardList, setOtherCardList]}
								index={index}
								image={image} 
								key={image.src} 
							/>
						)}
					</div>
				</div>
				<footer style={{ backgroundColor: '#f9f9f9', width:'100%', height: 100, position:'absolute', bottom: 0, zIndex:100 }}>
				</footer>
			</main>
		</ThemeProvider>
	);
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
