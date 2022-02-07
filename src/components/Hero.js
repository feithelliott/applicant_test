import React from 'react';
import { 
    Image,
    StyleSheet,
    View,
} from 'react-native';
import { Link } from 'react-router-dom';

const styles = StyleSheet.create({
    bannerContainer: {
        width: '100%',
        height: '10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingBottom: '10px',
    },
    heroStyle: {
        minWidth:'100vw',
        minHeight: '1vh',
        maxHeight: '45vh',
        aspectRatio: '4',
      },
    },
);

const Hero = () => {
    return(
        <View style={styles.bannerContainer}>
            <Link to='/activate'>
                <Image source={require('../images/Hero.webp')} style={styles.heroStyle} resizeMode="stretch"/>
            </Link>
        </View>
    )
}

export default Hero;