import { useContext } from 'react';
import { StateContext } from './ContextProvider';

const ContextWrapper = () => {
  const data = useContext(StateContext);
  return data;
};

export default ContextWrapper;
