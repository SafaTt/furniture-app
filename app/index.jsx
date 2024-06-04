import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from "expo-status-bar";
import welcomeImg from "../assets/images/welcome.jpg"
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { useRouter } from "expo-router";

export default function Index() {

    //créer le router
    const router = useRouter();

    return (
        <View className="flex-1 flex justify-end">
            <StatusBar style="light" />
            <Image
                className="h-full w-full absolute"
                source={welcomeImg}
            />

            <LinearGradient
                colors={['transparent', "#18181b"]}
                style={{ width: wp(100), height: hp(70) }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                className="flex justify-end pb-12 space-y-8"
            >
                <Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center">
                    <Text style={{ fontSize: hp(3) }} className="font-bold text-white">
                        Design <Text className="font-bold text-rose-400">Your Dream</Text>
                    </Text>
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(200).springify()} className="flex items-center">
                    <TouchableOpacity
                        onPress={() => router.push('home')}
                        style={{ height: hp(7), width: wp(80) }}
                        className="
                            items-center       // Centre les éléments enfants horizontalement
                            bg-rose-400        // Définit la couleur de fond à une nuance de rose (400) 
                            justify-center     // Centre les éléments enfants verticalement
                            mx-auto            // Applique une marge horizontale automatique pour centrer le composant
                            rounded-full       // Applique des coins arrondis complets (forme circulaire)
                            border-[1px]       // Définit une bordure de 1 pixel
                            border-neutral-700       // Applique une couleur neutre à la bordure (probablement une couleur personnalisée)
                          "
                    >
                        <Text style={{ fontSize: hp(2.2) }} className="text-white font-bold tracking-widest">
                            Get Started
                        </Text>
                    </TouchableOpacity>
                </Animated.View>

            </LinearGradient>
        </View>
    )
}