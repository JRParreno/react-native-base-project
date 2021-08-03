/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};


// uncomment this to use non auth screens
// export type NonAuthParamList = {
//   "Landing Page": undefined;
//   Login: undefined;
//   Registration: undefined;
//   ForgotPassword: undefined;
// };