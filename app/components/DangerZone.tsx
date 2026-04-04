import { api } from "@/convex/_generated/api";
import useTheme from "../hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { Alert, Text, TouchableOpacity, View } from "react-native";

const DangerZone = () => {
    const { colors } = useTheme();

    const clearAllTodos = useMutation(api.todos.clearAllTodos);

    const handleResetApp = async () => {
        Alert.alert(
            "Reset App",
            "⚠️ This will delete ALL your todos permanently. This action cannot be undone.",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Delete All",
                    style: "destructive",
                    onPress: async () => {
                        try {
                            const result = await clearAllTodos();
                            Alert.alert(
                                "App Reset",
                                `Successfully deleted ${result.deletedCount} todo${result.deletedCount === 1 ? "" : "s"}. Your app has been reset.`
                            );
                        } catch (error) {
                            console.log("Error deleting all todos", error);
                            Alert.alert("Error", "Failed to reset app");
                        }
                    },
                },
            ]
        );
    };

    return (
        <LinearGradient 
            colors={colors.gradients.surface} 
            className="p-5 rounded-[20px]"
        >
            <Text 
                className="text-[17px] font-bold mb-4" 
                style={{ color: colors.danger }}
            >
                Danger Zone
            </Text>

            <TouchableOpacity
                className="flex-row justify-between items-center py-2"
                onPress={handleResetApp}
                activeOpacity={0.7}
            >
                <View className="flex-row items-center gap-4">
                    <LinearGradient 
                        colors={colors.gradients.danger} 
                        className="w-[40px] h-[40px] rounded-[10px] justify-center items-center"
                    >
                        <Ionicons name="trash" size={18} color="#ffffff" />
                    </LinearGradient>
                    <Text 
                        className="text-[17px] font-semibold" 
                        style={{ color: colors.danger }}
                    >
                        Reset App
                    </Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
            </TouchableOpacity>
        </LinearGradient>
    );
};

export default DangerZone;