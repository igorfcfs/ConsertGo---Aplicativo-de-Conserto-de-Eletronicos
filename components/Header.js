import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Header = ({ message }) => {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/logo_consertgo2.png')} />
      <Text style={styles.subtitle}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
        marginTop: 10,
    },
});

export default Header;
