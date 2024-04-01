import React from 'react'
import { 
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable
 } from 'react-native'
import image from '../assets/images/steffi-Cj0tPzC5Uic-unsplash.jpg'
import Svg, { Path } from 'react-native-svg'
import Logo from '../assets/images/Logo.png'


const Register = () => {
  const { height } = useWindowDimensions()
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.box}>
          <Svg 
          height='100%' 
          width="120%" 
          viewBox='0 100 120 180'
          style={styles.blueCurve}
          >
            <Path
              fill='#1b39a9'
              d='M0,224L34.3,213.3C68.6,203,137,181,206,170.7C274.3,160,343,160,411,170.7C480,181,549,203,617,176C685.7,149,754,75,823,53.3C891.4,32,960,64,1029,80C1097.1,96,1166,96,1234,96C1302.9,96,1371,96,1406,96L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z'
            />
            <Image
              source={Logo}
              style={[styles.logo, { height: height * 0.1 }]}
              resizeMode='contain'
            />

            <View>
                <Text>
                  The

                  
                </Text>
            </View>
          </Svg>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    flex: 1,
    height: '100%',
    // backgroundColor:"red"
  },
  box: {
    // width: '100%',
    // backgroundColor:"red"
  },
  logo: {
    width: '40%'
  },
  blueCurve:{
    // alignItems:"center",
    // justifyContent:"center"
  }
})

export default Register
