
# ImCraving :hamburger::broccoli:
for Inversity's September challenge.
### ‘Burgers to broccoli? How can technology help us eat healthier and live longer?’: my take on tackling Britain's obesity crisis- one meal at a time.
Over 2/3 of the UK population are overweight, and this problem needs to be addressed. Fast food has swarmed British people's lives by storm with convenience, affordability, and addictiveness, leading to dependency on calorically dense food compromising our country's life expectancy and allowing avoidable heart disease to reign as one of Britain's leading cause of death. ImCraving hopes to shift the public's perception of healthy eating by allowing a bridge between the black and white extremeties of what's seen as healthy to eat: it isn't explicitly just burgers or broccoli. By making healthier choices while still enjoying the food we love most, ImCraving aims to educate the user and provide a solution which is both accessible and tailored to their specific needs/preferences.

See the full market survey results [here](https://docs.google.com/spreadsheets/d/1ZG_l-vpDHmTrJYeNbgH7TSC1VCw-M1hwE5jGpB1ME24/edit)

HUGE thank you to [@DwifteJB](https://github.com/DwifteJB) for help regarding the app and getting everything working.



# Getting the app running (React Native)

  

>  **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

  

## Step 1: Start the Metro Server

  

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

  

To start Metro, run the following command from the _root_ of your React Native project:

  

```bash

# using npm

npm  start

  

# OR using Yarn

yarn  start

```

  

## Step 2: Start your Application

  

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

  

### For Android

  

```bash

# using npm

npm  run  android

  

# OR using Yarn

yarn  android

```

  

### For iOS

  

```bash

# using npm

npm  run  ios

  

# OR using Yarn

yarn  ios

```

  

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

  

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

  

## Step 3: Modifying your App

  

Now that you have successfully run the app, let's modify it.

  

1. Open `App.tsx` in your text editor of choice and edit some lines.

2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

  

For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

  

## Congratulations! :tada:

  

You've successfully run and modified your React Native App. :partying_face:

