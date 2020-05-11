import { Ionicons } from '@expo/vector-icons';
import React, {Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { NativeModules } from 'react-native';
import Polyline from '@mapbox/polyline';
import { Constants, Permissions } from 'expo';
import* as Location from 'expo-location';



const{width,height}=Dimensions.get('window');
const ASPECT_RATIO=width/ height;
const LATITUDE =  54.0;
const LONGITUDE = -6.41667;
const LATITUDE_DELTA = 0.1;
const LONGITUDE_DELTA = ASPECT_RATIO*LATITUDE_DELTA;
const GOOGLE_MAPS_APIKEY = 'AIzaSyA-fV7pXc7l9-ETwx0n1VzeSjPeiOQHRb0';   
const latitude=null;
const longitude=null;

const styles = StyleSheet.create({
    versionBox: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    versionText: {
      padding: 4,
      backgroundColor: '#FFF',
      color: '#000',
    },
  });
class maps extends Component{
    constructor(props){
        super(props);
        this.state = {
            coords:[],
            coordinates: [
              {
                latitude: 54.0,
                longitude: -6.41667,
                
              },
              {
                latitude:53.33306,
                longitude: -6.24889,
              },
            ],
            latitude:null,
            longitude:null,
            error:null,
            LocationResult:null,
            
            
          };
          
          this.mapView = null;
        }
        componentDidMount() {
            this._getLocationAsync();
           }
           _getLocationAsync= async()=>{
             let location = await Location.getCurrentPositionAsync({});
             this.setState({LocationResult: JSON.stringify(location)});
           }
         onMapPress = (e) => {
            this.setState({
              coordinates: [
                ...this.state.coordinates,
                e.nativeEvent.coordinate,
              ],
            });
          }
        
          onReady = (result) => {
            this.mapView.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: (width / 10),
                bottom: (height / 10),
                left: (width / 10),
                top: (height / 10),
              },
            });
          }
        
          onError = (errorMessage) => {
            console.log(errorMessage); // eslint-disable-line no-console
          }
        
          setDistance(distance, duration_in_traffic) {
            // console.log('setDistance');
            this.setState({
              distance: parseFloat(distance),
              durationInTraffic: parseInt(duration_in_traffic)
            });
          }
          render()
          {
              return(
                <View style={StyleSheet.absoluteFill}>
         
                  

         <MapView
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          style={StyleSheet.absoluteFill}
          ref={c => this.mapView = c} // eslint-disable-line react/jsx-no-bind
          onPress={this.onMapPress}
          showsUserLocation={true}
        >
                   <MapViewDirections
            origin={this.state.coordinates[0]}
            destination={this.state.coordinates[this.state.coordinates.length-1]}
            waypoints={this.state.coordinates.slice(1,-1)}
            mode='DRIVING'
                    apikey={GOOGLE_MAPS_APIKEY}
                    language='en'
                    strokeWidth={4}
                    strokeColor="black"
                    onStart={(params) => {
                      console.log(`Started routing between "${params.origin}" and "${params.destination}"${(params.waypoints.length ? " using waypoints: " + params.waypoints.join(', ') : "")}`);
                    }}
                    onReady={this.onReady}
                    onError={(errorMessage) => {
                      console.log(errorMessage);
                    }}
                    resetOnChange={false}
                  />
                  <MapView.Marker
            coordinate={{latitude: 54.0,
                longitude: -6.41667}}
                
            title={"Dundalk"} 
         />
         <MapView.Marker
            coordinate={{latitude: 53.33306,
                longitude: -6.24889}}
                
            title={"Dublin"} 
         />
            
            
         
                </MapView>
                
              </View>
    );
    }
    
};
export default maps;
