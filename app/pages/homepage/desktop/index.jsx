import React from 'react';
import './index.scss';

const HomePage = () => (
  <div className='c-home-page'>
    <div className='c-home-page--wrapper u-text-font--mb'>
    <div className='u-m-t--45'><span className='u-text--alpha u-text-cyan u-text--bold u-text-font--xmb'>UHW</span></div>
    <div className='h-flex u-m-t--45 u-flex--center'>
      <div className='c-home-header'>
        <h1 className='u-text-font--xmb u-text--supreme c-home-header--gradient u-lh--1'>Medical Records on Blockchain</h1>
        <span className='u-text-font--mb u-border-radius--8 u-text-magenta u-text--gamma u-p-v--8 u-p-h--35 c-border-mag u-cursor--pointer'>Connect Wallet</span>
      </div>
      <img width="386px" src='/static/images/doctor.png' />
    </div>
    <img className='c-home-fluid' src="/static/images/liquid.png" />
    </div>
  </div>
);

export default HomePage;
