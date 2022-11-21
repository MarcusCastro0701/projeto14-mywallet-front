import styled, { keyframes } from "styled-components";
import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate} from 'react-router-dom';



export default function Saida(props){

    const [boolButton, setBoolButton] = useState(false)
    const [form, setForm] = useState({ value: "", description: "", bool: false })
    const navigate = useNavigate();

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
        console.log(form)
    }

    function enviaValor(event) {
        event.preventDefault();
        setBoolButton(true)

        const URL = "http://localhost:5000/valor"

        const config = {
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        }

        const body = form;
        console.log(body, "body que está sendo enviado pelo post /entrada")
        const promise = axios.post(URL, body, config)

        promise.then((res) => {
            navigate("/principal")
        })

        promise.catch((err) => {
            window.alert('Informações não foram preencidas corretamente')
            console.log(err)
            setBoolButton(false)
        })
    }

    return (
        <Engloba>
            <Topo>               
                <p>Nova Saída</p>              
            </Topo>

            <Form onSubmit={enviaValor}>
                <input disabled={boolButton} onChange={handleForm} name="value" required type="number" step="0.01" min="0" placeholder="valor"></input>
                <input disabled={boolButton} onChange={handleForm} name="description" required type="text" placeholder="descrição"></input>
                <button disabled={boolButton} type="submit" >
                    {(boolButton === false) ? "Adicionar saída" : <DotWrapper> <Dot delay="0s" /> <Dot delay=".1s" /> <Dot delay=".2s" /> </DotWrapper>}
                </button>
            </Form>
        </Engloba>
    )

}

const Engloba = styled.div`
font-family: 'Raleway';
width: 100%;
height: 100%;
position: relative;
padding-top: 120px;
display: flex;
align-items: center;
flex-direction: column;

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
const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;
const DotWrapper = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    
`;
const Dot = styled.div`
  background-color: #FFFFFF;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;

const Form = styled.form`
    
    width: 90%;
    margin-right: 1%;
    display: flex;
    flex-direction: column;
    input{
        margin-bottom: 10px;
        padding-left: 3%;
        width: 96%;
        height: 50px;
        font-size: 150%;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        ::placeholder,
        ::-webkit-input-placeholder {
        color: #DBDBDB;
        font-family: 'Raleway';
        }
    }
    button{
        font-family: 'Raleway';
        width: 100%;
        height: 50px;
        font-size: 150%;
        background: orange;
        border: none;
        border-radius: 5px;
        color: #ffffff;
        margin-bottom: 25px;
        &:disabled{
            color: #52B6FF;
        }
    }
`