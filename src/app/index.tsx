import { useEffect } from "react";
import { Text, View } from "react-native";
import { supabase } from "../../lib/supabase";

export default function HomeScreen() {
  useEffect(() => {
    console.log("Supabase URL loaded:", !!process.env.EXPO_PUBLIC_SUPABASE_URL);
    console.log("Supabase client created:", !!supabase);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Coaching App</Text>
      <Text>Supabase connection test</Text>
    </View>
  );
}