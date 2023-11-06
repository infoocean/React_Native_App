import { StyleSheet, Text, View } from "react-native";
const TitleWithBottomLineComponent = (props: any) => {
    return (
        <View style={styles.headerTitlecontainer}>
            <Text style={styles.title}>{props?.headerTitle}</Text>
            <View style={[styles.line, { width: parseInt(props?.borderWidth) }]} />
        </View>
    );
};
export { TitleWithBottomLineComponent }
const styles = StyleSheet.create({
    headerTitlecontainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#e8661b',
        textAlign: 'center',
    },
    line: {
        height: 0.7,
        backgroundColor: 'black',
        marginTop: 5,
    },
});




