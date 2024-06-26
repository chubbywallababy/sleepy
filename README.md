# Requirements

- [x] The application must compile and run on Android and iOS without error. This includes switching between family members and viewing sleep data.
- [x] No mock data is statically defined in the project.
- [x] Uses React Native and Typescript.
- [x] Build a “family mode” mobile app that presents this underlying sleep data for three fictitious family members.
- [x] The app should enable the viewer to see each individual they’re monitoring.
- [x] Upon tapping on one of the individuals, the app should display the sleep data of the selected person in a meaningful way

# Versions

- XCode
  - 15.0.1
- npm
  - 10.2.4
- node
  - v20.11.0
- react
  - 18.2.0
- react-native
  - 0.74.1

# Docs

In the `docs` folder can be found the following markdown documents:

- PotentialQuestions
  - Assumptions tracked which were made during the coding process and the logic behind the assumption.
  - Potential questions that might be good for an interview.
- Tasks
  - A list of what items were done for the project and in what order. Kind of a changelog.
- Prioritization
  - An ordered list of what was prioritized as this assignment was being completed.

# Setup

1. Install node modules
2. iOS setup

- `cd ios` && `pod install`
- You might have to set up a signing team in XCode
- If you have to open the project, heads up that the project was originally called `sleepy` -> ./ios/sleepy.xcworkspace (When I tested with a fresh clone, it wouldn't run from the terminal via `npm run ios` but starts up fine when ran from XCode)

# Testing

Tests and coverage are set up on the repo. Here's the current output of `npm run coverage`

```
--------------------------------------------|---------|----------|---------|---------
File                                        | % Stmts | % Branch | % Funcs | % Lines
--------------------------------------------|---------|----------|---------|---------
All files                                   |   72.26 |    46.35 |   68.06 |   72.08
```

# Screenshots

## Heads up

- There's a few different touch interactions available for the graphs.
- I ran it on an iPad mini and it looks fine, but the app hasn't been optimized for larger views yet.
- Devices tested were:
  - iOS: iPhone SE 3rd gen (17.0)
  - Android: Pixel 4 XL (API 33)
  - Physical devices not yet tested

## iOS

<img width="352" alt="Screenshot 2024-05-13 at 6 57 54 PM" src="https://github.com/chubbywallababy/sleepy/assets/168478087/e27b59c4-eb39-4398-8ce0-7e5a69fa30bd">
<img width="351" alt="Screenshot 2024-05-13 at 6 58 05 PM" src="https://github.com/chubbywallababy/sleepy/assets/168478087/c58ae5b3-9111-4094-98ef-88fe9610ba6d">
<img width="336" alt="Screenshot 2024-05-13 at 6 58 14 PM" src="https://github.com/chubbywallababy/sleepy/assets/168478087/261f4f5b-dbf6-48e6-a999-163ccca96717">
<img width="310" alt="Screenshot 2024-05-14 at 11 26 22 AM" src="https://github.com/chubbywallababy/EightSleepDemo/assets/168478087/4d12ebbe-1a48-4810-91f2-b5e67b794806">
<img width="354" alt="Screenshot 2024-05-14 at 11 26 48 AM" src="https://github.com/chubbywallababy/EightSleepDemo/assets/168478087/a767eb77-b598-4908-a564-7f166e0a1c27">
<img width="355" alt="Screenshot 2024-05-14 at 11 27 01 AM" src="https://github.com/chubbywallababy/EightSleepDemo/assets/168478087/dc2a5374-2c1a-4b0c-b6df-97eae13a67c4">

## Android

<img width="277" alt="Screenshot 2024-05-13 at 6 57 04 PM" src="https://github.com/chubbywallababy/sleepy/assets/168478087/42617f3c-e096-4eca-bca1-7ebceac05c70">
<img width="275" alt="Screenshot 2024-05-13 at 6 57 18 PM" src="https://github.com/chubbywallababy/sleepy/assets/168478087/60eb970a-54f3-4263-87a1-8d9e508ffb17">
<img width="280" alt="Screenshot 2024-05-13 at 6 57 27 PM" src="https://github.com/chubbywallababy/sleepy/assets/168478087/601387ef-7cc4-4141-9dee-6580539d7ac9">
<img width="284" alt="Screenshot 2024-05-14 at 11 24 58 AM" src="https://github.com/chubbywallababy/EightSleepDemo/assets/168478087/bffe86ee-9019-48d5-a57d-f9b971a3f4d8">
<img width="325" alt="Screenshot 2024-05-14 at 11 25 28 AM" src="https://github.com/chubbywallababy/EightSleepDemo/assets/168478087/cbad119b-ba91-4e19-b665-29e9d1793dcb">

# Post development thoughts

- After developing, I've realized the detail view would be a good first draft for weekly analysis, but it's hard to see any "big picture" data. For instance, if I wanted to see my progress per week, this would not be an optimal view.
- It would be nice to add the amount of time (in hours and minutes) with the sleep stage pie graph
