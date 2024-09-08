import { View, StyleSheet, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import VehicleCard from '../../common/VehicleCard/VehicleCard';
import rent_car_1 from '../../assets/img/rent_car_1.jpg';
import rent_car_2 from '../../assets/img/rent_car_2.jpg';
import instance from '../../services/Axious'
import DiologBox from '../../component/DiologBox/DiologBox';

export default function Vehicles() {

  const [visible, setVisible] = useState(false)
  const [data, setData] = useState([]);
  const [selectItem, setSelectItem] = useState()

  const hideDialog = () => {
    setVisible(false)
  }

  const information = () => {
    setVisible(true)
  }


  useEffect(() => {
    getAllVehicle();
  }, [])

  const getAllVehicle = () => {
    instance({
      method: 'get',
      url: '/vehicle',
    })
      .then(function (response) {
        const array = [];
        console.log("vehicle data",response.data);
        response.data.forEach(val => {
          array.push({
            id: val.vehicleId,
            brandName: val.brandName,
            moduleName: val.moduleName,
            passengers: val.passenger,
            type: val.fuelType,
            transmission: val.transmissionType,
            status: val.status,
            imgs:val.vehicleImgs,

            dailyKm:val.dailyLimitKilometers,
            dailyRental:val.dailyRentalPrice,
            extraKm:val.extraKm,
            
          })
        })
        setData(array)
      }).catch(err => {
        console.log(err);
      })
  }

  const onPress = (item) => {
    setSelectItem(item)
    setVisible(true)
  }


  return (
    <>
      <View style={styles.mainView}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <VehicleCard
              img={item.imgs[0].image}
              brandName={item.brandName}
              moduleName={item.moduleName}
              type={item.type}
              transmission={item.transmission}
              passengers={item.passengers}
              status={item.status}
              onPress={()=>onPress(item)}
            />
          )}
        />
        {visible && 
          <DiologBox onDismiss={hideDialog} visible={visible} item={selectItem}/>
        }
      

      </View>

      {/* <View style={styles.mainView}>
        <VehicleCard
        img={rent_car_1}
        brandName={'MITSUBISHI'}
        moduleName={'MONTERO SPORT'}
        type={'Diesel'}
        transmission={'Auto'}
        passengers={'7'}
        status={'Not Available Now'}
        />
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  mainView: {
    padding: 10,
  },

});
