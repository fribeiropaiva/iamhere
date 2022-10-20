import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export default function Home() {
  function handleDelete() {
    console.log("removing");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.date}>17 de outubro de 2022</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          style={styles.nameInput}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Participant name="Filipe" onDelete={handleDelete} />
    </View>
  );
}
