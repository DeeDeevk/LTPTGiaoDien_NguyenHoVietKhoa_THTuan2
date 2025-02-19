import React from 'react'
import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import BaiTap01 from './components/BaiTap01'
import BaiTap02 from './components/BaiTap02'
import BaiTap03 from './components/BaiTap03'

function App() {


  return (
    <>
      <h2>Bài tập 1</h2>
      <BaiTap01></BaiTap01>
      <br />
      <h2>Bài tập 2</h2>
      <BaiTap02></BaiTap02>
      <h2>Bài tập 3</h2>
      <BaiTap03></BaiTap03>
    </>
  )
}

export default App
