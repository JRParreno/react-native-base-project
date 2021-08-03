/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
// import { NonAuthParamList } from '../types';  # create non auth param list for login, registration etc..
// uncomment to use as default non auth screens
// import LoginScreen from "../screens/Non-Auth/LoginScreen";
// import LandingScreen from "../screens/Non-Auth/LandingScreen";
// import ForgotPasswordScreen from "../screens/Non-Auth/ForgotPasswordScreen";
// import RegistrationScreen from "../screens/Non-Auth/RegistrationScreen";

// const NonAuthStack = createStackNavigator<NonAuthParamList>();

// export default function NonAuthNavigator() {
//     return (
//         <NonAuthStack.Navigator initialRouteName="Landing Page" screenOptions={{ headerShown: false }}>
//             <NonAuthStack.Screen
//                 name="Landing Page"
//                 component={LandingNavigator}
//             />
//             <NonAuthStack.Screen
//                 name="Login"
//                 component={LoginNavigator}
//             />
//             <NonAuthStack.Screen
//                 name="Registration"
//                 component={RegistrationNavigator}
//             />
//             <NonAuthStack.Screen
//                 name="ForgotPassword"
//                 component={ForgotPasswordNavigator}
//             />
//         </NonAuthStack.Navigator>
//     );
// }

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
// function LandingNavigator() {
//     return (
//         <LandingScreen />
//     );
// }

// function LoginNavigator() {
//     return (
//         <LoginScreen />
//     );
// }

// function RegistrationNavigator() {
//     return (
//         <RegistrationScreen />
//     );
// }

// function ForgotPasswordNavigator() {
//     return (
//         <ForgotPasswordScreen />
//     );
// }
