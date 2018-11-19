import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EntryIndex from '../components/EntryIndex';
import {
  fetchEntries,
  invalidateEntries,
  updateEntry
} from '../actions/entries';
import { fetchTrendingTags } from '../actions/trending-tags';
import {
  changeTheme,
  changeListStyle,
  changeCurrency,
  changeLocale,
  changePushNotify,
  changeServer
} from '../actions/global';

import { addAccount, addAccountSc, deleteAccount } from '../actions/accounts';

import { logIn, logOut, updateActiveAccount } from '../actions/active-account';

import { setVisitingAccount } from '../actions/visiting-account';

import {setVisitingEntry} from '../actions/visiting-entry';

import { fetchSearchResults, invalidateSearchResults } from '../actions/search-results';

const mapStateToProps = state => ({
  global: state.global,
  entries: state.entries,
  trendingTags: state.trendingTags,
  accounts: state.accounts,
  activeAccount: state.activeAccount,
  dynamicProps: state.dynamicProps
});

const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators(
      { fetchEntries, invalidateEntries, updateEntry },
      dispatch
    ),
    ...bindActionCreators({ fetchTrendingTags }, dispatch),
    ...bindActionCreators(
      {
        changeTheme,
        changeListStyle,
        changeCurrency,
        changeLocale,
        changePushNotify,
        changeServer
      },
      dispatch
    ),
    ...bindActionCreators(
      {
        addAccount,
        addAccountSc,
        deleteAccount
      },
      dispatch
    ),
    ...bindActionCreators({ logIn, logOut, updateActiveAccount }, dispatch),
    ...bindActionCreators({ setVisitingAccount }, dispatch),
    ...bindActionCreators({ setVisitingEntry }, dispatch),
    ...bindActionCreators({ fetchSearchResults, invalidateSearchResults }, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntryIndex);
