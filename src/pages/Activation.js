import React from 'react';
import { 
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigate } from 'react-router-dom';

const styles = StyleSheet.create({
  title: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 600,
      backgroundColor: 'red',
      minWidth: '6vw',
      minHeight: '3vh',
    },
    button: {
      width: '100%', 
      alignItems: 'center',
      position: 'absolute',
    },
});


const Activate = () => {
  
  const navigate = useNavigate();

  const handleOnPress = () => {
    navigate('/');
  };

    return(
        <>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleOnPress}> 
              <h1>Activated</h1>
              <Text style={styles.title}>Go Back</Text>
            </TouchableOpacity >
          </View>
        </>
    );
};

export default Activate