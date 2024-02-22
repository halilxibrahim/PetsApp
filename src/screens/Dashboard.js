import React from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Activity from "../components/Activity";
const Dashboard = () => (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.header}>Merhaba Özge 👋</Text>
            <Text style={styles.title}>Lila Bugün Nasıl ? </Text>
        </View>
        <View style={{ alignItems: 'flex-start' } }>
            <Text style={styles.leftAlignedRun}>✅ Yürüyüş</Text>
            <Text style={styles.leftAlignedFood}>✅ Yemek 3/3</Text>
            <Text style={styles.leftAlignedClean}>✅ Temizlik 3/3</Text>
            <Text style={styles.leftAlignedClean}>+</Text>
            <Text style={styles.leftAlignedClean}>-----------------</Text>
            <Text style={styles.leftAlignedClean}>❤️ Sağlık % 90</Text>
        </View>

        <View style={{ alignItems: 'flex-end' }}>
            <Image
            style={{right:0,bottom:50,}}
            source={require('./../../assets/Subtract.png')}
            />
        </View>
        <Activity/>
    </SafeAreaView>

);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        fontSize: 17, // Metin boyutu 17 piksel
        color: 'black', // Metin rengi siyah
        fontWeight: '300', // Yazı tipi ağırlığı light (300)
        textAlign: 'left',
        left:42,
        top:40,
    },
    title: {
        fontSize: 30, // Metin boyutu 17 piksel
        color: 'black', // Metin rengi siyah
        fontWeight: 'bold', // Yazı tipi ağırlığı light (300)
        textAlign: 'left',
        left:42,
        top:50,
    },
    leftAlignedRun: {
        fontSize: 17, // Metin boyutu 17 piksel
        color: 'black', // Metin rengi siyah
        fontWeight: '300', // Yazı tipi ağırlığı light (300)
        textAlign: 'left', // Metni sola yasla
        left:42,
        top:100,
      },
    leftAlignedFood: {
        fontSize: 17, // Metin boyutu 17 piksel
        color: 'black', // Metin rengi siyah
        fontWeight: '300', // Yazı tipi ağırlığı light (300)
        textAlign: 'left', // Metni sola yasla
        left:42,
        top:120,
    },
    leftAlignedClean: {
        fontSize: 17, // Metin boyutu 17 piksel
        color: 'black', // Metin rengi siyah
        fontWeight: '300', // Yazı tipi ağırlığı light (300)
        textAlign: 'left', // Metni sola yasla
        left:42,
        top:140,
    } 

});

export default Dashboard;

