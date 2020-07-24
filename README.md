# Your Reader Mobile App

### Motivation
I began this project as a way to test out the things that I was learning in a [React Native online course](https://codewithmosh.com/p/the-ultimate-react-native-course). In my internship with the Goodyear Tire and Rubber company, I had to create a robotic process automation prototype that could scrape certain websites using Optical Character Recognition technology, so I decided I would figure out a way to incorporate OCR tech in a mobile app. I came up with this app, which allows the user to supply an image either with the device's camera, or from the device's photo library. This image is then processed using Google Firebase's ML Kit, which is a cloud-based API that can extract text with OCR technology from an image given in an API request. The result of this is then displayed to the user. The user can also listen to the results using Expo's Speech SDK, and a custom hook to control the audio playback.

### Main Technologies
[React Native](https://reactnative.dev/), [React Navigation](https://reactnavigation.org/), [React Native Firebase ML Kit Vision](https://rnfirebase.io/ml-vision/text-recognition), [Expo Camera](https://docs.expo.io/versions/latest/sdk/camera/), [Expo ImagePicker](https://docs.expo.io/versions/latest/sdk/imagepicker/), and [Expo Speech](https://docs.expo.io/versions/latest/sdk/speech/).

#### [Check out this demo of my app!](https://gfycat.com/meatyfittingammonite)
