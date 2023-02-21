import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import appStyles from '../theme/appTheme';

interface Page3ScreenProps extends StackScreenProps<any, any> {}

const Page3Screen = ({navigation}: Page3ScreenProps) => {
  return (
    <View style={appStyles.globalMargin}>
      <Text style={appStyles.title}>Page3Screen</Text>

      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Ir a página 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Page3Screen;
