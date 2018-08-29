import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics } from 'Config'

export default StyleSheet.create({
  headerContainer: {
    flex: 0.12,
    flexBasis: 10,
    backgroundColor: Colors.white,
    justifyContent: 'flex-end',
    elevation: 5,
    shadowColor: Colors.themeLight,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  headerTitle: {
    color: Colors.themeDark,
    fontSize: 20,
    alignSelf: 'center',
    paddingBottom: 10,
    fontWeight: '500',
  },
  listContainer: {
    flex: 1,
    paddingTop: 5,
  },
  buttonContainer: {
    flex: 0.09,
    flexBasis: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: Colors.white,
    elevation: 5,
    shadowColor: Colors.themeLight,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: Colors.themeDark,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonImage: {
    width: 20,
    height: 20,
    marginLeft: 5,
    alignSelf: 'center',
  },
  itemWrapper: {
    paddingRight: 12,
  },
  itemContainer: {
    flex: 1,
    height: Metrics.height / 100 * 30,
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 6,
    marginLeft: 12,
    paddingVertical: 20,
    paddingHorizontal: 12,
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: 'gray',
    elevation: 5,
    shadowColor: Colors.themeLight,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  adsContainer: {
    flex: 1,
    height: Metrics.height / 100 * 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginVertical: 6,
    marginLeft: 12,
    paddingHorizontal: 12,
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: 'gray',
    elevation: 5,
    shadowColor: Colors.themeLight,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  itemFaceContainer: {
    flex: 3,
    justifyContent:'center'
  },
  itemDetailContainer: {
    flex: 1,
    alignSelf: 'flex-end'
  },
  itemPrice: {
    alignSelf: 'flex-end',
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.theme,
  },
  itemFace: {
    color: Colors.themeDark
  },
  itemDate: {
    alignSelf: 'flex-end',
    fontSize: 12,
    color: Colors.themeLight,
  },
  loadingContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingTitle: {
    color: Colors.themeDark,
    fontSize: 36,
    fontWeight: 'bold',
  },
  loadingFooterTitle: {
    color: Colors.themeLight,
    fontSize: 16,
    marginVertical: 15,
  },
  loadingDot: {
    fontSize: 36,
  },
  loadingFooterDot: {
    fontSize: 35,
  },
  loadingButton: {
    fontSize: 14,
  }
})
