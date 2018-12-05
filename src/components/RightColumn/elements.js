import styled from 'styled-components'

export const PageContainer = styled.div`
    background-color: white;
    padding-left: 25%;
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