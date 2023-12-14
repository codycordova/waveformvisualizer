# waveformvisualizer
<img src="https://i.imgur.com/BB2F5rT_d.webp?maxwidth=760&fidelity=grand" />

A basic visual audio player.

## Prerequisites

Before you run the application, you need to have Python installed on your system. This app has been tested with Python 3.8 and above.

## Installing Python

Follow the instructions for your operating system to install Python:

### Windows

1. Download the latest version of Python from the [official website](https://www.python.org/downloads/windows/).
2. Run the installer and make sure to check the box that says "Add Python to PATH" before installation.
3. After installation, open Command Prompt and type `python --version` to confirm the installation.

### macOS

1. You can install Python using Homebrew by running `brew install python` in the terminal.
2. Verify the installation with `python3 --version`.

### Linux

1. Most Linux distributions come with Python pre-installed. You can check the version by running `python3 --version` in the terminal.
2. If it's not installed, you can usually install it with your package manager, for example `sudo apt-get install python3` on Ubuntu.

## Running the Application

After installing Python, you can start the server with the following command:

python -m http.server


SETUP: 

Change the audio file in the audioplayer folder to your own MP3 or WAV.
<img src="https://i.imgur.com/yNL18ap_d.webp?maxwidth=760&fidelity=grand" />

Edit the script.js code to include the path for the new audio file
wavesurfer.load('audioplayer/fakemusicartist-therealist.mp3');
<img src="https://i.imgur.com/vcuu6cS.png" />

Edit the index.html file to have the proper Artist and Track title
<span id="trackArtist">FAKEMUSICARTIST</span> - <span id="trackTitle">THE REALIST</span>
<img src="https://i.imgur.com/TzXiqX5.png" />

In your CLI you run this code
python -m http.server
<img src="https://i.imgur.com/NJRptgy.png" />

To open the app on localhost:8000 

