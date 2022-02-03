import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import {Card, Button} from 'react-native-elements';

//Composant de message d'erreur
import {LogBox} from 'react-native';

// Désactive l'erreur concernant la persistence des donénes
// CF doc : https://reactnavigation.org/docs/troubleshooting/#i-get-the-warning-non-serializable-values-were-found-in-the-navigtion-state
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const UserList = ({navigation}) => {
  let [users, setUsers] = useState([
    {
      key: 1,
      name: 'Jay Paltan',
      username: 'GPALTAN',
      email: 'jay.paltan@tamer.fr',
      description: 'I love goats',
    },
    {
      key: 2,
      name: 'Chuck Norris',
      username: 'Dieu',
      email: 'dieu@chucknorris.god',
      description: 'Vers Chuck Norris et au delà !',
    },
  ]);
  let [newKey, setNewKey] = useState(0);

  /**
   *
   * @param : Reprend l'élément en cours de lecture
   * @returns : une carte par item, reprenant ses informations.
   */
  const renderItem = ({item}) => (
    <View>
      <Card>
        <Card.Title>{item.username}</Card.Title>
        <Card.Divider />
        <Text>Nom : {item.name}</Text>
        <Text>email : {item.email}</Text>
        <Text>Description : {item.description}</Text>
      </Card>
    </View>
  );

  /**
   * Gère l'ajout d'un utilisateur à la liste.
   * Génère également la key automatiquement.
   * @param {obj} newUser : Nouvel utilisateur
   */
  const addUser = newUser => {
    setNewKey(users.length + 1);
    newUser.key = newKey;
    setUsers([...users, newUser]);
  };

  /**
   * Définit le comportement lors du pressage de 'Inscrivez vous'
   * Passe la fonction addUser
   */
  const handlePress = () => {
    navigation.navigate('FormUser', {addUser});
  };

  return (
    <View>
      <View>
        <Button onPress={handlePress} title="Inscrivez-vous" />
      </View>
      <FlatList data={users} renderItem={renderItem} />
    </View>
  );
};

export default UserList;
