---
title: 音乐
date: 2019-05-17 16:14:00
top_img: music/1.jpg
type: "music"
comments: false
---



{% aplayerlist %}
{
    "narrow": false,                          // Optional, narrow style
    "autoplay": false,                         // Optional, autoplay song(s), not supported by mobile browsers
    "mode": "random",                         // Optional, play mode, can be `random` `single` `circulation`(loop) `order`(no loop), default: `circulation`
    "showlrc": 3,                             // Optional, show lrc, can be 1, 2, 3
    "mutex": true,                            // Optional, pause other players when this player playing
    "theme": "#e6d0b2",	                      // Optional, theme color, default: #b7daff
    "preload": "metadata",                    // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
    "listmaxheight": "513px",                 // Optional, max height of play list
    "music": [
        {
            "title": "Nevada(Original Mix)",
            "author": "Vicetone&Cozi Zuehlsdorff",
            "url": "playlist/Nevada(Original Mix)/1.flac",
            "pic": "playlist/Nevada(Original Mix)/1.jpg",
            "lrc": "playlist/Nevada(Original Mix)/1.lrc"
        },
        {
            "title": "アイロニ",
            "author": "鹿乃",
            "url": "irony.mp3",
            "pic": "irony.jpg"
        }
    ]
}
{% endaplayerlist %}

<div class="videoContent">
  <video class="videoElement" src="https://oxarlly.github.io/music/The Way I Still Love You - Reynard Silva【中英動態歌詞Lyrics】.mp4" controls
     preload="auto" width="100%" height="100%"></video></div>
