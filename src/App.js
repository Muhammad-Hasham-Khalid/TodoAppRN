import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { AppProvider } from './context';

const App = () => {
  return (
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <TodoList />
        <AddTodo />
      </SafeAreaView>
    </AppProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
