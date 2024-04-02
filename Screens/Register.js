import React, {useState, useEffect} from 'react'
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
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const Register = () => {
  const { height, width } = useWindowDimensions()

  const [zndR, setZndR] = useState(false)

  const handleNext = ()=>{
    setZndR(true)
  }

  const handleBack = ()=>{
    setZndR(false)
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.box}>
          <Svg
            height='97%'
            width='100%'
            viewBox='60 10 29 171'
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

            <View style={{ width: '100%', paddingLeft: 12 }}>
              <Text style={{ fontSize: 24, color: 'white' }}>The</Text>
              <Text style={{ fontSize: 24, color: 'white' }}>Design</Text>

              <Text style={{ fontSize: 24, color: 'white' }}>Company</Text>
            </View>

            {
              !zndR ? 
              
              <View style={styles.inputs}>
              <Text style={{ fontSize: 20, color: 'white', marginBottom: 12 }}>
                Frist Name
              </Text>
              <CustomInput
                width={250}
                placeholder='Enter your Email'
                Bwidth={2}
                height={42}
                Background='#4961ba'
                Radius={10}
                marginB={10}
              />

              <Text style={{ fontSize: 20, color: 'white', marginBottom: 12 }}>
                Last Name
              </Text>

              <CustomInput
                width={250}
                placeholder='Enter your Email'
                Bwidth={2}
                height={42}
                Background='#4961ba'
                Radius={10}
                marginB={10}
              />

              <Text style={{ fontSize: 20, color: 'white', marginBottom: 12 }}>
                Phone Nunmber
              </Text>

              <CustomInput
                width={250}
                placeholder='Enter your Email'
                Bwidth={2}
                height={42}
                Background='#4961ba'
                Radius={10}
                marginB={10}
              />

              <Text style={{ fontSize: 20, color: 'white', marginBottom: 12 }}>
                NIN
              </Text>

              <CustomInput
                width={250}
                placeholder='Enter your Email'
                Bwidth={2}
                height={42}
                Background='#4961ba'
                Radius={10}
                marginB={4}
              />
            </View> :

            <View style={styles.inputs}>
              <Text style={{ fontSize: 20, color: 'white', marginBottom: 12 }}>
                Gender
              </Text>
              <CustomInput
                width={250}
                placeholder='Enter your Email'
                Bwidth={2}
                height={42}
                Background='#4961ba'
                Radius={10}
                marginB={10}
              />

              <Text style={{ fontSize: 20, color: 'white', marginBottom: 12 }}>
                Phone Number
              </Text>

              <CustomInput
                width={250}
                placeholder='Enter your Email'
                Bwidth={2}
                height={42}
                Background='#4961ba'
                Radius={10}
                marginB={10}
              />

              <Text style={{ fontSize: 20, color: 'white', marginBottom: 12 }}>
                PassWord
              </Text>

              <CustomInput
                width={250}
                placeholder='Enter your Email'
                Bwidth={2}
                height={42}
                Background='#4961ba'
                Radius={10}
                marginB={10}
              />

              <Text style={{ fontSize: 20, color: 'white', marginBottom: 12 }}>
                Comfirm PassWord
              </Text>

              <CustomInput
                width={250}
                placeholder='Enter your Email'
                Bwidth={2}
                height={42}
                Background='#4961ba'
                Radius={10}
                marginB={4}
              />
            </View>
            }
          </Svg>
        </View>
      </View>

      <View style={[styles.down]}>
      {
        !zndR ? 

        
        <View
          style={{
            width: '100%',
            paddingHorizontal: 12,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems:"center"
          }}
        >
          <CustomButton
            width='45%'
            text='Continue'
            weight={200}
            textcolor='white'
            color='black'
            height={45}
            Bmargin={20}
            borderR={10}
            fontsize={20}
            items='center'
            padding={12}
            onPress={()=> handleNext()}
          />
          
        </View>

        :

        
        <View
          style={{
            width: '100%',
            paddingHorizontal: 12,
            flexDirection: 'row',
            justifyContent:"space-between",
            alignItems:"center"
          }}
        >
          <CustomButton
            width='45%'
            text='Back'
            weight={200}
            textcolor='white'
            color='black'
            height={45}
            Bmargin={20}
            borderR={10}
            fontsize={20}
            items='center'
            padding={12}
            onPress={()=> handleBack()}
          />
          
          <CustomButton
            width='45%'
            text='Next'
            weight={200}
            textcolor='white'
            color='black'
            height={45}
            Bmargin={20}
            borderR={10}
            fontsize={20}
            items='center'
            padding={12}
            onPress={()=> handleNextP()}
          />
        </View>
      }


        <CustomButton
          width='90%'
          text='Alreading Have An Account? Login'
          weight={400}
          textcolor='green'
          // color='black'
          height={55}
          Bmargin={20}
          borderR={40}
          fontsize={20}
          items='center'
          padding={14}
          
        />
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
    height: '100%'
    // backgroundColor:"red"
  },
  box: {
    // width: '100%',
    // backgroundColor:"red"
    // paddingLeft:12
  },
  logo: {
    width: '40%'
  },
  blueCurve: {},
  down: {
    width: '100%',
    // backgroundColor:"red",
    height: 'auto',
    alignItems: 'center'
  },
  inputs: {
    marginTop: 18,
    paddingLeft: 12
  }
})

export default Register
