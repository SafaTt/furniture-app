import { StatusBar } from "expo-status-bar";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ImageSlider from "../components/ImageSlider";

export default function Home() {
    return (
        <SafeAreaView
            className="
                flex-1        // Définit le composant pour prendre tout l'espace disponible dans son conteneur parent (flex-grow: 1)
                bg-white      // Définit la couleur de fond à blanc
                flex          // Applique le modèle de boîte flexible (flexbox) au composant pour organiser les éléments enfants
                space-y-5     // Ajoute un espacement vertical (5 unités) entre les éléments enfants
            "
            edges={['top']}   // Spécifie que le SafeAreaView doit appliquer des marges de sécurité uniquement pour le bord supérieur de l'écran
        >
            <StatusBar style="dark" />
            <View className="flex-row justify-between items-center mx-5">
                <View className="space-y-2">
                    <Text style={{ fontSize: hp(4.5) }} className="font-bold tracking-wider text-neutral-700">
                        READY TO
                    </Text>

                    <Text style={{ fontSize: hp(3.5) }} className="font-bold tracking-wider text-rose-400">
                        DESIGN ?
                    </Text>
                </View>

                <View className="flex justify-center items-center space-y-2">
                    <Image
                        source={require('../assets/images/avatar.png')}
                        style={{ height: hp(6), width: hp(6) }}
                        className="rounded-full"
                    />

                </View>
            </View>
            <View>
                <ImageSlider />
            </View>
        </SafeAreaView>
    )
}