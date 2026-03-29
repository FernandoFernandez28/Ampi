import { View, Button, Text, StyleSheet, Image, Dimensions } from "react-native";
import UserCard from '@/components/UserCard';
import { UserCardProps } from "@/components/UserCard";
import React, { useEffect, useMemo, useState } from "react";

// const userSet = useMemo(() => {
//     return 
// }, []);



export default function CardSwitcher({users}:{users: UserCardProps[]}) {

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
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: 10,
    gap: 5,
  },
});