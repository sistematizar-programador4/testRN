import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { addLocation } from "../../actions/locations.actions";
import { connect } from "react-redux";
import Geolocation from "@react-native-community/geolocation";

class showLocation extends Component {
    static navigationOptions = {
        title: "Find me!",
        headerTintColor: "white",
        headerStyle: {
            backgroundColor: "#845cc3"
        }
    };

    state = {
        location: null
    };

    findCoordinates = () => {
        Geolocation.getCurrentPosition(
          position => {
            const location = JSON.stringify(position);
            this.setState({ location });
            this.props.add(location);
          },
          error => Alert.alert(error.message),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.findCoordinates}>
                    <Text style={styles.welcome}>Find Me</Text>
                    <Text>Location: {this.state.location}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
})

const mapStateToProps = state => {
    console.log(state);
    return {
        locations: state.locationReducer.locationList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        add: location => dispatch(addLocation(location)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(showLocation);