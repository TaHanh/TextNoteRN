import ListNoteScreen from "../screens/list-note/ListNoteScreen";
import NoteDetailScreen from "../screens/note-detail/NoteDetailScreen";

const Stack = createStackNavigator();

function RootNavigator() {
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
         <Stack.Screen name="Home" component={ListNoteScreen} />
         <Stack.Screen name="Details" component={NoteDetailScreen} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 }
 export default RootNavigator;
