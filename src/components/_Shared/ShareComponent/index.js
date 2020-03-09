import React from 'react';
import {Share, View, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';

import ThemedIcon from '../ThemedComponents/ThemedIcon';

export default function ShareComponent({url}) {
  const onShare = () => {
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
    );
  };

  return (
    <TouchableHighlight underlayColor={'transparent'} onPress={onShare}>
      <View>
        <ThemedIcon name="share" size={26} />
      </View>
    </TouchableHighlight>
  );
}

ShareComponent.propTypes = {
  url: PropTypes.string,
};
