import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, useColorScheme } from 'react-native';
import i18n from '../i18n';
import { textPrimary, textSecondary } from "../styles/variants/text";
import { bottomBarShadow, primary } from '@/styles/variants/base';
import { button } from '@/styles/variants/button';

const WelcomeScreen = () => {
    const colorScheme = useColorScheme() ?? 'light';

    const backgroundImage =
        colorScheme === "dark"
            ? require("../assets/images/body_background_dark.jpg")
            : require("../assets/images/body_background_light.jpg");

    const logoImage =
        colorScheme === "dark"
            ? require("../assets/images/logo_white.png")
            : require("../assets/images/logo_blue.png");

    return (
        <View className={`flex-1 bg-background-${colorScheme}`}>
            {/* Header */}
            <View className={`text-${primary({ colorScheme })} h-16 justify-center px-5 absolute top-0 left-0 right-0`}>
                <Image source={logoImage} className="w-16 h-10 object-contain" />
            </View>

            {/* Background */}
            <Image source={backgroundImage} className="absolute w-full h-full object-cover" />

            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', padding: 24 }}>
                <Image source={require('../assets/images/rocket.png')} className="w-64 h-64 object-contain" />

                <Text className={`text-${textPrimary({ colorScheme })} text-2xl font-source-sans-bold text-center mt-4`}>
                    {i18n.t("welcome.title")}
                </Text>
                <Text className={`text-${textPrimary({ colorScheme })} text-lg font-source-sans-semibold text-center mt-2`}>
                    {i18n.t('welcome.sub_title_bold')}
                </Text>
                <Text className={`text-${textSecondary({ colorScheme })} text-base text-center mt-1`}>
                    {i18n.t('welcome.sub_title')}
                </Text>

                <TouchableOpacity className={`bg-${button({colorScheme})} mt-6 px-6 py-3 rounded-md`}>
                    <Text className="text-lg font-source-sans-bold text-white text-center">SIGN UP NOW</Text>
                </TouchableOpacity>

                <Text className={`text-${textSecondary({ colorScheme })} text-sm text-center mt-3`}>
                    {i18n.t('welcome.signup_description')}
                </Text>
            </ScrollView>

            {/* Bottom Navigation */}
            <View className={`bg-${button({colorScheme})} flex-row justify-evenly py-4`}>
                <TouchableOpacity className={`flex-1 items-center py-2`}>
                    <Text className="text-lg font-source-sans-semibold text-white">Google</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 items-center py-2">
                    <Text className="text-lg font-source-sans-semibold text-white">Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default WelcomeScreen;
