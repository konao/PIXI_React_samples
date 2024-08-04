import { Counter } from "./counter/counter"

import './App.css';
import { useMemo } from 'react';

import { BlurFilter, TextStyle } from 'pixi.js';
import { Stage, Container, Sprite, Text } from '@pixi/react';

import { useSelector } from 'react-redux'

const App = () => {
  const blurFilter = useMemo(() => new BlurFilter(2), []);
  const bunnyUrl = 'https://pixijs.io/pixi-react/img/bunny.png';

  // stateの値を取り出す
  const count = useSelector((state) => state.counter.value)

  // x座標の配列を作成
  let xList = Array(count);
  if (count > 0) {
    if (count === 1) {
      xList[0] = 400;
    } else {
      for (let i = 0; i < count; i++) {
        xList[i] = i * 700 / (count - 1) + 50;
      }
    }
  }
  console.log(xList);

  return (
    <>
      <Counter />
      <Stage width={800} height={600} options={{ background: 0x1099bb }}>
        {
          // 可変個のスプライトを生成
          xList.map((x) => {
            return <Sprite image={bunnyUrl} x={x} y={150} />
          })
        }

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
