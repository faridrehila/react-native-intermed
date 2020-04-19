import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  ToastAndroid,
  StyleSheet,
} from 'react-native';
import {useMutation} from '@apollo/react-hooks';

import _queries from '../../api/feedbacks';
import {COLORS} from '../../lib/const';

function FormScreen() {
  const [email, setemail] = useState('');
  const [comment, setcomment] = useState('');
  const [sending, setsending] = useState(false);
  const [addFeedback, {data}] = useMutation(_queries.ALL_FEEDBACK);

  const sendForm = () => {
    if (comment !== '') {
      setsending(true);
      addFeedback({variables: {email: email, comment: comment}});
      ToastAndroid.show('Merci pour votre retour !', ToastAndroid.SHORT);
      setemail('');
      setcomment('');
      setsending(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.intro}>
        Vous pouvez m'envoyer directement vos suggestions d'amélioration en
        remplissant ce petit formulaire :
      </Text>

      <View style={styles.containerItem}>
        <Text style={styles.label}>E-mail (optionnel)</Text>
        <TextInput
          style={styles.emailInput}
          onChangeText={text => setemail(text)}
          value={email}
        />
      </View>
      <View style={styles.containerItem}>
        <Text style={styles.label}>
          Suggestions (améliorations, nouveaux médias,...)
        </Text>
        <TextInput
          style={styles.commentInput}
          onChangeText={text => setcomment(text)}
          value={comment}
          multiline
          numberOfLines={7}
        />
      </View>

      <View style={styles.containerItem}>
        {sending ? (
          <ActivityIndicator animating size="large" />
        ) : (
          <Button
            onPress={sendForm}
            title="Envoyer"
            color={COLORS.COLOR_MAINRED}
            accessibilityLabel="Learn more about this purple button"
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 15},
  intro: {fontSize: 16},
  containerItem: {marginTop: 20},
  label: {fontSize: 16, marginBottom: 10},
  emailInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 4,
  },
  commentInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 4,
  },
});

export default FormScreen;
