import styled from "styled-components";

export const SideNav = styled.section`
height: 100%;
width: 4em;
position: fixed;
z-index: 1;
top: 0;
right: 0;
overflow-x: hidden;
padding-top: 20px;
border-left: 1px solid #242424;
svg {
    font-size: 25px !important;
    color: white;
}
`;

export const LinkContainer = styled.div`
position: fixed;
right: 0;
font-size: 25px;
color: white;
padding-right: 2em;
z-index: 14;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
top: 0;
background: transparent;
`;