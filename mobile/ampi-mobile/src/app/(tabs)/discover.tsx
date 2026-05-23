import { View, Text, StyleSheet, Dimensions, ScrollView, Button } from 'react-native';
import { mockData } from '@/database/mock';
import UserCard from '@/components/DiscoverUserProfile';
import { useState, useRef } from 'react';

export const profileCardWidth = Dimensions.get('screen').width * 0.8;

const scrollRef = useRef<ScrollView>(null);

export default function Discovery() {

      function scrollToTop() {
        scrollRef.current?.scrollTo({
        y:0,
        animated: true,
        })
      }

      const  users = mockData;

      const [userIndex, setUserIndex] = useState<number>(0);
      
      const userCard = users[userIndex];
  
      if(!users.length) {
          return <Text>No users available</Text>
      }
  
      if(!userCard) {
          return <Text>Loading...</Text>
      }
    return(
      <View style={styles.screen}>

        <ScrollView contentContainerStyle={styles.scrollContent} ref={scrollRef}>
            <UserCard {...userCard}/>
        </ScrollView>
        <View style={styles.fixedButtons}>
            <Button
            title="Back"
            onPress={() => {setUserIndex((c) => Math.max(c - 1, 0));
              scrollToTop();
            }}
            />
            <Button
            title="Connect"
            onPress={() => {console.log("Connect")}}
            />
            <Button
            title="Skip"
            onPress={() => {setUserIndex((c) => Math.min(c + 1, users.length - 1)); 
              scrollToTop();
            }}
            />
          </View>
      </View>
    )
}



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: "relative",
  },

  fixedButtons: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    zIndex: 10,
  },

  scrollContent: {
    paddingTop: 30,
    alignItems: "center",
    paddingBottom: 100,
  },
});