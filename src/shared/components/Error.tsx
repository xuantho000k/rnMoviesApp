import { StyleSheet, Text, View } from "react-native";

type ErrorProps = {
  message: string
};

export const Error = ({ message }: ErrorProps) => {
  return (
    <View style={styles.container}>
      <Text>Error occurred: {message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})