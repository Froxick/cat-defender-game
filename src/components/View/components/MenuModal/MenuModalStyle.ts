import { Dimensions, StyleSheet } from "react-native";
const windowHeight = Dimensions.get('window').height;
const windowWight = Dimensions.get('window').width
export const MenuModalStyles = StyleSheet.create({
    modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: windowWight * 0.9,
    maxHeight: windowHeight * 0.8,
    minHeight: windowHeight * 0.3,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // justifyContent: 'center',
    // alignContent:'center',
    // alignItems:'center'
  },
})