import styled from 'styled-components'
import { Link } from 'gatsby'

export const Column = styled.aside`
    background-color: black;
    top: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    overflow: hidden;
    z-index: 2;
    width: 25%;
    color: #fff;
    text-align: left;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
`
export const InnerColumn = styled.div`
    position: relative;
    height: 100%;
    overflow-y: auto;
    padding: 45px 0px;
` // 45px 40px

export const Avatar = styled(Link)`
    text-align: center;
    display: block;
    color: inherit;
    border-bottom: 1px solid black;
    text-decoration: none;
`

export const ImageContainer = styled.div`
    border-radius: 50%;
    margin-bottom: 10px;
`

export const Image = styled.img`
    width: 152px;
    height: auto;
    border-radius: 50%;
`

export const ContentContainer = styled.div`
    margin-left: -40px;
    margin-right: -40px;
`

export const MyName =styled.h1`
    font-size: 22px;
    font-weight: 500;
`

export const MyTitle = styled.h2`
    font-size: 16px;
    font-weight: 300;
`