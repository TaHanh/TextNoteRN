import {createStackNavigator} from 'react-navigation-stack';
import ListNoteScreen from '../screens/list-note/ListNoteScreen';
import NoteDetailScreen from '../screens/note-detail/NoteDetailScreen';

const RootNavigator = createStackNavigator(
  {
    ListNote: {screen: ListNoteScreen},
    NoteDetail: {screen: NoteDetailScreen},
  },
  {
    initialRouteName: 'ListNote',
  },
);

export default RootNavigator;
