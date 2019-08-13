import React, {Component} from 'react';
import {
    View,
    Text,
    Alert,
    Image,
    Button,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    TextInput,
    LayoutAnimation,
} from 'react-native';

var users =[
  {
    login : 'mojombo',
    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    name: 'Tom Person-Werner',
    blog: 'http://tom.Person-Werner.com',
    location: 'San Francisco'
  },{
    login: 'defunkt',
    avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
    name: 'chris Wanstrath',
    blog: 'http://chriswanstrath.com/',
    location: 'San Francisco'
  },{
    login: 'pjhyett',
    avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
    name: 'PJ Hyett',
    blog: 'https://hyett.com',
    location: 'San Francisco'
  },{
    login: 'wycats',
    avatar_url: 'https://avatars0.githubusercontent.com/u/4?v=4',
    name: 'Yehuda Katz',
    blog: 'http://yehudakatz.com',
    location: 'San Francisco'
  },{
    login: 'ezmobius',
    avatar_url: 'https://avatars0.githubusercontent.com/u/5?v=4',
    name: 'Ezra  Zygmuntowicz',
    blog: 'http://stuffstr.com',
    location: 'In the NW'
  },{
    login: 'ivey',
    avatar_url: 'https://avatars0.githubusercontent.com/u/6?v=4',
    name:'Michael D. Ivey',
    blog: 'http://gweezlebur.com',
    location: 'Bay Minette, AL'
  },{
    login: 'evanphx',
    avatar_url: 'https://avatars0.githubusercontent.com/u/7?c=4',
    name: 'Evan Phoenix',
    blog: 'http://blog.fallingsnow.net',
    location: 'Los Angeles, CA'
  },{
    login: 'vanpelt',
    avatar_url:'https://avatars1.githubusercontent.com/u/17?v=4',
    name: 'Chris Van Pelt',
    blog: 'vandev.com',
    location: 'San Francisco'
  },{
    login: 'wayneeseguin',
    avatar_url: 'https://avatars0.githubusercontent.com/u/18?v=4',
    name: 'Wayne E. Seguin',
    blog: '',
    location: 'Buffalo, NY'
  },{
    login: 'brynary',
    avatar_url: 'https://avatars0.githubusercontent.com/u/19?v=4',
    name: 'Bryan Helmkamp',
    blog: 'http://codeclimate.com',
    location: 'New York City'
  },{
    login: 'kevinclark',
    avatar_url: 'https://avatars3.githubusercontent.com/u/20?v=4',
    name: 'kevin Clark',
    blog: 'http://glu.ttono.us',
    location: null
  }
]

export default class FoldList extends Component {

    constructor(props) {
        super(props);
        // 记录点击
        this.state = {
            isSelect: -1, 
            data: users,
            text: '',
            choose: -1,
            numbe: -1,
        }
    }

    subItemData = ( index) => {
        let subdata = []; 
        subdata.push(' login: '+this.state.data[index].login);
        subdata.push(' blog: '+this.state.data[index].blog);
        subdata.push(' location: '+this.state.data[index].location);
        return subdata;
    }
 
    onPressdelete = (index) =>{
        let mod=[...this.state.data];
        mod.splice(index,1),
        this.setState({
            data :  mod
        })
    }
 
    onPressmod= (index ,  str) =>{
        let mod=[...this.state.data];
        if(this.state.numbe===1)
            mod[index].blog=str;
        else if(this.state.numbe===2)
            mod[index].location=str;
        else 
            mod[index].login=str;
        this.setState({
            data: mod,
             
        })
    }

    onPressamend = (index , sign, str) =>{
        
        this.setState({ 
            choose: 1,
            numbe: sign, 
        })
    }

    onPressclose = (index) =>{
        let select = -1;
        this.setState({
            isSelect: select,
            choose: -1,
        })
    }
    onPressFinish = ( index) =>{
        this.setState({
            choose:-1,
        })
    }
    // header点击
    itemTap = (index) => {

        // 点击的item如果是同一个, 就置为初始状态-1, 也就是折叠的状态
        let select = index;
        if (this.state.isSelect === index){
            select = -1;
        } 
        LayoutAnimation.easeInEaseOut();
        this.setState({
            isSelect: select
        })
    }

