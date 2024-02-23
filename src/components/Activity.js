import React, { useState } from 'react';

import {TextInput, View, TouchableOpacity, FlatList, Image, Text, StyleSheet,Button } from 'react-native';

const initialData = [
    {
      id: '1',
      text: 'Aylık genel aşı  kontrol',
      image:require('./../../assets/health.png'),
    },
    {
      id: '2',
      text: 'Doğum günü yaklaşıyor.',
      image:require('./../../assets/birthday.png'),
    },
    {
      id: '3',
      text: 'Akşam Yürüyüşü',
      image:require('./../../assets/banner.png'),

    },
  ];

const Activity = () => {
  const [data, setData] = useState(initialData);
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  // Yeni öğe ekleme fonksiyonu
  const addNewItem = () => {
    const newItem = {
      id: String(data.length + 1),
      text: text,
      image: image,
    };
    setData([...data, newItem]);
    // Formu temizle
    setText('');
    setImage(null);
  };

  const deleteItem = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
      
      <TouchableOpacity onPress={() => deleteItem(item.id)}>
        <Text style={styles.deleteButtonText}>❌</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Metin girin"
        />
        {/* ImagePicker kütüphanesi eklenecek */}
        <Button title="Resim Seç" onPress={() => {/* Resim seçme işlevi */}} />
        <Button title="Öğe Ekle" onPress={addNewItem} />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row', // Yatay düzen
    alignItems: 'center', // İçeriği dikey olarak ortala
    borderWidth: 1, // Çerçeve kalınlığı
    borderColor: 'white', // Mavi çerçeve rengi
    padding: 40, // İç boşluk
    margin: 10, // Dış boşluk
    backgroundColor: '#5C68FF',
    borderRadius:16,
  },
  formContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor:'blue',
    padding:5,
    margin:15,
    alignItems: 'center',
    backgroundColor:'white',
  },

  image: {
    width: 60, // Resim genişliği
    height: 60, // Resim yüksekliği
    marginRight: 10, // Resim ve metin arasındaki boşluk
  },
  text: {
    fontSize: 20, // Metin boyutu 17 piksel
    color: 'white', // Metin rengi siyah
    fontWeight: '900', // Yazı tipi ağırlığı light (300)
    textAlign: 'left',

},
});

export default Activity;
