import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
      <View className='flex-row mt-4 items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color={'#00CCBB'} />
      </View>
      <Text className='text-xs px-4 text-gray-500'>{description}</Text>

      <ScrollView horizontal contentContainerStyle={{paddingHorizontal: 15}} showsHorizontalScrollIndicator={false} className='pt-4'>
        {/** RESTAURANTS CARDS **/}
        <RestaurantCard 
          id={123}
          imageUrl={'https://rs-menus-api.roocdn.com/images/2771c2a0-4b71-44be-af23-d67b7e3e5cec/image.jpeg?width=524&height=294&auto=webp&format=jpg&fit=crop&v='}
          title={'I love poke'}
          rating={4.5}
          genre={'Healthy'}
          address={'123 Main St'} 
          short_description={''}
          dishes={''}
          long={''}
          lat={''}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow