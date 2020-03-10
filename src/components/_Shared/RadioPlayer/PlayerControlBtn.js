import React from 'react';
import TrackPlayer from 'react-native-track-player';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

export default function PlayerControlBtn() {
  const playbackState = TrackPlayer.usePlaybackState();

  const onTogglePlayback = async () => {
    if (playbackState === TrackPlayer.STATE_PAUSED) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  };

  if (playbackState === TrackPlayer.STATE_BUFFERING) return <View />;

  return (
    <View>
      <TouchableOpacity
        style={styles.controlButtonContainer}
        onPress={onTogglePlayback}>
        {playbackState === TrackPlayer.STATE_PLAYING ? (
          <Icon name={'pause-circle-outline'} size={48} color={'white'} />
        ) : (
          <Icon name={'play-circle-outline'} color={'white'} size={48} />
        )}
      </TouchableOpacity>
    </View>
  );
}

PlayerControlBtn.propTypes = {};

const styles = StyleSheet.create({
  controlButtonContainer: {
    flex: 1,
    paddingRight: 10,
    marginVertical: 20,
  },
});
