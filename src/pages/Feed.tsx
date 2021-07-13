import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Card from '../components/Card';

export default function Feed() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    axios
      .get("https://pokedex20201.herokuapp.com/pokemons")
      .then((response) => setPokemons(response.data.data));
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {pokemons.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon}/>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  contentContainer: {
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
  }
});