// index.js
import { AppRegistry } from 'react-native';
import { getApp } from '@react-native-firebase/app';
import { getMessaging, setBackgroundMessageHandler } from '@react-native-firebase/messaging';
import App from './App';

// ✅ Initialize Firebase app
const app = getApp();
const messaging = getMessaging(app);

// ✅ Register background handler
setBackgroundMessageHandler(messaging, async (remoteMessage) => {
  console.log('📩 Background message:', remoteMessage);
});

AppRegistry.registerComponent('app', () => App);
