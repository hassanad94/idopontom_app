import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { auth } from "./fireBase";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import ReservationScreen from "./screens/ReservationScreen";
import ServiceScreen from "./screens/ServiceScreen";
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import Home from "./screens/Home";
import EmailLogin from "./screens/EmailLogin";

const Stack = createNativeStackNavigator();

function App() {
  const [init, setInit] = useState(true);
  const [user, setUser] = useState(null);
  const [storageUser, setStorageUser] = useState(null);

  const onAuthStateChanged = async (user) => {
    setUser(user);

      try {
        const userDataFromStorage = await AsyncStorage.setItem('IDOPONTOMUSER', JSON.stringify( user ) || ""  );

        setStorageUser( userDataFromStorage );

      } catch (e) {
        console.error( e.message ); 
      }


    if (init) setInit(false);
  };

  const loadUser = async() =>{

    try {
      let userDataFromStorage = await AsyncStorage.getItem('IDOPONTOMUSER');

      setUser(userDataFromStorage);

    } catch (e) {

      console.error( e.message ); 

    }

  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);


  //userLoad
  useEffect(() => {
    loadUser();
  }, []);

  if (init) return null;
  if (!user) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Registration"
            component={Registration}
            options={{
              headerBackTitle: "Vissza",
              title: "Regisztráció",
              presentation: "card",
              headerStyle: { backgroundColor: "#0098da" },
              headerTitleStyle: { color: "#fff" },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="EmailLogin"
            component={EmailLogin}
            options={{
              headerBackTitle: "Vissza",
              title: "Bejelentkezés",
              presentation: "card",
              headerStyle: { backgroundColor: "#0098da" },
              headerTitleStyle: { color: "#fff" },
              headerTintColor: "#fff",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Service" component={ServiceScreen} />
        <Stack.Screen
          name="Reservation"
          component={ReservationScreen}
          options={{ presentation: "modal", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
