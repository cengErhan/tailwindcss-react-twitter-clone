import { useState } from 'react';
import Container from './layout/Container';
import Sidebar from './layout/Sidebar';
import Content from './layout/Content';
import Widgets from './layout/Widgets';

function App() {
  const [count, setCount] = useState(0);

  return (
      <Container>
        <Sidebar/>
        <Content/>
        <Widgets/>
      </Container>
  );
}

export default App;



