import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5vh;
`

export const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 280px;
    width: 350px;
    color: white;
    border-radius: 10px;
    box-shadow: -1rem 0 3rem #000;
/*   margin-left: -50px; */
    transition: 0.4s ease-out;
    position: relative;
    left: 0px;
    padding: 15px;

    &:hover{
        transform: translateY(-20px);
        transition: 0.4s ease-out;
    }

`

export const Image = styled.image`
    height: 5px;
    width: 5px;

`