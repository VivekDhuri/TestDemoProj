import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {callUserHoldingApi} from '../Redux/Portfolio/Actions';
import {FlatList} from 'react-native-gesture-handler';
import {styles} from './styles';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false); // State to manage refreshing

  const userListdata = useSelector(state => state.Holdings?.data);
  const userTotalInvestment = useSelector(
    state => state?.Holdings?.totalInvestment,
  );
  console.log('testone', userListdata);

  const handleRefresh = () => {
    setRefreshing(true); // Set refreshing state to true
    callHoldingsApi();
    setRefreshing(false);
  };

  const callHoldingsApi = () => {
    dispatch(callUserHoldingApi());
  };

  useEffect(() => {
    callHoldingsApi();
  }, []);

  const renderContent = ({item, index}) => {
    return (
      <View style={styles?.itemCellContainer}>
        {item?.quantity && (
          <View style={styles.cellTextContainer}>
            <Text style={styles.symboltext}>{item?.symbol}</Text>
            <Text style={styles.quantityText}>{item?.quantity}</Text>
          </View>
        )}
        <View style={styles.textLeftContainer}>
          {item?.ltp && (
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.ltpText}>LTP:{' ₹ '}</Text>
              <Text style={styles.ltpValue}>{item?.ltp}</Text>
            </View>
          )}
          {item?.ltp && (
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.PNLText}>PNL:{' ₹ '}</Text>
              <Text style={styles.PNLValue}>{item?.PNL}</Text>
            </View>
          )}
        </View>
      </View>
    );
  };

  const headerComponent = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Upstox Holding</Text>
      </View>
    );
  };

  const renderBottomSection = () => {
    return (
      <View style={styles.bottomSectionContainer}>
        {userTotalInvestment?.totalCurrVal && (
          <View style={styles.sectionTextWrapper}>
            <Text style={styles.currValText}>Current Value:</Text>
            <Text
              style={
                styles.curVal
              }>{`₹ ${userTotalInvestment?.totalCurrVal}`}</Text>
          </View>
        )}
        {userTotalInvestment?.totalInvestment && (
          <View style={styles.totalInvWrapper}>
            <Text style={styles.totalInvText}>Total Investment:</Text>
            <Text
              style={
                styles.totalInvVal
              }>{`₹ ${userTotalInvestment?.totalInvestment.toFixed(2)}`}</Text>
          </View>
        )}

        {userTotalInvestment?.totalInvestment && (
          <View style={styles.profitAndLossWrapper}>
            <Text style={styles.profitAndLossText}>Profit & Loss:</Text>
            <Text
              style={
                styles.profitAndLossVal
              }>{`₹ ${userTotalInvestment?.totalProfitNLoss}`}</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.screenContainer}>
      {headerComponent()}
      <FlatList
        data={userListdata}
        style={{width: '100%'}}
        renderItem={renderContent}
        contentContainerStyle={styles.flatListContainer}
        keyExtractor={item => item.symbol}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={['#009387']} // Customize the color of the refresh indicator
          />
        }
      />
      {renderBottomSection()}
    </View>
  );
};

export default HomeScreen;
