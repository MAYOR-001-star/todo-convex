import useTheme from "../hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator, Text, View } from "react-native";

const LoadingSpinner = () => {
  const { colors } = useTheme();

  return (
    <LinearGradient colors={colors.gradients.background} className="flex-1">
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color={colors.primary} />
        <Text className="mt-5 text-[18px] font-medium" style={{ color: colors.text }}>
          Loading your todos...
        </Text>
      </View>
    </LinearGradient>
  );
};

export default LoadingSpinner;