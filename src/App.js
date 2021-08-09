import List from './components/List';
import data from './components/data';
import style from './components/style.css';
import './App.css';
import { useState } from 'react';
import Container from '@material-ui/core/Container';

function App() {

  const [people, setPeople] = useState(data)

  return (
    <div className="App">
      <Container fixed>
      <h1>Birthday Reminder</h1>
      <main>
        <section className="box">
           <h3> {people.length} birthdays today</h3>
           <List people={people}/>
           <button onClick={()=> setPeople([])}>Clear All</button>
        </section>
      </main>
      </Container>
    </div>
  );
}

export default App;
