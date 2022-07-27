/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable fp/no-mutation */
import { createIconComponentName, writeFile, Icon } from './index';

const OLD_ICON_NAMES_MAP = {
  // old: new
  alert: 'warning',
  ach: 'bank-transfer',
  'office-expenses': 'stationary',
  chat: 'speech-bubble',
  holidays: 'beach',
  cs: 'headset',
  family: 'heart',
  settings: 'cog',
  lightning: 'lightning-bolt',
  atm: 'insert-card',
  'sales-and-royalties': 'cash-register',
  savings: 'piggy-bank',
  tax: 'percentage-circle',
  recipients: 'people',
  marketing: 'target',
  'drivers-license': 'car',
  'pin-code': 'dial',
  rent: 'building',
  unlock: 'padlock-unlocked',
  lock: 'padlock',
  'card-number': 'card-detail',
  invite: 'gift-box',
  dont: 'sad-emoji',
  'card-transferwise': 'card-wise',
  'chip-pin': 'chip',
  profile: 'person',
  home: 'house',
  'pending-circle': 'clock',
  activity: 'list',
  'exchange-rate': 'upward-graph',
  'contract-services': 'handshake',
  travel: 'suitcase',
  'two-step': 'mobile-lock',
  'email-and-phone': 'email-and-mobile',
  insights: 'bulb',
  salary: 'pay-in',
  picture: 'image',
  'e-commerce': 'shopping-bag',
  feedback: 'speech-bubble-message',
  refresh: 'reload',
  'cost-of-goods-sold': 'boxes',
  expenses: 'pie-chart',
  pending: 'speech-bubble-pending',
  help: 'question-mark',
  'help-circle': 'question-mark-circle',
  'calendar-success': 'calendar-check',
  comments: 'speech-bubbles',
  'owners-withdrawal': 'withdrawal',
  do: 'happy-emoji',
  emoji: 'happy-emoji',
  balance: 'bar-chart',
  investments: 'bar-chart',
  verified: 'check',
  'facebook-square': 'facebook',
  'software-and-web-hosting': 'software-and-hosting',
};

export interface IconsMap {
  [key: string]: Icon;
}

export const createIconsMap = (paths: string[]): IconsMap => {
  const icons: IconsMap = {};

  paths.forEach((path) => {
    // TODO: validate icon name and meta data (svg file name) to follow convention
    const pathFragments = path.split('/');
    const filename = pathFragments[3];
    const name = filename.substring(0, filename.indexOf('.'));

    if (!icons[name]) {
      icons[name] = {
        name,
        componentName: createIconComponentName(name),
        svgFiles: { [name]: path },
      };

      if (Object.values(OLD_ICON_NAMES_MAP).includes(name)) {
        const newName = name;
        // some new icons have multiple old icons that map to them
        const oldNames = Object.keys(OLD_ICON_NAMES_MAP).filter(
          (key) => OLD_ICON_NAMES_MAP[key] === newName,
        );

        for (const oldName of oldNames) {
          if (!icons[oldName]) {
            icons[oldName] = {
              name: oldName,
              oldName: oldName,
              componentName: createIconComponentName(oldName),
              svgFiles: {
                [oldName]: `node_modules/wise-atoms/icons/${newName}.svg`,
              },
            };
          }
        }
      }
    }
  });

  writeFile('./build/icons.json', JSON.stringify(icons, null, 2));

  return icons;
};
