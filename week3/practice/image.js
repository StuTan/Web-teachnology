import React from 'react';
import {
    View,
    Image,
    Dimensions,
    StyleSheet,
} from 'react-native';

//the source of all imagines
let images = [
    require('./img/1.jpg'),
    require('./img/1.jpg'),
    require('./img/1.jpg'),
    require('./img/1.jpg'),
    require('./img/1.jpg'),
    require('./img/1.jpg'),
    require('./img/1.jpg'),
    require('./img/1.jpg'),
    require('./img/1.jpg'),
    require('./img/1.jpg'),
    require('./img/1.jpg'),
    require('./img/1.jpg'),
]

//This is a function that represents the image source
const ImageElement = ({index}) => (
    <Image 
    style={styles.image2} 
    source={images[index]}
    />
)

const App = () => (
<View style={styles.container1}>        //container1 refer to the outmost border
    <View style={styles.container2}>    //container2 control a line
        <View style={styles.image1} >   //image1 control line contains only one image 
        <ImageElement index={0}/>
        </View>
    </View>
    <View style={styles.container2}> 
        <View style={styles.image2} >   //image2 control line contains two images 
        <ImageElement index={1} /> 
        <ImageElement index={2} />
        </View>
    </View>
    <View style={styles.container2}>
        <View style={styles.image3} >   //image3 control line contains three images
        <ImageElement index={3} /> 
        <ImageElement index={4} /> 
        <ImageElement index={5} />
        </View>
    </View>
    <View style={styles.container2}>
        <View style={styles.image3} >   //image3 control line contains three images
        <ImageElement index={6} /> 
        <ImageElement index={7} /> 
        <ImageElement index={8} />
        </View>
    </View>
    <View style={styles.container2}>   //image2 control line contains two images
        <View style={styles.image2} >
        <ImageElement index={9} /> 
        <ImageElement index={10} />
        </View>
    </View>
    <View style={styles.container2}>
        <View style={styles.image1} >  //image1 control line contains only one image
        <ImageElement index={11} />
        </View> 
    </View>
</View>
)

/// the specific performance of each style
//flex refer to the child components evenly allocate the remaining space
const styles = StyleSheet.create({
    
    container1: {                       
        flex:1,
        flexDirection: 'column',  
    },

    container2: {
        flex: 1,
        flexDirection: 'row', 
        backgroundColor: 'white', 
    },

    image1: {
        flex: 1,  
        flexDirection: 'row',  
        margin: 3, 
    },

    image2: {
        flex: 1,  
        flexDirection: 'row', 
        margin: 3, 
    },

    image3: { 
        flex: 1,   
        flexDirection: 'row', 
        margin : 3, 
    }
})

export default App;