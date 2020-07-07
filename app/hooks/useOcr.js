import { useState } from "react";
import { utils } from "@react-native-firebase/app";
import vision from "@react-native-firebase/ml-vision";

export default useOcr = () => {
  const processPhoto = async (uri) => {
    const processed = await vision().cloudDocumentTextRecognizerProcessImage(
      uri
    );
    return processed;
  };

  return { processPhoto };
};
