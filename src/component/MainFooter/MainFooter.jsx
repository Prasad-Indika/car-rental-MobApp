import { StyleSheet, Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import location_img from '../../assets/img/location.png'
import avialable_img from '../../assets/img/time.png'
import email_img from '../../assets/img/email.png'
import call_img from '../../assets/img/call.png'

export default class MainFooter extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.iconView}>
                    <View style={styles.iconContainer}>
                        <Image source={location_img} style={styles.image} />
                        <View style={styles.textView}>
                            <Text style={styles.iconText}>Location</Text>
                            <Text style={styles.iconSubText}>Wennappuwa</Text>
                        </View>
                    </View>

                    <View style={styles.iconContainer}>
                        <Image source={call_img} style={styles.image} />
                        <View style={styles.textView}>
                            <Text style={styles.iconText}>Call</Text>
                            <Text style={styles.iconSubText}>0770826701</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.copyright}>
                        Copyright © 2024 | All Rights reserved by</Text>
                        <Text style={styles.name}>PRASAD INDIKA</Text>
                    <Text style={styles.email}>kdpindika@gmail.com</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: "#292524",
    },
    iconView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    iconContainer: {

        alignItems: 'center',
    },
    image: {
        width: 25,
        height: 25,
        marginBottom: 5,
    },
    iconText: {
        color: "white",
        fontSize: 14,
        fontWeight: 'bold',
    },
    iconSubText: {
        color: "white",
        fontSize: 12,
    },
    textView: {
        alignItems: 'center',
    },

    // black footer
    footer: {
        backgroundColor: 'black',
        padding: 20,
        alignItems: 'center',
    },
    copyright: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 5,
    },
    email: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
    },
    name: {
        color: '#A50010',
    },
})
