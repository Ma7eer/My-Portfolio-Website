import styled from 'styled-components'

export const PageContainer = styled.div`
    background-color: white;
    padding-left: 25%;
    @media (max-width: 992px) {
        padding-left: 0;
    }
`

export const ContentContainer = styled.div`
    width: 95%;
    padding: 0 1.5rem;
    margin: 0 auto;
    max-width: 1280px;
`

export const ContentItem = styled.p`
    display: flex;
    align-items: center;
`

export const IconContainer = styled.a`
    width: 55.5px; 
    height: 55.5px; 
    cursor: pointer; 
    background-color: white;
    border-radius: 50%;
    line-height: 55.5px;
    font-size: 1.6rem;
    margin: 0px 15px;
`

export const TextLink = styled.a`
    color: blue;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

export const Grid = styled.div`
    position: relative;
    margin: 0 auto;
    padding: 1em 0 4em;
    max-width: 1000px;
    list-style: none;
    text-align: center;
`

export const GridFigure = styled.figure`
    position: relative;
    float: left;
    overflow: hidden;
    margin: 10px 1%;
    min-width: 320px;
    max-width: 480px;
    max-height: 360px;
    width: 48%;
    background: #3085a3;
    text-align: center;
    cursor: pointer;
    &:hover {
        color: #252d31;
        -webkit-transition-delay: 0.1s;
        transition-delay: 0.1s;
    }
`

export const GridFigureImage = styled.img`
    position: relative;
    display: block;
    min-height: 100%;
    max-width: 100%;
    opacity: 0.8;
`

export const GridFigureCaption = styled.figcaption`
    padding: 2em;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.25em;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    &::before, &::after {
        pointer-events: none;
    }
    position: absolute;
	top: 0;
	left: 0;
	width: 100%;
    height: 100%;
    
    top: auto;
	bottom: 0;
	padding: 1em;
	height: 3.75em;
	background: #fff;
	color: #3c4a50;
	-webkit-transition: -webkit-transform 0.35s;
	transition: transform 0.35s;
	-webkit-transform: translate3d(0,100%,0);
    transform: translate3d(0,100%,0);
    &:hover {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
    }
`

export const GridFigureCaptionLink = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
	text-indent: 200%;
	white-space: nowrap;
	font-size: 0;
    opacity: 0;
    float: right;
	color: #3c4a50;
    font-size: 1.4em;
    &:hover {
        color: #252d31;
    }
    &:focus {
        color: #252d31;
    }
    -webkit-transition: -webkit-transform 0.35s;
	transition: transform 0.35s;
	-webkit-transform: translate3d(0,200%,0);
    transform: translate3d(0,200%,0);
    &:hover {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
    }
`

export const GridFigureHeader = styled.h2`
    word-spacing: -0.15em;
    font-weight: 300;
    margin: 0;
    float: left;
    -webkit-transition: -webkit-transform 0.35s;
	transition: transform 0.35s;
	-webkit-transform: translate3d(0,200%,0);
    transform: translate3d(0,200%,0);
    display: inline-block;
    &:hover {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        -webkit-transition-delay: 0.05s;
        transition-delay: 0.05s;
    }
    
`

export const GridFigureParagraph = styled.p`
    margin: 0;
    letter-spacing: 1px;
	font-size: 68.5%;
`

export const GridFigureDescription = styled.p`
    position: absolute;
    bottom: 8em;
    padding: 2em;
    color: #fff;
    text-transform: none;
    font-size: 90%;
    opacity: 0;
    -webkit-transition: opacity 0.35s;
    transition: opacity 0.35s;
    -webkit-backface-visibility: hidden;
    &:hover {
        opacity: 1;
    }
`

export const GridFigureIcons = styled.span`
    &::before {
        display: inline-block;
        padding: 8px 10px;
        font-family: 'feathericons';
        speak: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        content: \e000;
    }    

`