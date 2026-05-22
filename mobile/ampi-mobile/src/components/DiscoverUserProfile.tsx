import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import { UserProfile } from "@/data/user";


// const image1 = require('./photo1.jpeg');

export const profileCardWidth = Dimensions.get('screen').width * 0.9;

export default function UserCard({name, role, age, pronouns ,genres, location, image, prompts}: UserProfile) {

      return (
    <View>
    <View style={styles.container}>
      <Image style={styles.image} source={ image } />
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
       <View style={styles.promptContainer}>
                  <Text style={styles.promptHeader}>{prompts[0]?.heading}</Text>
                  <Text style={styles.promptResponse}>{prompts[0]?.response}</Text>
            </View>
            <View style={styles.promptContainer}>
                  <Text style={styles.promptHeader}>{prompts[1]?.heading}</Text>
                  <Text style={styles.promptResponse}>{prompts[1]?.response}</Text>
            </View>
            <View style={styles.promptContainer}>
                  <Text style={styles.promptHeader}>{prompts[2]?.heading}</Text>
                  <Text style={styles.promptResponse}>{prompts[2]?.response}</Text>
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
    margin: 10
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
  },
    promptContainer: {
      backgroundColor: "white",
      borderRadius: 20,
      padding: 10,
      width: profileCardWidth,
      height: profileCardWidth / (2 * 1.67),
      overflow: 'hidden',
      margin: 10,
    },

    promptHeader: {
      fontSize: 25,
      fontWeight: "500",
    },
    promptResponse: {
      fontSize: 20,
      lineHeight: 40,
      // fontWeight: "400",
    }
});