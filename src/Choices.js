const Choices = {
  Short: {
    prompts: ["adjective", "noun", "verb"],
    template: "There was a [adjective] [noun] who loved to [verb]",
  },
  Fairytale: {
    template:
      "Once upon a time in a far away [place], there lived a large [adjective] [noun]. It loved to [verb] with [plural_noun] all day long, until one day an evil [noun2] cast a spell over the [place] and all its inhabitants. The [noun] was cursed to [verb2] [adverb] for [length_of_time], or until a [adjective2] [noun3] could vanquish the evil [noun].",
    prompts: [
      "adjective",
      "noun",
      "verb",
      "plural_noun",
      "place",
      "verb2",
      "adverb",
      "length_of_time",
      "adjective2",
      "noun2",
      "noun3",
    ],
  },
  Zoo: {
    template:
      "Today I went to the zoo. I saw a(n) [adjective1] [noun1] jumping up and down in its tree. He [verb_past_tense] [adverb1] through the large tunnel that led to its [adjective2] [noun2]. I got some peanuts and passed them through the cage to a gigantic gray [noun3] towering above my head. Feeding that animal made me hungry. I went to get a [adjective3] scoop of ice cream. Afterwards I had to [verb1] [adverb2] to catch our bus. When I got home I was too tired to [verb2] after my [adjective4] day at the zoo.",
    prompts: [
      "adjective1",
      "noun1",
      "verb_past_tense",
      "adverb1",
      "adjective2",
      "noun2",
      "noun3",
      "adjective3",
      "verb1",
      "adverb2",
      "verb2",
      "adjective4",
    ],
  },
};

export default Choices;
