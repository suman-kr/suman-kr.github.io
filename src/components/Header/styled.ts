import styled from "styled-components";

export const HeaderContainer = styled.header`
min-height: 5em;
display: flex;
justify-content: flex-end;
width: calc(100% - 4em);
margin-right: 4em;
`;

export const NavItem = styled.div`
padding: 3em 0.3em 1em 0.3em;
font-weight: 600;
&:hover {
    cursor: pointer;
    transition: 0.5s;
    background: white;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 2px;
    a {
        color: black !important;
        text-decoration: none;
    }
}
`;