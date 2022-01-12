import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { colors } from '../globals/theme.';

const TodoItem = ({ item }) => {
  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoTitle}>{item.title}</Text>
      <Text>{item.completed ? 'Done' : 'Not Done'}</Text>
    </View>
  );
};

export const TodoList = () => {
  const todos = [
    { id: 1, title: 'Learn React Native', completed: false },
    { id: 2, title: 'Learn React', completed: true },
    { id: 3, title: 'Learn Redux', completed: false },
  ];

  return (
    <View style={styles.todoList}>
      <FlatList
        data={todos}
        renderItem={TodoItem}
        keyExtractor={({ id }) => id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todoList: {
    flex: 0.85,
  },
  todoItem: {
    backgroundColor: colors.light,
    paddingHorizontal: 12,
    paddingVertical: 15,
    marginHorizontal: 7,
    marginVertical: 5,
    borderRadius: 5,
    borderColor: colors.accent,
    borderWidth: 1,
    shadowColor: colors.accent,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,

    elevation: 7,
  },
  todoTitle: {
    fontWeight: '500',
    color: colors.dark,
    fontSize: 18,
  },
});
