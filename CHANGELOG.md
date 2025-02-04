# v3.1.2

## Get latest version of Wise Atoms icons

# v3.1.1

## Fix peerDependencies for pnpm users: angular is now optional

# v3.1.0

## Get the latst icons - BillSplit, EatingOut, Venmo, Interac, and the currency icons

# v3.0.8

## This console.warn is a mess! Now it only warns when the filled prop is there, not whenever there's a filled alternative

# v3.0.7

## Removes console.warn message link to wiki page

# v3.0.6

## Default icon size for react icons should be 16px, not 24px

# v3.0.5

## It probably wasn't the the string/number change. The whole size prop had been deleted from Angular icons

# v3.0.4

## Change size prop of icons to be a string again instead of a number. Will fix bug with Angular icons

# v3.0.3

## Release has been broken since we switched to Main. This should fix it

# v3.0.2

## Add backwards compatibility for FacebookSquare and SoftwareAndWebHosting icons

# v3.0.1

## Fixing build output

# v3.0.0

## feat!: adds our new brand refresh icons from wise-atoms

Here is the first release for the new brand refresh, this release includes a new change to our icon components which are not completely updated via our `wise-atoms` package.

- Icons are now by default set to a value of `24px` in size, and retains the ability to go to `16px`
- `filled` icons are now depricated, with the new brand refresh we have a smaller subset of filled icons to use. We have added a new key to show which components now have a filled variant
- Icon renames, many icons now follow a whole new naming convention. But don't worry we also have backwards compatabilty to allow the usage of our old names. You'll also be able to see in our docs page which icons have a `v2` version supported.

# v2.23.3

## Update ESLint, ESLint configs/rules, along with PostCSS

Fix some of new ESLint violations in code.

# v2.23.2

## Update React to v17, NextJs to v12 and update Babel packages

# v2.23.1

## Move yarn-deduplicate to scripts and update rollup-plugin-terser

# v2.23.0

## Update Team icon

# v2.22.0

## Add Slider icon

# v2.21.0

## New paperclip icon

# v2.20.0

## Generate default `data-testid` for each icon component based on icon name

Only for React set.

# v2.19.0

## New Paypal icon

# v2.18.0

## New calendar-success icon

# v2.17.0

## New auto-convert icon

# v2.16.0

## New Leaf icon

# v2.15.0

## New Delivery icon

# v2.14.0

## New Request receive icon

# v2.13.0

## New Email & Phone icon

# v2.12.0

## New Navigate Away icon

# v2.11.0

## New Shield icon

# v2.10.0

## New version of icon for Wise Card icon

New Icon usage

```js
// Angular
<tw-card-wise />

// React
<CardWise />
```

**Note:** Please use it it instead of old one

```js
// Angular
<tw-card-transferwise />

// React
<CardTransferwise />
```

# v2.9.0

## Add Business category icons

- `contract-services`
- `cost-of-goods-sold`
- `insurance`
- `marketing`
- `office-expenses`
- `owners-withdrawal`
- `rent`
- `sales-and-royalties`
- `software-and-web-hosting`
- `tax`
- `travel`

# v2.8.0

## Add Team icon

# v2.7.0

## Update Direct Debits icon

- Previous `direct-debits` icon is renamed to `calendar`.
- Adds new `direct-debits` icon.

# v2.6.0

## Updates payment method icons

Adds iDEAL, Trustly and FPX. Updates Klarna.

# v2.5.1

## Adds focusable="false" to SVGs

IE11 doesn't support tabindex for SVGs, as a result they appear in the focus order by default and keyboard users will tab into them, resulting in a disorienting experience. Adding this property fixes that.

See: https://www.scottohara.me/blog/2019/05/22/contextual-images-svgs-and-a11y.html

# v2.5.0

## Add filled version of pending-circle

# v2.4.2

## Folder restructure

- `icons/` -> `src/icons`
- `scripts/` -> `src/build-scripts`

# v2.4.1

## Migrate on `main` branch

# v2.4.0

## Add `data-testid` prop for React icon components

