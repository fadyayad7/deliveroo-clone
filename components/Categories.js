import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
    }}>
        {/** CATEGORY CARD */}
        <CategoryCard title='Grocery' imageUrl='https://co-restaurants.roocdn.com/images/ee86f593a272a1c24d6e4c9de781cd26ec5ed2ab/shortcut/grocery.png?width=167&height=88&fit=crop&bg-color=007e8a&auto=webp&format=png' />
        <CategoryCard title='Poke' imageUrl='https://co-restaurants.roocdn.com/images/ee86f593a272a1c24d6e4c9de781cd26ec5ed2ab/shortcut/poke.png?width=167&height=88&fit=crop&bg-color=00ccbc&auto=webp&format=png' />
        <CategoryCard title='Offers' imageUrl='https://co-restaurants.roocdn.com/images/ee86f593a272a1c24d6e4c9de781cd26ec5ed2ab/shortcut/offers.png?width=167&height=88&fit=crop&bg-color=cc3a2f&auto=webp&format=png' />
        <CategoryCard title='Pizza' imageUrl='https://co-restaurants.roocdn.com/images/ee86f593a272a1c24d6e4c9de781cd26ec5ed2ab/shortcut/pizza.png?width=167&height=88&fit=crop&bg-color=cc3a2f&auto=webp&format=png' />
        <CategoryCard title='Sushi' imageUrl='https://co-restaurants.roocdn.com/images/ee86f593a272a1c24d6e4c9de781cd26ec5ed2ab/shortcut/sushi-1.png?width=167&height=88&fit=crop&bg-color=fabe00&auto=webp&format=png' />
        <CategoryCard title='Burgers' imageUrl='https://co-restaurants.roocdn.com/images/ee86f593a272a1c24d6e4c9de781cd26ec5ed2ab/shortcut/burgers-2.png?width=167&height=88&fit=crop&bg-color=440063&auto=webp&format=png' />
        <CategoryCard title='Dessert' imageUrl='https://co-restaurants.roocdn.com/images/ee86f593a272a1c24d6e4c9de781cd26ec5ed2ab/shortcut/dessert.png?width=167&height=88&fit=crop&bg-color=9c006d&auto=webp&format=png' />
    </ScrollView>
  )
}

export default Categories