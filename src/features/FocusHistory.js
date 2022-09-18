import React from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';

import { fontSizes, spacing } from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length) return <Text style={styles.title}>We haven't focused on anything yet!</Text>;

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Things we've focused on: </Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  // historyItem: (status) => ({
  //   color: status > 1 ? 'red' : 'green',
  //   fontSize: fontSizes.md,
  // }),
  title: {
    color: 'white',
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
  container: {
    padding: spacing.md,
    flex:1,
  },
  item: {
    color: 'white',
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
});