# v2.3.0

## Generic icon component for Angular set

Example:

```js
<tw-icon name="'bank'" size="24"></tw-icon>
```

# v2.2.0

## Use 16 size as default for angular icons components

# v2.1.0

## Use babel to transpile angular bundle

# v2.0.1

## Demo page for the icons

Check out the demo page here
https://transferwise.github.io/icons/

The demo page allows consumers to preview icons in different variants and the main TransferWise colors, find them by name and check out renamed ones.

# v2.0.0

## Icons v2 official release

# v2.0.0-beta.7

## Add a11y attributes

# v2.0.0-beta.6

## Add missing `tw-icon` class names to angular component templates

# v2.0.0-beta.5

## Add common `tw-icon` class name to angular component template

Add `tw-icon` class, that was missing from the template that is used to generate all the angularJS commponents.
Now each angularJS component will have the general class name and the scoped one: e.g. `tw-icon tw-icon-activity`

# v2.0.0-beta.4

## Add Activity Category icons

The fill color for the source icons were changed to `#00BAFF`, some paths were tweaked, and 16 new icons were added:

- `bills`
- `card-transferwise`
- `charity`
- `defrost`
- `eating-out`
- `entertainment`
- `expenses`
- `family`
- `general`
- `groceries`
- `holidays`
- `investments`
- `personal-care`
- `salary`
- `savings`
- `transport`

# v2.0.0-beta.3

## Fix angularJS component names

The `-icon` suffix was missing for each angular icon, when they were added to the `twIconsModule` angular module.
Now the module declaration includes the `Icon` suffix at the end

```js
.component("tw${icon.componentName}Icon", ${icon.componentName}IconComponent)
...
```

# v2.0.0-beta.2

## Add angularJS support

The library now distributes an AngularJS module for all the icons.
To use it in your angularJs app, just import the module

```js
import { TwIconsModule } from '@transferwise/icons/lib/angular';

angular.module('app', [TwIconsModule]);
```

and in your angularJs template use the icons

```html
<tw-activity-icon size="16" filled="true"></tw-activity-icon>
<tw-alert-circle-icon size="24"></tw-alert-circle-icon>
```

# v2.0.0-beta.1

## ICONS v2

The new TransferWise icon set
Changes:

- Replace old icons
- Update build process with custom scripts
- Add rollup to create UMD and ES bundles

# v1.5.0

## Adds `messenger` icon

# v1.4.0

## Adds `recurring` icon

# v1.3.0

## Adds `back` icon

# v1.2.0

## Adds `myinfo` icon

# v1.1.0

## Adds `copy` icon

# v1.0.0

## Increases weight of Close icon

Change weight of Close icon to match most common usage on all platforms. We're aware of the inconsistency it brings to the current set, it's an interim solution while we redesign all icons.

# v0.14.0

## Move dependencies to devDependencies

- When installing in a consumer, we were installing `phantomjs` as well, since `create-svg-icon-sprite` was depending on it. However this project has zero dependencies, everything can be a devDependency
- Adds `eslint-config`

# v0.13.2

## Fixes security issue

Bumps npm-run-all version which fixes security issue raised by flatmap-stream

# v0.13.1

## Fixes fast-flag causing error in React

Because of a `path` contained a `class` attribute which is forbidden in React.

# v0.13.0

## Adds `linkedin` icon

# v0.12.0

## Adds `instagram` icon

# v0.11.2

## Adds inline-block display to .tw-icon

As we're using a newer version of `create-svg-icon-sprite`,
the SVG itself does not have the property any more.

# v0.11.1

## Fixes react folder missing from NPM package

# v0.11.0

## Adds `pin` icon

# v0.10.0

## Adds exposing React modules for every icon

We now build a React module for every icon in the `icons` directory and place them in `react/` directory
using `create-svg-icon-sprite` release: https://github.com/transferwise/create-svg-icon-sprite/releases/tag/v1.2.1

The icons can be imported individually, allowing us to minimize our app sizes.

For example:

