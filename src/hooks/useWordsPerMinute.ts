import { useStoreState, useStoreActions } from '../store/store';

export const useWordsPerMinute = (): number => {
  const timeAtTrainingStart = useStoreState(
    (store) => store.timeAtTrainingStart,
  );
  const trainingSettings = useStoreState((store) => store.trainingSettings);
  const fastestRecordedWPM = useStoreState(
    (store) => store.fastestRecordedWordsPerMinute,
  );
  const setFastestWPM = useStoreActions(
    (store) => store.setFastestRecordedWordsPerMinute,
  );
 

  let totalNumberOfCharactersTyped = 0;

  
  const timeAtTrainingStartInSeconds = timeAtTrainingStart * 0.001;
  
  
  const timeNowInSeconds = performance.now() * 0.001;
  const timeDifferenceInSeconds =
    timeNowInSeconds - timeAtTrainingStartInSeconds;
    //console.log(timeNowInSeconds);
    //console.log(timeAtTrainingStartInSeconds);
  const timeDifferenceInMinutes = timeDifferenceInSeconds / 60;
  const trainingStatistics = useStoreState((store) => store.trainingStatistics);
  
  trainingStatistics.statistics.forEach((stat) => {
    const charactersTyped = stat.displayTitle.length * stat.numberOfOccurrences;
    totalNumberOfCharactersTyped += charactersTyped;
  });


  


  // According to Riley, the equation for WPM is equal to (characters per minute typed correctly / 5)
  // I believe the constant 5 is chosen to represent average word length
  const charactersTypedCorrectly = totalNumberOfCharactersTyped;
  const charactersTypedCorrectlyPerMinute =
    charactersTypedCorrectly / timeDifferenceInMinutes;
  //const wpm = charactersTypedCorrectlyPerMinute / 5;
  const wpm = ((totalNumberOfCharactersTyped/5)/timeDifferenceInMinutes);


  const trainingScenario = useStoreState(
    (store) => store.currentTrainingScenario,
  );

  if (trainingSettings.isAutoWrite) {
    if (typeof trainingScenario === 'string') {
      if (wpm > fastestRecordedWPM[trainingScenario]) {
        setFastestWPM({
          ...fastestRecordedWPM,
          [trainingScenario]: wpm,
        });
      }
    }
  }

  
  return wpm;


};
