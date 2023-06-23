import React from 'react';
import { StyleSheet, View } from 'react-native';

const SubContainer = (props) => {
    return (
        <View style={{ ...styles.subContainer, ...props.style }}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    subContainer: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        borderRadius: 15,
        width:370,
        height:400,
        margin: 20,
        marginBottom: 5,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SubContainer;