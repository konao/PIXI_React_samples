// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Counter } from "./counter/counter"

import './App.css';
import { useMemo } from 'react';

import { BlurFilter, TextStyle } from 'pixi.js';
import { Stage, Container, Sprite, Text } from '@pixi/react';

const App = () => {
  const blurFilter = useMemo(() => new BlurFilter(2), []);
  const bunnyUrl = 'https://pixijs.io/pixi-react/img/bunny.png';
  return (
    <>
      <Counter />
      <Stage width={800} height={600} options={{ background: 0x1099bb }}>
        <Sprite image={bunnyUrl} x={300} y={150} />
        <Sprite image={bunnyUrl} x={500} y={150} />
        <Sprite image={bunnyUrl} x={400} y={200} />

        <Container x={200} y={200}>
          <Text
            text="Hello World"
            anchor={0.5}
            x={220}
            y={150}
            filters={[blurFilter]}
            style={
              new TextStyle({
                align: 'center',
                fill: '0xffffff',
                fontSize: 50,
                letterSpacing: 20,
                dropShadow: true,
                dropShadowColor: '#E72264',
                dropShadowDistance: 6,
              })
            }
          />
        </Container>
      </Stage>
    </>
  );
};

export default App;
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Counter />
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
