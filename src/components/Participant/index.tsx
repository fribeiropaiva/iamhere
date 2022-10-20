import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Participant({ name, onDelete }: ParticipantProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity onPress={onDelete} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
