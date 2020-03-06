import React from 'react';
import {Share, View, TouchableHighlight, Text} from 'react-native';
import PropTypes from 'prop-types';

export default function ShareComponent({url}) {
  return (
    <TouchableHighlight
      underlayColor={'transparent'}
      onPress={() =>
        Share.share(
          {
            message:
              "Salut ! Je viens de lire un article sur l'application Intermed qui pourrait t'intéresser",
            url: url,
            title: "Article intéressant lu sur l'application Intermed",
          },
          {
            // Android only:
            dialogTitle: "Partager l'article",
            // iOS only:
            excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter'],
          },
        )
      }>
      <View>
        <Text>Partager</Text>
        {/* <IconShare /> */}
      </View>
    </TouchableHighlight>
  );
}

ShareComponent.propTypes = {
  url: PropTypes.string,
};
