import React from 'react';
import { Text, View } from 'react-native';
import { Router, Scene, Tabs, Stack } from 'react-native-router-flux';
import { AntDesign } from '@expo/vector-icons';

// Views
import Signin from '../views/Signin/Signin';
import Signup from '../views/Signup/Signup';
import Main from '../views/Main/Main';

// Tabs
import Feeds from '../views/Tabs/Feeds/Feeds';
import About from '../views/Tabs/About/About';
import Avatar from '../views/Tabs/Avatar/Avatar';

const Tabicon = ({focused, iconName, title}) => {

    var color = focused ? '#00a8ff' : '#999';
    return (
        <View style={{width: 80, alignItems: 'center'}}>
            <AntDesign size={25} name={iconName} color={color} />
            <Text style={{color: color, fontSize: 8, fontFamily: 'OpenSans-Regular'}}>{title}</Text>
        </View>
    );
  }

const Routes = () => {
    return(
        <Router>
            <Scene key="root">
                
                <Scene initial key="main" title="Main" component={Main} hideNavBar />
                <Scene key="signin" title="Signin" component={Signin} hideNavBar />
                <Scene key="signup" title="Signup" component={Signup} hideNavBar />
                
                <Tabs
                    key="tabbar"
                    swipeEnabled={false}
                    showLabel={false}
                    lazy={true}
                    animationEnabled={true}
                    hideNavBar>
                    
                    <Stack
                        key="tab1"
                        title="Feeds"
                        icon={Tabicon}
                        iconName="bars"
                        hideNavBar>

                        <Scene key="feeds" title="Feeds" component={Feeds} hideNavBar />
                    </Stack>

                    <Stack
                        key="tab2"
                        title="About"
                        icon={Tabicon}
                        iconName="infocirlceo"
                        hideNavBar>

                        <Scene key="about" title="About" component={About} hideNavBar />
                    </Stack>
                </Tabs>

                <Scene key="avatar" title="Avatar" component={Avatar} hideNavBar />

            </Scene>
        </Router>
    )
};

export default Routes;