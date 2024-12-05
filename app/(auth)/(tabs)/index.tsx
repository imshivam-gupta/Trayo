import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { addTodo, todos$ as _todos$, toggleDone } from '@/utils/SupaLegend';
import { observer } from '@legendapp/state/react';
import {ThemedView} from "@/components/ThemedView";

// Emojis to decorate each todo.
const NOT_DONE_ICON = String.fromCodePoint(0x1f7e0);
const DONE_ICON = String.fromCodePoint(0x2705);

// The text input component to add a new todo.
const NewTodo = () => {
    const [text, setText] = useState('');
    const handleSubmitEditing = ({ nativeEvent: { text } }: { nativeEvent: { text: string } }) => {
        if (text.trim()) {
            setText('');
            addTodo(text);
        }
    };

    return (
        <TextInput
            value={text}
            onChangeText={(text) => setText(text)}
            onSubmitEditing={handleSubmitEditing}
            placeholder="What do you want to do today?"
            style={styles.input}
        />
    );
};

// A single todo component, either 'not done' or 'done': press to toggle.
const Todo = ({ todo }: { todo: { id: string; text: string; done: boolean } }) => {
    const handlePress = () => {
        toggleDone(todo.id);
    };

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={[styles.todo, todo.done ? styles.done : null]}
        >
            <Text style={styles.todoText}>
                {todo.done ? DONE_ICON : NOT_DONE_ICON} {todo.text}
            </Text>
        </TouchableOpacity>
    );
};

const Todos = observer(({ todos$ }: { todos$: typeof _todos$ }) => {
    // Get the todos from the state and subscribe to updates.
    const todos = todos$?.get();
    const renderItem = ({ item: todo }: { item: { id: string; text: string; done: boolean } }) => (
        <Todo todo={todo} />
    );

    if (!todos || Object.keys(todos).length === 0) {
        return (
            <View style={styles.emptyState}>
                <Text>No todos available. Start by adding one!</Text>
            </View>
        );
    }

    return <ThemedView>
        <NewTodo />
        hi
        <FlatList data={Object.values(todos)} renderItem={renderItem} style={styles.todos} />
    </ThemedView>
    ;
});

// Styles for the components.
const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    todo: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    done: {
        backgroundColor: '#e0ffe0',
    },
    todoText: {
        fontSize: 16,
    },
    todos: {
        marginTop: 10,
    },
    emptyState: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
});
export default Todos;
export { NewTodo, Todos };
