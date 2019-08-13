import React,{Component} from'react';
import{
  StyleSheet,
  Text,
  View
} from 'react-native'; 


const App = ( ) =>(
  <View style={[ styles.box1] }>   //box1 refer to the outermost border

    <View style={styles.box2}>     //box2 refer to the vertical border
        <View style={styles.box3}> //box3 refer to the border of each element
        <Text style={styles.normal}>Lastname</Text>
        </View>
        <View style={styles.box3}>
        <Text style={styles.normal}>Amy</Text>
        </View>
        <View style={styles.box3}>
        <Text style={styles.normal}>bob</Text>
        </View> 
        <View style={styles.box3}>
        <Text style={styles.normal}>rose</Text>
        </View>
        <View style={styles.box3}>
        <Text style={styles.normal}>kiki</Text>
        </View>
        <View style={styles.box3}>
        <Text style={styles.normal}>luv</Text>
        </View> 
        <View style={styles.box3}>
        <Text style={styles.normal}>col</Text>
        </View>
        <View style={styles.box3}>
        <Text style={styles.normal}>kl</Text>
        </View>
        <View style={styles.box3}>
        <Text style={styles.normal}>kilo</Text>
        </View> 
    </View>

    <View style={styles.box2}>           
        <View style={styles.box3}>
        <Text style={styles.normal}>Firstname</Text>
        </View>
        <View style={styles.box3}>
        <Text style={styles.normal}>pop</Text>
        </View>
        <View style={styles.box3}>
        <Text style={styles.normal}>push</Text>
        </View> 
        <View style={styles.box3}>
        <Text style={styles.normal}>blue</Text>
        </View>
        <View style={styles.box3}>
        <Text style={styles.normal}>red</Text>
        </View>
        <View style={styles.box3}>
        <Text style={styles.normal}>coko</Text>
        </View> 
        <View style={styles.box3}>
        <Text style={styles.normal}>gkol</Text>
        </View>
        <View style={styles.box3}>
        <Text style={styles.normal}>milo</Text>
        </View>
        <View style={styles.box3}>
        <Text style={styles.normal}>brown</Text>
        </View> 
    </View>

    <View style={styles.box2}>
        <View style={styles.box3}>
        <Text style={styles.normal}>City</Text>
        </View>
        <View style={styles.box3}>
        <Text style={styles.normal}>Beijing</Text>
        </View>
        <View style={styles.box3}>
        <Text style={styles.normal}>Hangzhou</Text>
        </View> 
        <View style={styles.box3}>
        <Text style={styles.normal}>Suzhou</Text>
        </View>
        <View style={styles.box3}>
        <Text style={styles.normal}>Yinchuan</Text>
        </View>
        <View style={styles.box3}>
        <Text style={styles.normal}>Guyuan</Text>
        </View> 
        <View style={styles.box3}>
        <Text style={styles.normal}>Zhuhai</Text>
        </View> 
        <View style={styles.box3}>
        <Text style={styles.normal}>Shenzhen</Text>
        </View> 
        <View style={styles.box3}>
        <Text style={styles.normal}>Shantou</Text>
        </View> 
    </View>
</View>
)

const styles =StyleSheet.create({
   //text styles
   normal:{
    color: 'black',
    fontSize: 24
   }, 
   //box1 style
   box1:{ 
    flex: 1,
    borderWidth: 2,
    flexDirection: 'row', 
    borderColor: 'red', 
   },
   //box2 style
   box2:{ 
    flex: 1, 
    flexDirection: 'column',  
   },
   //box3 style
   box3:{ 
    flex: 1,
    borderWidth: 2,  
    borderColor: 'black', 
    alignItems: 'center',
    justifyContent: 'center'
   }
});
export default App;