import React from 'react';
import {View, TouchableHighlight, AsyncStorage} from 'react-native';

import CONST from '../../../lib/const';

class Bookmark extends React.PureComponent {
  state = {
    isBookmarked: false,
  };

  componentDidMount() {
    this.isArticleBookmarked();
  }

  onPress = () => {
    if (!this.state.isBookmarked) {
      try {
        AsyncStorage.setItem(
          `@MyArticles:${this.props.id}`,
          JSON.stringify(this.props.data),
        ).then(() => {
          this.setState({isBookmarked: true});
        });
      } catch (error) {
        // Error saving data
        console.log('error saving in storage!', error);
      }
    } else {
      // Remove article
      try {
        AsyncStorage.removeItem(`@MyArticles:${this.props.id}`).then(() => {
          this.setState({isBookmarked: false});
          this.props.onPressBookmark && this.props.onPressBookmark();
        });
      } catch (error) {
        // Error saving data
        console.log('error deleting in storage !', error);
      }
    }
  };

  isArticleBookmarked = () => {
    AsyncStorage.getItem(`@MyArticles:${this.props.id}`)
      .then(data => {
        if (data && data.readTime !== 0) this.setState({isBookmarked: true});
      })
      .done();
  };

  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={this.onPress}
          underlayColor={'transparent'}>
          <View>
            {/*  {this.state.isBookmarked && <IconBookmark />}
            {!this.state.isBookmarked && (
              <IconBookmark color={CONST.COLOR_MAINBLUE} />
            )} */}
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Bookmark;
