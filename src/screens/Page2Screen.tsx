import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import appStyles from '../theme/appTheme';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

const Page2Screen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      title: 'Que fue mano',
      headerBackTitle: 'Atras',
    });
  }, []);

  return (
    <View style={appStyles.globalMargin}>
      <Text style={appStyles.title}>Page2Screen</Text>

      <Button
        title="Ir a pagina 3"
        onPress={() => navigation.navigate('third')}
      />
    </View>
  );
};

export default Page2Screen;
