import React, {useEffect} from 'react';
import appStyles from '../theme/appTheme';
import {View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

interface PersonaScreenProps
  extends StackScreenProps<RootStackParams, 'fourth'> {}

const PersonaScreen = ({route, navigation}: PersonaScreenProps) => {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, [params]);

  return (
    <View style={appStyles.globalMargin}>
      <Text style={appStyles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};

export default PersonaScreen;
