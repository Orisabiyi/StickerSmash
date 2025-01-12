import { Pressable, Text, View } from "react-native";

type Props = {
  label: string;
};

export default function Button({ label }: Props) {
  return (
    <View>
      <Pressable>
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
}
