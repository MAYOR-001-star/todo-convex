import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import useTheme from '../hooks/useTheme'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { Alert } from 'react-native'

const TodoInput = () => {
    const [newTodo, setNewTodo] = useState("")
    const addTodo = useMutation(api.todos.addTodo)
    const { colors } = useTheme()
    const handleAddTodo = async () => {
        if (newTodo.trim()) {
            try {
                await addTodo({ text: newTodo.trim() });
                setNewTodo("");
            } catch (error) {
                console.log("Error adding a todo", error);
                Alert.alert("Error", "Failed to add todo");
            }
        }
    };
    return (
        <View className="px-6 pb-3">
            <View className="flex-row items-end gap-4">
                <TextInput
                    className="flex-1 border-2 rounded-[20px] px-5 py-4 text-[17px] max-h-[120px] font-medium"
                    style={{
                        backgroundColor: colors.backgrounds.input,
                        borderColor: colors.border,
                        color: colors.text
                    }}
                    placeholder="What needs to be done?"
                    value={newTodo}
                    onChangeText={setNewTodo}
                    onSubmitEditing={handleAddTodo}
                    placeholderTextColor={colors.textMuted}
                />
                <TouchableOpacity onPress={handleAddTodo} activeOpacity={0.8} disabled={!newTodo.trim()}>
                    <LinearGradient
                        colors={newTodo.trim() ? colors.gradients.primary : colors.gradients.muted}
                        className={`w-14 h-14 rounded-full justify-center items-center ${!newTodo.trim() ? 'opacity-50' : ''}`}
                    >
                        <Ionicons name="add" size={24} color="#ffffff" />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TodoInput