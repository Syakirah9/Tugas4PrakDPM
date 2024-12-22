import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const teamA = "Tim A";
  const teamB = "Tim B";
  const winningScore = 10;

  const incrementScore = (team) => {
    if (team === "A") {
      const newScore = scoreA + 1;
      setScoreA(newScore);
      if (newScore === winningScore) {
        Alert.alert("Pemenang!", `${teamA} memenangkan pertandingan!`);
      }
    } else {
      const newScore = scoreB + 1;
      setScoreB(newScore);
      if (newScore === winningScore) {
        Alert.alert("Pemenang!", `${teamB} memenangkan pertandingan!`);
      }
    }
  };

  const decrementScore = (team) => {
    if (team === "A") {
      setScoreA(scoreA > 0 ? scoreA - 1 : 0);
    } else {
      setScoreB(scoreB > 0 ? scoreB - 1 : 0);
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengaturan Skor Futsal</Text>

      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>{teamA}</Text>
        <Text style={styles.score}>{scoreA}</Text>
        <View style={styles.buttonRow}>
          <Button title="+" onPress={() => incrementScore("A")} />
          <Button title="-" onPress={() => decrementScore("A")} />
        </View>
      </View>

      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>{teamB}</Text>
        <Text style={styles.score}>{scoreB}</Text>
        <View style={styles.buttonRow}>
          <Button title="+" onPress={() => incrementScore("B")} />
          <Button title="-" onPress={() => decrementScore("B")} />
        </View>
      </View>

      <View style={styles.resetButton}>
        <Button title="Reset Pertandingan" onPress={resetScores} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  teamContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  teamName: {
    fontSize: 20,
    marginBottom: 10,
  },
  score: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
  },
  resetButton: {
    marginTop: 20,
  },
});
