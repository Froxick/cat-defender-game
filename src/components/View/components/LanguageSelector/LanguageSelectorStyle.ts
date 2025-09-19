import { StyleSheet } from "react-native";

export const LanguageSelectorStyles = StyleSheet.create({
    container: {
    padding: 10,
    width: 250,
    alignItems: 'center',
    backgroundColor: '#ffe9edff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    margin: 10,
    justifyContent:'center',
    alignContent: 'center',
  },
  selectorContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent:'center',
    alignItems: 'center',
    alignContent: 'center',
    marginVertical: 10
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  option_1: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  option_2: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  activeOption: {
    backgroundColor: '#ff6b8b',
  },
  optionText: {
    fontSize: 16,
    color: '#666',
  },
  activeOptionText: {
    color: '#fff',
    fontWeight: '600',
  },
})