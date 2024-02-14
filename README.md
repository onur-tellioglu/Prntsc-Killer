# Prnt.sc Killer

Prnt.sc Killer is a specialized Node.js application designed to scrape and download images from prnt.sc (Lightshot). It allows users to set start codes and customize various download preferences, providing an efficient and user-friendly experience. The application also features a graphical UI for those who prefer it over command-line interfaces.

## Table of Contents

1. [Prnt.sc Killer](#prntsc-killer)
2. [🌟 Features](#-features)
3. [🛠 Installation and Setup](#-installation-and-setup)
   - [1. Install Node.js](#1-install-nodejs)
   - [2. Clone the Repository](#2-clone-the-repository)
   - [3. Install Dependencies](#3-install-dependencies)
   - [4. Run the Application](#4-run-the-application)
   - [5. Obfuscation and Building](#5-obfuscation-and-building)
4. [🖱 Usage](#-usage)
5. [🚨 Disclaimer](#-disclaimer)
6. [🤝 Contributing](#-contributing)
7. [🙏 Credits](#-credits)
8. [📜 License](#-license)
9. [☕ Buy Me a Coffee](#-buy-me-a-coffee)

## 🌟 Features

- **User-Friendly Interface:** Graphical user interface for ease of use and accessibility.
- **Bulk Download:** Efficiently download multiple images in bulk.
- **Duplicate Handling:** Intelligent handling and removal of duplicate images.
- **Pause/Resume Functionality:** Easily pause and resume download processes.
- **Customizable Paths:** Set your preferred download path and output folder name for each download process separately.
- **Dark Mode:** An eye-friendly dark mode for extended usage sessions and night-time use.
- **Real-Time Updates:** The UI displays the most recently downloaded image in real-time.

## 🛠 Installation and Setup

### 1. Install Node.js

If not already installed, download and install Node.js from [Node.js Official Site](https://nodejs.org/en/download/).

### 2. Clone the Repository

```bash
git clone https://github.com/onur-tellioglu/Prntsc-Killer.git
```

### 3. Install Dependencies

Navigate to the project directory and run:

```bash
npm install
```

### 4. Run the Application

You can run the application using the following command:
Or, you can basically use "run.vbs".

```bash
npm start
```

### 5. Obfuscation and Building

When a build command is run, the code is obfuscated and then packaged for the specified platform. The following commands are available for building the application.

#### For Windows:

```bash
npm run dist-win
```

#### For Linux:

```bash
npm run dist-linux
```

#### For MacOS:

```bash
npm run dist-mac
```

These commands will obfuscate the code and then package the application for the specified platform.

## 🖱 Usage

1. Enter the desired start code in the "Start Code" field. The start code is the 6-character code at the end of the URL of the image you want to start downloading from. For example, if the URL is `https://prnt.sc/abcdef`, the start code is `abcdef`.
2. Specify the number of images you want to fetch in the "Count" field.
3. Define the output path where the downloaded images will be stored.
4. Click the "Start" button to begin the download process. You can pause and stop the download as needed.

## 🚨 Disclaimer

This tool is intended for personal use and educational purposes only. Ensure you have the rights to download and use the images. The developers bear no responsibility for misuse or violations of copyrights.

## 🤝 Contributing

For suggestions, feedback, or inquiries, please open an issue, make a pull request, or contact the developer directly at [onur.tellioglu@icloud.com](mailto:onur.tellioglu@icloud.com). All contributions are welcome! 😊

## 🙏 Credits

- Developer: Onur Tellioğlu [Usav12](https://github.com/onur-tellioglu)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## ☕ Buy Me a Coffee

If you like this project, please consider buying me a coffee. I would really appreciate it! 😊
My USDT (Tether) Wallet Address (TRC20): TQXW2FiawPpGah1jN2gCUBaSAqgbs5Hdyt
