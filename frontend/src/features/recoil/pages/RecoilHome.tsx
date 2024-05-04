import React from 'react';
import { useCount } from '../hooks/useCount';
import { BtnCounter } from '../components/BtnCounter';
import { Count } from '../components/Count';
import { BtnContextCounter } from '../components/BtnContextCounter';
import { CountProvider } from '../contexts/CountProvider';
import { ContextCount } from '../components/ContextCount';
import { InputTask } from '../components/InputTask';
import { AddTask } from '../components/AddTask';
import { RecoilRoot } from 'recoil';
import { Link } from 'react-router-dom';

export const RecoilHome = () => {
  return (
    <>
      <CountProvider>
        <RecoilRoot>
          <div>
            <Link to="/">Homeに戻る</Link>
          </div>
          <BtnCounter />
          <Count />
          <BtnContextCounter />
          <ContextCount />
          <InputTask />
          <AddTask />
        </RecoilRoot>
      </CountProvider>
    </>
  );
};
