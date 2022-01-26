import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerTopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'flex-start',
  },
  headerBottomContainer: {
    marginTop: 10,
    flexDirection: 'row',
    // backgroundColor: 'red',
    borderColor: 'black',
    alignContent: 'flex-end',
    alignItems: 'center',
  },
  backIcon: {
    flexGrow: 1,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  loggedInUser: {
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    marginEnd: 10,
  },
  loggedInUserText: {
    fontWeight: 'bold',
  },
  leftContainer: {
    height: 90,
    marginLeft: 10,
  },
  leftContainerImg: {
    height: '100%',
  },
  activeIcon: {
    color: 'blue',
    marginBottom: 10,
  },
  divider: {
    // height: 40,
    // borderColor: 'black',
    // borderLeftWidth: 1,
  },
  rightIconCont: {
    padding: 10,
    // marginStart: 20,
  },
  rightIcon: {
    // color: '#EEEEEE',
    // backgroundColor: 'black',
  },
  inputContainer: {
    position: 'relative',
    flex: 1,
    // padding: 10,
    // backgroundColor: '#fff',
    height: '100%',
  },
  textInputFrom: {
    backgroundColor: '#F9F9F9',
    color: 'blue',
    borderRadius: 0,
    // padding: 10,
    // marginBottom: 10,
  },
  textInputTo: {
    backgroundColor: '#EDEDED',
    padding: 10,
    marginBottom: 10,
    borderRadius: 0,
  },
  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },
  listView: {
    position: 'absolute',
    top: 150,
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },
  linearGradient: {
    marginTop: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  savedPlace: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  savedPlaceLeftIcon: {
    backgroundColor: '#AEAEAE',
    color: '#fff',
    height: 40,
    width: 40,
  },
  savedPlaceText: {
    flex: 1,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  previousDestination: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 14,
    borderColor: '#E2E2E2',
  },
  pdIconContainer: {
    marginEnd: 20,
    marginStart: 10,
  },
  addressContainer: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    flexShrink: 1,
  },
  destinationTextTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  destinationTextAddress: {
    // flexWrap: 'wrap',
    // lineHeight: 18,
  },
});

export default styles;
