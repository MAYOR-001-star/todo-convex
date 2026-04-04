import { api } from "../../convex/_generated/api";
import useTheme from "../hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

const ProgressStats = () => {
  const { colors } = useTheme();

  const todos = useQuery(api.todos.getTodos);
  const totalTodos = todos ? todos.length : 0;
  const completedTodos = todos ? todos.filter((todo) => todo.isCompleted).length : 0;
  const activeTodos = totalTodos - completedTodos;

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
        Progress Stats
      </Text>

      <View className="gap-4">
        {/* TOTAL TODOS */}
        <LinearGradient
          colors={colors.gradients.background}
          className="flex-row items-center p-5 rounded-2xl border-l-[4px]"
          style={{ borderLeftColor: colors.primary }}
        >
          <View className="mr-4">
            <LinearGradient 
              colors={colors.gradients.primary} 
              className="w-10 h-10 rounded-full justify-center items-center"
            >
              <Ionicons name="list" size={20} color="#fff" />
            </LinearGradient>
          </View>

          <View>
            <Text 
              className="text-[28px] font-extrabold tracking-tight" 
              style={{ color: colors.text }}
            >
              {totalTodos}
            </Text>
            <Text 
              className="text-[14px] font-semibold mt-0.5" 
              style={{ color: colors.textMuted }}
            >
              Total Todos
            </Text>
          </View>
        </LinearGradient>

        {/* COMPLETED TODOS */}
        <LinearGradient
          colors={colors.gradients.background}
          className="flex-row items-center p-5 rounded-2xl border-l-[4px]"
          style={{ borderLeftColor: colors.success }}
        >
          <View className="mr-4">
            <LinearGradient 
              colors={colors.gradients.success} 
              className="w-10 h-10 rounded-full justify-center items-center"
            >
              <Ionicons name="checkmark-circle" size={20} color="#fff" />
            </LinearGradient>
          </View>

          <View>
            <Text 
              className="text-[28px] font-extrabold tracking-tight" 
              style={{ color: colors.text }}
            >
              {completedTodos}
            </Text>
            <Text 
              className="text-[14px] font-semibold mt-0.5" 
              style={{ color: colors.textMuted }}
            >
              Completed
            </Text>
          </View>
        </LinearGradient>

        {/* ACTIVE TODOS */}
        <LinearGradient
          colors={colors.gradients.background}
          className="flex-row items-center p-5 rounded-2xl border-l-[4px]"
          style={{ borderLeftColor: colors.warning }}
        >
          <View className="mr-4">
            <LinearGradient 
              colors={colors.gradients.warning} 
              className="w-10 h-10 rounded-full justify-center items-center"
            >
              <Ionicons name="time" size={20} color="#fff" />
            </LinearGradient>
          </View>

          <View>
            <Text 
              className="text-[28px] font-extrabold tracking-tight" 
              style={{ color: colors.text }}
            >
              {activeTodos}
            </Text>
            <Text 
              className="text-[14px] font-semibold mt-0.5" 
              style={{ color: colors.textMuted }}
            >
              Active
            </Text>
          </View>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
};

export default ProgressStats;