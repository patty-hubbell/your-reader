import { useState, useEffect } from "react";
import { Camera } from "expo-camera";

export default useCamera = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

  const getCameraPermissions = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === "granted");
  };

  const takePicture = async (cameraRef, navigation) => {
    if (cameraRef) {
      let photo = await cameraRef.takePictureAsync();
      navigation.navigate("Confirm", { photo: photo, camera: true });
    }
  };

  const flipCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const handleFlash = () => {
    setFlash(
      flash === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.on
        : Camera.Constants.FlashMode.off
    );
  };

  useEffect(() => {
    getCameraPermissions();
  }, []);

  return { hasPermission, type, flash, takePicture, flipCamera, handleFlash };
};
