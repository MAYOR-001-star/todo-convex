import useTheme from "../hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Switch, Text, View } from "react-native";

const Preferences = () => {
  const [isAutoSync, setIsAutoSync] = useState(true);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const { isDarkMode, toggleDarkMode, colors } = useTheme();

  return (
    <LinearGradient 
      colors={colors.gradients.surface} 
      className="p-6 rounded-[20px]"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 8,
      }}
    >
      <Text 
        className="text-[20px] font-bold mb-5 tracking-tight" 
        style={{ color: colors.text }}
      >
        Preferences
      </Text>

      {/* DARK MODE */}
      <View 
        className="flex-row justify-between items-center py-5 border-b" 
        style={{ borderBottomColor: colors.border }}
      >
        <View className="flex-row items-center flex-1">
          <LinearGradient 
            colors={colors.gradients.primary} 
            className="w-9 h-9 rounded-lg justify-center items-center mr-4"
          >
            <Ionicons name="moon" size={18} color="#fff" />
          </LinearGradient>
          <Text 
            className="text-[17px] font-semibold" 
            style={{ color: colors.text }}
          >
            Dark Mode
          </Text>
        </View>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          thumbColor={"#fff"}
          trackColor={{ false: colors.border, true: colors.primary }}
          ios_backgroundColor={colors.border}
        />
      </View>

      {/* NOTIFICATIONS */}
      <View 
        className="flex-row justify-between items-center py-5 border-b" 
        style={{ borderBottomColor: colors.border }}
      >
        <View className="flex-row items-center flex-1">
          <LinearGradient 
            colors={colors.gradients.warning} 
            className="w-9 h-9 rounded-lg justify-center items-center mr-4"
          >
            <Ionicons name="notifications" size={18} color="#fff" />
          </LinearGradient>
          <Text 
            className="text-[17px] font-semibold" 
            style={{ color: colors.text }}
          >
            Notifications
          </Text>
        </View>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={() => setIsNotificationsEnabled(!isNotificationsEnabled)}
          thumbColor={"#fff"}
          trackColor={{ false: colors.border, true: colors.warning }}
          ios_backgroundColor={colors.border}
        />
      </View>

      {/* AUTO-SYNC */}
      <View 
        className="flex-row justify-between items-center py-5 border-b" 
        style={{ borderBottomColor: colors.border }}
      >
        <View className="flex-row items-center flex-1">
          <LinearGradient 
            colors={colors.gradients.success} 
            className="w-9 h-9 rounded-lg justify-center items-center mr-4"
          >
            <Ionicons name="sync" size={18} color="#fff" />
          </LinearGradient>
          <Text 
            className="text-[17px] font-semibold" 
            style={{ color: colors.text }}
          >
            Auto Sync
          </Text>
        </View>
        <Switch
          value={isAutoSync}
          onValueChange={() => setIsAutoSync(!isAutoSync)}
          thumbColor={"#fff"}
          trackColor={{ false: colors.border, true: colors.success }}
          ios_backgroundColor={colors.border}
        />
      </View>
    </LinearGradient>
  );
};

export default Preferences;