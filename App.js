import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import SalahTracker from "./screens/SalahTracker/SalahTracker";
import Charts from "./screens/Charts/Charts";
import ReadQuran from "./screens/ReadQuran/ReadQuran";
import { GlobalContext } from "./api/SalahContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GlobalContext>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* //Screen 1 */}
          <Tab.Screen
            name="Home"
            component={SalahTracker}
            options={{
              tabBarIcon: () => {
                return (
                  <Image
                    source={require("./assets/images/home.png")}
                    style={{ width: 30, height: 30 }}
                  />
                );
              },

              tabBarStyle: {
                paddingBottom: 5,
                paddingTop: 5,
              },
            }}
          />
          {/* //Screen 2 */}
          <Tab.Screen
            name="Charts"
            component={Charts}
            options={{
              tabBarIcon: () => {
                return (
                  <Image
                    source={require("./assets/images/chart.png")}
                    style={{ width: 30, height: 30 }}
                  />
                );
              },
              tabBarStyle: {
                paddingBottom: 5,
                paddingTop: 5,
              },
            }}
          />
          {/* //Screen 3 */}
          <Tab.Screen
            name="Quran"
            component={ReadQuran}
            options={{
              tabBarIcon: () => {
                return (
                  <Image
                    source={require("./assets/images/quran.png")}
                    style={{ width: 30, height: 30 }}
                  />
                );
              },
              tabBarStyle: {
                paddingBottom: 5,
                paddingTop: 5,
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GlobalContext>
  );
}
