import React from "react";
import { TouchableOpacity, SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import Icon from '../assets/pesawat-icon.png'
import Profile from '../assets/profile-icon.png'
import TombolBack from '../assets/Arrow.png'

const Tiket = [
  {
    id: '1',
    asal: 'Kuala-Namu',
    destinasi: 'Soekarno-Hatta',
    maskapai: 'Garuda',
    waktu : '19 Feb 2022, 13:00',

  },
  {
    id: '2',
    asal: 'Soekarno-Hatta',
    destinasi: 'Kuala-Namu',
    maskapai: 'Batik',
    waktu : '19 Feb 2022, 14:00',
  },
  {
    id: '3',
    asal: 'Soekarno-Hatta',
    destinasi: 'Kuala-Namu',
    maskapai: 'Air-Asia',
    waktu : '19 Feb 2022, 14:00',
  },
];


const Hasil = ({ navigation }) => {
  const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.tujuanasal}>{item.asal}   -   {item.destinasi}</Text>
    <View style={styles.waktupesawat}>
      <img src={Icon} alt="Icon" style={styles.Icon}/>
      <Text style={styles.maskapai}>{item.maskapai}</Text>
      <Text style={styles.texttanggal}>{item.waktu}</Text>
    </View>    
  </View>
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.top}>
            <TouchableOpacity
              style={styles.button}
              onPress={ () => navigation.goBack()}
            >
              <img src={TombolBack} alt="back" style={styles.Icon}/>
            </TouchableOpacity>
            <Text style={styles.heading}>Hiling.id</Text>
            <img src={Profile} alt="Profile" style={styles.Icon}/>
          </View>
      </View>
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <FlatList
            data={Tiket}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </SafeAreaView>
      <Text style={styles.copyright}>Copyright Salman illiyin Gustian - 119140053</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    marginTop: StatusBar.currentHeight || 0,
  },
  header:{
    width:'100%',
    backgroundColor: '#001a00',
    padding:20,
    marginBottom:10,
  },
  heading: {
    color: 'white',
    fontSize: 30,
    fontFamily: "Sans-Serif",
  },
  heading2: {
    fontFamily: "Sans-Serif",
    fontWeight: "Bold",
    color: 'white',
    textAlign:'center',
  },
  top: {
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:10,
  },
  img: {
    width:10,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)",
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
  },
  title: {
    fontSize: 32,
  },
  waktupesawat:{
    marginTop: 20,
    marginBottom:10,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  maskapai:{
    marginLeft:-80,
    fontSize:20,
    fontWeight: "bold",
  },
  texttanggal:{
    color:'blue',
  },
  copyright: {
    color : '#797575',
    marginBottom: '20px',
    padding:19,
    marginTop: '10px',
    textAlign: 'center',
  },
});

export default Hasil;