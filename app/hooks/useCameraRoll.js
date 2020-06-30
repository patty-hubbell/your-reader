import { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";

export default useCameraRoll = () => {
  const [hasPermission, setHasPermission] = useState(null);

  const getCameraRollPermissions = async () => {
    try {
      if (Constants.platform.ios) {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        setHasPermission(status === "granted" ? true : false);
      }
    } catch (error) {
      alert("Error: Could not request Camera Roll permissions.");
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      allowsMultipleSelection: false,
    });

    if (!result.cancelled) {
      return result;
    } else {
      return null;
    }
  };

  useEffect(() => {
    getCameraRollPermissions();
  }, []);

  return { hasPermission, pickImage };
};
