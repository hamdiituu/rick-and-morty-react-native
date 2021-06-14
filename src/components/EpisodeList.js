import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {EpisodeCard} from './_core';
import {EpisodeListPlaceHolder} from './_placeholder';
const EpisodeList = ({onPress, episodesData = null}) => {
  if (episodesData) {
    return (
      <View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Episodes</Text>
          <Text style={styles.countText}>*{episodesData.info.count}</Text>
        </View>
        {episodesData.results.map(episode => (
          <EpisodeCard
            characters={episode.characters}
            key={episode.id}
            title={episode.name}
            air_date={episode.air_date}
            episode={episode.episode}
            onPress={() => onPress(episode.id, episode.episode)}
          />
        ))}
      </View>
    );
  } else {
    return <EpisodeListPlaceHolder />;
  }
};

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    height: 25,
  },
  titleText: {
    fontSize: 25,
    height: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  countText: {
    fontSize: 15,
    fontWeight: '300',
    textTransform: 'uppercase',
    marginLeft: 10,
    color: 'gray',
  },
});

export default EpisodeList;
