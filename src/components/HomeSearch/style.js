import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchBox: {
    backgroundColor: '#EEEEEE',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // height: 50,
  },
  searchBoxText: {
    fontSize: 20,
    fontWeight: '600',
  },
  scheduleContainer: {
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: 110,
    justifyContent: 'space-between',
    borderRadius: 50,
    paddingLeft: 12,
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
    flexWrap: 'wrap',
    lineHeight: 18,
  },
});

export default styles;
