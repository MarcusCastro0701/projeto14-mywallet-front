import GlobalStyle from "./globalstyle"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Login from './Login'
import Cadastro from './Cadastro'
import Principal from "./Principal"
import Entrada from "./Entrada"
import Saida from "./Saida"





export default function App(){

    return(
        <BrowserRouter>

            <GlobalStyle />

            <Routes>

            <Route path="/" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/principal" element={<Principal/>}/>
            <Route path="/entrada" element={<Entrada/>}/>
            <Route path="/saida" element={<Saida/>}/>

            </Routes>

        </BrowserRouter>
    )

}