// Mythium Archive: https://archive.org/details/mythium/

jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        // initialize plyr
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
        // initialize playlist and controls
        var index = 0,
            playing = false,
            mediaPath = 'https://archive.org/download/mythium/',
            extension = '',
            tracks = [{
                "track": 1,
                "name": "Tube",
                "duration": "2:46",
                "file": "JLS_ATI"
            }, {
                "track": 2,
                "name": "Clothes swishing",
                "duration": "8:30",
                "file": "BS_TF"
            }, {
                "track": 3,
                "name": "Footsteps on rain",
                "duration": "5:01",
                "file": "BS_ATKM"
            }, {
                "track": 4,
                "name": "Chatter",
                "duration": "8:31",
                "file": "BSFM_TF"
            }, {
                "track": 5,
                "name": "Night",
                "duration": "5:05",
                "file": "BSFM_ATKM"
            }, {
                "track": 6,
                "name": "Running On Grass",
                "duration": "2:48",
                "file": "AC_ATI"
            }, {
                "track": 7,
                "name": "Creaking",
                "duration": "5:44",
                "file": "AC_ATKMTake_1"
            }, {
                "track": 8,
                "name": "Birds",
                "duration": "5:26",
                "file": "AC_ATKMTake_2"
            }, {
                "track": 9,
                "name": "Sous Chef",
                "duration": "5:46",
                "file": "AC_M"
            }, {
                "track": 10,
                "name": "Green Grocer",
                "duration": "5:25",
                "file": "AC_TSOWAfucked_up"
            }, {
                "track": 11,
                "name": "Mom",
                "duration": "5:53",
                "file": "PNY04-05_M"
            }, {
                "track": 12,
                "name": "Newspaper",
                "duration": "4:40",
                "file": "PNY04-05_OTW"
            }, {
                "track": 13,
                "name": "Astaghfurilla",
                "duration": "13:15",
                "file": "PNY04-05_T"
            }, {
                "track": 14,
                "name": "Özil",
                "duration": "8:12",
                "file": "PNY04-05_TF"
            }, {
                "track": 15,
                "name": "Computer",
                "duration": "7:02",
                "file": "PNY04-05_TSOWA"
            }, {
                "track": 16,
                "name": "Bagram",
                "duration": "5:43",
                "file": "PVD_M"
            }, {
                "track": 17,
                "name": "TSA",
                "duration": "10:45",
                "file": "PVD_T"
            }, {
                "track": 18,
                "name": "Turkey",
                "duration": "5:36",
                "file": "PVD_TSOWA"
            }, {
                "track": 19,
                "name": "Drive",
                "duration": "2:48",
                "file": "SSB01_08_04_ATI"
            }, {
                "track": 20,
                "name": "Aneeka I",
                "duration": "5:46",
                "file": "SSB01_08_04_M"
            }, {
                "track": 21,
                "name": "Passport",
                "duration": "13:07",
                "file": "SSB06_06_03_BTPE"
            }, {
                "track": 22,
                "name": "Raqqa",
                "duration": "5:16",
                "file": "SSB06_06_03_I"
            }, {
                "track": 23,
                "name": "Class",
                "duration": "5:46",
                "file": "SSB06_06_03_M"
            }, {
                "track": 24,
                "name": "Isma I",
                "duration": "4:51",
                "file": "SSB06_06_03_ME"
            }, {
                "track": 25,
                "name": "Sorry I",
                "duration": "8:43",
                "file": "SSB06_06_03_TF"
            }, {
                "track": 26,
                "name": "Sorry II",
                "duration": "3:00",
                "file": "SSB12_28_03_ATI"
            }, {
                "track": 27,
                "name": "Aneeka II",
                "duration": "6:09",
                "file": "SSB12_28_03_M"
            }, {
                "track": 28,
                "name": "Whatsapp",
                "duration": "5:05",
                "file": "SSB12_28_03_ME"
            }, {
                "track": 29,
                "name": "Imam",
                "duration": "12:32",
                "file": "SSB12_28_03_T"
            }, {
                "track": 30,
                "name": "Sorry III",
                "duration": "8:56",
                "file": "SSB12_28_03_TF"
            }, {
                "track": 31,
                "name": "Abu Parvaiz",
                "duration": "4:55",
                "file": "SSB___11_03_ATITake_1"
            }, {
                "track": 32,
                "name": "Allah",
                "duration": "5:45",
                "file": "SSB___11_03_ATITake_2"
            }, {
                "track": 33,
                "name": "Phone",
                "duration": "14:05",
                "file": "SSB___11_03_BTPETake_1"
            }, {
                "track": 34,
                "name": "New Clothes",
                "duration": "13:25",
                "file": "SSB___11_03_BTPETake_2"
            }, {
                "track": 35,
                "name": "Anneka III",
                "duration": "8:37",
                "file": "SSB___11_03_TFTake_1"
            }, {
                "track": 36,
                "name": "Freedom",
                "duration": "8:36",
                "file": "SSB___11_03_TFTake_2"
            }],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackDuration = value.duration;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                }
                $('#plList').append('<li> \
                    <div class="plItem"> \
                        <span class="plNum">' + trackNumber + '.</span> \
                        <span class="plTitle">' + trackName + '</span> \
                        <span class="plLength">' + trackDuration + '</span> \
                    </div> \
                </li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').on('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).on('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).on('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').on('click', function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').on('click', function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').on('click', function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
                updateDownload(id, audio.src);
            },
            updateDownload = function (id, source) {
                player.on('loadedmetadata', function () {
                    $('a[data-plyr="download"]').attr('href', source);
                });
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    } else {
        // no audio support
        $('.column').addClass('hidden');
        var noSupport = $('#audio1').text();
        $('.container').append('<p class="no-support">' + noSupport + '</p>');
    }
});

