import styled, { keyframes } from "styled-components";
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate} from 'react-router-dom';


export default function Listagem(props){

    if(props.resposta.length === 0){
        return(
            <Aviso>
                Nenhuma entrada ou saída registrada
            </Aviso>
        )
    }
    
    let contadorLocal = 0;


    function verifica(obj){
        if(obj.bool === true){
            contadorLocal += obj.value
        }else(
            contadorLocal -= obj.value
        )
        
    }

    props.resposta.map(item => verifica(item))

    
    props.setcount(Number(contadorLocal))
    if(props.count < 0){
        props.setbool(false)
    }


    return (
        props.resposta.map(item => 
            <Item>
                <Itemesquerda>
                    <Data>{item.data}</Data>
                    <p>{item.description}</p>
                </Itemesquerda>
                <Itemdireita booleano={item.bool}>{item.value}</Itemdireita>
            </Item>)
    )

}


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
color: ${props => props.booleano===true ? `green` : `red`};
`
const Aviso = styled.p`
font-family: 'Raleway';
font-size: 80%;
font-weight: 650;
color: lightgrey;

`