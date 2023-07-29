import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from 'expo-router'
// https://www.youtube.com/watch?v=mJ3bGvy0WAY&t=1428s
import { COLORS, icons, images, SIZES } from '../constants'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'
const Home = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerSTyle: { backgroundCOlor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                    ),
                    headerTitle: ""
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                >
                    <Welcome
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleClick={()=>{
                        if(searchTerm){
                            router.push(`/search/${searchTerm}`)
                        }
                    }}

                    />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home