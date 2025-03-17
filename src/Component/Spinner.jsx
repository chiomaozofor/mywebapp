import React, { useState, useEffect } from 'react';
import LogoSpinner from './Logospinner';
import PrivateRoute from '../Routes/PrivateRoute';

const Spinner= () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LogoSpinner />;
  }

  return (
    <div>
      <PrivateRoute />
    </div>
  );
};

export default Spinner;