import React from 'react';
import { StyleReset } from 'atomize';
import App from './src/App';
import { Dropdown, Anchor } from "atomize";

const khateebList = (
  <Div>
    {.map((name, index) => (
      <Anchor d="block" p={{ y: "0.25rem" }}>
        {name}
      </Anchor>
    ))}
  </Div>
);

export default function reminder() {
  return (
    <>
      <StyleReset />
      <App />
    </>
  );
}