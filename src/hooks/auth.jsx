import { createContext, useContext, useEffect, useState } from "react";

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@savemypressurizer:user", JSON.stringify(user));
      localStorage.setItem("@savemypressurizer:token", token);

      api.defaults.headers.common['Authorization'] = `Beares ${token}`;
      setData({ user, token })
    } catch(error) {
      if(error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível realizar o login.")
      }
    }
  }

  async function signOut() {
    localStorage.removeItem("@savemypressurizer:user");
    localStorage.removeItem("@savemypressurizer:token");

    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@savemypressurizer:user");
    const token = localStorage.getItem("@savemypressurizer:token");

    if(user && token) {
      api.defaults.headers.common['Authorization'] = `Beares ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      });
    }

  }, [])
  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user: data.user
      }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context
}

export { AuthProvider, useAuth };