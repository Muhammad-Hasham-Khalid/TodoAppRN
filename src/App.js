import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';

const App = () => {
  return (
	<SafeAreaView style={styles.container}>
      <TodoList />
      <AddTodo />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;