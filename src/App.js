import './App.css';

function isEmptyOrSpaces(str){
  return str === null || str.match(/^ *$/) !== null;
}

function App(props) {
  let str = null;

  return (
    <p>hello {props.name.value } </p>

  ); 
}

export default App;
