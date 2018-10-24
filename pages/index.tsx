import * as React from 'react';
import Head from 'next/head';
import styled, { css } from 'react-emotion';

import * as Model from '../model';

const Speech = Model.createRecognition();

const basicStyles = css`
  background-color: white;
  color: cornflowerblue;
  border: 1px solid lightgreen;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  margin: 3rem 0;
  padding: 1rem 0.5rem;
`
const hoverStyles = css`
  &:hover {
    color: white;
    background-color: lightgray;
    border-color: aqua;
    box-shadow: -15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue;
  }
`

const Combined = styled.div`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
`

export default class extends React.Component {
  private Speech;
  public componentDidMount(): void {
    this.Speech = Speech({
      grammars: `#JSGF V1.0; grammar commands; public  = Hola`,
      maxAlternatives: 1,
      interimResults: false
    });
  }

  public render(): JSX.Element {
    return (
      <>
        <Head>
          <title>Building Web Emapthy</title>
          <meta name="description" content="Base app for the Building Web Empathy Workshop" />
        </Head>
        <>
          <Combined>
          With <code>:hover</code>.
          </Combined>
          <button onClick={e => this.Speech.start(e)}>Clik Me</button>
        </>
      </>
    )
  }
}

