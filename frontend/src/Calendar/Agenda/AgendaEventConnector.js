import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import createEpisodeFileSelector from 'Store/Selectors/createEpisodeFileSelector';
import createSeriesSelector from 'Store/Selectors/createSeriesSelector';
import createQueueItemSelector from 'Store/Selectors/createQueueItemSelector';
import createUISettingsSelector from 'Store/Selectors/createUISettingsSelector';
import AgendaEvent from './AgendaEvent';

function createMapStateToProps() {
  return createSelector(
    (state) => state.calendar.options,
    createSeriesSelector(),
    createEpisodeFileSelector(),
    createQueueItemSelector(),
    createUISettingsSelector(),
    (calendarOptions, series, episodeFile, queueItem, uiSettings) => {
      return {
        series,
        episodeFile,
        queueItem,
        ...calendarOptions,
        timeFormat: uiSettings.timeFormat,
        longDateFormat: uiSettings.longDateFormat
      };
    }
  );
}

export default connect(createMapStateToProps)(AgendaEvent);