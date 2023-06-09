import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 10vh;
    width: 100vw;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
    `
const Title = styled.span`
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 10px;
`
const Description = styled.p`
    font-size: 18px;
    font-weight: 300;
    
    
`
const InputContainer = styled.div`
    width: 40%;
    height: 40px;
    background-color: white;
    display: flex;
 
`
const Input = styled.input`
    padding-left: 20px;
    border: 0.5px solid gray;
    border-radius: 3px;
    flex: 8;
    &:focus {
        outline: none; }
`
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    flex: 1;
    border: none;
    cursor: pointer;
    background-color: teal;
    color: white;
    border-radius: 5px;

    `
const Newsletter = () => {
  return (
    <Container>
        <Title>Subscribe to our Newsletter</Title>
        {/* <Description>Get timely updates about new products.</Description> */}
        <InputContainer>
        <Input placeholder='Your email'/>
        <Button>
            <Send/>
        </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter