// export const vocabularyData = [
//     {
//         title: 'Primary Aromas and Flavours',
//         subTitle: 'The aromas and flavours of the grape and alcoholic fermentation',
//         categoryTitles: ['Key questions', 'Clusters', 'Descriptors'],
//         key$questions: {
//             questionTitle: 'Are the flavours...',
//             question: ['delicate or intense?', 'simple or complex?', 'generic or well defined?', 'fresh or cooked?', 'under-ripe or ripe or over-ripe?']
//         },
//         clusters: {
//             floral: ['acacia', 'honeysuckle', 'chamomile', 'elderflower', 'geranium', 'blossom','rose', 'violet'],
//             green$fruit: ['apple', 'gooseberry', 'pear', 'pear drop', 'quince', 'grape'],
//             citrus$fruit: ['grapefruit', 'lemon', 'lime', 'orange peel', 'lemon peel'],
//             stone$fruit: ['peach', 'apricot', 'nectarine'],
//             tropical$fruit: ['banana', 'lychee', 'mango', 'melon', 'passion fruit', 'pineapple'],
//             red$fruit: ['redcurrant', 'cranberry', 'raspberry', 'strawberry', 'red cherry', 'red plum'],
//             black$fruit: ['blackcurrant', 'blackberry', 'bramble', 'blueberry', 'black cherry', 'black plum'],
//             dried$or$cooked$fruit: ['fig', 'prune', 'raisin', 'sultana', 'kirsch', 'jamminess', 'baked/stewed fruits','preserved fruits'],
//             herbaceous: ['green bell pepper', 'grass', 'tomato leaf', 'asparagus', 'blackcurrant leaf'],
//             herbal: ['eucalyptus', 'mint', 'medicinal', 'lavender', 'fennel', 'dill'],
//             pungent$spice: ['black/white pepper', 'liquorice'],
//             other: ['flint', 'wet stones', 'wet wool']
//     },
// },
//     {
//         title: 'Secondary Aromas and Flavours',
//         subTitle: 'The aromas and flavours of post-fermentation winemaking',
//         categoryTitles: ['Key questions', 'Clusters', 'Descriptors'],
//         key$questions: {
//             questionTitle: 'Are the flavours from...',
//             question: ['yeast, MLF or oak?']
//         },
//         clusters: {
//             yeast: ['biscuit', 'bread', 'toast', 'pastry', 'brioche', 'bread dough', 'cheese'],
//             MLF: ['butter', 'cheese', 'cream'],
//             oak: ['vanilla', 'cloves', 'nutmeg', 'coconut', 'butterscotch', 'toast', 'cedar'],
//     },
// },
//     {
//         title: 'Tertiary Aromas and Flavours',
//         subTitle: 'The aromas and flavours of maturation',
//         categoryTitles: ['Key questions', 'Clusters', 'Descriptors'],
//         key$questions: {
//             questionTitle: 'Do the flavours show...',
//             question: ['deliberate oxidation', 'fruit development', 'bottle age']
//         },
//         clusters: {
//             deliberate$oxidation: ['almond', 'marzipan', 'hazelnut', 'walnut', 'chocolate', 'coffee', 'toffee', 'caramel'],
//             fruit$development$White: ['dried apricot', 'marmalade', 'dried apple', 'dried banana', 'etc.'],
//             fruit$development$Red: ['fig', 'prune', 'tar', 'dried blackberry', 'dried cranberry', 'cooked blackberry', 'cooked red plum', 'etc.'],
//             bottle$age$White: ['petrol', 'kerosene', 'cinnamon', 'ginger', 'nutmeg', 'toast', 'nutty', 'mushroom', 'hay', 'honey'],
//             bottle$age$Red: ['leather', 'forest floor', 'earth', 'mushroom', 'game', 'tobacco', 'vegetal','wet leaves', 'savoury', 'meaty', 'farmyard']
//     },
// },
// ]

