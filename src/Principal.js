import styled, { keyframes } from "styled-components";
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate} from 'react-router-dom';




export default function Principal(){

    return (
        <Engloba>
            <Topo>
                <Elementostopo>Olá, usuário</Elementostopo>
                <p>MY WALLET</p>
                <Elementostopo>Sair</Elementostopo>
            </Topo>

            <Englobameio>

                <Meio>
                    <Aviso>Ainda não foi inserida nenhuma entrada ou saída</Aviso>
                    <Item>
                        <Itemesquerda>
                            <Data>30/11</Data>
                            <p>Salário</p>
                        </Itemesquerda>
                        <Itemdireita>547,50</Itemdireita>
                    </Item>   
                </Meio>

            </Englobameio>

            <Baixo>
                <P1>Nova entrada +</P1>
                <Saldo>Saldo: 4000,00</Saldo>
                <P2>Nova saída -</P2>
            </Baixo>

            
        </Engloba>

    )

}

const Engloba = styled.div`
font-family: 'Raleway';
width: 100%;
height: 100%;
position: relative;
padding-top: 120px;

`

const Topo = styled.div`
position: fixed;
z-index: 1;
top: 0;
width: 100%;
height: 100px;
background-color: orange;
display: flex;
align-items: center;
justify-content: space-around;
p{
    font-size: 200%;
    font-weight: 600;
    @media (max-width: 425px) {
        font-size: 150%;
      }
}
`
const Elementostopo = styled.div`
height: 70%;
width: 20%;
display: flex;
align-items: center;
justify-content: center; 
background-color: orange;
border-radius: 8px;
box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
font-size: 140%;
font-style: 'Raleway';
@media (max-width: 620px) {
    font-size: 100%;
  }
@media (max-width: 440px) {
    height: 50%;
    font-size: 80%;
    width: 25%;
  }
`

const Englobameio = styled.div`
width: 100%;
height: 600px;
display: flex;
justify-content: center;
@media (max-height: 810px) {
    height: 450px;
  }

`

const Meio = styled.div`
width: 90%;
border-radius: 8px;
box-shadow: green 0px 3px 8px;
border: 4px solid grey;
background-color: white;
padding-top: 20px;
display: flex;
flex-direction: column;
align-items: center;


`
const Item = styled.div`
width: 95%;
height: 20px;
margin-bottom: 15px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
const Itemesquerda = styled.div`
width: 40%;
height: 100%;
display: flex;
align-items: center;
flex-direction: row;
`
const Data = styled.p`
color: lightgrey;
font-weight: 450;
margin-right: 10px;
`
const Itemdireita = styled.div`
color: black;
`

const Baixo = styled.div`
position: fixed;
z-index: 1;
bottom: 0;
width: 100%;
height: 100px;
background-color: orange;
display: flex;
align-items: center;
justify-content: space-around;
@media (max-width: 485px) {
    justify-content: space-between;
  }
`
const P1 = styled.p`
margin-left: 0px;
@media (max-width: 485px) {
    margin-left: 20px;
  }
@media (max-width: 425px) {
    font-size: 80%;
  }

`
const P2 = styled.p`
margin-right: 0px;
@media (max-width: 485px) {
    margin-right: 20px;
  }
@media (max-width: 425px) {
    font-size: 80%;
  }
`
const Saldo = styled.p`
font-weight: bold;
color: green;
`

const Aviso = styled.p`
font-family: 'Raleway';
font-size: 80%;
font-weight: 650;
color: lightgrey;
display: none;
`