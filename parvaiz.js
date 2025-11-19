// Mythium Archive Player: Fully working

jQuery(function ($) {
    'use strict';

    var supportsAudio = !!document.createElement('audio').canPlayType;

    if (!supportsAudio) {
        // no audio support
        $('.column').addClass('hidden');
        var noSupport = $('#audio1').text();
        $('.container').append('<p class="no-support">' + noSupport + '</p>');
        return;
    }

    // initialize Plyr
    var player = new Plyr('#audio1', {
        controls: [
            'restart',
            'play',
            'progress',
            'current-time',
            'duration',
            'mute',
            'volume',
            'download'
        ]
    });

    // Playlist
    var index = 0,
        playing = false,
        mediaPath = 'https://archive.org/download/mythium/',
        extension = '.mp3',  // default
        tracks = [
            { "track": 1, "name": "Tube", "duration": "2:46", "file": "JLS_ATI" },
            { "track": 2, "name": "Clothes swishing", "duration": "8:30", "file": "BS_TF" },
            { "track": 3, "name": "Footsteps on rain", "duration": "5:01", "file": "BS_ATKM" },
            { "track": 4, "name": "Chatter", "duration": "8:31", "file": "BSFM_TF" },
            { "track": 5, "name": "Night", "duration": "5:05", "file": "BSFM_ATKM" },
            { "track": 6, "name": "Running On Grass", "duration": "2:48", "file": "AC_ATI" }
            // add more tracks here as needed
        ],
        trackCount = tracks.length;

    // Build playlist UI
    $.each(tracks, function (key, value) {
        var trackNumber = value.track < 10 ? '0' + value.track : value.track;
        $('#plList').append(
            '<li>' +
            '<div class="plItem">' +
            '<span class="plNum">' + trackNumber + '.</span>' +
            '<span class="plTitle">' + value.name + '</span>' +
            '<span class="plLength">' + value.duration + '</span>' +
            '</div></li>'
        );
    });

    var npAction = $('#npAction'),
        npTitle = $('#npTitle'),
        audio = $('#audio1').on('play', function () {
            playing = true;
            npAction.text('Now Playing...');
        }).on('pause', function () {
            playing = false;
            npAction.text('Paused...');
        }).on('ended', function () {
            npAction.text('Paused...');
            if (index + 1 < trackCount) {
                index++;
                loadTrack(index);
                audio.play();
            } else {
                index = 0;
                loadTrack(index);
            }
        }).get(0);

    // Buttons
    $('#btnPrev').on('click', function () {
        if (index > 0) {
            index--;
            loadTrack(index);
            if (playing) audio.play();
        } else {
            index = 0;
            loadTrack(index);
        }
    });

    $('#btnNext').on('click', function () {
        if (index + 1 < trackCount) {
            index++;
            loadTrack(index);
            if (playing) audio.play();
        } else {
            index = 0;
            loadTrack(index);
        }
    });

    $('#plList li').on('click', function () {
        var id = $(this).index();
        if (id !== index) playTrack(id);
    });

    function loadTrack(id) {
        $('.plSel').removeClass('plSel');
        $('#plList li:eq(' + id + ')').addClass('plSel');
        npTitle.text(tracks[id].name);
        index = id;
        audio.src = mediaPath + tracks[id].file + extension;

        // Update download button
        player.on('loadedmetadata', function () {
            $('a[data-plyr="download"]').attr('href', audio.src);
        });
    }

    function playTrack(id) {
        loadTrack(id);
        audio.play();
    }

    // Load first track
    loadTrack(index);
});
