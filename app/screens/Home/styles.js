import { StyleSheet } from 'react-native';
import AppStyles from './../../config/styles';
import metrics from './../../config/metrics';

const styles = StyleSheet.create({
    cashIcon: {
        bottom: 10,
        height: '15%',
        position: 'absolute',
        resizeMode: 'contain',
        right: 10,
        width: '15%'
    },
    container: {
        flexDirection: 'column',
        paddingHorizontal: 10
    },
    favIcon: {
        height: '15%',
        left: 10,
        position: 'absolute',
        resizeMode: 'contain',
        top: 10,
        width: '15%'
    },
    gridContainer: {
        backgroundColor: AppStyles.color.COLOR_WHITE,
        flex: 1,
        marginTop: 15,
    },
    gridItem: {
        alignItems: 'center',
        borderColor: AppStyles.color.COLOR_GREY_THEME,
        borderWidth: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginBottom: 10,
        marginRight:10,
        marginTop: 0,
        maxHeight: 150,
        paddingBottom: 15
    },
    gridItemImage: {
        height: '50%',
        marginTop:30,
        resizeMode: 'contain',
        width: '50%',
    },
    iconStyle: {
        resizeMode: 'contain',
        width: 25
    },
    iconView: {
        flexDirection: 'row',
        flex:1,
        justifyContent: 'space-evenly',
        width: metrics.screenWidth / 1.25
    },
    pickerContainer: {
        alignItems: 'center',
        height: 40,
        justifyContent : 'space-between',
    },
    pickerItem: {
        color: AppStyles.color.COLOR_GREY_TRANSP,
    },
    pickerStyle: {
        borderColor: AppStyles.color.COLOR_GREY_THEME,
        borderWidth: 1,
        flex: 1,
        padding: 0,
        width: metrics.screenWidth / 1.75
    },
    priceOneText:{
        color: AppStyles.color.COLOR_BLACK_TRANSP,
        fontSize: 14
    },
    priceTwoText: {
        color: AppStyles.color.COLOR_GREEN,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop:5
    },
    searchBar: {
        backgroundColor: AppStyles.color.COLOR_WHITE,
        borderColor: AppStyles.color.COLOR_WHITE,
        borderWidth: 0,
    }

});

export default styles;
