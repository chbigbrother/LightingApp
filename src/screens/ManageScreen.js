import React, {useState, useEffect} from 'react';
import {Image, View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';
import SubContainer from '../components/SubContainer';
import Icon from 'react-native-vector-icons/Ionicons';
const screenWidth = Dimensions.get("window").width;
import {LineChart} from "react-native-chart-kit";
import Geolocation from "react-native-geolocation-service";
import { Shadow, Neomorph, NeomorphBlur } from 'react-native-neomorph-shadows';
import { getSwitchValue, sendDataMobile, postSwitchDevice } from '../utils/apiUtils';
// const screenWidth = Dimensions.get("window").width;


function ManageScreen({navigation}){
    return (
      <SafeAreaView style={{backgroundColor:'#EFF3F6'}}>
        <ScrollView>
          <View style={styles.container}>
            <SubContainer style={styles.container0}>
              <Neomorph
                swapShadows // <- change zIndex of each shadow color
                style={styles.NewMBox}
              >
              {/* <View style={styles.top}> */}
                <View style={styles.subBoxL}>
                  
                  {/* <Icon name="bulb-outline" size={16} color="#888" /> */}
                  <View style={styles.lightBtnRow}>
                    <Neomorph
                    style={{
                      shadowRadius: 3,
                      borderRadius: 100,
                      backgroundColor: '#DDDDDD',
                      width: 200,
                      height: 200,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Neomorph
                      inner
                      style={{
                        shadowRadius: 7,
                        borderRadius: 90,
                        backgroundColor: '#F19F9F',
                        width: 180,
                        height: 180,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      
                    </Neomorph>
                  </Neomorph>
                    
                  </View>
                </View>
              </Neomorph>
              {/* </View> */}
            </SubContainer>
            
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  lightBtnRow: { 
    flexDirection: 'row',
    marginTop: 10,
  },
  lightBtn: {
    width: '17%',
    marginRight: 10,
  },
  NewMBox:{
    shadowRadius: 10,
    borderRadius: 25,
    backgroundColor: '#eff2f9',
    width: 360,
    height: 115,
    marginTop: 23,
  },
  NewMBoxL:{
    shadowRadius: 10,
    borderRadius: 25,
    backgroundColor: '#eff2f9',
    width: 360,
    height: 280,
    marginTop: 23,
  },
  NewMBtn:{
    shadowRadius: 10,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eff2f9',
    width: 54,
    height: 40,
    marginRight: 8,
  },
  Btn:{
    alignItems: 'center',
    justifyContent: 'center',
    width: '17%',
    height:40,
    
    backgroundColor:'#eff2f9',
    borderRadius: 25,
    shadowColor: '#161B1D',
    shadowOffset: {
      width:5,
      height:5,
    },
    shadowOpacity: 1,
    shadowRadius: 25,
    shadowColor: '#fafbff',
    shadowOffset: {
      width:-5,
      height:-5,
    },
    shadowOpacity: 1,
    shadowRadius: 25,
    elevation: 5,
  },
  container0: {
    height:115,
  },
  container1: {
    flex: 1,
    height:115,
  },
  container2: {
    height:115,
  },
  container3: {
    height:280,
    marginBottom: 80,
  },
  top: {
    flex: 1,
    borderRadius: 25,
    width: 355,
    height: 112,
    flexDirection: 'row',
    backgroundColor: "#eff2f9",
    shadowColor: "rgba(22, 27, 29, 0.2)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    elevation:8,
  },
  subBoxL:{
    alignContent: 'flex-start',
    paddingTop: 15,
    paddingLeft: 30,
  },
  subBoxR: {
    flex: 2,
    width: 185,
    alignContent: 'flex-end',
    paddingTop: 15,
    paddingRight: 15,
  },
  subBoxB: {
    width: 370,
    alignContent: 'center',
    paddingBottom: 15,
  },
  h4: {
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 10,
    color:"rgba(128, 139, 159, 1)"
  },
  subTitle: {
    marginBottom: 10,
    width: 150,
    color:"rgba(128, 139, 159, 1.0)"
  },
  detail: {
    color: "#888",
    fontSize: 14,
    textAlign:'right',
    marginBottom: 50,
  },
  emoji: {
    textAlign:'right',
    marginRight: 10,
    fontWeight: '200',
  },
  condition:{
    color: "#745FF2",
    width: 330,
    fontWeight: '700',
    fontSize: 18,
  },
  tinyLogo: {
    width: 90,
    height: 70,
    marginLeft:'60%',
    marginTop:-20
  },
  ldrVal:{
    color: "#745FF2",
    width: 330,
    fontWeight: '700',
    fontSize: 18,
    marginTop:-50,
    
  },
  chartTitle: {
    color: "#666",
    paddingTop: 15,
    paddingLeft: 15,
    marginBottom: 10,
  },
  onPress:{
    width: '17%',
    height:40,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderColor:"rgba(22, 27, 29, 0.23)",
    borderRadius: 17,
    borderWidth: 1,
    overflow: 'hidden',
    shadowOffset: { width: 1, height: 1 },
    
    shadowOffset: {
      width: 0,
      height: -5
    },
    shadowOpacity: 0.2,
    elevation: 1,
  },
  chartCnt:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginLeft:-25,
  }

  
});


export default ManageScreen;
