import logo from './logo.svg';
import './App.css';
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from './components/TodoTemplate';

import {TodoProvider} from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;
function App() {
  return (
    <TodoProvider>
      <GlobalStyle> </GlobalStyle>
      <TodoTemplate>
        
      </TodoTemplate>

    </TodoProvider>
    
  );
}

export default App;
