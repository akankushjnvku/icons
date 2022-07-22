/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable fp/no-mutation */
import { createIconComponentName, writeFile, Icon } from './index';

const OLD_ICON_NAMES_MAP = {
  // new: old
  warning: 'alert',
  'bank-transfer': 'ach',
  stationary: 'office-expenses',
  'speech-bubble': 'chat',
  beach: 'holidays',
  headset: 'cs',
  heart: 'family',
  cog: 'settings',
  'happy-emoji': 'emoji',
  'lightning-bolt': 'lightning',
  'insert-card': 'atm',
  'cash-register': 'sales-and-royalties',
  'piggy-bank': 'savings',
  'percentage-circle': 'tax',
  people: 'recipients',
  target: 'marketing',
  car: 'drivers-licence',
  dial: 'pin-code',
  building: 'rent',
  'padlock-unlocked': 'unlock',
  padlock: 'lock',
  'card-detail': 'card-number',
  'gift-box': 'invite',
  'sad-emoji': 'dont',
  'card-wise': 'card-transferwise',
  chip: 'chip-pin',
  person: 'profile',
  house: 'home',
  clock: 'pending-circle',
  list: 'activity',
  'upward-graph': 'exchange-rate',
  handshake: 'contract-services',
  suitcase: 'travel',
  'mobile-lock': 'two-step',
  'email-and-mobile': 'email-and-phone',
  bulb: 'insights',
  'pay-in': 'salary',
  image: 'picture',
  'shopping-bag': 'e-commerce',
  'speech-bubble-message': 'feedback',
  reload: 'refresh',
  boxes: 'cost-of-goods-sold',
  'pie-chart': 'expenses',
  'speech-bubble-pending': 'pending',
  'bar-chart': 'balance',
  'question-mark': 'help',
  'question-mark-circle': 'help-circle',
  'calendar-check': 'successful-schedule',
  'speech-bubbles': 'comments',
  withdrawal: 'owners-withdrawal',
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
