import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    height: 100vh;
    width: 100%;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    color: black;
    `

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    height: 50vh;
    width: 40vw;
    padding: 15px;
    margin: 30px;

    background-color: white;
    border-radius: 5px;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    color: black;
    
    padding: 15px;
    margin-top: 5vh;
`

export const Input = styled.input`
    height: 5vh;
    width: 25vw;
    border-radius: 3px;
    padding: 10px;
    margin-bottom: 2vh;
    border-radius: 5px;
    border-color: gray;
    margin: 10px;
`

export const Button = styled.button`
    margin: 10px;
    height: 5vh;
    width: 25vw;
    background-color: #6ab6f8;
    border-radius: 5px;
    color: white;
    border: none;
    padding: 5px;
    margin-top: 5vh;
`

