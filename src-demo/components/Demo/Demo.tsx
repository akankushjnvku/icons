import React, { FunctionComponent, useState } from 'react';
import { CirclePicker } from 'react-color';
import getConfig from 'next/config';
import * as iconComponents from '../../../build';
import iconsMetaData from '../../../build/icons.json';
import { IconPreview } from '../IconPreview/IconPreview';
import { generateBadges } from '../utils';

import styles from './Demo.module.css';
import { Legend } from '../Legend/Legend';

const { publicRuntimeConfig } = getConfig();
const TW_COLORS = ['#37517e', '#5d7079', '#0097c7'];

const ControlGroup = ({ label, children }) => {
  return (
    <div className={styles['control-group']}>
      <label className={styles['control-group-label']}>{label}</label>
      {children}
    </div>
  );
};

export const Demo: FunctionComponent = () => {
  const [color, setColor] = useState<string>(TW_COLORS[0]);
  const [size, setSize] = useState<number>(24);

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.h1}>
          Wise Icons
          <span className="dot">.</span>
        </h1>
        <div className={styles.subheader}>{publicRuntimeConfig.libVersion}</div>
      </div>
      <div className={styles.controls}>
      <ControlGroup label="Size">
          <div className="btn-group">
            <button
              type="button"
              className={`btn btn-default ${size === 16 ? 'active' : ''}`}
              onClick={() => setSize(16)}
            >
              16px
            </button>
            <button
              type="button"
              className={`btn btn-default ${size === 24 ? 'active' : ''}`}
              onClick={() => setSize(24)}
            >
              24px
            </button>
          </div>
        </ControlGroup>
        <ControlGroup label="Color">
          <CirclePicker color={color} colors={TW_COLORS} onChange={c => setColor(c.hex)} />
        </ControlGroup>
        <ControlGroup label="Number of icons">{Object.keys(iconsMetaData).length}</ControlGroup>
        <ControlGroup label="Legend">
          <Legend
            key={"legend"}
            items={[
              { color: '#00b9ff', label: 'has alternate filled icon'},
              { color: '#f53636', label: 'backwards compatibility from v2'},
            ]}
          />
        </ControlGroup>
      </div>

      <div className={styles['icons-container']}>
        {Object.keys(iconsMetaData).map(key => {
          const { componentName, name } = iconsMetaData[key];
          const Icon = iconComponents[componentName];
          const hasFilledVariant: boolean = Object.keys(iconsMetaData).includes(key + '-fill')
          
          const badges = generateBadges(hasFilledVariant, iconsMetaData[key].oldName);

          return (
            <IconPreview
              key={name}
              icon={<Icon size={size}/>}
              name={name}
              color={color}
              badges={badges}
            />
          );
        })}
      </div>
    </main>
  );
};
