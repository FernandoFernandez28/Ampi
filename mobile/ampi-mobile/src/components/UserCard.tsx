import { View, Text, StyleSheet, Image, Dimensions } from "react-native"
import React from "react";

export type UserCardProps = {
    name: string;
    pronouns: string;
    age: string;
    role: string;
    genres: string[];
    location: string;
}

// const image1 = require('./photo1.jpeg');

export const profileCardWidth = Dimensions.get('screen').width * 0.8;

export default function UserCard({name, role, age, pronouns ,genres, location}: UserCardProps) {
      return (
    <View style={styles.container}>
      <Image style={styles.image} source={ require('./photo1.jpeg')}/>
      <View style={styles.titleRow}>
        <Text style={styles.name}>{name}</Text>

        <View style={styles.metaRow}>
          <Text style={styles.metaText}>{pronouns}</Text>
          <Text style={styles.metaText}>{age}</Text>
        </View>
      </View>

      <View>
      <Text>{role}</Text>
      <Text>{genres.join(", ")}</Text>
      <Text>{location}</Text>
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    width: profileCardWidth,
    height: profileCardWidth * 1.67,
    overflow: 'hidden',
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
    marginBottom: 6,
  },

  name: {
    fontSize: 40,
    fontWeight: "700",
    lineHeight: 44,
  },

  metaRow: {
    flexDirection: "row",
    gap: 6,
    paddingBottom: 4,
  },

  metaText: {
    fontSize: 16,
    lineHeight: 20,
    color: "gray",
  },
  image: {
    flex: 1,
    width: "100%",
    height: 100,
    borderRadius: 25,
  }
});