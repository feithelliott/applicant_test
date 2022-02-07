import React, { useState } from 'react';
import { 
    Image,
    StyleSheet,
    View,
} from 'react-native';
import { Link } from 'react-router-dom';
import { HPBanners } from '../services/dummyProducts';

const styles = StyleSheet.create({
    imageStyle: {
        minWidth:'33vw',
        maxHeight: '20vh',
        aspectRatio: '0.5',
      },
      rowContainer: {
        display:'flex',
        flexDirection: 'row',
      },
    },
);

const HealthBanners = () => {
    const [banners] = useState(HPBanners);
    
    const bannerArray = HPBanners.map(banner => (
        <View style={styles.container}>
            <Link to={`/product${banner.id}`}>
            <Image source={(require(`../images/${banner.photo}`))} style={styles.imageStyle} resizeMode="contain"/>
          </Link>
        </View>
    ));
  
    return (
      <View style={styles.rowContainer}>
        {bannerArray}
      </View>
    );
}

export default HealthBanners;