import styled from 'styled-components'

export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    left: 0;
    position: fixed;
    width: 25%;
`

export const ListItem = styled.a`
    lime-height: 100%;
    padding: 10px 0 12px;
    font-size: 1.3rem;
    width: auto;
    color: white;
    text-decoration: none;
    &:hover {
        background-color: grey;
        border-left: 2px solid red;
    }
`