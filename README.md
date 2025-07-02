# BidX Mobile App (ios, android)

## Overview

This is the Mobile Application for BidX.

## Requirements

- Locally installed [Node v18.x (LTS)](https://nodejs.org/en/download/)
- Locally installed [Android Studio - develop for android](https://developer.android.com/studio/index.html)
- Locally installed [Xcode - develop for iOS](https://developer.apple.com/xcode/)
- Locally installed [VS Code](https://code.visualstudio.com/download) 
   * Plugins: `ES7+ React snippets`, `React Native Tools`, `Expo Tools`

## Setup
1. Execute the command `npm ci`
2. Execute teh command `npx expo prebuild --clean` to generate native project directories.
3. Execute the command `npx expo-doctor`
4. Validate no actions or errors are shown.

## Running
To load and run this project you must execute `npx expo run:ios` or `npx expo run:android`

## Deploying with Expo
1. You must have installed `eas-cli`:
   1. Execute `npm install -g eas-cli`
   2. Log in to EAS with: `eas login` (Credentials on 1Password)

## Must Know
- Debugging with JS Debugger
  * In your terminal: type `j` to open debugger
  * JS Dev Tools debugger will automatically be open.
  * Browse to necessary files or manual breakpoints (`debugger`).
- Debugging with VS Code ( **alternative** )
  * Connect your app.
  * Open VS Code command palette (`Cmd ⌘ + Shift + P`)
  * Run the `Expo: Debug ...` command.
- Launch iOS or Android Device
  * Open VS Code command palette (`Cmd ⌘ + Shift + P`)
  * Run the `Launch ...` command.
- Open Expo Management Popup Emulator
  * Android: Shake your device or press `Cmd ⌘ + M`
  * iOS: Shake your device or press `Cmd ⌘ + D`
  * Terminal: Press `M`
- Manually Reload in Emulator
  * Android: Press `R` twice (RR).
  * iOS: Press `Cmd ⌘ + R` or `R`
- Switch between Light/Dark theme
  * Android: Press `Cmd ⌘ + ,`
  * iOS: Press `Cmd ⌘ + Shift + A`
