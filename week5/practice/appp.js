import React, {Component} from "react"; 
import {View, Text, StyleSheet, Platform, ListView, Keyboard} from "react-native";
import Header from "./app/componens/header"; 
import Footer from "./app/componens/footer"; 
import Row    from "./app/componens/row";

 class App extends Component {
   
  constructor(props) {
    super(props);
    // creat ListView.DataSource
    const ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
    //  initial state
    this.state = {
      value: "",
      items: [],
      dataSource: ds.cloneWithRows([])
    };

    this.setSource = this.setSource.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleToggleComplete = this.handleToggleComplete.bind(this);
  }

  handleRemoveItem(key) {
    const newItems = this.state.items.filter((item) => {
      return (item.key !== key);
    });
    this.setSource(newItems, newItems);
  }

  handleToggleComplete(key, complete) {
    const newItems = this.state.items.map((item) => {
      if (item.key !== key) return item;
      return {
        ...item,
        complete
      }
    });

    this.setSource(newItems, newItems);
  }

   
  setSource(items, itemsDatasource, otherState = {}) {
    this.setState({
      items,
      dataSource: this.state.dataSource.cloneWithRows(itemsDatasource),
      ...otherState
    })
  }

  handleAddItem() {
    if (!this.state.value) return;
    // creat a new items,copy exiting data from this.state.items and  add new data
    const newItems = [
      ...this.state.items,
      {
        key: Date.now(),
        text: this.state.value,
        complete: false
      }
    ];
    // updata state
    this.setSource(newItems, newItems, {value: ""});
  }

   
  render() {
    return (

      <View style={styles.container}>
        <Header
          value={this.state.value}
          onAddItem={this.handleAddItem.bind(this)}
          onChange={(value) => this.setState({value})}
        />

        <View style={styles.content}>
          <ListView
            style={styles.list}
            enableEmptySections
            dataSource={this.state.dataSource}
            onScroll={() => Keyboard.dismiss()}
            renderRow={({key, ...value}) => {
              return (
                <Row
                  key={key}
                  onRemove = {() => this.handleRemoveItem(key)}
                  onComplete = {(complete) => this.handleToggleComplete(key, complete)}
                  {...value}
                />
              )
            }}
            renderSeparator={(sectionId, rowId) => {
              return <View key={rowId} style={styles.separator}/>
            }}
          />
        </View>

        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    ...Platform.select({
      ios: {
        paddingTop: 30
      }
    })
  },
  content: {
    flex: 1
  },
  list: {
    backgroundColor: '#FFF'
  },
  separator: {
    borderWidth: 1,
    borderColor: "#F5F5F5"
  }
});

export default App;