import styled, { keyframes } from "styled-components";
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate} from 'react-router-dom';
import Listagem from './Listagem'




export default function Principal(props) {

  const navigate = useNavigate();

  const [bool, setBool] = useState(true)
  const [count, setCount] = useState(0)


  function vaiParaEntrada() {
    navigate("/entrada")
  }

  function vaiParaSaida() {
    navigate("/saida")
  }

  function sair(event) {
    event.preventDefault();
    
    
        const URL = "http://localhost:5000/sair"
        const config = {
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        }
        
        const promise = axios.delete(URL, config)

        promise.then((res) => {
            props.settoken('')
            props.setname('')
            props.setresposta('')
            navigate("/")
        })

        promise.catch((err) => {
            window.alert('Erro ao sair da sessão')
            console.log(err)
            
        })
}

  useEffect(() => {


    const URL = "http://localhost:5000/wallet"

    const config = {
      headers: {
        Authorization: `Bearer ${props.token}`
      }
    }
    const requisicao = axios.get(URL, config);


    requisicao.then((res) => {
      props.setresposta(res.data)
      console.log(res, "resposta do servidor no get /wallet")
    });

    requisicao.catch((err) => {
      console.log("deu erro!")
      console.log(err)
    })

  }, []);

  

  return (
    <Engloba>
      <Topo>
        <Elementostopo>Olá, {props.name}</Elementostopo>
        <p>MyWallet</p>
        <Elementostopo onClick={sair}>Sair</Elementostopo>
      </Topo>

      <Englobameio>

        <Meio>
          <Listagem resposta={props.resposta} setcount={setCount} count={count} setbool={setBool}/>
        </Meio>

      </Englobameio>

      <Baixo>
        <P1 onClick={vaiParaEntrada}>Nova entrada +</P1>
        <Saldo bool={bool}>Saldo em R$: {count.toFixed(2)}</Saldo>
        <P2 onClick={vaiParaSaida}>Nova saída -</P2>
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
const Elementostopo = styled.button`
background-color: orange;
border: none;
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
const P1 = styled.button`
margin-left: 0px;
background-color: orange;
border-radius: 8px;
width: 20%;
height: 70%;
font-weight: 700;
@media (max-width: 425px) {
    font-size: 80%;
    
  }
@media (max-width: 485px) {
    margin-left: 20px;
  }


`
const P2 = styled.button`
background-color: orange;
border-radius: 8px;
margin-right: 0px;
width: 20%;
height: 70%;
font-weight: 550;
@media (max-width: 485px) {
    margin-right: 20px;
  }
@media (max-width: 425px) {
    font-size: 80%;

}
`
const Saldo = styled.p`
font-weight: bold;
color: ${props => props.bool===true ? `green` : `red`};
`
