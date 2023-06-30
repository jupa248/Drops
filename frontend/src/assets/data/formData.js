export const advProps = {
  appearance: [
    {
      title: "clarity",
      options: ["clear", "hazy", "faulty"],
    },
    {
      title: "intensity",
      options: ["pale", "medium", "deep"],
    },
    {
      title: "color$",
      options: [
        "lemon-green",
        "lemon",
        "gold",
        "amber",
        "brown",
        "pink",
        "salmon",
        "orange",
        "purple",
        "ruby",
        "garnet",
        "tawny",
        "deep-tawny",
      ],
    },
  ],
  nose: [
    {
      title: "condition$",
      options: ["clean", "unclean", "faulty"],
    },
    {
      title: "intensity$",
      options: ["light", "medium(-)", "medium", "medium(+)", "pronounced"],
    },
    {
      title: "aroma$characteristics",
      options: ["primary", "secondary", "tertiary"],
    },
    {
      title: "development",
      options: [
        "youthful",
        "developing",
        "fully developed",
        "tired/past its best",
      ],
    },
  ],
  palate: [
    {
      title: "sweetness",
      options: [
        "dry",
        "off-dry",
        "medium-dry",
        "medium-sweet",
        "sweet",
        "luscious",
      ],
    },
    {
      title: "acidity",
      options: ["low", "medium(-)", "medium", "medium(+)", "high"],
    },
    {
      title: "tannin",
      options: ["low", "medium(-)", "medium", "medium(+)", "high"],
    },
    {
      title: "alcohol",
      options: ["low", "medium", "high"],
    },
    {
      title: "body$",
      options: ["light", "medium(-)", "medium", "medium(+)", "full"],
    },
    {
      title: "flavour$intensity",
      options: ["light", "medium(-)", "medium", "medium(+)", "pronounced"],
    },
    {
      title: "flavour$characteristics",
      options: ["primary", "secondary", "tertiary"],
    },
    {
      title: "finish$",
      options: ["short", "medium(-)", "medium", "medium(+)", "long"],
    },
  ],
  conclusions: [
    {
      title: "quality$level",
      options: [
        "faulty",
        "poor",
        "acceptable",
        "good",
        "very good",
        "outstanding",
      ],
    },
  ],
};

export const editInputProps = [
  'date',
  'price',
  'year',
  'variety',
  'winery',
  'region',
  'color',
  'aroma',
  'body',
  'taste',
  'finish',
  'mynotes',
];

export const ratingProps = [
  'aroma$Rate',
  'body$Rate',
  'color$Rate',
  'taste$Rate',
  'finish$Rate',
];

export const advNotesProps = [
  'clarity',
  'intensity',
  'color$',
  'condition$',
  'intensity$',
  'aroma$characteristics',
  'development',
  'sweetness',
  'acidity',
  'tannin',
  'alcohol',
  'body$',
  'flavour$intensity',
  'flavour$characteristics',
  'finish$',
  'quality$level',
];