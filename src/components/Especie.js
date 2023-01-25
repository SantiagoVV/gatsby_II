import React, { useState } from "react"

function Especie({ specie }) {
  const [showTax, setShowTax] = useState(false)
  const [showRef, setShowRef] = useState(false)
  return (
    <div style={{ marginLeft: "1rem", background: "#f6f6f6", borderRadius: "1rem" }}>
      <p style={{ color: "red", fontSize: "1.5rem" }}>{specie.Nombre}</p>
      <p>{specie.Especie}</p>
      <img src={specie.imagen}></img>
      <p style={showTax ? { display: "block" } : { display: "none" }}>
      <p>{specie.RefTitulo}</p>
      <p>{specie.RefNombre}</p>
      <p>{specie.RefAno}</p>
      <p>{specie.RefUbicacion}</p>
      </p>
      <p style={showRef ? { display: "block" } : { display: "none" }}>
      <p>{specie.Reino}</p>
        <p>{specie.Filo}</p>
        <p>{specie.Clases}</p>
        <p>{specie.Orden}</p>
        <p>{specie.Familia}</p>
        <p>{specie.Genero}</p>
        <p>{specie.Especie}</p>
      </p>
      <button onClick={() => setShowTax(current => !current)}>Tax</button>
      <button onClick={() => setShowRef(current => !current)}>Ref</button>
    </div>
  )
}

export default Especie
