import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TrackPlayer from 'react-native-track-player';
import {Image, StyleSheet, Text, View, ViewPropTypes} from 'react-native';

import PlayerControlBtn from './PlayerControlBtn';

export default function RadioPlayer(props) {
  const playbackState = TrackPlayer.usePlaybackState();
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtwork, setTrackArtwork] = useState('');

  TrackPlayer.useTrackPlayerEvents(['playback-track-changed'], async event => {
    if (event.type === TrackPlayer.TrackPlayerEvents.PLAYBACK_TRACK_CHANGED) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      setTrackTitle(track.title);
      setTrackArtwork(track.artwork);
      await TrackPlayer.play();
    }
  });

  if (
    playbackState === TrackPlayer.STATE_NONE ||
    playbackState === TrackPlayer.STATE_STOPPED
  ) {
    return <View />;
  }

  return (
    <View style={styles.card}>
      <View style={styles.subContainer}>
        <Image style={styles.cover} source={{uri: trackArtwork}} />
        <View>
          <Text style={styles.title}>{trackTitle}</Text>
          {playbackState === TrackPlayer.STATE_BUFFERING && (
            <Text style={styles.title}>Chargement...</Text>
          )}
        </View>
      </View>

      <PlayerControlBtn />
    </View>
  );
}

RadioPlayer.propTypes = {
  style: ViewPropTypes.style,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onTogglePlayback: PropTypes.func.isRequired,
};

RadioPlayer.defaultProps = {
  style: {},
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    elevation: 1,
    shadowRadius: 2,
    shadowOpacity: 0.1,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  cover: {
    width: 90,
    height: 90,
    backgroundColor: 'white',
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
});
