# Prnt.sc Killer

Prnt.sc Killer is a specialized Node.js application designed to scrape and download images from prnt.sc (Lightshot). It allows users to set start codes and customize various download preferences, providing an efficient and user-friendly experience. The application also features a graphical UI for those who prefer it over command-line interfaces.

## 🌟 Features

- **User-Friendly Interface:** Graphical user interface for ease of use and accessibility
- **Bulk Download:** Efficiently download multiple images in bulk
- **Duplicate Handling:** Intelligent handling and removal of duplicate images
- **Pause/Resume Functionality:** Easily pause and resume download processes
- **Customizable Paths:** Set your preferred download path and output folder name for each download process separately
- **Dark Mode:** An eye-friendly dark mode for extended usage sessions and night-time use
- **Real-Time Updates:** The UI displays the most recently downloaded image in real-time

## 🛠 Installation and Setup

### 1. Install Node.js

If not already installed, download and install Node.js from [Node.js Official Site](https://nodejs.org/en/download/).

### 2. Clone the Repository

\```
git clone https://github.com/onur-tellioglu/Prntsc-Killer.git
\```

### 3. Install Dependencies

Dependencies are already installed in the repository except Electron. You must install Electron manually. To do this, run the following command in the project directory:

\```
npm install electron
\```

However, if you want to install the leftovers manually, follow the steps below.

Navigate to the project directory and run:

\```
npm install path axios cheerio fs crypto
\```

### 4. Run the Application

Execute the `run.vbs` file in the project directory.

## 🖱 Usage

1. Enter the desired start code in the "Start Code" field. The start code is the 6-character code at the end of the URL of the image you want to start downloading from. For example, if the URL is `https://prnt.sc/abcdef`, the start code is `abcdef`.
2. Specify the number of images you want to fetch in the "Count" field.
3. Define the output path where the downloaded images will be stored.
4. Click the "Start" button to begin the download process. You can pause and stop the download as needed.

## 🚨 Disclaimer

This tool is intended for personal use and educational purposes only. Ensure you have the rights to download and use the images. The developers bear no responsibility for misuse or violations of copyrights.

## 🤝 Contributing

For suggestions, feedback, or inquiries, please open an issue, make a pull request, or contact the developer directly at [onur.usav12@gmail.com](mailto:onur.usav12@gmail.com). All contributions are welcome! 😊

## 🙏 Credits

- Developer: Onur Tellioğlu [Usav12] (https://github.com/onur-tellioglu)

## 📜 License

This project is licensed under the [MIT licensed](./LICENSE).
