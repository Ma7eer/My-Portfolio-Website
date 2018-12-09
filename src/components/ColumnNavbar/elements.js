import styled from 'styled-components'
import {Link} from 'gatsby'

export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    left: 0;
    position: fixed;
    width: 25%;
    @media (max-width: 992px) {
        display: none;
    }
`

export const ListItem = styled(Link)`
    line-height: 100%;
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