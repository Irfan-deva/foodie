import { SafeAreaView, StyleSheet, Text } from "react-native";
import CustomTextInput from "./src/components/CustomTextInput";
import CustomButton from "./src/components/CustomButton";
import Home from "./src/screens/Home";
import KawaiiScreen from "./src/screens/KawaiiScreen";
import FoodScreen from "./src/screens/FoodScreen";


function App() {

  return (
    <SafeAreaView style={styles.container}>
      <FoodScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
});

export default App;