export const vocabularyData = [
  {
    title: 'Primary Aromas and Flavours',
    subTitle: 'The aromas and flavours of the grape and alcoholic fermentation',
    categories: [
      {
        title: 'Key questions',
        questions: [
          'Are the flavours delicate or intense?',
          'Are the flavours simple or complex?',
          'Are the flavours generic or well-defined?',
          'Are the flavours fresh or cooked?',
          'Are the flavours under-ripe, ripe, or over-ripe?',
        ],
      },
      {
        title: 'Floral',
        descriptors: [
          'acacia',
          'honeysuckle',
          'chamomile',
          'elderflower',
          'geranium',
          'blossom',
          'rose',
          'violet',
        ],
      },
      {
        title: 'Green fruit',
        descriptors: [
          'apple',
          'gooseberry',
          'pear',
          'pear drop',
          'quince',
          'grape',
        ],
      },
      {
        title: 'Citrus fruit',
        descriptors: [
          'grapefruit',
          'lemon',
          'lime',
          'orange peel',
          'lemon peel',
        ],
      },
      {
        title: 'Stone fruit',
        descriptors: ['peach', 'apricot', 'nectarine'],
      },
      {
        title: 'Tropical fruit',
        descriptors: [
          'banana',
          'lychee',
          'mango',
          'melon',
          'passion fruit',
          'pineapple',
        ],
      },
      {
        title: 'Red fruit',
        descriptors: [
          'redcurrant',
          'cranberry',
          'raspberry',
          'strawberry',
          'red cherry',
          'red plum',
        ],
      },
      {
        title: 'Black fruit',
        descriptors: [
          'blackcurrant',
          'blackberry',
          'bramble',
          'blueberry',
          'black cherry',
          'black plum',
        ],
      },
      {
        title: 'Dried/cooked fruit',
        descriptors: [
          'fig',
          'prune',
          'raisin',
          'sultana',
          'kirsch',
          'jamminess',
          'baked/stewed fruits',
          'preserved fruits',
        ],
      },
      {
        title: 'Herbaceous',
        descriptors: [
          'green bell pepper (capsicum)',
          'grass',
          'tomato leaf',
          'asparagus',
          'blackcurrant leaf',
        ],
      },
      {
        title: 'Herbal',
        descriptors: [
          'eucalyptus',
          'mint',
          'medicinal',
          'lavender',
          'fennel',
          'dill',
        ],
      },
      {
        title: 'Pungent spice',
        descriptors: ['black/white pepper', 'liquorice'],
      },
      {
        title: 'Other',
        descriptors: ['flint', 'wet stones', 'wet wool'],
      },
    ],
  },
  {
    title: 'Secondary Aromas and Flavours',
    subTitle: 'The aromas and flavours of post-fermentation winemaking',
    categories: [
      {
        title: 'Key questions',
        questions: ['Are the flavours from yeast, MLF, or oak?'],
      },
      {
        title: 'Clusters',
        descriptors: [
          'biscuit',
          'bread',
          'toast',
          'pastry',
          'brioche',
          'bread dough',
          'cheese',
        ],
      },
      {
        title: 'MLF',
        descriptors: ['butter', 'cheese', 'cream'],
      },
      {
        title: 'Oak',
        descriptors: [
          'vanilla',
          'cloves',
          'nutmeg',
          'coconut',
          'butterscotch',
          'toast',
          'cedar',
        ],
      },
    ],
  },
  {
    title: 'Tertiary Aromas and Flavours',
    subTitle: 'The aromas and flavours of maturation',
    categories: [
      {
        title: 'Key questions',
        questions: [
          'Do the flavours show deliberate oxidation?',
          'Do the flavours show fruit development?',
          'Do the flavours show bottle age?',
        ],
      },
      {
        title: 'Deliberate oxidation',
        descriptors: [
          'almond',
          'marzipan',
          'hazelnut',
          'walnut',
          'chocolate',
          'coffee',
          'toffee',
          'caramel',
        ],
      },
      {
        title: 'Fruit development (White)',
        descriptors: [
          'dried apricot',
          'marmalade',
          'dried apple',
          'dried banana',
          'etc.',
        ],
      },
      {
        title: 'Fruit development (Red)',
        descriptors: [
          'fig',
          'prune',
          'tar',
          'dried blackberry',
          'dried cranberry',
          'cooked blackberry',
          'cooked red plum',
          'etc.',
        ],
      },
      {
        title: 'Bottle age (White)',
        descriptors: [
          'petrol',
          'kerosene',
          'cinnamon',
          'ginger',
          'nutmeg',
          'toast',
          'nutty',
          'mushroom',
          'hay',
          'honey',
        ],
      },
      {
        title: 'Bottle age (Red)',
        descriptors: [
          'leather',
          'forest floor',
          'earth',
          'mushroom',
          'game',
          'tobacco',
          'vegetal',
          'wet leaves',
          'savoury',
          'meaty',
          'farmyard',
        ],
      },
    ],
  },
];
///////////////

