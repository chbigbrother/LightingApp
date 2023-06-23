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

function AlarmScreen({navigation}){

    return (
        <SafeAreaView style={{backgroundColor:'#EFF3F6'}}>
          <ScrollView>
            <View style={styles.container}>
              <SubContainer style={styles.container0}>
                <Neomorph
                  swapShadows // <- change zIndex of each shadow color
                  style={styles.NewMBox}
                >
                  <View style={styles.subBoxL}>
                    <Text style={styles.h4}>Alarm 1</Text>
                    <View style={styles.lightBtnRow}>  
                        <Neomorph
                            style={styles.NewMBtn}
                        >
                            <Icon name="bulb-outline" size={20} color="#EB5757" />
                        </Neomorph>
                        <Text style={styles.contents}>조명 사용 10 시간 초과</Text>
                        <TouchableOpacity>
                          <Neomorph
                            swapShadows // <- change zIndex of each shadow color
                            style={styles.CtlBtn}
                          >
                            <Text style={{fontSize:10, color: '#FFFFFF', fontWeight:'700'}}>조명 제어</Text>
                          </Neomorph>
                        </TouchableOpacity>
                    </View>
                  </View>
                </Neomorph>
              </SubContainer>
              <SubContainer style={styles.container0}>
                <Neomorph
                  swapShadows // <- change zIndex of each shadow color
                  style={styles.NewMBox}
                >
                  <View style={styles.subBoxL}>
                    <Text style={styles.h4}>Alarm 2</Text>
                    <View style={styles.lightBtnRow}>  
                        <Neomorph
                            style={styles.NewMBtn}
                        >
                            <Icon name="bulb-outline" size={20} color="#DBCA48" />
                        </Neomorph>
                        <Text style={styles.contents}>실내 비정상적 움직임 감지</Text>
                        <Text style={styles.datetime}>2023-06-07 15:25:06</Text>
                    </View>
                  </View>
                </Neomorph>
              </SubContainer>
              <SubContainer style={styles.container2}>
                <Neomorph
                  swapShadows // <- change zIndex of each shadow color
                  style={styles.NewMBox}
                >
                  <View style={styles.subBoxL}>
                    <Text style={styles.h4}>Alarm 3</Text>
                    <View style={styles.lightBtnRow}>  
                        <Neomorph
                            style={styles.NewMBtn}
                        >
                            <Icon name="bulb-outline" size={20} color="#32A190" />
                        </Neomorph>
                        <Text style={styles.contents}>퇴근 1시간 전 알림</Text>
                    </View>
                  </View>
                </Neomorph>
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
      height: 120,
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
    CtlBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#6e7fbd',
        marginTop: 5,
        marginLeft: 40,
        width: 44,
        height: 28,
    },
    NewMBtn:{
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 10,
        borderRadius: 13,
        backgroundColor: '#eff2f9',
        width: 45,
        height: 45,
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
      height:120,
    },
    container1: {
      flex: 1,
      height:115,
    },
    container2: {
      height:115,
      marginBottom: 150,
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
    },
    contents:{
        marginLeft: 20,
        fontWeight: "600",
        fontSize: 14,
        
        color:"rgba(128, 139, 159, 1)"
    },
    datetime:{
        
        fontWeight: "600",
        fontSize: 12,
        marginTop: 25,
        marginLeft: -153,
        color:"rgba(128, 139, 159, 1)"
    }
    
  
    
});
export default AlarmScreen;
