import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { Colors, Sizing } from "../styles";
import TypeIcon from "./TypeIcon";

type CardProps = {
  pokemon: Pokemon;
};

export default function Card({ pokemon }: CardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{pokemon.name}</Text>
      <Text style={styles.number}>#{pokemon.number}</Text>
      <Image style={styles.image} source={{ uri: pokemon.image_url }} />
      <View style={styles.types}>
        {pokemon.kind.split(';').map(type => <TypeIcon key={type} type={type} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: Sizing.x10,
    paddingHorizontal: Sizing.x20,
    paddingVertical: Sizing.x10,
    margin: Sizing.x20,

    // ios
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // android
    elevation: 5,
  },
  name: {
    color: Colors.gray100,
    fontFamily: "Barlow_500Medium",
    fontSize: 16,
  },
  number: {
    color: Colors.gray300,
    fontFamily: "Barlow_300Light_Italic",
    fontSize: 14,
  },
  image: {
    width: 96,
    height: 96,
  },
  types: {
    flexDirection: "row",
    justifyContent: "center"
  }
});