    // 渲染FlatList的item
    renderItem = (item) => { 
        const itemColor = item.index % 2 === 0 ? 'lightblue' : 'lightskyblue';
        return (
            <View>
              
                <TouchableOpacity
                    style={[styles.listItemTouch, {backgroundColor:itemColor}]}
                    activeOpacity={0.6}
                    onPress={() => {this.itemTap(item.index)}}
                >
                    <View style={styles.container}>
                        <Image
                            source={{uri: this.state.data[item.index].avatar_url}}
                            style={styles.thumbnail}
                          /> 
                        <Text style={styles.listItemText} >
                            {this.state.data[item.index].name}
                        </Text>
                        <View style={styles.buttonstyles}>
                        <Button
                              onPress={() => 
                                { this.onPressdelete(item.index)}
                              }
                              title="delete"
                              color='steelblue'
                            /> 
                      </View>
                    </View>
                </TouchableOpacity>

              
                {this.state.isSelect === item.index ?
                    <View
                        style={styles.listSubBg}
                    >
                        {
                            this.subItemData(item.index).map((subItem, subItemIndex) => {
                                return (
                                    <TouchableOpacity
                                        key={subItemIndex}
                                        style={styles.listSubItemTouch}
                                    >
                                        <Text style={styles.listSubItemText}>
                                            {subItem}
                                        </Text>
                                        <View style={styles.listSubbuttonstyles}>
                                        <Button
                                              onPress={() => 
                                                { this.onPressamend(item.index,subItemIndex,this.state.text)}
                                              }
                                              title="amend"
                                              color='lightpink'
                                            /> 
                                      </View>
                                    </TouchableOpacity>
                                )
                            })
                           
                        }
                        <View style={styles.listClosebuttonstyles}>
                                <Button
                                    onPress={() => 
                                        { this.onPressclose( item.index)} }
                                              title="close"
                                              color='skyblue'
                                            /> 
                                      </View> 
                        { this.state.choose === 1  ?
                             <View style={{width:windowW,height:50,  flexDirection:'row',  }}> 
                                <View style ={{padding:10,backgroundColor: 'lightpink',borderBottomColor: 'black', width:350,height:50}}>
                                <TextInput style={{height:40}}
                                numberOfLines = {4}
                                Placeholder =" "
                                onChangeText={(text) => this.onPressmod(item.index,text)} 
                                                />  
                                </View>
                                <View style={{ width1:100,height:50,backgroundColor:'lightpink',justifyContent:'center',}}> 
                                <Button
                                    onPress={() => 
                                        { this.onPressFinish( item.index)} }
                                              title="finish"
                                              color='skyblue'
                                            />   
                                
                            </View>
                             
                            </View> : null 
                        }
                    </View> : null}

            </View>
        );
    }

    render () {

        // 数据
        let data = [...this.state.data]

        return (
            <View style={styles.bgView}> 
                <FlatList
                    style={styles.flatList}
                    keyExtractor = {(item, index) => index.toString()}
                    data={ data }
                    renderItem={this.renderItem}
                />
            </View> 
        )
    }
}
//
const windowW = Dimensions.get('window').width;

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center", 
      },
  
      thumbnail: {
        flex: 1,
        margin: 8,
        width: 100,
        borderRadius: 10,
        height: 130 
      },
  
      listItemText: {
          flex: 2,
          textAlign:'center',
          fontSize: 25,
      },
  
      buttonstyles:{
          flex: 1,
          margin:10,
          borderRadius: 50,
      },
  
      listSubItemTouch: { 
          flex: 1,
          height: 40,  
          width: windowW,
          justifyContent: 'space-between',
          backgroundColor: 'white',
          flexDirection: 'row',
      },
  
      listSubItemText:{  
          flex: 5,
          fontSize: 20,
          color: 'black',
      },
  
      listSubbuttonstyles:{  
          flex: 1,
          justifyContent: 'center',
          margin: 10, 
          borderRadius: 10,
      },
  
      listClosebuttonstyles:{
          margin: 5,
          justifyContent: 'center',
          alignItems: 'center', 
          borderRadius: 10,
      },
  
  
      bgView: {
          flex: 1
      }, 
      flatList: {
          flex: 1
      },
  
      listItemTouch: {
          height: 150,
          width: windowW,
          justifyContent: 'center',
          alignItems: 'center'
      },
  
      listSubBg: {
          width: windowW,
      },
});  

