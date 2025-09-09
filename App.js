import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpense from './screens/ManageExpense';
import RecentExpmse from './screens/RecentExpmse';
import AllExpense from './screens/AllExpense';

const Stack = createNativeStackNavigator();
const BottonTabs = createBottomTabNavigator();

const ExpenseOverview = () => {
  return (
    <BottonTabs.Navigator>
      <BottonTabs.Screen name='RecentExpense' component={RecentExpmse} />
      <BottonTabs.Screen name='AllExpense' component={AllExpense} />
    </BottonTabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='ExpenseOverview' component={ExpenseOverview} />
          <Stack.Screen name='ManageExpense' component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
