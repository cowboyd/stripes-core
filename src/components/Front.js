import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import { FormattedMessage } from 'react-intl';

// TODO: release version of @folio/stripes-components has a broken index.js
// TODO: so just reach in and grab it from lib.
// TODO: see https://github.com/folio-org/stripes-components/pull/39
// import { Pluggable } from '@folio/stripes-components';
import Pluggable from '@folio/stripes-components/lib/Pluggable';

import AddContext from '../AddContext';

const Front = ({ stripes }) => (
  <AddContext context={{ stripes }}>
    <Pluggable type="frontpage">
      <div>
        <h3><FormattedMessage id="stripes-core.front.welcome" /></h3>
        <p><Link to="/about"><FormattedMessage id="stripes-core.front.about" /></Link></p>
      </div>
    </Pluggable>
  </AddContext>
);

Front.propTypes = {
  stripes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Front;
