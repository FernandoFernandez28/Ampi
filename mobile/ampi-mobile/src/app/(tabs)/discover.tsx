import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import CardSwitcher from '@/mechanics/CardSwitcher';
import { mockData } from '@/database/mock';

export const profileCardWidth = Dimensions.get('screen').width * 0.8;

export default function Discovery() {
    return(
      <ScrollView>

        <View  style={styles.container}>
            <View>
              <CardSwitcher users={mockData}/>

            </View>
            {/* <View style={styles.promptContainer}>
                  <Text>Prompt 1</Text>
            </View>
            <View style={styles.promptContainer}>
                  <Text>Prompt 2</Text>
            </View>
            <View style={styles.promptContainer}>
                  <Text>Prompt 3</Text>
            </View> */}
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