import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    //
    // Main.js
    //
    mainWrapper: {
        flex: 1,
        backgroundColor: '#00a8ff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainLogo: {
        fontFamily: 'OpenSans-Light',
        fontSize: 40,
        color: '#fff'
    },

    //
    // Button Theme
    //
    btnPrimary: {
        backgroundColor: '#00a8ff',
        height: 80
    },
    btnSecondary: {
        backgroundColor: '#2f3640',
        height: 80
    },
    btnTxt: {
        fontFamily: 'OpenSans-Regular',
    },

    // sign in/sign up
    signWrapper: {
        flex: 1,
        backgroundColor: '#fff'
    },
    signTxt: {
        fontFamily: 'OpenSans-Regular',
    },

    //
    // Content inside tabs
    // Home.js/About.js/Avatar.js
    separatorWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleTxt: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
    },
    subTitleTxt: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 20,
    },
    descTxt: {
        fontFamily: 'OpenSans-Light',
        fontSize: 20,
        textAlign: 'justify'
    }
});

export default styles;
