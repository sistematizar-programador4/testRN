import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { connect } from "react-redux";
import { deleteProduct } from "../../actions/products.actions";

class ProductList extends Component {
  static navigationOptions = {
    title: "Products List",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#845cc3"
    }
  };

  render() {
    return (
      <FlatList
        style={styles.listContainer}
        data={this.props.products}
        keyExtractor={(item, index) => item.key.toString()}
        renderItem={data => (
          <ListItem
            title={data.item.name}
            input={{}}
            leftIcon={
              <Icon
                name="edit"
                size={18}
                onPress={() => this.props.navigation.navigate("ProductForm", {
                  product: data.item.name,
                  key: data.item.key
                })}
              />
            }
            rightIcon={
              <Icon
                name="delete"
                size={18}
                onPress={() => this.props.delete(data.item.key)}
              />
            }
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "#dce2ff",
    padding: 16
  },
  listText: {
    fontSize: 30
  }
});

const mapStateToProps = state => {
  console.log(state);
  return {
    products: state.productReducer.productList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delete: key => dispatch(deleteProduct(key))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
