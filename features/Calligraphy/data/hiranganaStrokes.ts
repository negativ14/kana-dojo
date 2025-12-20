import { ICharacterData } from '@/features/Calligraphy/store/useCalligraphyStore';

// All 46 basic Hiragana characters with stroke data
// Stroke paths are in SVG format, scaled for a 400x350 viewBox
export const hiraganaData: ICharacterData[] = [
  // Vowels (あ行)
  {
    character: 'あ',
    romaji: 'a',
    strokes: [
      {
        id: 1,
        name: 'Horizontal',
        pathData: 'M 80 90 Q 200 75 320 95',
        startX: 80,
        startY: 90
      },
      {
        id: 2,
        name: 'Vertical curve',
        pathData: 'M 280 70 Q 260 180 200 280',
        startX: 280,
        startY: 70
      },
      {
        id: 3,
        name: 'Loop',
        pathData: 'M 120 170 Q 90 230 140 270 Q 200 300 240 250',
        startX: 120,
        startY: 170
      }
    ]
  },
  {
    character: 'い',
    romaji: 'i',
    strokes: [
      {
        id: 1,
        name: 'Left stroke',
        pathData: 'M 130 80 Q 120 180 140 280',
        startX: 130,
        startY: 80
      },
      {
        id: 2,
        name: 'Right stroke',
        pathData: 'M 270 90 Q 280 180 250 270',
        startX: 270,
        startY: 90
      }
    ]
  },
  {
    character: 'う',
    romaji: 'u',
    strokes: [
      {
        id: 1,
        name: 'Top dot',
        pathData: 'M 200 60 L 210 80',
        startX: 200,
        startY: 60
      },
      {
        id: 2,
        name: 'Curved body',
        pathData: 'M 130 120 Q 90 200 160 270 Q 250 310 320 240',
        startX: 130,
        startY: 120
      }
    ]
  },
  {
    character: 'え',
    romaji: 'e',
    strokes: [
      {
        id: 1,
        name: 'Top horizontal',
        pathData: 'M 120 80 Q 200 70 280 85',
        startX: 120,
        startY: 80
      },
      {
        id: 2,
        name: 'Main body',
        pathData: 'M 200 95 Q 150 180 170 250 Q 200 300 280 270',
        startX: 200,
        startY: 95
      }
    ]
  },
  {
    character: 'お',
    romaji: 'o',
    strokes: [
      {
        id: 1,
        name: 'Horizontal',
        pathData: 'M 80 100 Q 180 90 280 105',
        startX: 80,
        startY: 100
      },
      {
        id: 2,
        name: 'Vertical',
        pathData: 'M 160 70 Q 170 170 150 270',
        startX: 160,
        startY: 70
      },
      {
        id: 3,
        name: 'Right loop',
        pathData: 'M 180 170 Q 260 190 280 250 Q 270 300 220 290',
        startX: 180,
        startY: 170
      }
    ]
  },

  // K-row (か行)
  {
    character: 'か',
    romaji: 'ka',
    strokes: [
      {
        id: 1,
        name: 'Left vertical',
        pathData: 'M 100 80 Q 110 180 90 280',
        startX: 100,
        startY: 80
      },
      {
        id: 2,
        name: 'Horizontal',
        pathData: 'M 80 150 Q 180 140 280 155',
        startX: 80,
        startY: 150
      },
      {
        id: 3,
        name: 'Right curve',
        pathData: 'M 250 90 Q 290 180 250 270',
        startX: 250,
        startY: 90
      }
    ]
  },
  {
    character: 'き',
    romaji: 'ki',
    strokes: [
      {
        id: 1,
        name: 'Top horizontal',
        pathData: 'M 100 80 Q 200 70 300 85',
        startX: 100,
        startY: 80
      },
      {
        id: 2,
        name: 'Second horizontal',
        pathData: 'M 80 150 Q 180 140 280 155',
        startX: 80,
        startY: 150
      },
      {
        id: 3,
        name: 'Vertical',
        pathData: 'M 180 60 Q 190 160 170 260',
        startX: 180,
        startY: 60
      },
      {
        id: 4,
        name: 'Bottom curve',
        pathData: 'M 190 210 Q 250 230 280 270',
        startX: 190,
        startY: 210
      }
    ]
  },
  {
    character: 'く',
    romaji: 'ku',
    strokes: [
      {
        id: 1,
        name: 'Angled stroke',
        pathData: 'M 280 70 Q 180 160 280 280',
        startX: 280,
        startY: 70
      }
    ]
  },
  {
    character: 'け',
    romaji: 'ke',
    strokes: [
      {
        id: 1,
        name: 'Left vertical',
        pathData: 'M 100 80 Q 110 180 90 280',
        startX: 100,
        startY: 80
      },
      {
        id: 2,
        name: 'Horizontal',
        pathData: 'M 110 140 Q 200 130 290 145',
        startX: 110,
        startY: 140
      },
      {
        id: 3,
        name: 'Right vertical',
        pathData: 'M 280 70 Q 290 180 270 280',
        startX: 280,
        startY: 70
      }
    ]
  },
  {
    character: 'こ',
    romaji: 'ko',
    strokes: [
      {
        id: 1,
        name: 'Top curve',
        pathData: 'M 120 100 Q 200 80 280 105',
        startX: 120,
        startY: 100
      },
      {
        id: 2,
        name: 'Bottom curve',
        pathData: 'M 120 220 Q 200 200 280 225',
        startX: 120,
        startY: 220
      }
    ]
  },

  // S-row (さ行)
  {
    character: 'さ',
    romaji: 'sa',
    strokes: [
      {
        id: 1,
        name: 'Top horizontal',
        pathData: 'M 100 80 Q 200 70 300 85',
        startX: 100,
        startY: 80
      },
      {
        id: 2,
        name: 'Vertical',
        pathData: 'M 180 60 Q 190 160 170 220',
        startX: 180,
        startY: 60
      },
      {
        id: 3,
        name: 'Bottom curve',
        pathData: 'M 120 200 Q 180 260 280 240',
        startX: 120,
        startY: 200
      }
    ]
  },
  {
    character: 'し',
    romaji: 'shi',
    strokes: [
      {
        id: 1,
        name: 'Curved stroke',
        pathData: 'M 180 70 Q 120 180 200 280 Q 280 320 320 260',
        startX: 180,
        startY: 70
      }
    ]
  },
  {
    character: 'す',
    romaji: 'su',
    strokes: [
      {
        id: 1,
        name: 'Horizontal',
        pathData: 'M 100 90 Q 200 80 300 95',
        startX: 100,
        startY: 90
      },
      {
        id: 2,
        name: 'Main body',
        pathData: 'M 200 95 Q 150 180 200 250 Q 260 290 180 320',
        startX: 200,
        startY: 95
      }
    ]
  },
  {
    character: 'せ',
    romaji: 'se',
    strokes: [
      {
        id: 1,
        name: 'Left vertical',
        pathData: 'M 100 100 Q 110 180 90 260',
        startX: 100,
        startY: 100
      },
      {
        id: 2,
        name: 'Top horizontal',
        pathData: 'M 110 130 Q 200 120 290 135',
        startX: 110,
        startY: 130
      },
      {
        id: 3,
        name: 'Right body',
        pathData: 'M 200 130 Q 280 180 260 250 Q 240 300 180 290',
        startX: 200,
        startY: 130
      }
    ]
  },
  {
    character: 'そ',
    romaji: 'so',
    strokes: [
      {
        id: 1,
        name: 'Top part',
        pathData: 'M 150 70 Q 250 80 280 120',
        startX: 150,
        startY: 70
      },
      {
        id: 2,
        name: 'Main curve',
        pathData: 'M 280 120 Q 200 180 280 280',
        startX: 280,
        startY: 120
      }
    ]
  },

  // T-row (た行)
  {
    character: 'た',
    romaji: 'ta',
    strokes: [
      {
        id: 1,
        name: 'Top horizontal',
        pathData: 'M 100 90 Q 200 80 300 95',
        startX: 100,
        startY: 90
      },
      {
        id: 2,
        name: 'Vertical',
        pathData: 'M 180 70 Q 190 160 170 240',
        startX: 180,
        startY: 70
      },
      {
        id: 3,
        name: 'Bottom left',
        pathData: 'M 100 200 Q 130 250 100 290',
        startX: 100,
        startY: 200
      },
      {
        id: 4,
        name: 'Bottom right',
        pathData: 'M 220 200 Q 280 250 260 290',
        startX: 220,
        startY: 200
      }
    ]
  },
  {
    character: 'ち',
    romaji: 'chi',
    strokes: [
      {
        id: 1,
        name: 'Horizontal',
        pathData: 'M 100 100 Q 200 90 300 105',
        startX: 100,
        startY: 100
      },
      {
        id: 2,
        name: 'Main body',
        pathData: 'M 200 105 Q 150 200 220 280 Q 300 320 320 250',
        startX: 200,
        startY: 105
      }
    ]
  },
  {
    character: 'つ',
    romaji: 'tsu',
    strokes: [
      {
        id: 1,
        name: 'Curved stroke',
        pathData: 'M 100 120 Q 200 100 280 140 Q 320 200 240 280',
        startX: 100,
        startY: 120
      }
    ]
  },
  {
    character: 'て',
    romaji: 'te',
    strokes: [
      {
        id: 1,
        name: 'Horizontal',
        pathData: 'M 100 100 Q 200 90 300 105',
        startX: 100,
        startY: 100
      },
      {
        id: 2,
        name: 'Curved tail',
        pathData: 'M 220 105 Q 180 200 250 280',
        startX: 220,
        startY: 105
      }
    ]
  },
  {
    character: 'と',
    romaji: 'to',
    strokes: [
      {
        id: 1,
        name: 'Vertical',
        pathData: 'M 180 70 Q 190 160 170 260',
        startX: 180,
        startY: 70
      },
      {
        id: 2,
        name: 'Curved stroke',
        pathData: 'M 170 150 Q 250 200 280 280',
        startX: 170,
        startY: 150
      }
    ]
  },

  // N-row (な行)
  {
    character: 'な',
    romaji: 'na',
    strokes: [
      {
        id: 1,
        name: 'Top horizontal',
        pathData: 'M 100 90 Q 180 80 260 95',
        startX: 100,
        startY: 90
      },
      {
        id: 2,
        name: 'Left vertical',
        pathData: 'M 100 120 Q 110 200 90 280',
        startX: 100,
        startY: 120
      },
      {
        id: 3,
        name: 'Right part',
        pathData: 'M 180 100 Q 220 180 180 250',
        startX: 180,
        startY: 100
      },
      {
        id: 4,
        name: 'Loop',
        pathData: 'M 200 200 Q 280 220 290 270 Q 280 310 220 300',
        startX: 200,
        startY: 200
      }
    ]
  },
  {
    character: 'に',
    romaji: 'ni',
    strokes: [
      {
        id: 1,
        name: 'Left vertical',
        pathData: 'M 100 80 Q 110 180 90 280',
        startX: 100,
        startY: 80
      },
      {
        id: 2,
        name: 'Top right',
        pathData: 'M 180 110 Q 220 100 260 115',
        startX: 180,
        startY: 110
      },
      {
        id: 3,
        name: 'Bottom right',
        pathData: 'M 180 200 Q 220 190 260 205',
        startX: 180,
        startY: 200
      }
    ]
  },
  {
    character: 'ぬ',
    romaji: 'nu',
    strokes: [
      {
        id: 1,
        name: 'Left part',
        pathData: 'M 100 100 Q 130 200 100 280',
        startX: 100,
        startY: 100
      },
      {
        id: 2,
        name: 'Main body',
        pathData:
          'M 150 80 Q 280 120 280 200 Q 270 280 180 300 Q 120 290 150 240',
        startX: 150,
        startY: 80
      }
    ]
  },
  {
    character: 'ね',
    romaji: 'ne',
    strokes: [
      {
        id: 1,
        name: 'Left vertical',
        pathData: 'M 100 80 Q 110 180 90 280',
        startX: 100,
        startY: 80
      },
      {
        id: 2,
        name: 'Main body',
        pathData:
          'M 140 100 Q 280 130 280 200 Q 270 280 180 300 Q 120 290 160 240',
        startX: 140,
        startY: 100
      }
    ]
  },
  {
    character: 'の',
    romaji: 'no',
    strokes: [
      {
        id: 1,
        name: 'Spiral',
        pathData:
          'M 280 100 Q 150 120 120 200 Q 100 280 200 300 Q 300 310 320 220 Q 330 140 250 120',
        startX: 280,
        startY: 100
      }
    ]
  },

  // H-row (は行)
  {
    character: 'は',
    romaji: 'ha',
    strokes: [
      {
        id: 1,
        name: 'Left vertical',
        pathData: 'M 100 80 Q 110 180 90 280',
        startX: 100,
        startY: 80
      },
      {
        id: 2,
        name: 'Top right',
        pathData: 'M 160 100 Q 240 90 300 105',
        startX: 160,
        startY: 100
      },
      {
        id: 3,
        name: 'Right body',
        pathData: 'M 220 105 Q 180 200 240 280 Q 300 320 320 260',
        startX: 220,
        startY: 105
      }
    ]
  },
  {
    character: 'ひ',
    romaji: 'hi',
    strokes: [
      {
        id: 1,
        name: 'Main curve',
        pathData:
          'M 150 80 Q 100 180 180 280 Q 280 340 320 240 Q 340 160 280 120 Q 220 90 200 140',
        startX: 150,
        startY: 80
      }
    ]
  },
  {
    character: 'ふ',
    romaji: 'fu',
    strokes: [
      {
        id: 1,
        name: 'Top dot',
        pathData: 'M 200 60 L 210 80',
        startX: 200,
        startY: 60
      },
      {
        id: 2,
        name: 'Left part',
        pathData: 'M 120 140 Q 100 200 140 250',
        startX: 120,
        startY: 140
      },
      {
        id: 3,
        name: 'Right part',
        pathData: 'M 280 140 Q 300 200 260 250',
        startX: 280,
        startY: 140
      },
      {
        id: 4,
        name: 'Bottom',
        pathData: 'M 160 280 Q 200 300 240 280',
        startX: 160,
        startY: 280
      }
    ]
  },
  {
    character: 'へ',
    romaji: 'he',
    strokes: [
      {
        id: 1,
        name: 'Mountain shape',
        pathData: 'M 80 200 Q 200 80 320 200',
        startX: 80,
        startY: 200
      }
    ]
  },
  {
    character: 'ほ',
    romaji: 'ho',
    strokes: [
      {
        id: 1,
        name: 'Left vertical',
        pathData: 'M 80 80 Q 90 180 70 280',
        startX: 80,
        startY: 80
      },
      {
        id: 2,
        name: 'Top horizontal',
        pathData: 'M 140 100 Q 220 90 300 105',
        startX: 140,
        startY: 100
      },
      {
        id: 3,
        name: 'Middle horizontal',
        pathData: 'M 140 170 Q 220 160 300 175',
        startX: 140,
        startY: 170
      },
      {
        id: 4,
        name: 'Right vertical',
        pathData: 'M 220 100 Q 230 200 210 280',
        startX: 220,
        startY: 100
      },
      {
        id: 5,
        name: 'Bottom',
        pathData: 'M 160 240 Q 200 280 280 260',
        startX: 160,
        startY: 240
      }
    ]
  },

  // M-row (ま行)
  {
    character: 'ま',
    romaji: 'ma',
    strokes: [
      {
        id: 1,
        name: 'Top horizontal',
        pathData: 'M 100 80 Q 200 70 300 85',
        startX: 100,
        startY: 80
      },
      {
        id: 2,
        name: 'Second horizontal',
        pathData: 'M 100 150 Q 200 140 300 155',
        startX: 100,
        startY: 150
      },
      {
        id: 3,
        name: 'Vertical',
        pathData: 'M 200 60 Q 210 160 190 230',
        startX: 200,
        startY: 60
      },
      {
        id: 4,
        name: 'Bottom loop',
        pathData: 'M 140 230 Q 200 280 260 250 Q 280 220 240 200',
        startX: 140,
        startY: 230
      }
    ]
  },
  {
    character: 'み',
    romaji: 'mi',
    strokes: [
      {
        id: 1,
        name: 'Top curve',
        pathData: 'M 150 80 Q 250 100 280 150',
        startX: 150,
        startY: 80
      },
      {
        id: 2,
        name: 'Main body',
        pathData:
          'M 120 160 Q 200 180 260 220 Q 280 280 200 300 Q 140 290 180 240',
        startX: 120,
        startY: 160
      }
    ]
  },
  {
    character: 'む',
    romaji: 'mu',
    strokes: [
      {
        id: 1,
        name: 'Top horizontal',
        pathData: 'M 100 90 Q 200 80 300 95',
        startX: 100,
        startY: 90
      },
      {
        id: 2,
        name: 'Main body',
        pathData: 'M 180 95 Q 120 180 180 260 Q 260 300 300 240',
        startX: 180,
        startY: 95
      },
      {
        id: 3,
        name: 'Dot',
        pathData: 'M 280 280 L 300 300',
        startX: 280,
        startY: 280
      }
    ]
  },
  {
    character: 'め',
    romaji: 'me',
    strokes: [
      {
        id: 1,
        name: 'Left part',
        pathData: 'M 100 100 Q 130 200 100 280',
        startX: 100,
        startY: 100
      },
      {
        id: 2,
        name: 'Main loop',
        pathData:
          'M 150 80 Q 280 120 280 200 Q 270 280 180 290 Q 120 280 160 220',
        startX: 150,
        startY: 80
      }
    ]
  },
  {
    character: 'も',
    romaji: 'mo',
    strokes: [
      {
        id: 1,
        name: 'Top horizontal',
        pathData: 'M 100 100 Q 200 90 300 105',
        startX: 100,
        startY: 100
      },
      {
        id: 2,
        name: 'Bottom horizontal',
        pathData: 'M 100 180 Q 200 170 300 185',
        startX: 100,
        startY: 180
      },
      {
        id: 3,
        name: 'Vertical with tail',
        pathData: 'M 200 80 Q 210 200 180 280 Q 160 320 200 300',
        startX: 200,
        startY: 80
      }
    ]
  },

  // Y-row (や行)
  {
    character: 'や',
    romaji: 'ya',
    strokes: [
      {
        id: 1,
        name: 'Left part',
        pathData: 'M 120 80 Q 100 180 140 280',
        startX: 120,
        startY: 80
      },
      {
        id: 2,
        name: 'Horizontal',
        pathData: 'M 100 160 Q 180 150 260 165',
        startX: 100,
        startY: 160
      },
      {
        id: 3,
        name: 'Right curve',
        pathData: 'M 240 80 Q 280 180 240 280',
        startX: 240,
        startY: 80
      }
    ]
  },
  {
    character: 'ゆ',
    romaji: 'yu',
    strokes: [
      {
        id: 1,
        name: 'Left vertical',
        pathData: 'M 120 100 Q 130 200 110 280',
        startX: 120,
        startY: 100
      },
      {
        id: 2,
        name: 'Right body',
        pathData: 'M 180 80 Q 280 120 280 200 Q 270 280 200 290',
        startX: 180,
        startY: 80
      }
    ]
  },
  {
    character: 'よ',
    romaji: 'yo',
    strokes: [
      {
        id: 1,
        name: 'Top horizontal',
        pathData: 'M 140 100 Q 200 90 260 105',
        startX: 140,
        startY: 100
      },
      {
        id: 2,
        name: 'Main body',
        pathData: 'M 200 100 Q 160 180 200 260 Q 260 300 280 240',
        startX: 200,
        startY: 100
      }
    ]
  },

  // R-row (ら行)
  {
    character: 'ら',
    romaji: 'ra',
    strokes: [
      {
        id: 1,
        name: 'Top part',
        pathData: 'M 180 70 Q 220 80 240 110',
        startX: 180,
        startY: 70
      },
      {
        id: 2,
        name: 'Main curve',
        pathData: 'M 200 110 Q 120 200 200 280 Q 300 320 320 240',
        startX: 200,
        startY: 110
      }
    ]
  },
  {
    character: 'り',
    romaji: 'ri',
    strokes: [
      {
        id: 1,
        name: 'Left stroke',
        pathData: 'M 150 80 Q 140 180 160 260',
        startX: 150,
        startY: 80
      },
      {
        id: 2,
        name: 'Right stroke',
        pathData: 'M 250 80 Q 260 200 220 300',
        startX: 250,
        startY: 80
      }
    ]
  },
  {
    character: 'る',
    romaji: 'ru',
    strokes: [
      {
        id: 1,
        name: 'Main stroke',
        pathData:
          'M 200 70 Q 120 140 200 200 Q 280 250 200 300 Q 140 320 180 280',
        startX: 200,
        startY: 70
      }
    ]
  },
  {
    character: 'れ',
    romaji: 're',
    strokes: [
      {
        id: 1,
        name: 'Left vertical',
        pathData: 'M 100 80 Q 110 180 90 280',
        startX: 100,
        startY: 80
      },
      {
        id: 2,
        name: 'Right body',
        pathData: 'M 150 100 Q 280 140 260 220 Q 240 280 300 300',
        startX: 150,
        startY: 100
      }
    ]
  },
  {
    character: 'ろ',
    romaji: 'ro',
    strokes: [
      {
        id: 1,
        name: 'Main stroke',
        pathData: 'M 200 70 Q 120 140 200 200 Q 280 250 240 300',
        startX: 200,
        startY: 70
      }
    ]
  },

  // W-row (わ行)
  {
    character: 'わ',
    romaji: 'wa',
    strokes: [
      {
        id: 1,
        name: 'Left vertical',
        pathData: 'M 100 80 Q 110 180 90 280',
        startX: 100,
        startY: 80
      },
      {
        id: 2,
        name: 'Right loop',
        pathData: 'M 160 100 Q 280 140 280 220 Q 270 300 180 290',
        startX: 160,
        startY: 100
      }
    ]
  },
  {
    character: 'を',
    romaji: 'wo',
    strokes: [
      {
        id: 1,
        name: 'Top horizontal',
        pathData: 'M 100 80 Q 200 70 300 85',
        startX: 100,
        startY: 80
      },
      {
        id: 2,
        name: 'Middle part',
        pathData: 'M 200 85 Q 150 150 200 200',
        startX: 200,
        startY: 85
      },
      {
        id: 3,
        name: 'Bottom curve',
        pathData: 'M 120 200 Q 200 280 300 250',
        startX: 120,
        startY: 200
      }
    ]
  },
  {
    character: 'ん',
    romaji: 'n',
    strokes: [
      {
        id: 1,
        name: 'Main curve',
        pathData: 'M 150 80 Q 100 200 200 280 Q 300 320 320 220',
        startX: 150,
        startY: 80
      }
    ]
  }
];

export default hiraganaData;
