import { View, Text, StyleSheet } from 'react-native';
import UserCard from '@/components/UserCard';

export default function Profile() {
    return(
        <View  style={styles.container}>
            <UserCard name="Fernando" role="Vocalist" pronouns='he/him' age='23' genres={["indie", "rock"]} location="London"/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});