export const vocabularyClusters1 = [
  {
    title: 'Floral:',
    descriptors: [
      'acacia,',
      'honeysuckle,',
      'chamomile,',
      'elderflower,',
      'geranium,',
      'blossom,',
      'rose,',
      'violet',
    ],
  },
  {
    title: 'Green fruit:',
    descriptors: [
      'apple,',
      'gooseberry,',
      'pear,',
      'pear drop,',
      'quince,',
      'grape',
    ],
  },
  {
    title: 'Citrus fruit:',
    descriptors: [
      'grapefruit,',
      'lemon,',
      'lime,',
      'orange peel,',
      'lemon peel',
    ],
  },
  {
    title: 'Stone fruit:',
    descriptors: ['peach,', 'apricot,', 'nectarine'],
  },
  {
    title: 'Tropical fruit:',
    descriptors: [
      'banana,',
      'lychee,',
      'mango,',
      'melon,',
      'passion fruit,',
      'pineapple',
    ],
  },
  {
    title: 'Red fruit:',
    descriptors: [
      'redcurrant,',
      'cranberry,',
      'raspberry,',
      'strawberry,',
      'red cherry,',
      'red plum',
    ],
  },
  {
    title: 'Black fruit:',
    descriptors: [
      'blackcurrant,',
      'blackberry,',
      'bramble,',
      'blueberry,',
      'black cherry,',
      'black plum',
    ],
  },
  {
    title: 'Dried/cooked fruit: ',
    descriptors: [
      'fig,,',
      'prune,',
      'raisin,',
      'sultana,',
      'kirsch,',
      'jamminess,',
      'baked/stewed fruits,',
      'preserved fruits',
    ],
  },
  {
    title: 'Herbaceous:',
    descriptors: [
      'green bell pepper (capsicum),',
      'grass,',
      'tomato leaf,',
      'asparagus,',
      'blackcurrant leaf',
    ],
  },
  {
    title: 'Herbal:',
    descriptors: [
      'eucalyptus,',
      'mint,',
      'medicinal,',
      'lavender,',
      'fennel,',
      'dill',
    ],
  },
  {
    title: 'Pungent spice:',
    descriptors: ['black/white pepper,', 'liquorice'],
  },
  {
    title: 'Other:',
    descriptors: ['flint,', 'wet stones,', 'wet wool'],
  },
];

export const vocabularyClusters2 = [
  {
    title: 'Yeast (lees, autolysis):',
    descriptors: [
      'biscuit',
      'bread',
      'toast',
      'pastry',
      'brioche',
      'bread dough',
      'cheese',
    ],
  },
  {
    title: 'MLF',
    descriptors: ['butter', 'cheese', 'cream'],
  },
  {
    title: 'Oak',
    descriptors: [
      'vanilla',
      'cloves',
      'nutmeg',
      'coconut',
      'butterscotch',
      'toast',
      'cedar',
    ],
  },
];

export const vocabularyClusters3 = [
  {
    title: 'Deliberate oxidation',
    descriptors: [
      'almond',
      'marzipan',
      'hazelnut',
      'walnut',
      'chocolate',
      'coffee',
      'toffee',
      'caramel',
    ],
  },
  {
    title: 'Fruit development (White)',
    descriptors: [
      'dried apricot',
      'marmalade',
      'dried apple',
      'dried banana',
      'etc.',
    ],
  },
  {
    title: 'Fruit development (Red)',
    descriptors: [
      'fig',
      'prune',
      'tar',
      'dried blackberry',
      'dried cranberry',
      'cooked blackberry',
      'cooked red plum',
      'etc.',
    ],
  },
  {
    title: 'Bottle age (White)',
    descriptors: [
      'petrol',
      'kerosene',
      'cinnamon',
      'ginger',
      'nutmeg',
      'toast',
      'nutty',
      'mushroom',
      'hay',
      'honey',
    ],
  },
  {
    title: 'Bottle age (Red)',
    descriptors: [
      'leather',
      'forest floor',
      'earth',
      'mushroom',
      'game',
      'tobacco',
      'vegetal',
      'wet leaves',
      'savoury',
      'meaty',
      'farmyard',
    ],
  },
];
