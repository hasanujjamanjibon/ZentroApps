import ContextWrapper from './provider/ContextWrapper';

function App() {
  const { handleName } = ContextWrapper();
  handleName();
  return <div>Home Page </div>;
}

export default App;
