import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import UserCard from '@/components/UserCard';
import CardSwitcher from '@/mechanics/CardSwitcher';

export const profileCardWidth = Dimensions.get('screen').width * 0.8;

export default function Discovery() {
    return(
      <ScrollView>

        <View  style={styles.container}>
            <View>
              <CardSwitcher users={[
                { name:"Fernando", role:"Vocalist", pronouns:'he/him', age:'23', genres:["indie", "rock"], location: "London", image: require("./../../../assets/images/profileCard/fer.jpeg")},
                { name:"Molly", role:"Vocalist", pronouns:'she/her', age:'22', genres:["alt", "indie"], location: "London", image: require("./../../../assets/images/profileCard/molly.jpeg")},
                { name:"Sofia", role:"Vocalist", pronouns:'she/her', age:'19', genres:["r&b", "pop"], location: "London", image: require("./../../../assets/images/profileCard/sofi.jpeg")}
              ]}/>

            </View>
            <View style={styles.promptContainer}>
                  <Text>Prompt 1</Text>
            </View>
            <View style={styles.promptContainer}>
                  <Text>Prompt 2</Text>
            </View>
            <View style={styles.promptContainer}>
                  <Text>Prompt 3</Text>
            </View>
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    top: 100,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  promptContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    width: profileCardWidth,
    height: profileCardWidth / (2 * 1.67),
    overflow: 'hidden',
    margin: 10,
  }
});