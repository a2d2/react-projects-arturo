import React, { useState } from 'react';
import data from './data';
import List from './List';
import index from './index.css';

function App() {
  const [personas, setPeople] = useState(data);
  //console.log(people);

  return (
    <main>
      <section className="container">
        <h3>{personas.length} personas cumplieron años</h3>
        <List personas={personas} />

        <button
          type="button"
          className="btn-btn-block"
          onClick={() => setPeople([])}
        >
          Borrar Lista
        </button>
      </section>
    </main>
  );
}

export default App;
