const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  header: {
    backgroundColor: 'purple',
    padding: 15,
    alignItems: 'flex-start',
    width: '100%',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemCellContainer: {flex: 1, width: '100%', flexDirection: 'row'},
  cellTextContainer: {
    flex: 0.5,
    alignItems: 'flex-start',
  },
  symboltext: {
    textAlign: 'center',
    paddingVertical: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  quantityText: {textAlign: 'center', fontSize: 12},
  textLeftContainer: {flex: 0.5, alignItems: 'flex-end'},
  ltpText: {
    textAlign: 'center',
    fontSize: 14,
    paddingVertical: 5,
  },
  ltpValue: {
    textAlign: 'center',
    fontSize: 14,
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  PNLText: {
    textAlign: 'center',
    fontSize: 14,
  },
  PNLValue: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  bottomSectionContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 50,
    width: '100%',
    backgroundColor: 'white',
  },
  sectionTextWrapper: {
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  currValText: {
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  curVal: {
    fontSize: 18,
    fontWeight: '600',
  },
  totalInvWrapper: {
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalInvText: {
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  totalInvVal: {
    fontSize: 18,
    fontWeight: '600',
  },
  profitAndLossWrapper: {
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profitAndLossText: {
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  profitAndLossVal: {
    fontSize: 18,
    fontWeight: '600',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bfb6bd',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#a3a195',
    marginVertical: 4,
  },
  flatListContainer: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
});
