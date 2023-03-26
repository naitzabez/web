import type { Component } from 'solid-js';
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';
const App: Component = () => {
  return (
      <>
        <div id="main-container" class='flex flex-col bg-pattern bg-cover bg-slate-900 top-0 m-0 p-0 w-screen h-screen'>
          <Nav/>
          <Content/>
          <Footer/> 
        </div>
      </>
  )
};

export default App;
