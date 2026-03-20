import { NavLink } from 'react-router';

const ActiveRoutes = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? 'text-indigo-700 lg:border-b-2 border-indigo-700 pb-0.5'
          : 'text-black hover:text-indigo-700  transition '
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveRoutes;
