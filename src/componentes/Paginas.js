import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Inicio } from './inicio'
import { ProductoLista } from './Productos/index'

export const Paginas = () => {
  return (
    <section>
      <Routes>
        <Route path="/" exact component={Inicio}/>
        <Route path="/productos" exact component={ProductoLista}/>
      </Routes>
    </section>
  )
}
