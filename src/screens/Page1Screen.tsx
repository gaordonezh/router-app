import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import appStyles from '../theme/appTheme';

interface Page1ScreenProps extends StackScreenProps<any, any> {}

const Page1Screen = ({navigation}: Page1ScreenProps) => {
  return (
    <View style={appStyles.globalMargin}>
      <Text style={appStyles.title}>Page1Screen</Text>
      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('second')}
      />

      <Text>Navegar con argumentos</Text>

      <View style={{flexDirection: 'row', gap: 5}}>
        <TouchableOpacity
          style={{...appStyles.buttonLarge, backgroundColor: '#5856D6'}}
          onPress={() => navigation.navigate('fourth', {id: 1, name: 'Pedro'})}>
          <Text style={appStyles.buttomText}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...appStyles.buttonLarge, backgroundColor: '#ff9427'}}
          onPress={() => navigation.navigate('fourth', {id: 2, name: 'María'})}>
          <Text style={appStyles.buttomText}>María</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page1Screen;
