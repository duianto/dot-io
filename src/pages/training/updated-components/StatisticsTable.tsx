import React, { ReactElement } from 'react';
import { FixedSizeList } from 'react-window';
import type { ChordStatistics } from '../../../models/trainingStatistics';
import styled from 'styled-components';
import { useStoreState } from '../../../store/store';
import useContainerDimensions from '../../../hooks/useContainerDimensions';
import { getCumulativeAverageChordTypeTime } from '../../../helpers/aggregation';
import { useHUD } from '../../../hooks/useHUD';

// This is used to account for the header row as well as the "aggregate" row that shows average speed and
// a sum of errors and occurrences
const LIST_LENGTH_OFFSET = 2;

function StatisticsTable(): ReactElement {
  const stats = useStoreState(
    (state) => state.trainingStatistics,
  ).statistics.sort((a, b) => b.averageSpeed - a.averageSpeed);
  const trainingSettings = useStoreState((store) => store.trainingSettings);

  const [ref, dimensions] = useContainerDimensions<HTMLDivElement>();

  const shouldDisplayHUD = useHUD();

  return (
    <TableContainer ref={ref}>
      <FixedSizeList
        height={dimensions.height || 0}
        itemCount={stats.length + LIST_LENGTH_OFFSET}
        itemSize={36}
        width={300}
        itemData={{
          stats,
          targetChords: trainingSettings.targetChords,
          isRecursionEnabled: trainingSettings.autoOrCustom === 'AUTO',
          displayHUD: shouldDisplayHUD,
        }}
        style={{ borderRadius: 16 }}
      >
        {Row}
      </FixedSizeList>
    </TableContainer>
  );
}

interface Data {
  stats: ChordStatistics[];
  targetChords: number;
  isRecursionEnabled: boolean;
  displayHUD: boolean;
}

interface RowData {
  index: number;
  style: React.CSSProperties;
  data: Data;
}

type StatRowStyle = 'NORMAL' | 'TARGET_CHORD_ACTIVE' | 'TARGET_CHORD_INACTIVE';

const getStyle = (
  targetChords: number,
  isRecursionEnabled: boolean,
  index: number,
): StatRowStyle => {
  if (index < targetChords) {
    if (isRecursionEnabled) return 'TARGET_CHORD_ACTIVE';
    return 'TARGET_CHORD_INACTIVE';
  }
  return 'NORMAL';
};

const Row = ({ index, style, data }: RowData) => {
  // Minus one to account for title row
  const item = data?.stats?.[index - LIST_LENGTH_OFFSET];
  if (index === 0) return Header;
  else if (index === 1) return <AggregateRow data={data} />;

  const headerStyle = getStyle(
    data.targetChords,
    data.isRecursionEnabled,
    index - LIST_LENGTH_OFFSET,
  );

  return (
    <div style={style}>
      <NewStatisticsRow headerStyle={headerStyle}>
        <RowItem>{item?.displayTitle}</RowItem>
        <RowItem>{item?.averageSpeed.toFixed()}</RowItem>
        <RowItem>{item?.numberOfErrors}</RowItem>
        <RowItem>{item?.numberOfOccurrences}</RowItem>
      </NewStatisticsRow>
    </div>
  );
};

const HeaderRow = styled.div.attrs({
  className: `bg-[#2c2c2c] px-4 py-2 text-left text-xs text-gray-50 uppercase tracking-wider font-bold rounded-tr-lg flex flex-row justify-between align-center h-[36px]`,
})``;

const AggregateStatRow = styled.div.attrs({
  className: `bg-[#262626] text-gray-300 flex flex-row w-full text-white h-[36px] bg-[#222] items-center`,
})``;

const HeaderItem = styled.span.attrs({
  className: ``,
})``;

const Header = (
  <HeaderRow>
    <HeaderItem>Chord</HeaderItem>
    <HeaderItem>Speed</HeaderItem>
    <HeaderItem>Errors</HeaderItem>
    <HeaderItem>Times</HeaderItem>
  </HeaderRow>
);

const AggregateRow = ({ data }: { data: Data }) => {
  const average = getCumulativeAverageChordTypeTime(data.stats);
  let sumErrors = 0;
  let sumOccurrences = 0;
  data.stats.forEach((d) => {
    sumErrors += d.numberOfErrors;
    sumOccurrences += d.numberOfOccurrences;
  });

  return (
    <AggregateStatRow>
      <RowStatItem>SUM</RowStatItem>
      <RowStatItem>{data.displayHUD ? average : ''}</RowStatItem>
      <RowStatItem>{sumErrors}</RowStatItem>
      <RowStatItem>{data.displayHUD ? sumOccurrences : ''}</RowStatItem>
    </AggregateStatRow>
  );
};

const NewStatisticsRow = styled.div.attrs<{ headerStyle: StatRowStyle }>(
  (props) => ({
    className: `text-gray-300 flex flex-row w-full text-white h-[36px] bg-[#222] ${
      props.headerStyle === 'TARGET_CHORD_ACTIVE'
        ? 'bg-yellow-400 text-black font-bold'
        : props.headerStyle === 'TARGET_CHORD_INACTIVE'
        ? 'bg-[#aaa] text-black font-bold'
        : ''
    }`,
  }),
)<{ headerStyle: StatRowStyle }>``;

const RowItem = styled.div.attrs({
  className: `px-3 2xl:px-6 py-2 whitespace-nowrap text-sm w-1/4`,
})``;

const RowStatItem = styled.div.attrs({
  className: `px-3 2xl:px-6 whitespace-nowrap text-sm w-1/4 font-semibold`,
})``;

const TableContainer = styled.div.attrs({
  className: `h-full w-full flex flex-col items-end rounded-lg`,
})``;

export default StatisticsTable;
