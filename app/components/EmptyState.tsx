import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import useTheme from "../hooks/useTheme";

const EmptyState = () => {
  const { colors } = useTheme();

  return (
    <View className="items-center justify-center py-20">
      <LinearGradient 
        colors={colors.gradients.empty} 
        className="w-[120px] h-[120px] rounded-full justify-center items-center mb-6"
      >
        <Ionicons name="clipboard-outline" size={60} color={colors.textMuted} />
      </LinearGradient>
      <Text 
        className="text-2xl font-bold mb-2" 
        style={{ color: colors.text }}
      >
        No todos yet!
      </Text>
      <Text 
        className="text-[17px] text-center px-10 leading-6" 
        style={{ color: colors.textMuted }}
      >
        Add your first todo above to get started
      </Text>
    </View>
  );
};
export default EmptyState;