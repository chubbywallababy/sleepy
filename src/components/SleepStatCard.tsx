import React from 'react';
import {View} from 'react-native';
import {SleepText, SleepView} from './common';
import {StyleSheet} from 'react-native';
import {DottedLine, ProgressBar} from './ProgressBar';
import {strings} from '../i18n';

interface SleepStatCardProps {
  /** Title displayed at the top of the card */
  title: string;
  /** Subtitle displayed below the title */
  subtitle: string;
  /** Current value for the sleep stat (e.g., "8h 49m")  */
  data: number | string;
  /** Object defining minimum and maximum values for the goal range */
  goalRange: {min: number; max: number};
  /** Object defining minimum and maximum values for the data visualization line */
  lineRange: {min: number; max: number};
  /** Array of strings representing labels for the data visualization line */
  labels: string[];
  /** The current number of the stat */
  statValue: number;
}

/**
 * Shows specific data points with a line chart underneath
 */
export const SleepStatCard = ({
  title,
  subtitle,
  data,
  goalRange,
  lineRange,
  labels,
  statValue,
}: SleepStatCardProps) => {
  return (
    <SleepView style={styles.cardContainer}>
      <View style={styles.dataRow}>
        <SleepText style={styles.cardTitle}>{title}</SleepText>
      </View>
      <View style={styles.dataRow}>
        <SleepText style={styles.cardSubtitle}>{subtitle}</SleepText>
        <SleepText style={styles.cardData}>{data}</SleepText>
      </View>
      <View style={styles.progressLineContainer}>
        <GoalRange
          minValue={goalRange.min}
          maxValue={goalRange.max}
          lineRangeMin={lineRange.min}
          lineRangeMax={lineRange.max}
        />
        <ProgressBar
          toValue={
            (statValue - lineRange.min) / (lineRange.max - lineRange.min)
          }
        />
        <View style={styles.labelsContainer}>
          {labels.map((label, index) => (
            <SleepText key={index} style={styles.label}>
              {label}
            </SleepText>
          ))}
        </View>
      </View>
    </SleepView>
  );
};

interface GoalRangeProps {
  minValue: number;
  maxValue: number;
  lineRangeMin: number;
  lineRangeMax: number;
}

const GoalRange = ({
  minValue,
  maxValue,
  lineRangeMin,
  lineRangeMax,
}: GoalRangeProps) => {
  // Calculate the position of the goal range on the progress line
  const leftPosition =
    ((minValue - lineRangeMin) / (lineRangeMax - lineRangeMin)) * 100;
  const width = ((maxValue - minValue) / (lineRangeMax - lineRangeMin)) * 100;

  return (
    <View
      style={[
        styles.goalContainer,
        {left: `${leftPosition}%`, width: `${width}%`},
      ]}>
      <DottedLine
        numDots={5}
        dir="vertical"
        containerStyle={styles.leftGoalPost}
      />
      <SleepText style={styles.goalText}>{strings.details.card.goal}</SleepText>
      <DottedLine
        numDots={5}
        dir="vertical"
        containerStyle={styles.rightGoalPost}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    borderRadius: 8,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    height: 184,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
  },
  cardSubtitle: {
    fontSize: 14,
    marginBottom: 8,
  },
  cardData: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  progressLineContainer: {
    paddingTop: 50,
    alignItems: 'center',
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    width: '100%',
  },
  label: {
    fontSize: 10,
  },
  dotContainer: {
    height: 30,
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  goalContainer: {
    position: 'absolute',
    top: 20,
    justifyContent: 'space-between',
    height: '100%',
  },
  goalText: {
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%',
    top: 3,
  },
  minMaxText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black', // Adjust color as needed
  },
  rightGoalPost: {height: 20, right: 0, position: 'absolute'},
  leftGoalPost: {height: 20, left: 0, position: 'absolute'},
});
