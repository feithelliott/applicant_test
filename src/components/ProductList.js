import React, { useState } from 'react';
import { 
    Image,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import StarRating from 'react-star-ratings';
import { dummyProducts } from '../services/dummyProducts';

const styles = StyleSheet.create({
    container: {
        display:'flex',
        alignItems: 'center',
        padding: '5px',
        minWidth:'20vw',
    },
    imageStyle: {
        minWidth:'15vw',
        minHeight: '15vh',
    },
    titleText: {
        fontSize: '1.5vh',
        fontWeight: 'bold'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 700,
        color: 'white',
        backgroundColor: 'red',
        minWidth: '6vw',
        minHeight: '3vh'
    },
    button: {
        width: '100%', 
        alignItems: 'center',
    },
    price: {
        marginTop: 20,
        fontWeight: 700,
    },
    buyOneGetOnePrice: {
          color: 'red',
          marginTop: 20,
          fontStyle: 'bold',
          fontWeight: 700,
    },
    rowContainer: {
        flexDirection: 'row',
    },
});

const ProductList = () => {
    const [products] = useState(dummyProducts);
    const cardsArray = products.map(product => (
        <View style={styles.container}>
          <Image source={(require(`../images/${product.photo}`))} style={styles.imageStyle} resizeMode='contain'/>
          <StarRating
            rating={product.rating}
            starRatedColor='red'
            numberOfStarts={5}
            name='rating'
            starDimension='10px'
            starSpacing='5px'/>
          <Text style={styles.titleText}>{product.name}</Text>
          <Text>{product.description}</Text>
          <Text style={(product.buyOneGetOne === true) ? styles.buyOneGetOnePrice : styles.price}>{product.price}</Text>
          <View>
            <TouchableOpacity style={styles.button} > 
                <Text style={styles.buttonText}>add to cart</Text>
            </TouchableOpacity >
          </View>
        </View>
    ));
  
    return (
        <>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: '#75ad08'}} />
            <View>
                <Text style={{width: 100, textAlign: 'center', color: '#01853d', fontWeight: 'bold'}}>You May Like</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: '#75ad08'}} />
        </View>
        <View style={styles.rowContainer}>
            {cardsArray}
        </View>
      </>
    );
};

export default ProductList;