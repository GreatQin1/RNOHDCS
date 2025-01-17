import React from 'react';
import { ScrollView, Text, View, StyleSheet, Alert } from 'react-native';
import { MapView, Circle, Polygon, Polyline, Marker, LatLng, voidEvent ,MapPoi, CameraPosition} from 'react-native-amap3d';

import type * as ReactNative from "react-native";

const points = [
  {
    latitude: 39.806901,
    longitude: 116.397972,
  },
  {
    latitude: 39.806901,
    longitude: 116.297972,
  },
  {
    latitude: 39.906901,
    longitude: 116.397972,
  },
];

const points2 = [
  {
    latitude: 39.836901,
    longitude: 116.497972,
  },
  {
    latitude: 39.836901,
    longitude: 116.397972,
  },
  {
    latitude: 39.936901,
    longitude: 116.497972,
  },
];

const line1 = [
  { latitude: 40.006901, longitude: 116.097972 },
  { latitude: 40.006901, longitude: 116.597972 },
];
const line3 = [
  { latitude: 39.806901, longitude: 116.097972 },
  { latitude: 39.806901, longitude: 116.257972 },
  { latitude: 39.806901, longitude: 116.457972 },
  { latitude: 39.806901, longitude: 116.597972 },
  { latitude: 39.906901, longitude: 116.697972 },
];

function AMapDemo() {
  return (
    <View style={styles.container}>
      <MapView ref={(ref) => mapView = ref}
        style={{ width: '100%', height: '40%' }}
        mapType={1}
        tiltGesturesEnabled={true}
        rotateGesturesEnabled={true}
        scrollGesturesEnabled={true}
        zoomGesturesEnabled={true}
        minZoom={3}
        maxZoom={18}
        trafficEnabled={true}
        labelsEnabled={true}
        buildingsEnabled={true}
        zoomControlsEnabled={true}
        scaleControlsEnabled={true}
        initialCameraPosition={{
          target: {
            latitude: 39.906901, longitude: 116.397972 //北京
          },
          zoom:11
        }}
        onPress={(event: ReactNative.NativeSyntheticEvent<LatLng>) => {
          if (mapView) {
            console.log("AMapViewEventType------------");
          }
          mapView?.moveCamera(
            {
              target: {
              latitude: 34.341568, longitude: 108.940174 //西安
              },
              zoom: 11
            },
            1000
          )
        }
        }
        onLongPress={(event: ReactNative.NativeSyntheticEvent<LatLng>) => {
          Alert.alert("onLongPress successful" + event.nativeEvent.latitude + "+" + event.nativeEvent.longitude)
        }}
        onPressPoi={(event: ReactNative.NativeSyntheticEvent<MapPoi>) => {
          Alert.alert(event.nativeEvent.position?.latitude + "+" + event.nativeEvent.position?.longitude)
        }}
        onLoad={(event: ReactNative.NativeSyntheticEvent<voidEvent>) => {
          console.log("onLoad successful")
        }}

        onCameraMove={(event: ReactNative.NativeSyntheticEvent<CameraPosition>) => {
          console.log("onCameraMove successful"+event.nativeEvent.targetValue?.longitude + "+" + event.nativeEvent.targetValue?.latitude)
        }}
        onCameraIdle={(event: ReactNative.NativeSyntheticEvent<CameraPosition>) => {
          console.log("onCameraIdle successful" + event.nativeEvent.targetValue?.longitude + "+" + event.nativeEvent.targetValue?.latitude)
        }}
      >
        <Circle
          strokeWidth={5}
          strokeColor="rgba(0, 0, 255, 0.5)"
          fillColor="rgba(255, 0, 0, 0.5)"
          radius={1000}
          center={{ latitude: 39.906901, longitude: 116.397972 }}
          zIndex={1}
        />
        <Circle
          strokeWidth={10}
          strokeColor="rgba(22, 69, 55, 0.5)"
          fillColor="rgba(36, 21, 36, 0.5)"
          radius={2000}
          center={{ latitude: 39.966901, longitude: 116.397972 }}

        />
        <Polygon
          strokeWidth={5}
          strokeColor="rgba(0, 0, 255, 0.5)"
          fillColor="rgba(255, 0, 0, 0.5)"
          points={points}

        />
        <Polygon
          strokeWidth={10}
          strokeColor="rgba(95, 36, 202, 0.5)"
          fillColor="rgba(255, 235, 123, 0.5)"
          zIndex={2}
          points={points2}
        />
        <Polyline width={200} color="rgba(0, 255, 0, 0.5)" points={line1} dotted={true}  />
        <Polyline
          width={100}
          gradient={true}
          colors={["#00ff00", "#ff0000", "#00ff00", "#0000ff", "#ff0000", "#ff00ff"]}
          points={line3}
          zIndex={1}
        />
        <Marker
          draggable={false}
          flat={true}
          position={{ latitude: 39.806901, longitude: 117.397972 }}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 24,
  }
});
export default AMapDemo;
