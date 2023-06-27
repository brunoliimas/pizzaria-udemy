import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

import { CategoryProps } from '../../pages/Order';

interface ModalPickerProps {
    options: CategoryProps[];
    handleCloseModal: () => void;
    selectedItem: (item: CategoryProps) => void;
}

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')


export function ModalPicker({ options, handleCloseModal, selectedItem }: ModalPickerProps) {

    function onPressItem(item: CategoryProps) {
        // console.log(item);
        selectedItem(item);
        handleCloseModal();
    }


    const option = options.map((item, index) => (
        <TouchableOpacity key={index} style={selfStyle.option} onPress={() => onPressItem(item)}>
            <Text style={selfStyle.item}>
                {item?.name}
            </Text>
        </TouchableOpacity>
    ))

    return (
        <TouchableOpacity style={selfStyle.container} onPress={handleCloseModal}>
            <View style={selfStyle.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

const selfStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        width: WIDTH - 30,
        height: HEIGHT / 2,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#8a8a8a',
        borderRadius: 4,
    },
    option: {
        alignItems: 'flex-start',
        borderBottomWidth: .8,
        borderBottomColor: '#8a8a8a'
    },
    item:{
        margin: 18,
        fontSize: 16,
        fontWeight: 'bold',
        color: "#101026"
    }
})