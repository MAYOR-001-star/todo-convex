import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import useTheme from '../hooks/useTheme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../components/Header'

const index = () => {
  const { colors, toggleDarkMode } = useTheme()
  return (
    <LinearGradient
      colors={colors.gradients.background}
      className='flex-1'
    >
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView className='flex-1'>
        <Header/>
        <TouchableOpacity onPress={toggleDarkMode} className='flex-1 justify-center items-center'>
          <Text>Theme</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default index 