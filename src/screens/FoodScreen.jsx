import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { food, tabs } from '../data/foodlist'
import PopularFoodItems from '../data/foodlist'

const SPACING = 8;

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const CARD_WIDTH = WIDTH * .64;
const CARD_HEIGHT = CARD_WIDTH * 1.4
const FULL_SIZE = CARD_WIDTH + SPACING * 2

const FoodScreen = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0])
  return (
    <ScrollView>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={({ item }) => item}
        data={tabs}
        // style={{ backgroundColor: 'red' }}
        contentContainerStyle={{ padding: SPACING }}
        renderItem={({ item: tab }) => {
          return (<TouchableOpacity style={{
          }}
            onPress={() => setSelectedTab(tab)}
          >
            <View style={[styles.pill,
            { backgroundColor: selectedTab === tab ? 'orange' : 'transparent' }]}>
              <Text
                style={[styles.pillText,
                { color: selectedTab === tab ? '#fff' : '#000' }]}>{tab}</Text>

            </View>
          </TouchableOpacity>)
        }}
      />
      <FlatList
        horizontal
        contentContainerStyle={{}}
        keyExtractor={({ item }) => item}
        showsHorizontalScrollIndicator={false}
        snapToInterval={FULL_SIZE}
        decelerationRate='fast'
        data={PopularFoodItems}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.card}>
              <View style={[StyleSheet.absoluteFillObject,
              { backgroundColor: item.color, borderRadius: SPACING }]} />
              <Image
                style={styles.img}
                source={item.img} />
              <View style={styles.cardInfo}>
                <Text style={{ color: '#000', fontWeight: '800', fontSize: 18 }}>{item.name}</Text>
                <Text style={{ opacity: .7, color: '#000', fontWeight: '600', fontSize: 12 }}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
      <FlatList
        data={food}
        keyExtractor={({ item }) => item}
        renderItem={({ item }) => {
          return <TouchableOpacity
            style={{ margin: SPACING, flexDirection: 'row' }} >
            <View
              style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <Image
                source={item.img} style={{ width: 54, height: 54, marginRight: SPACING }} />
              <View>
                <Text style={{ color: '#000', fontSize: 16, fontWeight: '800' }}>{item.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={require('../../assets/images/star.png')} style={{ marginRight: SPACING / 2, width: 16, height: 16, resizeMode: 'cover' }} />
                  <Text style={{ color: '#000', fontSize: 14, fontWeight: '800' }}>{item.rating}</Text>

                </View>
              </View>
            </View>
            <View>
              <Text style={{ color: '#000', fontSize: 16, fontWeight: '800' }}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        }}
      />
    </ScrollView>
  )
}

export default FoodScreen

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: SPACING,
    paddingVertical: SPACING / 2,
    borderRadius: 16,
  },
  pillText: {
    fontSize: 16,
    fontWeight: '600'
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    margin: SPACING,
    justifyContent: 'center'
  },
  img: {
    width: CARD_WIDTH * .7,
    height: CARD_WIDTH * .7,
    resizeMode: 'cover',
    position: 'absolute',
    alignSelf: 'center'
  },
  cardInfo: {
    position: 'absolute',
    top: SPACING,
    left: SPACING
  }
})