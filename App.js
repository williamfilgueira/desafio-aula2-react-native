import React from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topo} />
      <View style={styles.quadrado} />
      <View style={styles.retangulo} />
      <View style={styles.containerRetangulo}>
        <View style={styles.retanguloDuploRoxo} />
        <View style={styles.retanguloDuploAzul} />
      </View>
      <View style={styles.separador} />
      <View style={styles.containerBox}>
        <View style={styles.containerLinha}>
          <View style={styles.quadrado} />
          <View style={styles.quadrado} />
          <View style={styles.quadrado} />
        </View>
        <View style={styles.containerLinha}>
          <View style={styles.quadrado} />
          <View style={styles.quadrado} />
          <View style={styles.quadrado} />
        </View>
        <View style={styles.footer} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topo: {
    height: 25,
    backgroundColor: "teal",
  },
  quadrado: {
    height: 100,
    width: 100,
    backgroundColor: "#f5a623",
    alignSelf: "center",
    marginTop: 50,
  },
  retangulo: {
    height: 50,
    width: 150,
    backgroundColor: "#f5a623",
    alignSelf: "center",
    margin: 20,
  },
  containerRetangulo: {
    flexDirection: "row",
  },
  retanguloDuploRoxo: {
    height: 60,
    width: "50%",
    backgroundColor: "purple",
  },
  retanguloDuploAzul: {
    height: 60,
    width: "50%",
    backgroundColor: "blue",
  },
  separador: {
    height: 20,
    width: "100%",
    backgroundColor: "#25aae2",
  },
  containerBox: {
    flex: 1,
    justifyContent:'space-between'
  },
  containerLinha: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  footer: {
    height: 40,
    backgroundColor: "#4a90e2",
  },
});
