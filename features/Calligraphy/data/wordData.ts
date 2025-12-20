import { IWordData } from '@/features/Calligraphy/store/useCalligraphyStore';

// Words for Stage 3 practice, organized by starting character
export const wordDataByCharacter: Record<string, IWordData[]> = {
  // Hiragana words
  あ: [
    { word: 'あめ', reading: 'ame', meaning: 'rain' },
    { word: 'あさ', reading: 'asa', meaning: 'morning' },
    { word: 'あお', reading: 'ao', meaning: 'blue' }
  ],
  い: [
    { word: 'いぬ', reading: 'inu', meaning: 'dog' },
    { word: 'いえ', reading: 'ie', meaning: 'house' },
    { word: 'いま', reading: 'ima', meaning: 'now' }
  ],
  う: [
    { word: 'うみ', reading: 'umi', meaning: 'sea' },
    { word: 'うた', reading: 'uta', meaning: 'song' },
    { word: 'うえ', reading: 'ue', meaning: 'above' }
  ],
  え: [
    { word: 'えき', reading: 'eki', meaning: 'station' },
    { word: 'えん', reading: 'en', meaning: 'yen' }
  ],
  お: [
    { word: 'おと', reading: 'oto', meaning: 'sound' },
    { word: 'おか', reading: 'oka', meaning: 'hill' },
    { word: 'おに', reading: 'oni', meaning: 'demon' }
  ],
  か: [
    { word: 'かわ', reading: 'kawa', meaning: 'river' },
    { word: 'かさ', reading: 'kasa', meaning: 'umbrella' },
    { word: 'かお', reading: 'kao', meaning: 'face' }
  ],
  き: [
    { word: 'きた', reading: 'kita', meaning: 'north' },
    { word: 'きく', reading: 'kiku', meaning: 'chrysanthemum' }
  ],
  く: [
    { word: 'くも', reading: 'kumo', meaning: 'cloud' },
    { word: 'くち', reading: 'kuchi', meaning: 'mouth' },
    { word: 'くに', reading: 'kuni', meaning: 'country' }
  ],
  け: [{ word: 'けむり', reading: 'kemuri', meaning: 'smoke' }],
  こ: [
    { word: 'こえ', reading: 'koe', meaning: 'voice' },
    { word: 'ここ', reading: 'koko', meaning: 'here' },
    { word: 'こめ', reading: 'kome', meaning: 'rice' }
  ],
  さ: [
    { word: 'さくら', reading: 'sakura', meaning: 'cherry blossom' },
    { word: 'さけ', reading: 'sake', meaning: 'alcohol' }
  ],
  し: [
    { word: 'しま', reading: 'shima', meaning: 'island' },
    { word: 'した', reading: 'shita', meaning: 'below' }
  ],
  す: [
    { word: 'すし', reading: 'sushi', meaning: 'sushi' },
    { word: 'すな', reading: 'suna', meaning: 'sand' }
  ],
  せ: [{ word: 'せかい', reading: 'sekai', meaning: 'world' }],
  そ: [
    { word: 'そら', reading: 'sora', meaning: 'sky' },
    { word: 'そと', reading: 'soto', meaning: 'outside' }
  ],
  た: [
    { word: 'たこ', reading: 'tako', meaning: 'octopus' },
    { word: 'たね', reading: 'tane', meaning: 'seed' }
  ],
  ち: [
    { word: 'ちず', reading: 'chizu', meaning: 'map' },
    { word: 'ちち', reading: 'chichi', meaning: 'father' }
  ],
  つ: [
    { word: 'つき', reading: 'tsuki', meaning: 'moon' },
    { word: 'つち', reading: 'tsuchi', meaning: 'earth' }
  ],
  て: [
    { word: 'てら', reading: 'tera', meaning: 'temple' },
    { word: 'てん', reading: 'ten', meaning: 'sky/heaven' }
  ],
  と: [
    { word: 'とり', reading: 'tori', meaning: 'bird' },
    { word: 'とけい', reading: 'tokei', meaning: 'clock' }
  ],
  な: [
    { word: 'なつ', reading: 'natsu', meaning: 'summer' },
    { word: 'なみ', reading: 'nami', meaning: 'wave' }
  ],
  に: [
    { word: 'にく', reading: 'niku', meaning: 'meat' },
    { word: 'にし', reading: 'nishi', meaning: 'west' }
  ],
  ぬ: [{ word: 'ぬの', reading: 'nuno', meaning: 'cloth' }],
  ね: [
    { word: 'ねこ', reading: 'neko', meaning: 'cat' },
    { word: 'ねつ', reading: 'netsu', meaning: 'fever' }
  ],
  の: [{ word: 'のり', reading: 'nori', meaning: 'seaweed' }],
  は: [
    { word: 'はな', reading: 'hana', meaning: 'flower' },
    { word: 'はし', reading: 'hashi', meaning: 'bridge' }
  ],
  ひ: [
    { word: 'ひと', reading: 'hito', meaning: 'person' },
    { word: 'ひかり', reading: 'hikari', meaning: 'light' }
  ],
  ふ: [
    { word: 'ふね', reading: 'fune', meaning: 'ship' },
    { word: 'ふゆ', reading: 'fuyu', meaning: 'winter' }
  ],
  へ: [{ word: 'へや', reading: 'heya', meaning: 'room' }],
  ほ: [
    { word: 'ほし', reading: 'hoshi', meaning: 'star' },
    { word: 'ほん', reading: 'hon', meaning: 'book' }
  ],
  ま: [
    { word: 'まち', reading: 'machi', meaning: 'town' },
    { word: 'まど', reading: 'mado', meaning: 'window' }
  ],
  み: [
    { word: 'みず', reading: 'mizu', meaning: 'water' },
    { word: 'みち', reading: 'michi', meaning: 'road' }
  ],
  む: [{ word: 'むし', reading: 'mushi', meaning: 'insect' }],
  め: [{ word: 'めし', reading: 'meshi', meaning: 'rice/meal' }],
  も: [{ word: 'もり', reading: 'mori', meaning: 'forest' }],
  や: [
    { word: 'やま', reading: 'yama', meaning: 'mountain' },
    { word: 'やね', reading: 'yane', meaning: 'roof' }
  ],
  ゆ: [
    { word: 'ゆき', reading: 'yuki', meaning: 'snow' },
    { word: 'ゆめ', reading: 'yume', meaning: 'dream' }
  ],
  よ: [{ word: 'よる', reading: 'yoru', meaning: 'night' }],
  ら: [{ word: 'らく', reading: 'raku', meaning: 'comfort' }],
  り: [{ word: 'りく', reading: 'riku', meaning: 'land' }],
  る: [{ word: 'るす', reading: 'rusu', meaning: 'absence' }],
  れ: [{ word: 'れき', reading: 'reki', meaning: 'history' }],
  ろ: [{ word: 'ろく', reading: 'roku', meaning: 'six' }],
  わ: [{ word: 'わに', reading: 'wani', meaning: 'crocodile' }],
  を: [],
  ん: []
};

// Helper function to get a random word for a character
export const getWordForCharacter = (character: string): IWordData | null => {
  const words = wordDataByCharacter[character];
  if (!words || words.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
};

export default wordDataByCharacter;
