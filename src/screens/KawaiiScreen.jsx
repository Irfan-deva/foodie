import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ITEM_HEIGHT = windowHeight * .18;
const DATA = [
  {
    "name": "John Doe",
    "designation": "Software Engineer",
    "company_name": "Acme Corporation",
    "unique_id": 1,
    'color': '#99B080',
    'img': require("../../assets/images/boy.png")
  },
  {
    "name": "Jane Doe",
    "designation": "Product Manager",
    "company_name": "XYZ Company",
    "unique_id": 2,
    'color': '#E95793',
    'img': require('../../assets/images/boy-hat.png')

  },
  {
    "name": "Peter Smith",
    "designation": "Marketing Director",
    "company_name": "Contoso Ltd.",
    "unique_id": 3,
    'color': '#F1B4BB',
    'img': require('../../assets/images/costume.png')

  },
  {
    "name": "Sarah Jones",
    "designation": "Customer Support",
    "company_name": "De Beers Group",
    "unique_id": 4,
    'color': '#C1D8C3',
    'img': require('../../assets/images/delivery-boy.png')

  },
  {
    "name": "Michael Brown",
    "designation": "IT Support Engineer",
    "company_name": "Google",
    "unique_id": 5,
    'color': '#94A684',
    'img': require('../../assets/images/girl.png')
  },
  {
    "name": "David Green",
    "designation": "Sales Representative",
    "company_name": "Amazon",
    "unique_id": 6,
    'color': '#FF6969',
    'img': require('../../assets/images/ninja.png')

  },
  {
    "name": "Rachel White",
    "designation": "Administrative Assistant",
    "company_name": "Microsoft",
    "unique_id": 7,
    'color': '#FFD6A5',
    'img': require('../../assets/images/user.png')

  }

]




const KawaiiScreen = () => {
  return (
    <View>

      <FlatList
        data={DATA}
        contentContainerStyle={{ padding: 8 }}
        renderItem={({ item }) => {
          return <TouchableOpacity style={{ marginBottom: 8, height: ITEM_HEIGHT }}>
            <View style={{ flex: 1, padding: 8 }}>
              <View style={[StyleSheet.absoluteFillObject,
              { backgroundColor: item.color, borderRadius: 16 }]} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.info}>{item.designation} at {item.company_name}</Text>
              <Image
                style={styles.img}
                source={item.img} />
            </View>

          </TouchableOpacity>
        }}

      />
    </View>
  )
}

export default KawaiiScreen

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    color: '#000',
    fontWeight: '700'
  },
  info: {
    fontSize: 12,
    color: '#000',
    opacity: .7
  },
  img: {
    width: ITEM_HEIGHT * .8,
    height: ITEM_HEIGHT * .8,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    right: 8
  }
})