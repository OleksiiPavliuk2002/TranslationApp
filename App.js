import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import * as Speech from "expo-speech"

export default function App() {
  const [inputWords, setInputWords] = useState('');

  const speak = () => {
    const words = inputWords.inputWords;
    Speech.speak(words);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1, width: 200, paddingHorizontal: 10 }}
        placeholder="Type here to speak"
        onChangeText={(text) => setInputWords({inputWords: text})}
      />
      <TouchableOpacity style={styles.button}>
        <Text onPress={speak} style={{color: '#fff', fontSize: 18, fontWeight: 700}}>Speak</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#F39C12",
    marginTop: 40,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 8,
  },
});