```js
...
import TransferIcon from '@transferwise/icons/react/transfer';

const YourComponent = () => (
  ...
  <TransferIcon size="sm" />
  ...
);
```

The `size` prop should be one of the sizes defined in `styles.css` (`sm`, `md`, `lg`, `xl`, or `xxl`),
which should also be imported for consistency.

The component also passes any other `className` and `style` values to the icon, so you can style them further,
for example for a large blue icon:

```js
<TransferIcon size="lg" className="text-info" />
```

# v0.9.0

## Adds `minus` icon

Adds `minus` icon, created from `top-up` (plus sign)

# v0.8.0

## Adds versioned deployment to AWS

The assets will be deployed to:

<https://daw291njkc3ao.cloudfront.net/icons/0.8.0/sprite.svg> (SVG sprite itself)
<https://daw291njkc3ao.cloudfront.net/icons/0.8.0/svg-icon-sprite.js> (sprite string script)
<https://daw291njkc3ao.cloudfront.net/icons/0.8.0/svg-icon-sprite-version.js> (sprite version script)
<https://daw291njkc3ao.cloudfront.net/icons/0.8.0/icons.min.css> (styles)

Where `0.8.0` is the version or `latest`.

# v0.7.0

## Adds controls for modifying icon sizes and color in demo

Change introduced here:
https://github.com/transferwise/create-svg-icon-sprite/releases/tag/v1.1.0

![image](https://user-images.githubusercontent.com/5443561/34956743-5f968d44-fa22-11e7-8ecb-82e8a6ad729e.png)

# v0.6.0

## Makes icons current color, aligns small icons with text

The `.tw-icon` will now by default be current color so it's easily changeable
by giving utility classes to parents, f.e. `.text-info` in Bootstrap.

The `.tw-icon-sm` now has a `-2px` margin to align it nicely with body text.

# v0.5.0

## Adds entry point for module-based environments, adds README, fixes `tw-icon-xl` and `tw-icon-xxl`

You can now

```js
import { iconSprite } from '@transferwise/icons';
```

Also, `.tw-icon-xl` is now `40px` and `.tw-icon-xxl` is now `48px`.

# v0.4.0

## Exposes SVG string as an UMD script

Change introduced here:
https://github.com/transferwise/create-svg-icon-sprite/releases/tag/v0.2.0

# v0.3.1

## Use separated `create-svg-icon-sprite` package

The https://github.com/transferwise/create-svg-icon-sprite package was separated
to simplify this repository for designers and to allow other people/companies to use the same process.

# v0.3.0

## Initial set of icons

- ach
- active-card
- activity
- add-profile
- alert-circle
- alert
- atm
- balance
- bank
- barcode
- batch
- bin
- book
- briefcase
- camera
- card-back
- card-front
- chat
- chip-pin
- close-circle
- close
- coins
- collapse
- comments
- contactless
- convert
- cs
- document
- documents
- down-arrow
- down
- download
- drivers-licence
- e-comm
- edit
- email
- emoji
- exchange-rate
- exchange
- expand
- eye-off
- eye-on
- facebook-2
- facebook
- fast-flag
- feedback
- fingerprint
- globe
- google
- graph
- help-circle
- help
- home
- id
- inactive-card
- invite
- klarna
- left-arrow
- left
- lightning
- link
- lock
- login
- logout
- menu
- mobile
- money
- multi-currency
- new
- notification-active
- notification
- passport
- pending-circle
- pending
- phone
- picture
- pips
- profile
- receipt
- receive
- recipients
- refresh
- remove-profile
- right-arrow
- right
- search
- send
- settings
- star
- tick-circle
- tick
- top-up
- transfer
- twitter
- two-step
- unlock
- up-arrow
- up
- upload
- verified
- whatsapp

# v0.2.1

## Fix build and edit demo style

Previously, any file (even `.DS_Store`, f.e.) resulted in an entry in the icons demo.
We now filter to `.svg` files only.

The demo also now has a blue period in the title, which, by the way, is now sentence-case.

# v0.2.0

## Initial release
