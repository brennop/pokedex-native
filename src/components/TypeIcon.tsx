import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Sizing } from '../styles';

type TypeIconProps = {
  type: string;
}

const types: { [key: string]: any } = {
  bug: require("../../assets/type-icons/bug-kind-icon.png"),
  dark: require("../../assets/type-icons/dark-kind-icon.png"),
  dragon: require("../../assets/type-icons/dragon-kind-icon.png"),
  electric: require("../../assets/type-icons/electric-kind-icon.png"),
  fairy: require("../../assets/type-icons/fairy-kind-icon.png"),
  fighting: require("../../assets/type-icons/fighting-kind-icon.png"),
  fire: require("../../assets/type-icons/fire-kind-icon.png"),
  flying: require("../../assets/type-icons/flying-kind-icon.png"),
  ghost: require("../../assets/type-icons/ghost-kind-icon.png"),
  grass: require("../../assets/type-icons/grass-kind-icon.png"),
  ground: require("../../assets/type-icons/ground-kind-icon.png"),
  ice: require("../../assets/type-icons/ice-kind-icon.png"),
  normal: require("../../assets/type-icons/normal-kind-icon.png"),
  poison: require("../../assets/type-icons/poison-kind-icon.png"),
  psychic: require("../../assets/type-icons/psychic-kind-icon.png"),
  steel: require("../../assets/type-icons/steel-kind-icon.png"),
  water: require("../../assets/type-icons/water-kind-icon.png"),
};

export default function TypeIcon({ type }: TypeIconProps) {
  return <Image style={styles.icon} source={types[type]}/>
}

const styles = StyleSheet.create({
  icon: {
    height: Sizing.x40,
    width: Sizing.x40,
    marginHorizontal: Sizing.x05,
  }
})