import "../styles/global.css"

import { Slot } from "expo-router"
// Pega todas as rotas e repassa aqui
export default function Layout(){
    return(
        <Slot/>
    )
}