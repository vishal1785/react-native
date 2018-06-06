import { Navigation } from 'react-native-navigation';

const startMainScreen = () => {
    Navigation.startTabBasedApp({
        tabs: 
        [
            {
                screen: 'myapp.FindPlaceScreen',
                label: 'Find Place',
                title: 'Find Place',
                icon: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/map-48.png',
                navigatorButtons:{
                    leftButtons:[{
                        icon:'https://cdn2.iconfinder.com/data/icons/flat-master-2/32/menu-64.png',
                        title:'Menu1',
                        id:'sideToggle'
                    }]
                }
            },
            {
                screen: 'myapp.SharePlaceScreen',
                label: 'Share Place',
                title: 'Share Place',
                icon: 'https://cdn4.iconfinder.com/data/icons/icon-flat-icon-set/50/share-raw-48.png',
                navigatorButtons:{
                    leftButtons:[{
                        icon:'https://cdn2.iconfinder.com/data/icons/flat-master-2/32/menu-64.png',
                        title:'Menu2',
                        id:'sideToggle'
                    }]
                }
            }
        ],
        appStyle:{
            tabBarSelectedButtonColor: 'blue'
        },
        drawer:{
            left:{
                screen:'myapp.SideDrawerScreen'
            }
        }
    });
};

export default startMainScreen;