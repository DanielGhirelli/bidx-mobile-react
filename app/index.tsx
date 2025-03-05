import React, { useState } from 'react';
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

const WelcomeScreen = () => {
    const backgroundImage = (useColorScheme()) === "dark"
        ? require("../assets/images/body_background_dark.jpg")
        : require("../assets/images/body_background_light.jpg");

    return (
        <View className={`flex-1`}>
            <ImageBackground source={backgroundImage} className={`flex-1`}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', padding: 24 }}>
                    <Image source={require('../assets/images/rocket.png')} className="w-64 h-64 object-contain" />

                    <Text className="text-text-primary dark:text-text-primary-dark text-2xl font-source-sans-bold text-center mt-4">
                        {i18n.t("welcome.title")}
                    </Text>
                    <Text className="text-text-secondary dark:text-text-secondary-dark text-lg font-source-sans-semibold text-center mt-2">
                        {i18n.t('welcome.sub_title_bold')}
                    </Text>
                    <Text className="text-text-secondary dark:text-text-secondary-dark text-base text-center mt-1">
                        {i18n.t('welcome.sub_title')}
                    </Text>

                    <TouchableOpacity className="mt-6 px-6 py-3 bg-button rounded-md">
                        <Text className="text-lg font-source-sans-bold text-white text-center">
                            SIGN UP NOW
                        </Text>
                    </TouchableOpacity>

                    <Text className="text-text-secondary dark:text-text-secondary-dark text-sm text-center mt-3">
                        {i18n.t('welcome.signup_description')}
                    </Text>
                </ScrollView>
            </ImageBackground>

            {/* Bottom Section with White Background */}
            <View className="bg-background dark:bg-background-dark" style={{ paddingVertical: 16 }}>
                <View className="flex-row justify-evenly">
                    <TouchableOpacity className="flex-1 items-center py-2">
                        <Text className="text-lg font-source-sans-semibold text-text-primary dark:text-text-primary-dark">Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 items-center py-2">
                        <Text className="text-lg font-source-sans-semibold text-text-primary dark:text-text-primary-dark">Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default WelcomeScreen;
