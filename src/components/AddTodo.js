import React, { useCallback } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useAppContext } from '../context';
import { colors } from '../globals/theme.';

export const AddTodo = () => {
  const [todoTitle, setTodoTitle] = React.useState('');
  const { addTodo } = useAppContext();

  const handleSubmit = useCallback(() => {
    if (todoTitle) {
      addTodo(todoTitle);
      setTodoTitle('');
    }
  }, [addTodo, todoTitle]);

  return (
    <View style={styles.container}>
      <TextInput
        value={todoTitle}
        onChangeText={setTodoTitle}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.accent,
    height: 80,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  input: {
    backgroundColor: colors.light,
    flex: 0.95,
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    borderRadius: 100,
    backgroundColor: colors.light,
    width: 60,
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: colors.dark,
    fontSize: 30,
  },
});
