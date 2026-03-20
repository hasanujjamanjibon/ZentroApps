import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
const StateContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  // all context data will be here
  const data = {
    apps,
    loading,
  };
  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await axios.get('/app-data.json');
        setApps(response?.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching app data:', error);
        setLoading(false);
      }
    };
    fetchApps();
  }, []);

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export default ContextProvider;
export { StateContext };
