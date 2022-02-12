import logo from './logo.svg';
import './App.css';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;
function App() {
  return (
    <>
      <GlobalStyle> </GlobalStyle>
      <div>hello</div>
    </>
    
  );
}

export default App;
