import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useAppContext } from '../context';
import { colors } from '../globals/theme.';

const TodoItem = ({ item, handlePress }) => {
  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoTitle}>{item.title}</Text>
      <TouchableOpacity
        style={styles.doneBtn}
        onPress={() => handlePress(item.id)}>
        <Text style={styles.doneBtnText}>DONE</Text>
      </TouchableOpacity>
    </View>
  );
};

export const TodoList = () => {
  const { todos } = useAppContext();
  const { completeTodo } = useAppContext();

  if (!todos.length) {
    return (
      <View style={styles.emptyTodoList}>
        <Text style={styles.emptyTodoListText}>You have no pending work.</Text>
      </View>
    );
  }

  return (
    <View style={styles.todoList}>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem item={item} handlePress={completeTodo} />
        )}
        keyExtractor={({ id }) => id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todoList: {
    flex: 1,
  },
  emptyTodoListText: {
    color: colors.dark,
    fontSize: 22,
  },
  emptyTodoList: { flex: 1, justifyContent: 'center', alignItems: 'center' },
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  todoTitle: {
    fontWeight: '500',
    color: colors.dark,
    fontSize: 18,
  },
  doneBtn: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderColor: colors.dark,
    borderRadius: 5,
  },
  doneBtnText: {
    fontWeight: 'bold',
    color: colors.dark,
  },
});
