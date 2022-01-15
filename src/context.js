import React from 'react';
import { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState([]);

  const addTodo = useCallback(todoTitle => {
    const newTodo = {
      id: Date.now(),
      title: todoTitle,
      completed: false,
    };
    setAppState(currentTodos => [newTodo, ...currentTodos]);
  }, []);

  const completeTodo = useCallback(todoId => {
    setAppState(currentTodos =>
      currentTodos.filter(todo => todo.id !== todoId),
    );
  }, []);

  const context = {
    todos: appState,
    addTodo,
    completeTodo,
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
