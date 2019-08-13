import React, {Component} from 'react';
import {
    View,
    Text, 
    Image,
    Button,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    TextInput, 
} from 'react-native';  
import {ListItem} from 'react-native-elements' 

export default class FoldList extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            data: [],
            text: '', 
            nextpage:0,
            details:{},
            followers1:[],
            following1:[],
            judge:0,
            someone:'',
        }
    }
    sechange=(datad)=>{         //there we store all the details in the object called datad 
        let subitems=Object.assign({},this.state.details);
        let obj={};
        let len=datad.following_url.length;
        datad.following_url=datad.following_url.slice(0,len-13);
        obj[datad.login]=datad            
        subitems=Object.assign(obj,subitems); 
        this.setState({
            details: subitems
        })
        console.table(this.state.details)
     } 
    addorder =(da) =>{
      for(let i=0;i<da.length;i++)
          da[i].order=i; 
          for(let i=0;i<da.length;i++)
          {       
             fetch(da[i].url)
            .then(response=>response.json())
            .then(datad=>{this.sechange(datad);})
            .catch(error=>alert(error))
          } 
      this.setState({
          data: da
      })
      console.table(this.state.data)
  }

  componentDidMount(){
      fetch('https://api.github.com/users')
          .then(response => response.json())
          .then(da => this.addorder(da))
          .catch( error => alert(error))
  }
 
 
    onPressdelete = (index) =>{
        let mod=[...this.state.data];
        mod.splice(index,1),
        this.setState({
            data :  mod
        })
    }

    onPressChange =(str,text) =>{
         let mod={...this.state.details} 
        if(str=='login')
        {
            mod[this.state.someone].login =text
            let k=[...this.state.data]
            for(let i=0;i<k.length;i++)
            {
                if(k[i].login===this.state.someone)
                {
                    k[i].login=text;
                    break;
                }
            }
            this.setState({
                data: k
            })
        }
        else if(str=='blog')
        mod[this.state.someone].blog=text
        else
        mod[this.state.someone].location =text
         
    }

    onPressdetail= (   string) => {
          this.setState({
            someone:string,
            nextpage: 1,
            judge: 1,
          })
    }

    onPressreturn0=()=>{
        this.setState({ 
            judge:0
        })
    }

  onPressreturn1=()=>{
      this.setState({ 
          judge:1
      })
  }

  followersInformation =(foll) =>{ 
    this.setState({
        judge: 2,
        followers1: foll,
    }) 
} 

  onPressfollowers=(string) =>{
    fetch(string)
    .then(response => response.json())
    .then(foll=> this.followersInformation(foll))
    .catch( error => alert(error))
  }

  followingInformation =(foll) =>{ 
    this.setState({
        judge: 3,
        following1: foll,
    }) 
    } 

  onPressfollowing=(string) =>{
    fetch(string)
    .then(response => response.json())
    .then(foll=> this.followingInformation(foll))
    .catch( error => alert(error))
  }

    renderItem = (item) => {  
         
         
        const itemColor = item.index % 2 === 0 ? 'lightblue' : 'lightskyblue';
        return (
        <View>
        {  
           <View> 
              <TouchableOpacity
                  style={[styles.listItemTouch, {backgroundColor:itemColor}]}
                  activeOpacity={0.6}
                  onPress={() => { this.onPressdetail( this.state.data[item.index].login)}}
              >
                  <View style={styles.container}>
                      <Image
                          source={{uri: this.state.data[item.index].avatar_url}}
                          style={styles.thumbnail}
                        /> 
                      <Text style={styles.listItemText} >
                          {
                        this.state.data[item.index].login}
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
          </View> 
        } 
       </View>
         );
    }

    render () { 
        return (
            <View>
            {this.state.judge===0?
            <View> 
                        <View style={{padding: 25,backgroundColor:'skyblue',
                        alignItems:'center',fontSize:20}}>
                        <Text> list of github</Text>
                        </View> 
                 <View>       
                {
                <View> 
                <FlatList  
                    data={ this.state.data } 
                    renderItem={this.renderItem}
                    keyExtractor={item =>item.login}
                    //    renderItem={({item})=>
                    //     <ListItem
                    //         title={`${item. login}`}  
                    //         leftAvatar={{source:{uri:item.avatar_url }}}
                    //         onPress={() => this.onPressdetail('defunkt')}
                    //     />} 
                />
                </View>
                }
                </View>
              
             
            </View>: null
             }
             {this.state.judge===1?
            <View>   
                <Text>   </Text>
           <View style={styles.container1}>
                        <Image
                            source={{uri: this.state.details[`${this.state.someone}`].avatar_url}}
                            style={styles.thumbnail}
                          /> 
                        <Text style={styles.listItemText} >
                            {this.state.details[`${this.state.someone}`].name}
                        </Text>
                        <View style={{ width1:100,height:50,justifyContent:'center',marginRight:10}}> 
                              <Button
                                  onPress={() => 
                                      { this.onPressreturn0 ( )} }
                                            title="return"
                                            color='skyblue'
                                          />   
                              
                          </View> 
                    </View>
                    
                    <Text style={{fontSize:20,marginTop:100,marginLeft:20,}} > 
                           id: {`${this.state.details[`${this.state.someone}`].id }`} 
                        </Text> 
                    <View style={{ marginLeft:20, marginTop:-10, alignItems:'center',flexDirection: 'row', }}>
                        <View  >
                        <Text style={{fontSize:20 }}>login: </Text>
                        </View>
                        <View >
                        <TextInput   placeholder={this.state.details[`${this.state.someone}`].login} 
                        onEndEditing={(event)=> this.onPressChange( 'login', event.nativeEvent.text )}></TextInput>
                        </View>
                    </View>
                    <View style={{ marginLeft:20, marginTop:-10,   alignItems:'center',flexDirection: 'row', }}>
                        <View  >
                        <Text style={{fontSize:20 }}>blog: </Text>
                        </View>
                        <View >
                        <TextInput   placeholder={this.state.details[`${this.state.someone}`].blog} 
                        onEndEditing={(event)=> this.onPressChange( 'blog', event.nativeEvent.text )}></TextInput>
                        </View>
                    </View>
                    <View style={{ marginLeft:20,  marginTop:-10,  alignItems:'center',flexDirection: 'row', }}>
                        <View  >
                        <Text style={{fontSize:20 }}>location: </Text>
                        </View>
                        <View >
                        <TextInput   placeholder={this.state.details[`${this.state.someone}`].location} 
                        onEndEditing={(event)=> this.onPressChange( 'location', event.nativeEvent.text )}></TextInput>
                        </View>
                    </View>
                    <Text style={{fontSize:20, marginLeft:20,}} >  
                           node_id: {`${this.state.details[`${this.state.someone}`].node_id+'\n'}`} 
                           created : {`${this.state.details[`${this.state.someone}`].created_at+'\n'}`}
                           updated : {`${this.state.details[`${this.state.someone}`].updated_at+'\n'}`}
                        </Text> 
                    
                    <Text style={{fontSize:20,marginLeft:20,}}
                        onPress={()=>{this.onPressfollowing(this.state.details[`${this.state.someone}`].following_url)}}>
                        following: {`${this.state.details[`${this.state.someone}`].following}`+'\n'} 
                    </Text>
                    <Text style={{fontSize:20,marginLeft:20,}}
                        onPress={()=>{this.onPressfollowers(this.state.details[`${this.state.someone}`].followers_url)}}>
                        followers: {`${this.state.details[`${this.state.someone}`].followers+'\n'}`} 
                    </Text>
            </View>: null
             }
             {
                 this.state.judge===2?
                 <View> 
                        <View style={{padding: 15,backgroundColor:'skyblue',
                        alignItems:'flex-start', justifyContent: 'space-between',flexDirection: 'row',}}>
                        <View  style={{flex:1,}}>
                            <Button
                                  onPress={() => 
                                      { this.onPressreturn1(  )} }
                                            title="<"
                                            color='skyblue'
                                          />   
                        </View>
                        <Text style={{flex:6,fontSize: 20}}>        the followers </Text>
                        </View> 

                      < FlatList
                       data={this.state.followers1}
                       keyExtractor={item =>item.login}
                       renderItem={({item})=>
                        <ListItem
                            title={`${item. login}`}  
                            leftAvatar={{source:{uri:item.avatar_url }}}
                        />
                    }
                          /> 
                 </View>:null
             }
            {
                 this.state.judge===3?
                 <View> 
                        <View style={{padding: 15,backgroundColor:'skyblue',
                        alignItems:'flex-start', justifyContent: 'space-between',flexDirection: 'row',}}>
                        <View  style={{flex:1,}}>
                            <Button
                                  onPress={() => 
                                      { this.onPressreturn1(  )} }
                                            title="<"
                                            color='skyblue'
                                          />   
                        </View>
                        <Text style={{flex:6,fontSize: 20}}>        the following </Text>
                        </View> 

                      < FlatList
                       data={this.state.following1}
                       keyExtractor={item =>item.login}
                       renderItem={({item})=>
                        <ListItem
                            title={ item. login } 
                            leftAvatar={{source:{uri:item.avatar_url }}}
                        />
                    }
                          /> 
                 </View>:null
             }
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
      container1: { 
        flex: 1,
        marginTop: 70,
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

