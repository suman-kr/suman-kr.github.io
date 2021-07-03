import styled from "styled-components";

export const DescriptionContainer = styled.div`
color: white;
font-weight: 600;
font-size: 1.8em ;
`;

export const Name = styled.div`
color: white;
font-weight: 800;
font-size: 3em;
letter-spacing: 0.1em;
`;

export const Interests = styled.div`
color: #FF7B7B;
font-family: 'Roboto Mono', monospace;
font-size: 2em;
`;

export const PrimaryButton = styled.button`
background: white;
border: none;
box-shadow: none;
color: black;
padding: 1em 2.5em;
border-radius: 2px;
margin-top: 2em;
font-family: 'Big Shoulders Display', cursive;
letter-spacing: 4px;
&: hover{
    transition: 0.5s;
    color: white;
    background: black;
    box-shadow: 0 0 0 0.2rem white !important;
}
`;