import React, { Component } from 'react';
import styles from '../styles/common.module.scss';
import CardContainer from '../../../components/card-container/card-container';
import StorageService from '../../../services/storage/storage.service';
import { STORAGE_ENGINES } from '../../../utils/constants';

class ExampleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.storage = new StorageService(STORAGE_ENGINES.REDUX);
  }

  render() {
    return (
      <CardContainer>
        <p className={styles['container__heading']}>
          {' '}
          This is example Container{' '}
        </p>
      </CardContainer>
    );
  }
}

export default ExampleContainer;
