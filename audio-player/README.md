# Audio Player

---

A crude Audio Player done for Creative Software interview

## 1. How to install & run

### 1.1 Using `yarn` *(version 1.21.1)*

1. Type `yarn` and hit `enter` in the command line, while inside the project directory (where the `package.json` resides), in order to install the required dependencies.
2. Copy the `.env` file where the `package.json` resides. This contains the entry to the directory of songs. In this case it is under `/public/songs/`. Please refer `The` *`.env`* `file` section.
3. To run in development mode type `yarn start`. Which will spin-up a `NodeJS` server as opposed to `yarn build` which will output static files and the browser will not honour CORS.

>> *`Note:`*
>>
>> *The reason not to build and run for this project at the moment is it is not hosted. And the app will seem to hang. To remedy this issue please look under section `Resolving the CORS issue`*

### 1.2 Using `npm`

1. Follow the same steps as above. Just replace the following commands

| yarn command | npm command   | description          |
| ------------ | ------------- | -------------------- |
| yarn         | npm i         | Install dependencies |
| yarn start   | npm start     | Run in dev mode      |
| yarn build   | npm run build | Build the file       |

>> *`Note:`*
>>
>> Recently, we have found *`npm i doesn't install dev dependencies`*. Not sure if this is a bug. Use `npm i --only=dev` if this happens. This project doesn't use any dev dependencies.

## 2. The `.env` file

The .env file contains the path the to song directory. In the case of an actual api and streaming service this will point to that service.

>> `REACT_APP_MUSIC_DIRECTORY=/songs`

## 3. Resolving the CORS issue

### 3.1 In development mode

1. Simply run `yarn start`, this spins up a NodeJS server and is automatically hosted. 
2. If the data source is on another domain set the property `proxy` on the `package.json`

### 3.2 In build/deployment mode `(yarn build)`

1. Best solution is to host the static files in a server (Recommended).
2. Or if the source is pointing to another domain, ensure the server honours CORS (Recommended)
3. Another simple work around is to and the following command line flag to a chrome shortcut `.../chrome.exe --args --disable-web-security --user-data-dir` (Not recommended).

## 4. What is not done

* Heavy error handling, including CORS
* Audio buffering and preloading
* Writing an actual API call using promises
* Proper styling
* Stop button was not implemented `(didn't have an icon)` and audio only has play/pause. Which means stop is in actuality a pause.
