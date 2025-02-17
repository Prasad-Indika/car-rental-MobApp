import React, { useState } from 'react';
import { Card, Text } from 'react-native-paper';
import { View, Image, StyleSheet } from 'react-native';
import DesignButton from '../DesignButton/DesignButton';
import DiologBox from '../../component/DiologBox/DiologBox';
export default function VehicleCard({img, brandName, moduleName, type, transmission, passengers, status, onPress}) {

    return (
        <Card style={styles.card}>
            <Card.Content>
                <View style={styles.imageContainer}>
                    <Image 
                    source={{
                        uri: 'http://192.168.8.104:8080/'+img,
                      }}
                    style={styles.image} />
                </View>

                <View style={styles.detailsContainer}>
                    <View style={styles.nameView}>
                        <Text style={styles.brandName}>{brandName} {moduleName}</Text>
                    </View>

                    <View style={styles.commonView}>
                        <Text style={styles.text}>Fuel Type</Text>
                        <Text style={styles.text2}>{type}</Text>
                    </View>

                    <View style={styles.commonView}>
                        <Text style={styles.text}>Transmission</Text>
                        <Text style={styles.text2}>{transmission}</Text>
                    </View>


                    <View style={styles.commonView}>
                        <Text style={styles.text}>Seats</Text>
                        <Text style={styles.text2}>{passengers}</Text>
                    </View>



                </View>

                <View style={styles.statusContainer}>
                    <Text style={styles.status}>{status}</Text>
                </View>

                <View style={styles.btnView}>
                    <DesignButton
                        style={styles.btn}
                        buttonColor={'#005188'}
                        textColor={'white'}
                        rippleColor={'#007ACC'}
                        label={'More Information'}
                        onPress={onPress}
                    />
                </View>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 10,
        elevation: 3,
    },
    imageContainer: {
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    detailsContainer: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    brandName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'black'
    },
    moduleName: {
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
    },
    detailText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },

    text: {
        fontSize: 17,
        marginBottom: 3,
        fontWeight: 'bold',
        color:'black'
    },

    commonView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between'
    },

    text2: {
      
        fontSize: 17,
        color:'gray'
    },
    statusContainer: {
        alignItems: 'center',
        marginTop: 6,
    },
    status: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    btnView: {
        padding: 10,
    },
    btn: {
        borderRadius: 10,
        width: "100%",
        fontSize: 18,
    },
    nameView: {
        display: 'flex',
        alignItems: 'center',
        padding: 10,
    },
});

