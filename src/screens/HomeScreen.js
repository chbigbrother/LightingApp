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



const chartConfig = {
  backgroundGradientFrom: "white",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "white",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(55, 55, 55, 0.2)`,
  strokeWidth: 3,
  barPercentage: 11,
  useShadowColorFromDataset: true,
};

const data = {
  labels: ["7", "6", "5", "4", "3", "2", "1", "오늘"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 54],
      color: (opacity = 0) => `rgb(249, 161, 74)`,
      strokeWidth: 3 // optional
    },
    {
      data: [66, 44, 11, 22, 33, 39, 12],
      color: (opacity = 0) => `rgb(250, 105, 136)`,
      strokeWidth: 3 // optional
    },
    {
      data: [66, 44, 11, 22, 33, 44, 44],
      color: (opacity = 0) => `rgb(47, 185, 105)`,
      strokeWidth: 3 // optional
    },
    {
      data: [55, 22, 33, 44, 55, 66, 77],
      color: (opacity = 0) => `rgb(127, 186, 226)`,
      strokeWidth: 3 // optional
    },

  ],
  // legend: ["당근", "번개", "중고나라", "평균"] // optional
};



function HomeScreen({navigation}){
  // const [lampLevel, setLampLevel] = useState();
  // const [textLevel, setTextLevel] = useState();
  // const [isLevel, setLevel] = useState();
  // const [isLoading, setLoading] = useState(true);
  // const [humidity, setHumidity] = useState();
  // const [temperature, setTemperature] = useState();
  // const [dust, setDust] = useState();
  // const [styleSwitch, setStyleSwitch] = useState();
  
  // const [inputLevel, setInputLevel] = useState();
  // const isFocused = useIsFocused(true);
  // const [isPushed, setIsPushed] = useState(false);
    
  // const currentState = (level) => {
  //   switch (level){
  //     case 1:
  //       setLampLevel(icons.lamp100);
  //       setTextLevel("100%");
  //       setLevel(`Level ${inputLevel}`);
  //       break;
  //     case 2:
  //         setLampLevel(icons.lamp75);
  //         setTextLevel("75%");
  //         setLevel(`Level ${inputLevel}`);
  //         break;
  //     case 3:
  //       setLampLevel(icons.lamp40)
  //       setTextLevel("40%")
  //       setLevel(`Level ${inputLevel}`)
  //       break;
  //     case 4:
  //       setLampLevel(icons.lamp10)
  //       setTextLevel("10%")
  //       setLevel(`Level ${inputLevel}`)
  //       break;
  //     case 5:
  //       setLampLevel(icons.lampOff)
  //       setTextLevel("OFF")
  //       setLevel(`OFF`)
  //       break;
  //     default:
  //       setLampLevel(icons.lampOff)
  //       setTextLevel("100%")
  //       setLevel(`Off`)
  //   }
  // }
  
  // const fetchCurrentData = async () => {
  //   await getSwitchValue()
  //   .then((res) => {    
  //     // console.log(res)    
  //     setInputLevel(res[0].lighting)
  //     setHumidity(res[0].humidity);
  //     setTemperature(res[0].temperature);
  //     setDust(res[0].dust);
  //     // console.log("current ", res[0].lighting)
  //     currentState(res[0].lighting);
  //     switch (res[0].lighting){
  //       case 1:
  //         setLampLevel(icons.lamp100);
  //         setTextLevel("100%");
  //         setLevel(`Level ${res[0].lighting}`);
  //         break;
  //       case 2:
  //           setLampLevel(icons.lamp75);
  //           setTextLevel("75%");
  //           setLevel(`Level ${res[0].lighting}`);
  //           break;
  //       case 3:
  //         setLampLevel(icons.lamp40)
  //         setTextLevel("40%")
  //         setLevel(`Level ${res[0].lighting}`)
  //         break;
  //       case 4:
  //         setLampLevel(icons.lamp10)
  //         setTextLevel("10%")
  //         setLevel(`Level ${res[0].lighting}`)
  //         break;
  //       case 5:
  //         setLampLevel(icons.lampOff)
  //         setTextLevel("OFF")
  //         setLevel(`OFF`)
  //         break;
  //       default:
  //         setLampLevel(icons.lampOff)
  //         setTextLevel("100%")
  //         setLevel(`Off`)
  //     }
  //     // setLampLevel(res[0].lighting)
  //     // console.log("value all ",res)
  //     setLoading(false)
      
  //   })
  // };

  //   useEffect(() => {
  //     currentState()
  //   },[inputLevel]);

  //   useEffect(() => {
  //     if(!isPushed){
  //       fetchCurrentData()
  //     }else {
    
  //     }
  //   });
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
                  <Text style={styles.h4}>단계별 조명 제어</Text>
                  {/* <Icon name="bulb-outline" size={16} color="#888" /> */}
                  <View style={styles.lightBtnRow}>
                    <TouchableOpacity>
                      <Neomorph
                        inner // <- enable shadow inside of neomorph
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                          shadowRadius: 5,
                          borderRadius: 25,
                          backgroundColor: '#eff2f9',
                          width: 54,
                          height: 40,
                          marginRight: 8,
                        }}
                      >
                        <Text>1</Text>
                      </Neomorph>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Neomorph
                        swapShadows // <- change zIndex of each shadow color
                        style={styles.NewMBtn}
                      >
                        <Text>2</Text>
                      </Neomorph>
                    </TouchableOpacity>
                    <TouchableOpacity >
                      <Neomorph
                        swapShadows // <- change zIndex of each shadow color
                        style={styles.NewMBtn}
                      >
                          <Text>3</Text>
                      </Neomorph>
                    </TouchableOpacity>
                    <TouchableOpacity >
                      <Neomorph
                        swapShadows // <- change zIndex of each shadow color
                        style={styles.NewMBtn}
                      >
                          <Text>4</Text>
                      </Neomorph>
                    </TouchableOpacity>
                    <TouchableOpacity >
                      <Neomorph
                        swapShadows // <- change zIndex of each shadow color
                        style={styles.NewMBtn}
                      >
                          <Text>5</Text>
                      </Neomorph>
                    </TouchableOpacity>
                  </View>
                </View>
              </Neomorph>
              {/* </View> */}
            </SubContainer>
            <SubContainer style={styles.container1}>
              <Neomorph
                swapShadows // <- change zIndex of each shadow color
                style={styles.NewMBox}
              >
                <View style={styles.subBoxL}>
                  <Text style={styles.h4}>PIR</Text>
                  <Text style={styles.subTitle}>Last motion detected</Text>
                  <Text style={styles.condition}>2023.06.01 16:24:33</Text>
                </View>
                <View style={styles.subBoxR}>
                  <Text style={styles.detail}>자세히 보기 {'>'} </Text>
                </View>
              </Neomorph>
            </SubContainer>
            <SubContainer style={styles.container2}>
              <Neomorph
                swapShadows // <- change zIndex of each shadow color
                style={styles.NewMBox}
              >
              {/* <View style={styles.top}> */}
                <View style={styles.subBoxL}>
                  <Text style={styles.h4}>LDR</Text>
                  <Image
                    style={styles.tinyLogo}
                    source={require('../assets/images/sunrise.png')}
                  />
                  <Text style={styles.ldrVal}>75</Text>
                </View>
              {/* </View> */}
              </Neomorph>
            </SubContainer>
            <SubContainer style={styles.container3}>
              <Neomorph
                swapShadows // <- change zIndex of each shadow color
                style={styles.NewMBoxL}
              >
              {/* <View style={styles.top}> */}
                <View style={styles.subBoxL}>
                  <Text style={styles.h4}>Electric Usage</Text>
                  <View style={styles.chartCnt}>
                    <LineChart
                      data={data}
                      width={330}
                      height={220}
                      chartConfig={chartConfig}
                    />
                  </View>
                </View>
              {/* </View> */}
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


export default HomeScreen;
