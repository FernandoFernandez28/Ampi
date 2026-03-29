import { View, Text, StyleSheet } from 'react-native';
import UserCard from '@/components/UserCard';
import CardSwitcher from '@/mechanics/CardSwitcher';

export default function Profile() {
    return(
        <View  style={styles.container}>
            {/* <UserCard name="Fernando" role="Vocalist" pronouns='he/him' age='23' genres={["indie", "rock"]} location="London"/> */}
            <CardSwitcher users={[
              { name:"Fernando", role:"Vocalist", pronouns:'he/him', age:'23', genres:["indie", "rock"], location: "London", image:'./../../assets/images/profileCard/fer.jpeg'},
              {name:"Sofia", role:"Vocalist", pronouns:'she/her', age:'19', genres:["r&b", "pop"], location: "London", image: './../../assets/images/profileCard/sofi.jpeg'}
            ]}/>
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