import type { Action, ActionOn, Computed } from 'easy-peasy';
import type { TrainingScenario } from './trainingScenario';
import type { TrainingStatistics } from './trainingStatistics';

export interface StatisticsStoreState {
  totalSavedTrainingStatistics: TrainingStatistics;
  totalSavedCharacterChordStats: Computed<StatisticsStore, TrainingStatistics>;
  totalSavedChordStats: Computed<StatisticsStore, TrainingStatistics>;
  fastestRecordedWordsPerMinute: Record<TrainingScenario, number>;
}

export interface StatisticsStoreActions {
  setTotalSavedTrainingStatistics: Action<StatisticsStore, TrainingStatistics>;
  clearAllStorage: Action<StatisticsStore>;
  setFastestRecordedWordsPerMinute: Action<
    StatisticsStore,
    Record<TrainingScenario, number>
  >;
  onChangeFastestWPM: ActionOn<StatisticsStore>;
  clearStatsForOneModule: Action<StatisticsStore, TrainingScenario>;
}

export type StatisticsStore = StatisticsStoreState & StatisticsStoreActions;
