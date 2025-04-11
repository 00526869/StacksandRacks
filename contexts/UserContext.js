import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [recommendationCount, setRecommendationCount] = useState(0);

  const loginUser = (userData) => {
    setUser(userData);
    setRecommendationCount(0);
  };

  const incrementRecommendations = () => {
    setRecommendationCount((prev) => prev + 1);
  };

  return (
    <UserContext.Provider value={{ user, loginUser, recommendationCount, incrementRecommendations }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

