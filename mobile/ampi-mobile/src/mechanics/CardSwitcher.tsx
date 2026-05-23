import { View, Button, Text, StyleSheet, Image, Dimensions } from "react-native";
import UserCard from '@/components/DiscoverUserProfile';
import { UserProfile } from "@/data/user";
import React, { useEffect, useMemo, useState } from "react";

export const profileCardWidth = Dimensions.get('screen').width * 0.8;
export const profileCardHeight = Dimensions.get('screen').height * 0.8;

export default function CardSwitcher({users}:{users: UserProfile[]}) {

    const [userIndex, setUserIndex] = useState<number>(0);
    
    const userCard = users[userIndex];

    if(!users.length) {
        return <Text>No users available</Text>
    }

    if(!userCard) {
        return <Text>Loading...</Text>
    }

    return(
        <View>
             <UserCard {...userCard}/>
             <View style={styles.container}>
            <Button
            title="Back"
            onPress={() => setUserIndex((c) => Math.max(c - 1, 0))}
            />
            <Button
            title="Connect"
            onPress={() => {console.log("Connect")}}
            />
            <Button
            title="Skip"
            onPress={() => setUserIndex((c) => Math.min(c + 1, users.length - 1))}
            />
             </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: 10,
    gap: 5,
    left: profileCardWidth -20,
    top: profileCardHeight -20,
  },
});