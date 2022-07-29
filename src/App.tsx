import { useState } from 'react';
import './App.css';

import { Input } from './Components/Input';
import { Card } from './Components/Card';

interface User {
  name: string
  hobby: string
  age: number
}

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [name, setName] = useState<string>('')  
  const [hobby, setHobby] = useState<string>('')
  const [age, setAge] = useState<number>()  

  const handleSubmit = (name:string, hobby:string, age:number) => setUsers([...users, {name, hobby, age}])

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(e)=>{
          e.preventDefault()
          handleSubmit(name, hobby, Number(age))
        }}>
          <Input placeholder='Digite seu nome' label='Nome: ' onChange={(e)=>setName(e.target.value)}/>
          <Input placeholder='Digite seu hobby' label='Hobby: ' onChange={(e)=>setHobby(e.target.value)}/>
          <Input placeholder='Digite sua idade' label='Idade: ' onChange={(e)=>setAge(Number(e.target.value))}/>
          <button type='submit'>Enviar</button>
        </form>
        {users.map((user, index)=><Card key={index} age={user.age} hobby={user.hobby} name={user.name}/>)}
      </header>
    </div>
  );
}

export default App;
