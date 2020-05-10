// Copyright (c) 2017 PlanGrid, Inc.

import React from 'react';
import 'styles/unsupported.scss';

const UnsupportedViewer = props => (
  <div className="pg-driver-view">
    <div className="unsupported-message">
      {props.unsupportedComponent
        ? <props.unsupportedComponent {...props} />
        : <p className="alert"><b>{`.${props.fileType}`}</b>の形式のファイルはサポートされていません。.</p>}
    </div>
  </div>
);

export default UnsupportedViewer;
