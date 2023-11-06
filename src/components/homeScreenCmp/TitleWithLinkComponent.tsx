import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Entypo'
const TitleWithLinkComponent = (props: any) => {
    return (
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{props?.title}</Text>
            <TouchableOpacity>
                <Icon
                    style={styles.allBtn}
                    name='chevron-small-right'
                    size={22}
                />
            </TouchableOpacity>
        </View>
    );
};
export { TitleWithLinkComponent }
const styles = StyleSheet.create({
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
    },
    sectionTitle: {
        fontSize: 15,
        fontWeight: '800',
        color: 'black',
    },
    allBtn: {
        color: 'blue',
    },
});




