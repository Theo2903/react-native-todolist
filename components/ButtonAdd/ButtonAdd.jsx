import { TouchableOpacity, Text } from "react-native";
import { s } from "./ButtonAdd.style";

export const ButtonAdd = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={s.btn}>
      <Text style={s.txt}> + New Todo</Text>
    </TouchableOpacity>
  );
};
