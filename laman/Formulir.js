import {React,useState} from "react";
import { Image, StyleSheet, Text, Button, View,TextInput } from 'react-native';

import Profile from '../assets/profile-icon.png'
import Menu from '../assets/menu-icon.png'
import Awal from '../assets/awal-icon.png'
import Akhir from '../assets/akhir-icon.png'
import date from '../assets/date-icon.png'

const Formulir = ({ navigation }) => {
  const [kepergian, setKepergian] = useState("");
  const [destinasi, setDestinasi] = useState("");
  const [tgl, setTgl] = useState("");
  

    return(
        <View style={styles.container}>
            <View style={styles.top}>
              <img src={Menu} alt="Menu" />
              <Text style={styles.header}>Hiling.id</Text>
              <img src={Profile} alt="Profile" />
            </View>
            
            <View style={styles.card}>
              <Text style={styles.header2}>Lokasi keberangkatan</Text>
              <View style={styles.maininputan}>
                <img src={Awal} alt="Awal" />
                <TextInput
                  style={styles.input}
                  onChangeText={setKepergian}
                  value={kepergian}
                  placeholder="Masukkan Lokasi Keberangkatan"
                  selectTextOnFocus={false}
                />
              </View>
              <Text style={styles.header2}>Lokasi Tujuan</Text>
              <View style={styles.maininputan}>
                <img src={Akhir} alt="Akhir" />
                <TextInput
                  style={styles.input}
                  onChangeText={setDestinasi}
                  value={destinasi}
                  placeholder="Masukkan Lokasi Tujuan"
                />
              </View>
              <Text style={styles.header2}>Tanggal Keberangkatan</Text>
                <View style={styles.maininputan}>
                  <img src={date} alt="date" />
                  <TextInput
                    style={styles.input}
                    onChangeText={setTgl}
                    value={tgl}
                    placeholder="Masukkan Tanggal Keberangkatan"
                  />
                </View>
              <Button
                color= '#004d00'
                title="Cari"
                onPress={() => navigation.navigate('Hasil')}
              />
            </View>
            
            <View style={styles.kotak}>
              <Text style={styles.copyright}>Copyright Salman illiyin Gustian - 119140053</Text>
            </View>
            
    
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001a00',
    overflow : "hidden",
  },
  top: {
    flexDirection:'row',
    alignItems: 'center',
    padding:40,
    justifyContent: 'space-between'
  },
  maininputan: {
    width: '100%',
    flexDirection:'row',
    alignItems: 'center',
    marginBottom:20,
    marginTop:5,
    paddingLeft:10,
    borderWidth:1,
    borderRadius:3,
    borderColor: '#E5E5E5',
    
  },
  header: {
    color: 'white',
    fontSize: 41,
    fontFamily: "Sans-Serif",
    fontWeight: "Bold",
  },
  header2: {
    fontFamily: "Sans-Serif",
    fontWeight: "Bold",
  },
  card: {
    backgroundColor: 'white',
    margin: 'auto',
    width: '80%',
    padding:20,
    borderRadius:10,
    boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)",
  },
  input: {
    height: 40,
    width: '100%',
    border:'none',
    padding: 10,
    borderRadius:3,
  },
  kotak: {
    marginTop: '-100px',
    zIndex: -1,
    flex:1,
    borderRadius:10,
    backgroundColor: '#F1F1F1',
  },
  copyright: {
    color : '#797575',
    marginBottom: 29,
    marginTop: 'auto',
    textAlign: 'center',
  }
});

export default Formulir;