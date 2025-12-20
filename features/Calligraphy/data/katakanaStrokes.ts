import { ICharacterData } from '@/features/Calligraphy/store/useCalligraphyStore';

// All 46 basic Katakana characters with stroke data
// Stroke paths are in SVG format, scaled for a 400x350 viewBox
export const katakanaData: ICharacterData[] = [
  // Vowels (ア行)
  {
    character: 'ア',
    romaji: 'a',
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
        name: 'Diagonal',
        pathData: 'M 250 100 Q 180 200 200 300',
        startX: 250,
        startY: 100
      }
    ]
  },
  {
    character: 'イ',
    romaji: 'i',
    strokes: [
      {
        id: 1,
        name: 'Diagonal',
        pathData: 'M 280 80 Q 200 150 180 180',
        startX: 280,
        startY: 80
      },
      {
        id: 2,
        name: 'Vertical',
        pathData: 'M 180 100 Q 190 200 170 300',
        startX: 180,
        startY: 100
      }
    ]
  },
  {
    character: 'ウ',
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
        name: 'Top horizontal',
        pathData: 'M 120 120 Q 200 110 280 125',
        startX: 120,
        startY: 120
      },
      {
        id: 3,
        name: 'Box body',
        pathData: 'M 140 125 L 140 280 Q 200 290 260 280 L 260 125',
        startX: 140,
        startY: 125
      }
    ]
  },
  {
    character: 'エ',
    romaji: 'e',
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
        name: 'Vertical',
        pathData: 'M 200 100 Q 200 180 200 260',
        startX: 200,
        startY: 100
      },
      {
        id: 3,
        name: 'Bottom horizontal',
        pathData: 'M 100 260 Q 200 250 300 265',
        startX: 100,
        startY: 260
      }
    ]
  },
  {
    character: 'オ',
    romaji: 'o',
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
        name: 'Vertical',
        pathData: 'M 200 80 Q 200 180 200 300',
        startX: 200,
        startY: 80
      },
      {
        id: 3,
        name: 'Diagonal',
        pathData: 'M 120 150 Q 200 200 280 280',
        startX: 120,
        startY: 150
      }
    ]
  },

  // K-row (カ行)
  {
    character: 'カ',
    romaji: 'ka',
    strokes: [
      {
        id: 1,
        name: 'Left diagonal',
        pathData: 'M 150 80 Q 120 180 100 280',
        startX: 150,
        startY: 80
      },
      {
        id: 2,
        name: 'Horizontal with vertical',
        pathData: 'M 100 140 Q 200 130 280 145 L 280 280',
        startX: 100,
        startY: 140
      }
    ]
  },
  {
    character: 'キ',
    romaji: 'ki',
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
        name: 'Vertical',
        pathData: 'M 200 80 Q 200 180 200 280',
        startX: 200,
        startY: 80
      }
    ]
  },
  {
    character: 'ク',
    romaji: 'ku',
    strokes: [
      {
        id: 1,
        name: 'Top diagonal',
        pathData: 'M 150 80 Q 220 100 260 140',
        startX: 150,
        startY: 80
      },
      {
        id: 2,
        name: 'Main diagonal',
        pathData: 'M 260 100 Q 180 200 200 300',
        startX: 260,
        startY: 100
      }
    ]
  },
  {
    character: 'ケ',
    romaji: 'ke',
    strokes: [
      {
        id: 1,
        name: 'Top diagonal',
        pathData: 'M 150 80 Q 220 100 260 140',
        startX: 150,
        startY: 80
      },
      {
        id: 2,
        name: 'Horizontal',
        pathData: 'M 100 160 Q 200 150 280 165',
        startX: 100,
        startY: 160
      },
      {
        id: 3,
        name: 'Vertical',
        pathData: 'M 240 160 Q 240 220 240 280',
        startX: 240,
        startY: 160
      }
    ]
  },
  {
    character: 'コ',
    romaji: 'ko',
    strokes: [
      {
        id: 1,
        name: 'Top horizontal',
        pathData: 'M 120 100 L 280 100',
        startX: 120,
        startY: 100
      },
      {
        id: 2,
        name: 'Right vertical and bottom',
        pathData: 'M 280 100 L 280 260 L 120 260',
        startX: 280,
        startY: 100
      }
    ]
  },

  // S-row (サ行)
  {
    character: 'サ',
    romaji: 'sa',
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
        name: 'Left vertical',
        pathData: 'M 150 100 Q 150 180 150 260',
        startX: 150,
        startY: 100
      },
      {
        id: 3,
        name: 'Right diagonal',
        pathData: 'M 250 100 Q 220 200 240 300',
        startX: 250,
        startY: 100
      }
    ]
  },
  {
    character: 'シ',
    romaji: 'shi',
    strokes: [
      {
        id: 1,
        name: 'Top left dot',
        pathData: 'M 120 100 L 140 120',
        startX: 120,
        startY: 100
      },
      {
        id: 2,
        name: 'Middle left dot',
        pathData: 'M 140 170 L 160 190',
        startX: 140,
        startY: 170
      },
      {
        id: 3,
        name: 'Right curve',
        pathData: 'M 280 120 Q 260 200 300 280',
        startX: 280,
        startY: 120
      }
    ]
  },
  {
    character: 'ス',
    romaji: 'su',
    strokes: [
      {
        id: 1,
        name: 'Top horizontal',
        pathData: 'M 100 100 Q 200 90 280 105',
        startX: 100,
        startY: 100
      },
      {
        id: 2,
        name: 'Cross diagonal',
        pathData: 'M 280 100 Q 180 180 120 280 M 180 180 Q 240 240 300 280',
        startX: 280,
        startY: 100
      }
    ]
  },
  {
    character: 'セ',
    romaji: 'se',
    strokes: [
      {
        id: 1,
        name: 'Left vertical',
        pathData: 'M 120 80 Q 120 180 120 280',
        startX: 120,
        startY: 80
      },
      {
        id: 2,
        name: 'Top horizontal',
        pathData: 'M 120 120 Q 200 110 280 125',
        startX: 120,
        startY: 120
      },
      {
        id: 3,
        name: 'Bottom horizontal',
        pathData: 'M 120 220 Q 200 210 280 225',
        startX: 120,
        startY: 220
      }
    ]
  },
  {
    character: 'ソ',
    romaji: 'so',
    strokes: [
      {
        id: 1,
        name: 'Left diagonal',
        pathData: 'M 140 80 Q 160 140 140 200',
        startX: 140,
        startY: 80
      },
      {
        id: 2,
        name: 'Right diagonal',
        pathData: 'M 260 80 Q 220 180 260 300',
        startX: 260,
        startY: 80
      }
    ]
  },

  // T-row (タ行)
  {
    character: 'タ',
    romaji: 'ta',
    strokes: [
      {
        id: 1,
        name: 'Top horizontal',
        pathData: 'M 100 100 Q 200 90 280 105',
        startX: 100,
        startY: 100
      },
      {
        id: 2,
        name: 'Left diagonal',
        pathData: 'M 160 100 Q 130 200 150 300',
        startX: 160,
        startY: 100
      },
      {
        id: 3,
        name: 'Right diagonal',
        pathData: 'M 260 100 Q 200 200 220 300',
        startX: 260,
        startY: 100
      }
    ]
  },
  {
    character: 'チ',
    romaji: 'chi',
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
        name: 'Second horizontal',
        pathData: 'M 140 170 Q 200 160 260 175',
        startX: 140,
        startY: 170
      },
      {
        id: 3,
        name: 'Vertical',
        pathData: 'M 200 170 Q 200 230 200 290',
        startX: 200,
        startY: 170
      }
    ]
  },
  {
    character: 'ツ',
    romaji: 'tsu',
    strokes: [
      {
        id: 1,
        name: 'Left dot',
        pathData: 'M 120 100 L 140 130',
        startX: 120,
        startY: 100
      },
      {
        id: 2,
        name: 'Middle dot',
        pathData: 'M 200 90 L 210 120',
        startX: 200,
        startY: 90
      },
      {
        id: 3,
        name: 'Right curve',
        pathData: 'M 280 100 Q 260 200 300 300',
        startX: 280,
        startY: 100
      }
    ]
  },
  {
    character: 'テ',
    romaji: 'te',
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
        name: 'Second horizontal',
        pathData: 'M 140 170 Q 200 160 260 175',
        startX: 140,
        startY: 170
      },
      {
        id: 3,
        name: 'Vertical',
        pathData: 'M 200 170 Q 200 230 200 290',
        startX: 200,
        startY: 170
      }
    ]
  },
  {
    character: 'ト',
    romaji: 'to',
    strokes: [
      {
        id: 1,
        name: 'Vertical',
        pathData: 'M 180 80 Q 180 180 180 280',
        startX: 180,
        startY: 80
      },
      {
        id: 2,
        name: 'Right diagonal',
        pathData: 'M 180 160 Q 240 200 280 260',
        startX: 180,
        startY: 160
      }
    ]
  },

  // N-row (ナ行)
  {
    character: 'ナ',
    romaji: 'na',
    strokes: [
      {
        id: 1,
        name: 'Horizontal',
        pathData: 'M 100 140 Q 200 130 300 145',
        startX: 100,
        startY: 140
      },
      {
        id: 2,
        name: 'Diagonal',
        pathData: 'M 200 80 Q 180 180 200 300',
        startX: 200,
        startY: 80
      }
    ]
  },
  {
    character: 'ニ',
    romaji: 'ni',
    strokes: [
      {
        id: 1,
        name: 'Top horizontal',
        pathData: 'M 120 120 Q 200 110 280 125',
        startX: 120,
        startY: 120
      },
      {
        id: 2,
        name: 'Bottom horizontal',
        pathData: 'M 100 220 Q 200 210 300 225',
        startX: 100,
        startY: 220
      }
    ]
  },
  {
    character: 'ヌ',
    romaji: 'nu',
    strokes: [
      {
        id: 1,
        name: 'Top horizontal',
        pathData: 'M 100 100 Q 200 90 280 105',
        startX: 100,
        startY: 100
      },
      {
        id: 2,
        name: 'Cross',
        pathData: 'M 280 100 Q 180 180 120 280 M 180 180 Q 240 240 300 280',
        startX: 280,
        startY: 100
      }
    ]
  },
  {
    character: 'ネ',
    romaji: 'ne',
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
        name: 'Horizontal',
        pathData: 'M 100 120 Q 200 110 300 125',
        startX: 100,
        startY: 120
      },
      {
        id: 3,
        name: 'Left diagonal',
        pathData: 'M 160 120 Q 120 200 140 300',
        startX: 160,
        startY: 120
      },
      {
        id: 4,
        name: 'Right diagonal',
        pathData: 'M 240 120 Q 220 200 260 300',
        startX: 240,
        startY: 120
      }
    ]
  },
  {
    character: 'ノ',
    romaji: 'no',
    strokes: [
      {
        id: 1,
        name: 'Diagonal',
        pathData: 'M 280 80 Q 200 180 180 300',
        startX: 280,
        startY: 80
      }
    ]
  },

  // H-row (ハ行)
  {
    character: 'ハ',
    romaji: 'ha',
    strokes: [
      {
        id: 1,
        name: 'Left diagonal',
        pathData: 'M 180 80 Q 120 180 100 300',
        startX: 180,
        startY: 80
      },
      {
        id: 2,
        name: 'Right diagonal',
        pathData: 'M 220 80 Q 280 180 300 300',
        startX: 220,
        startY: 80
      }
    ]
  },
  {
    character: 'ヒ',
    romaji: 'hi',
    strokes: [
      {
        id: 1,
        name: 'Horizontal',
        pathData: 'M 120 140 Q 200 130 280 145',
        startX: 120,
        startY: 140
      },
      {
        id: 2,
        name: 'Left vertical',
        pathData: 'M 120 140 Q 120 220 120 300',
        startX: 120,
        startY: 140
      },
      {
        id: 3,
        name: 'Right curve',
        pathData: 'M 280 140 Q 280 200 240 260',
        startX: 280,
        startY: 140
      }
    ]
  },
  {
    character: 'フ',
    romaji: 'fu',
    strokes: [
      {
        id: 1,
        name: 'Horizontal with curve',
        pathData: 'M 100 120 Q 200 110 280 125 Q 260 200 240 300',
        startX: 100,
        startY: 120
      }
    ]
  },
  {
    character: 'ヘ',
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
    character: 'ホ',
    romaji: 'ho',
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
        name: 'Vertical',
        pathData: 'M 200 100 Q 200 200 200 300',
        startX: 200,
        startY: 100
      },
      {
        id: 3,
        name: 'Left diagonal',
        pathData: 'M 200 180 Q 140 240 100 300',
        startX: 200,
        startY: 180
      },
      {
        id: 4,
        name: 'Right diagonal',
        pathData: 'M 200 180 Q 260 240 300 300',
        startX: 200,
        startY: 180
      }
    ]
  },

  // M-row (マ行)
  {
    character: 'マ',
    romaji: 'ma',
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
        name: 'Diagonal',
        pathData: 'M 280 100 Q 200 200 240 300',
        startX: 280,
        startY: 100
      }
    ]
  },
  {
    character: 'ミ',
    romaji: 'mi',
    strokes: [
      {
        id: 1,
        name: 'Top stroke',
        pathData: 'M 140 100 Q 200 90 260 105',
        startX: 140,
        startY: 100
      },
      {
        id: 2,
        name: 'Middle stroke',
        pathData: 'M 160 170 Q 200 160 240 175',
        startX: 160,
        startY: 170
      },
      {
        id: 3,
        name: 'Bottom stroke',
        pathData: 'M 180 240 Q 200 230 220 245',
        startX: 180,
        startY: 240
      }
    ]
  },
  {
    character: 'ム',
    romaji: 'mu',
    strokes: [
      {
        id: 1,
        name: 'Triangle',
        pathData: 'M 200 80 L 100 280 L 300 280 L 200 80',
        startX: 200,
        startY: 80
      }
    ]
  },
  {
    character: 'メ',
    romaji: 'me',
    strokes: [
      {
        id: 1,
        name: 'Left diagonal',
        pathData: 'M 140 80 Q 180 180 120 300',
        startX: 140,
        startY: 80
      },
      {
        id: 2,
        name: 'Right diagonal',
        pathData: 'M 260 80 Q 200 180 280 300',
        startX: 260,
        startY: 80
      }
    ]
  },
  {
    character: 'モ',
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
        name: 'Middle horizontal',
        pathData: 'M 100 180 Q 200 170 300 185',
        startX: 100,
        startY: 180
      },
      {
        id: 3,
        name: 'Bottom horizontal',
        pathData: 'M 100 260 Q 200 250 300 265',
        startX: 100,
        startY: 260
      }
    ]
  },

  // Y-row (ヤ行)
  {
    character: 'ヤ',
    romaji: 'ya',
    strokes: [
      {
        id: 1,
        name: 'Left diagonal',
        pathData: 'M 140 80 Q 120 160 100 240',
        startX: 140,
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
        name: 'Right diagonal',
        pathData: 'M 260 80 Q 260 180 260 300',
        startX: 260,
        startY: 80
      }
    ]
  },
  {
    character: 'ユ',
    romaji: 'yu',
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
        name: 'Left vertical',
        pathData: 'M 140 100 Q 140 180 140 260',
        startX: 140,
        startY: 100
      },
      {
        id: 3,
        name: 'Bottom horizontal',
        pathData: 'M 140 260 Q 200 250 300 265',
        startX: 140,
        startY: 260
      }
    ]
  },
  {
    character: 'ヨ',
    romaji: 'yo',
    strokes: [
      {
        id: 1,
        name: 'Top horizontal',
        pathData: 'M 140 100 L 260 100',
        startX: 140,
        startY: 100
      },
      {
        id: 2,
        name: 'Middle horizontal',
        pathData: 'M 140 180 L 260 180',
        startX: 140,
        startY: 180
      },
      {
        id: 3,
        name: 'Right vertical and bottom',
        pathData: 'M 260 100 L 260 260 L 140 260',
        startX: 260,
        startY: 100
      }
    ]
  },

  // R-row (ラ行)
  {
    character: 'ラ',
    romaji: 'ra',
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
        name: 'Diagonal',
        pathData: 'M 280 100 Q 200 200 220 300',
        startX: 280,
        startY: 100
      }
    ]
  },
  {
    character: 'リ',
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
        pathData: 'M 250 80 Q 250 180 250 300',
        startX: 250,
        startY: 80
      }
    ]
  },
  {
    character: 'ル',
    romaji: 'ru',
    strokes: [
      {
        id: 1,
        name: 'Left vertical',
        pathData: 'M 140 80 Q 140 180 140 260',
        startX: 140,
        startY: 80
      },
      {
        id: 2,
        name: 'Right diagonal',
        pathData: 'M 260 80 Q 200 200 280 300',
        startX: 260,
        startY: 80
      }
    ]
  },
  {
    character: 'レ',
    romaji: 're',
    strokes: [
      {
        id: 1,
        name: 'L shape',
        pathData: 'M 160 80 L 160 240 Q 200 280 300 260',
        startX: 160,
        startY: 80
      }
    ]
  },
  {
    character: 'ロ',
    romaji: 'ro',
    strokes: [
      {
        id: 1,
        name: 'Box',
        pathData: 'M 140 100 L 260 100 L 260 260 L 140 260 L 140 100',
        startX: 140,
        startY: 100
      }
    ]
  },

  // W-row (ワ行)
  {
    character: 'ワ',
    romaji: 'wa',
    strokes: [
      {
        id: 1,
        name: 'Top horizontal',
        pathData: 'M 120 100 Q 200 90 280 105',
        startX: 120,
        startY: 100
      },
      {
        id: 2,
        name: 'Left vertical',
        pathData: 'M 140 100 Q 120 200 140 300',
        startX: 140,
        startY: 100
      },
      {
        id: 3,
        name: 'Right diagonal',
        pathData: 'M 260 100 Q 240 200 260 300',
        startX: 260,
        startY: 100
      }
    ]
  },
  {
    character: 'ヲ',
    romaji: 'wo',
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
        name: 'Second horizontal',
        pathData: 'M 140 170 Q 200 160 260 175',
        startX: 140,
        startY: 170
      },
      {
        id: 3,
        name: 'Vertical with tail',
        pathData: 'M 260 170 Q 260 230 240 300',
        startX: 260,
        startY: 170
      }
    ]
  },
  {
    character: 'ン',
    romaji: 'n',
    strokes: [
      {
        id: 1,
        name: 'Left dot',
        pathData: 'M 140 120 L 160 150',
        startX: 140,
        startY: 120
      },
      {
        id: 2,
        name: 'Right curve',
        pathData: 'M 280 100 Q 260 200 300 300',
        startX: 280,
        startY: 100
      }
    ]
  }
];

export default katakanaData;
