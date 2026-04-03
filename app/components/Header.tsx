import { View, Text } from 'react-native'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import useTheme from '../hooks/useTheme'

const Header = () => {
    const { colors } = useTheme()
    const todos = useQuery(api.todos.getTodos)
    const completedCount = todos ? todos.filter((todo) => todo.isCompleted).length : 0
    const totalTodos = todos?.length || 0
    const progressPercentage = totalTodos > 0 ? (completedCount / totalTodos) * 100 : 0
    
    return (
        <View className='px-6 pt-8 pb-6'>
            <View className='flex-row items-center mb-5'>
                <LinearGradient
                    colors={colors.gradients.primary}
                    className='w-14 h-14 rounded-2xl justify-center items-center mr-4'>
                    <Ionicons name='flash-outline' size={28} color="#ffffff" />
                </LinearGradient>
                <View className='flex-1'>
                    <Text className='text-[32px] font-bold tracking-tight mb-1' style={{ color: colors.text }}>
                        Today&apos;s Tasks 👀
                    </Text>
                    <Text className='text-[17px] font-medium' style={{ color: colors.textMuted }}>
                        {completedCount} of {totalTodos} completed
                    </Text>
                </View>
            </View>
            
            <View className='mt-2'>
                <View className='flex-row items-center gap-4'>
                    <View className='flex-1 h-3 rounded-full overflow-hidden' style={{ backgroundColor: colors.border }}>
                        <LinearGradient
                            colors={colors.gradients.success}
                            className='h-full rounded-full'
                            style={{ width: `${progressPercentage}%` }}
                        />
                    </View>
                    <Text className='text-base font-bold min-w-[40px] text-right' style={{ color: colors.success }}>
                        {Math.round(progressPercentage)}%
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Header