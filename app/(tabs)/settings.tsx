import DangerZone from "../components/DangerZone";
import Preferences from "../components/Preferences";
import ProgressStats from "../components/ProgressStats";
import useTheme from "../hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = () => {
  const { colors } = useTheme();

  return (
    <LinearGradient colors={colors.gradients.background} className="flex-1">
      <SafeAreaView className="flex-1">
        {/* HEADER */}
        <View className="px-6 pt-8 pb-6">
          <View className="flex-row items-center">
            <View className="w-14 h-14 rounded-2xl overflow-hidden mr-4">
              <LinearGradient colors={colors.gradients.primary} className="flex-1 justify-center items-center">
                <Ionicons name="settings" size={28} color="#ffffff" />
              </LinearGradient>
            </View>
            <Text className="text-[32px] font-bold tracking-tight" style={{ color: colors.text }}>Settings</Text>
          </View>
        </View>

        <ScrollView
          className="flex-1"
          contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 120, gap: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <ProgressStats />
          <Preferences />
          <DangerZone />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};
export default SettingsScreen;