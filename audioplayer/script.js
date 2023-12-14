document.addEventListener('DOMContentLoaded', function() {
    var wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'violet',
        progressColor: 'purple',
        backend: 'MediaElement'
    });

    // Load the audio file and display the waveform
    wavesurfer.load('audioplayer/fakemusicartist-therealist.mp3');

    // Get the play/pause button
    var playButton = document.getElementById('playButton');

    // Toggle play/pause on click
    playButton.addEventListener('click', function() {
        if (wavesurfer.isPlaying()) {
            wavesurfer.pause();
        } else {
            // If the AudioContext was not started, calling play will resume it
            wavesurfer.play();
        }
    });
});
