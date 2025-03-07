import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    useColorScheme,
    ImageBackground
} from 'react-native';
import i18n from '../i18n';
import { LinearGradient } from 'expo-linear-gradient';
import { getTailwindColor } from '../utils/tailwindConfig';
import { Ionicons } from '@expo/vector-icons'; 

const WelcomeScreen = () => {
    const colorScheme = useColorScheme(); // Avoid multiple calls
    const backgroundImage = colorScheme === "dark"
        ? require("../assets/images/body_background_dark.jpg")
        : require("../assets/images/body_background_light.jpg");

    const gradientColors = getTailwindColor('button-gradient', 
        colorScheme === 'dark' ? 'dark' : 'DEFAULT'
    );

    return (
      <View className={`flex-1`}>
        <ImageBackground source={backgroundImage} className={`flex-1`}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
            }}
          >
            <Image
              source={require("../assets/images/rocket.png")}
              className="w-64 h-64 object-contain"
            />

            <Text className="text-text-primary dark:text-text-primary-dark text-2xl font-source-sans-bold text-center mt-5">
              {i18n.t("welcome.title")}
            </Text>
            <Text className="text-text-secondary dark:text-text-secondary-dark text-lg font-source-sans-semibold text-center mt-2">
              {i18n.t("welcome.sub_title_bold")}
            </Text>
            <Text className="text-text-secondary dark:text-text-secondary-dark text-base text-center mt-1 mb-20">
              {i18n.t("welcome.sub_title")}
            </Text>

            <TouchableOpacity
              style={{ width: "100%", borderRadius: 8, overflow: "hidden" }}
            >
              <LinearGradient
                colors={gradientColors}
                locations={[0.4, 0.9, 1]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ width: "100%", padding: 14, alignItems: "center" }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "400", color: "white" }}
                >
                  {i18n.t("welcome.signup_button")}
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <Text className="text-text-secondary dark:text-text-secondary-dark text-sm text-center mt-3">
              {i18n.t("welcome.signup_description")}
            </Text>
          </ScrollView>
        </ImageBackground>

        {/* Bottom Section with White Background */}
        <View
          className="bg-background dark:bg-background-dark border-t border-bottom-bar-shadow dark:border-bottom-bar-shadow-dark shadow-lg"
          style={{ paddingVertical: 16 }}
        >
          <View className="flex-row justify-evenly mb-5">
            <TouchableOpacity className="flex-1 flex-row items-center justify-center py-2 mx-2 rounded-full bg-gray-100 dark:bg-gray-800">
              <Text className="text-lg font-semibold text-gray-900 dark:text-white mr-2">
                Google
              </Text>
              <Ionicons name="logo-google" size={22} color="#1A1A42" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-1 items-center justify-center py-2 mx-2 rounded-full bg-gray-100 dark:bg-gray-800">
              <Text className="text-lg font-semibold text-gray-900 dark:text-white">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
};

export default WelcomeScreen;
