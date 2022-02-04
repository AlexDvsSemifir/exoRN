import {View} from 'react-native';
import React from 'react';
import {Button, Input} from 'react-native-elements';
import {useState} from 'react';

const FormUser = ({route, navigation}) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [enabled, setEnabled] = useState(true);

  const {addUser, newKey} = route.params || null;

  /**
   * Gère la soumission du formulaire. Envoie les donénes en props.
   * Elle ne seront pas stockées dans l'APP
   */
  const handleSubmit = () => {
    addUser({
      key: newKey,
      name: name,
      username: username,
      email: email,
      description: description,
    });
    navigation.goBack();
  };

  /**
   * Définit le pseudo de l'utilisateur
   * @param {str} input : Pseudo
   */
  const onChangeUsername = input => {
    setUsername(input);
    ButtonEnable();
  };
  /**
   * Définit le nom de l'utilisateur
   * @param {str} input : Nom
   */
  const onChangeName = input => {
    setName(input);
    ButtonEnable();
  };
  /**
   * Définit l'e-mail de l'utilsiateur
   * @param {str} input : email
   */
  const onChangeEmail = input => {
    setEmail(input);
    ButtonEnable();
  };
  /**
   * Définit la description de l'utilisateur
   * @param {str} input : Description
   */
  const onChangeDescription = input => {
    setDescription(input);
    ButtonEnable();
  };

  /**
   * Active le boutton 'submit' si les champs 'name', 'username' et 'email' contiennent au moins 
   *    - 3 caractères pour les noms et pseudo,
   *    - 7 pour le mail (minimum étant x@x.com)
   */
  const ButtonEnable = () => {
    if (name.length > 3 && username.length > 3 && email.length > 7) {
      setEnabled(false);
    }
  };

  return (
    <View>
      <Input placeholder="Nom d'utilisateur" onChangeText={onChangeUsername} />
      <Input
        placeholder="Nom et Prénom"
        onChangeText={onChangeName}
        autoComplete="name"
      />
      <Input
        placeholder="Adresse e-mail"
        onChangeText={onChangeEmail}
        keyboardType="email-address"
        autoComplete="email"
      />
      <Input placeholder="Description" onChangeText={onChangeDescription} />
      <Button title="Submit" onPress={handleSubmit} disabled={enabled} />
    </View>
  );
};

export default FormUser;
