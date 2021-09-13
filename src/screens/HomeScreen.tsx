//import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import Carousel from 'react-native-snap-carousel';
import { ActivityIndicator, Dimensions, Text, View, FlatList, ScrollView } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Movie } from '../interfaces/movieInterface';
import HorizontalSlider from '../components/HorizontalSlider';

const { width } = Dimensions.get('window')

//interface Props extends StackScreenProps<any, any> {};
const HomeScreen = () => {

    const { isLoading, popular, nowPlaying, topRated, upcoming } = useMovies();
    const { top } = useSafeAreaInsets()

    if (isLoading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }

    return (

        <ScrollView>
            <View style={{
                marginTop: top + 20
            }}>

                <View style={{
                    height: 440
                }}>
                    <Carousel
                        data={nowPlaying!}
                        renderItem={({ item }: { item: Movie }) => <MoviePoster movie={item} />}
                        sliderWidth={width}
                        itemWidth={300}
                        inactiveSlideOpacity={0.6}
                    />
                </View>

                <HorizontalSlider title="Popular" movies={popular} />
                <HorizontalSlider title="Top rated" movies={topRated} />
                <HorizontalSlider title="Upcomming" movies={upcoming} />
            </View>

        </ScrollView>

    )
}

export default HomeScreen;