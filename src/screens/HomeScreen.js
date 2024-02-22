import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => (
<SafeAreaView style={styles.container}>
    <View style={styles.banner}>
      <Text style={styles.title}>
        Evcil hayvanlarınızı seviyoruz
      </Text>
      <Image
        style={styles.image}
        source={require('./../../assets/banner.png')}
      />
      <Text style={styles.bottomtitle}>
        Hesabınızı hemen kaydedin, böylece hayvan ihtiyaçlarınızı karşılayabilirsiniz.
      </Text>
      {/* TouchableOpacity bileşenine onPress prop'unu ekleyin */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('dashboard')} // Dashboard sayfasına yönlendir
      >
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  banner: {
    padding:80,
    bottom:50,
    backgroundColor:'white',
    margin:20,
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
  },
  image:{
  margin: -60,
  top: 100,
  justifyContent: 'center',
  alignItems: 'center',
  },
  bottomtitle: {
    top:150,
    fontSize:14,
    color:'#898989',
    fontWeight: 'regular',
  },
  button: {
    top:200,
    borderRadius:100, // Yuvarlak kenarlıklar için borderRadius ayarı
    paddingLeft:60,
    paddingTop:15,
    paddingBottom:15,
    backgroundColor: '#406AFD', // Mavi arka plan rengi
    paddingHorizontal:50, // Butonun yatay padding'i

  },
  buttonText: {
    color: 'white'
  }
});

export default HomeScreen;
