import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    justify-content: space-around;
    height: 70vh;
`

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    height: 60vh;
    width: 90vw;
    border-radius: 5px;
    font-size: 0.5rem;
    background-color: white;
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 30vw;
`

