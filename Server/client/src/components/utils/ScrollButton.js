import React,{useState} from 'react'
import {FaArrowCircleUp} from 'react-icons/fa';
import styled from 'styled-components';

const Button = styled.div`
position: fixed;
width: 100%;
left: 95%;
@media (max-width:500px){
    left:86%;
}
bottom: 50px;
height: 20px;
font-size: 3rem;
z-index: 999;
cursor: pointer;
color: #232f3e;
`

function ScrollButton() {
    const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
};

window.addEventListener('scroll', toggleVisible);
    return (
        <>
            <Button>
            <FaArrowCircleUp onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} />
	        </Button>
        </>
    )
}

export default ScrollButton
