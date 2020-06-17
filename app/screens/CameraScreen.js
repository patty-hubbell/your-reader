import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Camera } from "expo-camera";

function CameraScreen(props) {
  const [permission, setPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const getCameraPermissions = async () => {
    const { status } = await Camera.getPermissionsAsync();
    setPermission(status === "granted");
  };

  useEffect(() => {
    getCameraPermissions();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Camera
      style={styles.camera}
      type={type}
      ref={(ref) => setCameraRef(ref)}
    ></Camera>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
});

export default CameraScreen;
