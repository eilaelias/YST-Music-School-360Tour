var APP_DATA = {
  "scenes": [
    {
      "id": "0-alice-lee-plaza",
      "name": "Alice Lee Plaza",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -3.038844745849346,
        "pitch": -0.2560208889854714,
        "fov": 1.42490816401212
      },
      "linkHotspots": [
        {
          "yaw": -2.2110393542223754,
          "pitch": 0.01136222706537282,
          "rotation": 5.497787143782138,
          "target": "1-conservatory-foyer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.3653324578166899,
          "pitch": -0.555375822518684,
          "title": "Lee Kong Chian Natural History Museum",
          "text": "The iconic natural history museum showcasing several genuine dinosaur fossils! Entrance is free for NUS students and staff."
        },
        {
          "yaw": 1.960166658683967,
          "pitch": -0.45617437009233086,
          "title": "NUS Museum",
          "text": "Singapore's oldest university museum, showcasing both historical art and artifacts."
        },
        {
          "yaw": -2.363152164715208,
          "pitch": -0.8897668973674797,
          "title": "Yong Siew Toh Conservatory of Music",
          "text": "NUS's music school, offering modules not just to YST students, but also non-music NUS students."
        }
      ]
    },
    {
      "id": "1-conservatory-foyer",
      "name": "Conservatory Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.6403705691177466,
        "pitch": 0.10232415712991028,
        "fov": 1.42490816401212
      },
      "linkHotspots": [
        {
          "yaw": -0.7565557437181916,
          "pitch": 0.09541959269228784,
          "rotation": 0,
          "target": "0-alice-lee-plaza"
        },
        {
          "yaw": -2.960734341279494,
          "pitch": 0.20087478721338847,
          "rotation": 0.7853981633974483,
          "target": "2-conservatory-lounge"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.9855986690182377,
          "pitch": -0.013701107243418775,
          "title": "YST Music Library",
          "text": "A peaceful, usually empty library. In here, you can hear the distant sounds of music..."
        }
      ]
    },
    {
      "id": "2-conservatory-lounge",
      "name": "Conservatory Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.887200283058645,
        "pitch": 0.1979898665627502,
        "fov": 1.42490816401212
      },
      "linkHotspots": [
        {
          "yaw": -0.3612103826744715,
          "pitch": 0.21169181009375215,
          "rotation": 6.283185307179586,
          "target": "1-conservatory-foyer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.1031465758038212,
          "pitch": -0.011761960400225036,
          "title": "Foreword Coffee Roasters",
          "text": "A comfortable place to chill, the conservatory lounge is also home to this quaint café and is usually bustling with students!"
        }
      ]
    }
  ],
  "name": "YSTMusic-360Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
