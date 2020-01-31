import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { addProduct, editProduct } from "../../actions/products.actions";

class ProductForm extends Component {
  static navigationOptions = {
    title: "Home",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#845cc3"
    }
  };

  state = {
    product: this.props.navigation.getParam('product', null),
    key: this.props.navigation.getParam('key', null)
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Product {this.props.navigation.getParam('key', null)}</Text>
        <TextInput
          value={this.props.navigation.getParam('product', '')}
          placeholder="Name"
          style={styles.productInput}
          onChangeText={product => this.setState({ product })}
        />
        <TouchableOpacity
          style={{ marginBottom: 16 }}
          onPress={() => {
            this.props.add(this.state.product);
            this.setState({ product: null});
          }}
        >
          <Text style={{ fontSize: 22, color: "#5fc9f8" }}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginBottom: 16 }}
          onPress={() => this.props.navigation.navigate("ProductList")}
        >
          <Text style={{ fontSize: 22 }}>Go to Product List</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 64,
    marginBottom: 48
  },
  productInput: {
    fontSize: 32,
    marginBottom: 32,
    borderWidth: 1,
    padding: 8,
    width: "80%",
    borderRadius: 10
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
    add: product => dispatch(addProduct(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);