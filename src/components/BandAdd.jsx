import React, { useState } from 'react';

const BandAdd = ({ crearBanda }) => {
  const [banda, setBanda] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if (banda.trim().length > 0) {
      crearBanda(banda);
      console.log(banda);
    }
  };

  return (
    <>
      <h3>Agregar Banda</h3>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          className='form-control'
          placeholder='Nombre de la banda'
          onChange={(e) => setBanda(e.target.value)}
        />
      </form>
    </>
  );
};

export default BandAdd;
