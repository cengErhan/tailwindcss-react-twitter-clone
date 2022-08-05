import { useState } from 'react';
import Container from './layout/Container';

function App() {
  const [count, setCount] = useState(0);

  return (
      <Container>
        <div className='w-72 bg-blue-200'>Sidebar</div>
        <main className='flex-1 bg-purple-200 '>Feed</main>
        <aside className='bg-green-200 w-80'>Timeline</aside>
      </Container>
  );
}

export default App;
