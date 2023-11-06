import React from 'react'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FatistoIcon from 'react-native-vector-icons/Fontisto';
const FontAwesome5Icn = (props: any) => {
    return (
        <FontAwesome5Icon name={props?.name} size={parseInt(props?.size)} color={props?.color} />
    );
}
const FatistoIcn = (props: any) => {
    return (
        <FatistoIcon name={props?.name} size={parseInt(props?.size)} color={props?.color} />
    );
}
export { FontAwesome5Icn, FatistoIcn }




