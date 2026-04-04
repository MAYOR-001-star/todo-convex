import { cssInterop } from "nativewind";
import { LinearGradient } from "expo-linear-gradient";
import { ThemeProvider } from "./hooks/useTheme";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
import "./global.css";

cssInterop(LinearGradient, {
  className: "style",
});

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});
export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ title: "Home" }} />
        </Stack>
      </ThemeProvider>
    </ConvexProvider>
  )
}
