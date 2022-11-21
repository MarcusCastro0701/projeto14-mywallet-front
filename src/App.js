import GlobalStyle from "./globalstyle"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Login from './Login'
import Cadastro from './Cadastro'
import Principal from "./Principal"
import Entrada from "./Entrada"
import Saida from "./Saida"





export default function App(){

    const [token, setToken] = useState('')
    const [resposta, setResposta] = useState('')
    const [name, setName] = useState('')
    const [count, setCount] = useState(0)

    return(
        <BrowserRouter>

            <GlobalStyle />

            <Routes>

            <Route path="/" element={<Login setname={setName} settoken={setToken}/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/principal" element={<Principal count={count} setcount={setCount} token={token} resposta={resposta} settoken={setToken} setname={setName} setresposta={setResposta} name={name}/>}/>
            <Route path="/entrada" element={<Entrada token={token}/>}/>
            <Route path="/saida" element={<Saida token={token}/>}/>

            </Routes>

        </BrowserRouter>
    )

}