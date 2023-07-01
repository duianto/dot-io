export type ChordLibraryRecord = Record<string, string[]>;

export interface ChordLibrary {
  letters: ChordLibraryRecord;
  chords: ChordLibraryRecord;
  trigrams: ChordLibraryRecord;
  lexical: ChordLibraryRecord;
  all: ChordLibraryRecord;
  lexicographic: ChordLibraryRecord;
  supersonic: ChordLibraryRecord;
  chordsLite: ChordLibraryRecord;
  lexicalSentences: any;
  lexicalSentencesDuos: any;
  lexicalSentencesTrios: any;
  customtier: ChordLibraryRecord;
  allChords: ChordLibraryRecord;
  specialCharacters: ChordLibraryRecord;
  //sentences: ChordLibraryRecord;
}

// This chord library maps to the key positions in the keyPositions.ts file
export const chordLibrary: ChordLibrary = {
  lexicalSentences: {
    SentenceOne: {
      I: [],
      love: [],
      to: [],
      explore: [],
      new: [],
      places: [],
      and: [],
      create: [],
      lasting: [],
      'memories.': [],
    },
    SentenceTwo: {
      The: [],
      sunsets: [],
      on: [],
      the: [],
      beach: [],
      are: [],
      simply: [],
      breathtaking: [],
      and: [],
      leave: [],
      me: [],
      in: [],
      'awe.': [],
    },
    SentenceThree: {
      She: [],
      practiced: [],
      ballet: [],
      'diligently,': [],
      honing: [],
      her: [],
      technique: [],
      and: [],
      perfecting: [],
      graceful: [],
      'movements.': [],
    },
  },
  lexicalSentencesDuos: {
    SentenceOne: {
      'I love': [],
      'love to': [],
      'to explore': [],
      'new places': [],
      'and create': [],
      'lasting memories.': [],
    },
    SentenceTwo: {
      'The sunsets': [],
      'on the': [],
      'beach are': [],
      'simply breathtaking': [],
      'and leave': [],
      'me in': [],
      'awe.': [],
    },
    SentenceThree: {
      'She practiced': [],
      'practiced ballet': [],
      'ballet diligently': [],
      'diligently honing,': [],
      'honing her': [],
      'her technique': [],
      'technique and': [],
      'and perfecting': [],
      'perfecting graceful': [],
      'graceful movements': [],
    },
  },
  lexicalSentencesTrios: {
    SentenceOne: {
      'I love to': [],
      'explore new places': [],
      'and create lasting': [],
      'memories.': [],
    },
    SentenceTwo: {
      'The sunsets on': [],
      'the beach are': [],
      'simply breathtaking and': [],
      'and leave me': [],
      'in awe.': [],
    },
    SentenceThree: {
      'She practiced ballet': [],
      'practiced ballet diligently': [],
      'ballet diligently honing': [],
      'diligently honing, her': [],
      'honing her technique': [],
      'her technique and': [],
      'technique and perfecting': [],
      'and perfecting graceful': [],
      'graceful movements.': [],
    },
  },
  /*
  sentences: {
    'I love to explore new places and create lasting memories.': [],
    'The sunsets on the beach are simply breathtaking and always leave me in awe.':
      [],
    "Family is the foundation that supports us through all of life's challenges and triumphs.":
      [],
    'We should always strive to be kind and compassionate towards others.':
      [],
    'Learning is a lifelong journey that never fails to expand our horizons.':
      [],
    'Laughter is the best medicine; it has the power to heal and bring joy.':
      [],
    'Friendship is a priceless treasure that should be cherished and nurtured.':
      [],
    'In the darkest moments, hope is the guiding light that leads us towards a brighter tomorrow.':
      [],
    'Time spent in nature is a reminder of the beauty and serenity that surrounds us.':
      [],
    'Success is not measured by wealth or status, but by the positive impact we make on others.':
      [],
    'The love between a parent and child is unbreakable and filled with endless devotion.':
      [],
    "A smile can brighten someone's day and create ripples of happiness in the world.":
      [],
    'Hard work and perseverance are the keys to achieving our dreams and aspirations.':
      [],
    'Music has a unique ability to touch our souls and evoke powerful emotions.':
      [],
    'Kindness costs nothing but has the power to change lives.': [],
    'The beauty of art lies in its ability to express the depths of human emotions.':
      [],
    'Education is the passport to a better future and a world of opportunities.':
      [],
    'Happiness is found in the simplest moments of gratitude and contentment.':
      [],
    'Courage is not the absence of fear, but the strength to face it head-on.':
      [],
    'In a world filled with negativity, be the light that radiates positivity and kindness.':
      [],
    'We are all connected by the common thread of humanity, and our differences should be celebrated.':
      [],
    'The power of forgiveness liberates us from the shackles of resentment and bitterness.':
      [],
    'Dream big, work hard, and never stop believing in yourself.': [],
    'The greatest gift we can give others is our undivided attention and genuine presence.':
      [],
    'Gratitude is a powerful force that can transform our outlook on life.':
      [],
    'Embrace change and adaptability, for they are the stepping stones to growth and progress.':
      [],
    'Love is a verb that requires constant action and nurturing.': [],
    "A kind word has the potential to brighten someone's day and restore their faith in humanity.":
      [],
    'The journey of a thousand miles begins with a single step.': [],
    "Empathy allows us to walk in someone else's shoes and understand their perspective.":
      [],
    'Success is not an overnight achievement but a result of consistent effort and perseverance.':
      [],
    'The power of imagination knows no bounds and can unlock endless possibilities.':
      [],
    'Our actions today shape the world we leave behind for future generations.':
      [],
    'Love is the universal language that transcends barriers and brings people together.':
      [],
    'True strength lies not in physical prowess but in the ability to overcome adversity.':
      [],
    'The pursuit of knowledge enriches our lives and broadens our understanding of the world.':
      [],
    'A good book has the power to transport us to different realms and ignite our imagination.':
      [],
    'Believe in yourself, for you are capable of achieving great things.': [],
    'The bond between siblings is a lifelong connection that withstands the test of time.':
      [],
    'Compassion is the key to building a more inclusive and understanding society.':
      [],
    'Every cloud has a silver lining; even in the darkest moments, there is hope.':
      [],
    'The sound of laughter is contagious and can bring joy to even the gloomiest of days.':
      [],
    'True wealth lies in the richness of experiences and meaningful relationships.':
      [],
    'The beauty of nature is a constant reminder of the miracles that surround us.':
      [],
    "Patience is a virtue that allows us to navigate life's challenges with grace and resilience.":
      [],
    'The power of a genuine smile can brighten the lives of those around us.':
      [],
    'Education is the foundation upon which we build a better and brighter future.':
      [],
    'Dreams become realities when we have the courage to pursue them.': [],
    'Life is a journey filled with ups and downs, but it is the lessons we learn along the way that define us.':
      [],
    'Kindness is like a boomerang; it always comes back to us in unexpected ways.':
      [],
    'The beauty of a sunset reminds us of the transient nature of life and the importance of cherishing each moment.':
      [],
    'A good friend is like a rare gem, cherished for their uniqueness and the joy they bring to our lives.':
      [],
    "Success is not about reaching the destination; it's about the journey and the lessons learned along the way.":
      [],
    'The power of a positive mindset can transform obstacles into opportunities.':
      [],
    'Gratitude unlocks the fullness of life and allows us to appreciate the present moment.':
      [],
    'Love knows no boundaries and has the power to bridge the gaps between cultures and continents.':
      [],
    'The pursuit of happiness is a lifelong journey that starts with self-acceptance and embracing our true selves.':
      [],
    'The strength of a community lies in its ability to come together and support one another in times of need.':
      [],
    'We have the power to make a difference in the world through small acts of kindness and compassion.':
      [],
    'Life is too short to hold grudges; forgiveness sets us free and allows us to move forward.':
      [],
    'Every ending is a new beginning; change brings opportunities for growth and self-discovery.':
      [],
    'The power of a positive attitude can overcome even the most challenging of circumstances.':
      [],
    'In the midst of chaos, finding moments of stillness and peace can restore our inner balance.':
      [],
    'Time is a precious commodity; invest it wisely in things that bring you joy and fulfillment.':
      [],
    "A genuine compliment has the power to brighten someone's day and boost their confidence.":
      [],
    'Learning from our mistakes is a crucial part of personal growth and self-improvement.':
      [],
    'The beauty of diversity lies in the richness of perspectives and the vibrant tapestry it creates.':
      [],
    'Adversity builds resilience and strength; it is through challenges that we grow and evolve.':
      [],
    'The power of a kind word or gesture can have a ripple effect, inspiring others to pay it forward.':
      [],
    'A grateful heart attracts abundance and fosters a positive outlook on life.':
      [],
    'Courage is not the absence of fear, but the willingness to face it head-on.':
      [],
    'The magic of childhood lies in the boundless imagination and the sense of wonder that accompanies it.':
      [],
    'True happiness comes from within; it is not dependent on external circumstances.':
      [],
    'A true leader empowers others and brings out the best in those around them.':
      [],
    'The beauty of a sunrise reminds us that every day is an opportunity for a fresh start.':
      [],
    'The power of a single act of kindness can create a chain reaction of positivity.':
      [],
    "Life's challenges are not meant to break us but to help us discover our inner strength.":
      [],
    'The joy of giving is far greater than any material possession.': [],
    'We are the authors of our own destiny; our choices shape the path we walk.':
      [],
    'The value of a moment is not measured by its duration but by the memories it leaves behind.':
      [],
    'Love is a language that transcends words and is understood by the heart.':
      [],
    'The power of determination and perseverance can overcome even the most daunting of obstacles.':
      [],
    'Change is inevitable; embracing it allows us to grow and evolve.': [],
    'The world is full of beauty, but it is our perception that determines what we see.':
      [],
    'True success is not just about personal achievements but about lifting others up along the way.':
      [],
    'The small acts of kindness we extend to others can have a profound impact on their lives.':
      [],
    'The power of a positive mindset can turn setbacks into stepping stones towards success.':
      [],
    'A genuine apology can mend even the deepest wounds and rebuild trust.':
      [],
    'The beauty of a sunset reminds us to pause and appreciate the simple pleasures in life.':
      [],
    'True friendship is built on trust, loyalty, and a deep understanding of one another.':
      [],
    'The pursuit of knowledge is a lifelong endeavor that broadens our horizons and fuels our curiosity.':
      [],
    'The power of gratitude can transform even the most ordinary moments into extraordinary ones.':
      [],
    'Kindness is contagious; one act of kindness can inspire others to spread positivity.':
      [],
    'The beauty of nature has a way of rejuvenating our spirits and grounding us in the present moment.':
      [],
    'Success is not defined by material possessions but by the impact we have on the lives of others.':
      [],
    'The power of self-belief can move mountains and turn dreams into reality.':
      [],
    "A genuine smile has the power to brighten someone's day and create a ripple of positivity.":
      [],
    'The journey of self-discovery is a lifelong adventure filled with surprises and growth.':
      [],
    'The world is full of opportunities for those who have the courage to pursue their passions.':
      [],
    'Kindness is the language that transcends borders and brings people together.':
      [],
    'The power of empathy lies in its ability to foster understanding and connection.':
      [],
    'Success is not a destination but a continuous journey of growth and self-improvement.':
      [],
    'The beauty of art is its ability to evoke emotions and spark creativity.':
      [],
    'Gratitude is the antidote to negativity and opens the door to abundance.':
      [],
    'Love is the thread that weaves us together and gives meaning to our lives.':
      [],
    'The power of a positive attitude can turn obstacles into stepping stones towards success.':
      [],
    'In the midst of chaos, finding moments of stillness and peace can restore our inner balance.':
      [],
    'Time is a precious gift; invest it in things that bring you joy and fulfillment.':
      [],
    "A kind word has the power to uplift someone's spirit and brighten their day.":
      [],
    'Learning from our mistakes is a vital part of personal growth and self-improvement.':
      [],
    'The beauty of diversity lies in the richness of perspectives and the tapestry it creates.':
      [],
    'Adversity builds resilience and strength; it is through challenges that we grow and evolve.':
      [],
    'The power of a single act of kindness can create a ripple effect, inspiring others to do the same.':
      [],
    'A grateful heart attracts abundance and fosters a positive outlook on life.':
      [],
    'Courage is not the absence of fear, but the willingness to face it head-on.':
      [],
    'The magic of childhood lies in the boundless imagination and sense of wonder that accompanies it.':
      [],
    'True happiness comes from within and is not dependent on external circumstances.':
      [],
    'A true leader empowers others and brings out the best in those around them.':
      [],
    'The beauty of a sunrise reminds us that every day is an opportunity for a fresh start.':
      [],
    'The power of a single act of kindness can create a ripple effect of positivity.':
      [],
    "Life's challenges are not meant to break us but to help us discover our inner strength.":
      [],
    'The joy of giving is far greater than any material possession.': [],
    'We are the authors of our own destiny, and our choices shape the path we walk.':
      [],
    'The value of a moment is not measured by its duration but by the memories it leaves behind.':
      [],
    'Love is a language that transcends words and is understood by the heart.':
      [],
    'The power of determination and perseverance can overcome even the most daunting of obstacles.':
      [],
    'Change is inevitable, and embracing it allows us to grow and evolve.':
      [],
    'The world is full of beauty, but it is our perception that determines what we see.':
      [],
    'True success is not just about personal achievements but about lifting others up along the way.':
      [],
    'The small acts of kindness we extend to others can have a profound impact on their lives.':
      [],
    'The power of a positive mindset can turn setbacks into stepping stones towards success.':
      [],
    'A genuine apology can mend even the deepest wounds and rebuild trust.':
      [],
    'The beauty of a sunset reminds us to pause and appreciate the simple pleasures in life.':
      [],
    'True friendship is built on trust, loyalty, and a deep understanding of one another.':
      [],
    'The pursuit of knowledge is a lifelong endeavor that broadens our horizons and fuels our curiosity.':
      [],
    'The power of gratitude can transform even the most ordinary moments into extraordinary ones.':
      [],
    'Kindness is contagious; one act of kindness can inspire others to spread positivity.':
      [],
    'The beauty of nature has a way of rejuvenating our spirits and grounding us in the present moment.':
      [],
    'Success is not defined by material possessions but by the impact we have on the lives of others.':
      [],
    'The power of self-belief can move mountains and turn dreams into reality.':
      [],
    "A genuine smile has the power to brighten someone's day and create a ripple of positivity.":
      [],
    'The journey of self-discovery is a lifelong adventure filled with surprises and growth.':
      [],
    'The world is full of opportunities for those who have the courage to pursue their passions.':
      [],
    'Kindness is the language that transcends borders and brings people together.':
      [],
    'The power of empathy lies in its ability to foster understanding and connection.':
      [],
    'Success is not a destination but a continuous journey of growth and self-improvement.':
      [],
    'The beauty of art is its ability to evoke emotions and spark creativity.':
      [],
    'Gratitude is the key that unlocks the door to a more fulfilling and meaningful life.':
      [],
    'Love has the power to heal wounds, mend broken hearts, and ignite the soul.':
      [],
    'A positive mindset is a catalyst for success and personal fulfillment.':
      [],
    'In the midst of chaos, finding inner peace is a testament to our resilience.':
      [],
    'Time is a precious resource; invest it in activities that bring you joy and fulfillment.':
      [],
    "A kind gesture can make a world of difference in someone's day.": [],
    'Mistakes are valuable lessons that pave the way for personal growth and improvement.':
      [],
    'Diversity is a beautiful tapestry that enriches our understanding of the world.':
      [],
    'Strength and character are forged through adversity and challenges.': [],
    'A small act of kindness can create a ripple effect, spreading positivity to others.':
      [],
    'Gratitude attracts abundance and opens the doors to new opportunities.':
      [],
    'Courage is the fuel that propels us forward in the face of fear.': [],
    'Childhood is a magical time filled with wonder, imagination, and endless possibilities.':
      [],
    'True happiness is found within ourselves, independent of external circumstances.':
      [],
    'A true leader inspires others through their actions and empowers them to reach their full potential.':
      [],
    'The sunrise symbolizes hope and new beginnings, reminding us that each day is a fresh start.':
      [],
    "A simple act of kindness can brighten someone's day and create a ripple effect of positivity.":
      [],
    "Life's challenges are opportunities for growth and self-discovery, molding us into stronger individuals.":
      [],
    'Giving without expecting anything in return is a true testament of kindness and compassion.':
      [],
    'Our choices shape our destiny, and it is up to us to create the life we envision.':
      [],
    'Moments may be fleeting, but the memories we create can last a lifetime.':
      [],
    'Love speaks volumes without uttering a single word; it is felt deep within the heart.':
      [],
    'Determination and perseverance are the keys to overcoming obstacles and achieving our goals.':
      [],
    'Embracing change allows us to grow, adapt, and discover new possibilities.':
      [],
    'The world is a canvas, and art has the power to evoke emotions and inspire change.':
      [],
    'Success is not measured by wealth or fame, but by the positive impact we leave on others.':
      [],
    'A genuine smile has the power to brighten the darkest of days and uplift those around us.':
      [],
    'Self-discovery is a lifelong journey of exploration, learning, and personal growth.':
      [],
    'The world is a tapestry of diverse cultures, each with its own unique beauty and perspective.':
      [],
    'Adversity tests our resilience and strength, shaping us into stronger versions of ourselves.':
      [],
    'Kindness has a ripple effect, spreading joy and positivity to all those we encounter.':
      [],
    'Gratitude is the gateway to abundance and a fulfilling life.': [],
    'Courage is not the absence of fear, but the ability to take action despite it.':
      [],
    'Childhood is a time of innocence, wonder, and endless possibilities.':
      [],
    'True happiness comes from within, independent of external circumstances.':
      [],
    'A true leader empowers others to discover their full potential and achieve greatness.':
      [],
    'The beauty of a sunrise reminds us of the limitless potential each day holds.':
      [],
    'A single act of kindness can ignite a spark of positivity that spreads far and wide.':
      [],
    "Life's challenges are opportunities for growth and self-discovery, molding us into better versions of ourselves.":
      [],
    'The joy of giving surpasses any material possession; it is a gift that keeps on giving.':
      [],
    'Our choices shape the trajectory of our lives, and it is up to us to steer it towards success.':
      [],
    'Moments may be fleeting, but the memories we create last a lifetime.':
      [],
    'Love transcends language barriers and is understood by the heart.': [],
    'Determination and perseverance are the driving forces behind achieving our goals and dreams.':
      [],
    'Embracing change opens doors to new possibilities and personal growth.':
      [],
    'The world is a canvas, and art has the power to inspire, provoke, and evoke emotions.':
      [],
    'Success is measured by the impact we have on the lives of others and the legacy we leave behind.':
      [],
    "A genuine smile has the power to brighten someone's day and create a ripple effect of joy.":
      [],
    'Self-discovery is a lifelong journey of exploration, learning, and personal transformation.':
      [],
    'The world is a tapestry of diverse cultures, each contributing its unique perspective and beauty.':
      [],
    'Adversity builds resilience and strength, shaping us into stronger and more resilient individuals.':
      [],
    'Kindness is contagious, spreading warmth, compassion, and positivity to all those we encounter.':
      [],
    'Gratitude is the key that unlocks the door to a more fulfilling and meaningful life.':
      [],
    'Love has the power to heal wounds, mend broken hearts, and ignite the soul.':
      [],
    'A positive mindset is a catalyst for success and personal fulfillment.':
      [],
    'In the midst of chaos, finding inner peace is a testament to our resilience.':
      [],
    'Time is a precious resource; invest it in activities that bring you joy and fulfillment.':
      [],
    "A kind gesture can make a world of difference in someone's day.": [],
    'Mistakes are valuable lessons that pave the way for personal growth and improvement.':
      [],
    'Diversity is a beautiful tapestry that enriches our understanding of the world.':
      [],
    'Strength and character are forged through adversity and challenges.': [],
    'A small act of kindness can create a ripple effect, spreading positivity to others.':
      [],
    'Gratitude attracts abundance and opens the doors to new opportunities.':
      [],
    'Courage is the fuel that propels us forward in the face of fear.': [],
    'Childhood is a magical time filled with wonder, imagination, and endless possibilities.':
      [],
    'True happiness is found within ourselves, independent of external circumstances.':
      [],
    'A true leader inspires others through their actions and empowers them to reach their full potential.':
      [],
    'The sunrise symbolizes hope and new beginnings, reminding us that each day is a fresh start.':
      [],
    "A simple act of kindness can brighten someone's day and create a ripple effect of positivity.":
      [],
    "Life's challenges are opportunities for growth and self-discovery, molding us into stronger individuals.":
      [],
    'Giving without expecting anything in return is a true testament of kindness and compassion.':
      [],
    'Our choices shape our destiny, and it is up to us to create the life we envision.':
      [],
    'Moments may be fleeting, but the memories we create can last a lifetime.':
      [],
    'Love speaks volumes without uttering a single word; it is felt deep within the heart.':
      [],
    'Determination and perseverance are the keys to overcoming obstacles and achieving our goals.':
      [],
    'Embracing change allows us to grow, adapt, and discover new possibilities.':
      [],
    'The world is a canvas, and art has the power to evoke emotions and inspire change.':
      [],
    'Success is not measured by wealth or fame, but by the positive impact we leave on others.':
      [],
    'A genuine smile has the power to brighten the darkest of days and uplift those around us.':
      [],
    'Self-discovery is a lifelong journey of exploration, learning, and personal growth.':
      [],
    'The world is a tapestry of diverse cultures, each with its own unique beauty and perspective.':
      [],
    'Adversity tests our resilience and strength, shaping us into stronger versions of ourselves.':
      [],
    'Kindness has a ripple effect, spreading joy and positivity to all those we encounter.':
      [],
    'Gratitude is the gateway to abundance and a fulfilling life.': [],
    'Courage is not the absence of fear, but the ability to take action despite it.':
      [],
    'Childhood is a time of innocence, wonder, and endless possibilities.':
      [],
    'True happiness comes from within, independent of external circumstances.':
      [],
    'A true leader empowers others to discover their full potential and achieve greatness.':
      [],
    'The beauty of a sunrise reminds us of the limitless potential each day holds.':
      [],
    'A single act of kindness can ignite a spark of positivity that spreads far and wide.':
      [],
    "Life's challenges are opportunities for growth and self-discovery, molding us into better versions of ourselves.":
      [],
    'The joy of giving surpasses any material possession; it is a gift that keeps on giving.':
      [],
    'Our choices shape the trajectory of our lives, and it is up to us to steer it towards success.':
      [],
    'Moments may be fleeting, but the memories we create last a lifetime.':
      [],
    'Love transcends language barriers and is understood by the heart.': [],
    'Determination and perseverance are the driving forces behind achieving our goals and dreams.':
      [],
    'Embracing change opens doors to new possibilities and personal growth.':
      [],
    'The world is a canvas, and art has the power to inspire, provoke, and evoke emotions.':
      [],
    'Success is measured by the impact we have on the lives of others and the legacy we leave behind.':
      [],
    "A genuine smile has the power to brighten someone's day and create a ripple effect of joy.":
      [],
    'Self-discovery is a lifelong journey of exploration, learning, and personal transformation.':
      [],
    'The world is a tapestry of diverse cultures, each contributing its unique perspective and beauty.':
      [],
    'Adversity builds resilience and strength, shaping us into stronger and more resilient individuals.':
      [],
    'Kindness is contagious, spreading warmth, compassion, and positivity to all those we encounter.':
      [],
    'Gratitude is the key that unlocks the door to a more fulfilling and meaningful life.':
      [],
    'Love has the power to heal wounds, mend broken hearts, and ignite the soul.':
      [],
    'A positive mindset is a catalyst for success and personal fulfillment.':
      [],
    'In the midst of chaos, finding inner peace is a testament to our resilience.':
      [],
    'Time is a precious resource; invest it in activities that bring you joy and fulfillment.':
      [],
    "A kind gesture can make a world of difference in someone's day.": [],
    'Mistakes are valuable lessons that pave the way for personal growth and improvement.':
      [],
    'Diversity is a beautiful tapestry that enriches our understanding of the world.':
      [],
    'Strength and character are forged through adversity and challenges.': [],
    'A small act of kindness can create a ripple effect, spreading positivity to others.':
      [],
    'Gratitude attracts abundance and opens the doors to new opportunities.':
      [],
    'Courage is the fuel that propels us forward in the face of fear.': [],
    'Childhood is a magical time filled with wonder, imagination, and endless possibilities.':
      [],
    'True happiness is found within ourselves, independent of external circumstances.':
      [],
    'A true leader inspires others through their actions and empowers them to reach their full potential.':
      [],
    'The sunrise symbolizes hope and new beginnings, reminding us that each day is a fresh start.':
      [],
    "A simple act of kindness can brighten someone's day and create a ripple effect of positivity.":
      [],
    "Life's challenges are opportunities for growth and self-discovery, molding us into stronger individuals.":
      [],
    'Giving without expecting anything in return is a true testament of kindness and compassion.':
      [],
    'Our choices shape our destiny, and it is up to us to create the life we envision.':
      [],
    'Moments may be fleeting, but the memories we create can last a lifetime.':
      [],
    'Love speaks volumes without uttering a single word; it is felt deep within the heart.':
      [],
    'Determination and perseverance are the keys to overcoming obstacles and achieving our goals.':
      [],
    'Embracing change allows us to grow, adapt, and discover new possibilities.':
      [],
    'The world is a canvas, and art has the power to evoke emotions and inspire change.':
      [],
    'Success is not measured by wealth or fame, but by the positive impact we leave on others.':
      [],
    'A genuine smile has the power to brighten the darkest of days and uplift those around us.':
      [],
    'Self-discovery is a lifelong journey of exploration, learning, and personal growth.':
      [],
    'The world is a tapestry of diverse cultures, each with its own unique beauty and perspective.':
      [],
    'Adversity tests our resilience and strength, shaping us into stronger versions of ourselves.':
      [],
    'Kindness has a ripple effect, spreading joy and positivity to all those we encounter.':
      [],
    'Gratitude is the gateway to abundance and a fulfilling life.': [],
    'Courage is not the absence of fear, but the ability to take action despite it.':
      [],
    'Childhood is a time of innocence, wonder, and endless possibilities.':
      [],
    'True happiness comes from within, independent of external circumstances.':
      [],
    'A true leader empowers others to discover their full potential and achieve greatness.':
      [],
    'The beauty of a sunrise reminds us of the limitless potential each day holds.':
      [],
    'A single act of kindness can ignite a spark of positivity that spreads far and wide.':
      [],
    "Life's challenges are opportunities for growth and self-discovery, molding us into better versions of ourselves.":
      [],
    'The joy of giving surpasses any material possession; it is a gift that keeps on giving.':
      [],
    'Our choices shape the trajectory of our lives, and it is up to us to steer it towards success.':
      [],
    'Moments may be fleeting, but the memories we create last a lifetime.':
      [],
    'Love transcends language barriers and is understood by the heart.': [],
    'Determination and perseverance are the driving forces behind achieving our goals and dreams.':
      [],
    'Embracing change opens doors to new possibilities and personal growth.':
      [],
    'The world is a canvas, and art has the power to inspire, provoke, and evoke emotions.':
      [],
    'Success is measured by the impact we have on the lives of others and the legacy we leave behind.':
      [],
    "A genuine smile has the power to brighten someone's day and create a ripple effect of joy.":
      [],
    'Self-discovery is a lifelong journey of exploration, learning, and personal transformation.':
      [],
    'The world is a tapestry of diverse cultures, each contributing its unique perspective and beauty.':
      [],
    'Adversity builds resilience and strength, shaping us into stronger and more resilient individuals.':
      [],
    'Kindness is contagious, spreading warmth, compassion, and positivity to all those we encounter.':
      [],
    'Gratitude is the key that unlocks the door to a more fulfilling and meaningful life.':
      [],
    'Love has the power to heal wounds, mend broken hearts, and ignite the soul.':
      [],
    'A positive mindset is a catalyst for success and personal fulfillment.':
      [],
    'In the midst of chaos, finding inner peace is a testament to our resilience.':
      [],
    'Time is a precious resource; invest it in activities that bring you joy and fulfillment.':
      [],
    "A kind gesture can make a world of difference in someone's day.": [],
    'Mistakes are valuable lessons that pave the way for personal growth and improvement.':
      [],
    'Diversity is a beautiful tapestry that enriches our understanding of the world.':
      [],
    'Strength and character are forged through adversity and challenges.': [],
    'A small act of kindness can create a ripple effect, spreading positivity to others.':
      [],
    'Gratitude attracts abundance and opens the doors to new opportunities.':
      [],
    'Courage is the fuel that propels us forward in the face of fear.': [],
    'Childhood is a magical time filled with wonder, imagination, and endless possibilities.':
      [],
    'True happiness is found within ourselves, independent of external circumstances.':
      [],
    'A true leader inspires others through their actions and empowers them to reach their full potential.':
      [],
    'The sunrise symbolizes hope and new beginnings, reminding us that each day is a fresh start.':
      [],
    "A simple act of kindness can brighten someone's day and create a ripple effect of positivity.":
      [],
    "Life's challenges are opportunities for growth and self-discovery, molding us into stronger individuals.":
      [],
    'Giving without expecting anything in return is a true testament of kindness and compassion.':
      [],
    'Our choices shape our destiny, and it is up to us to create the life we envision.':
      [],
    'Moments may be fleeting, but the memories we create can last a lifetime.':
      [],
    'Love speaks volumes without uttering a single word; it is felt deep within the heart.':
      [],
    'Determination and perseverance are the keys to overcoming obstacles and achieving our goals.':
      [],
    'Embracing change allows us to grow, adapt, and discover new possibilities.':
      [],
    'The world is a canvas, and art has the power to evoke emotions and inspire change.':
      [],
    'Success is not measured by wealth or fame, but by the positive impact we leave on others.':
      [],
    'A genuine smile has the power to brighten the darkest of days and uplift those around us.':
      [],
    'Self-discovery is a lifelong journey of exploration, learning, and personal growth.':
      [],
    'The world is a tapestry of diverse cultures, each with its own unique beauty and perspective.':
      [],
    'Adversity tests our resilience and strength, shaping us into stronger versions of ourselves.':
      [],
    'Kindness has a ripple effect, spreading joy and positivity to all those we encounter.':
      [],
    'Gratitude is the gateway to abundance and a fulfilling life.': [],
    'Courage is not the absence of fear, but the ability to take action despite it.':
      [],
    'Childhood is a time of innocence, wonder, and endless possibilities.':
      [],
    'True happiness comes from within, independent of external circumstances.':
      [],
    'A true leader empowers others to discover their full potential and achieve greatness.':
      [],
    'The beauty of a sunrise reminds us of the limitless potential each day holds.':
      [],
    'A single act of kindness can ignite a spark of positivity that spreads far and wide.':
      [],
    "Life's challenges are opportunities for growth and self-discovery, molding us into better versions of ourselves.":
      [],
    'The joy of giving surpasses any material possession; it is a gift that keeps on giving.':
      [],
    'Our choices shape the trajectory of our lives, and it is up to us to steer it towards success.':
      [],
    'Moments may be fleeting, but the memories we create last a lifetime.':
      [],
    'Love transcends language barriers and is understood by the heart.': [],
    'Determination and perseverance are the driving forces behind achieving our goals and dreams.':
      [],
    'Embracing change opens doors to new possibilities and personal growth.':
      [],
    'The world is a canvas, and art has the power to inspire, provoke, and evoke emotions.':
      [],
    'Success is measured by the impact we have on the lives of others and the legacy we leave behind.':
      [],
    "A genuine smile has the power to brighten someone's day and create a ripple effect of joy.":
      [],
    'Self-discovery is a lifelong journey of exploration, learning, and personal transformation.':
      [],
    'The world is a tapestry of diverse cultures, each contributing its unique perspective and beauty.':
      [],
    'Adversity builds resilience and strength, shaping us into stronger and more resilient individuals.':
      [],
    'Kindness is contagious, spreading warmth, compassion, and positivity to all those we encounter.':
      [],
    'Gratitude is the key that unlocks the door to a more fulfilling and meaningful life.':
      [],
    'Love has the power to heal wounds, mend broken hearts, and ignite the soul.':
      [],
    'A positive mindset is a catalyst for success and personal fulfillment.':
      [],
    'In the midst of chaos, finding inner peace is a testament to our resilience.':
      [],
    'Time is a precious resource; invest it in activities that bring you joy and fulfillment.':
      [],
    "A kind gesture can make a world of difference in someone's day.": [],
    'Mistakes are valuable lessons that pave the way for personal growth and improvement.':
      [],
    'Diversity is a beautiful tapestry that enriches our understanding of the world.':
      [],
    'Strength and character are forged through adversity and challenges.': [],
    'A small act of kindness can create a ripple effect, spreading positivity to others.':
      [],
    'Gratitude attracts abundance and opens the doors to new opportunities.':
      [],
    'Courage is the fuel that propels us forward in the face of fear.': [],
    'Childhood is a magical time filled with wonder, imagination, and endless possibilities.':
      [],
    'True happiness is found within ourselves, independent of external circumstances.':
      [],
    'A true leader inspires others through their actions and empowers them to reach their full potential.':
      [],
    'The sunrise symbolizes hope and new beginnings, reminding us that each day is a fresh start.':
      [],
    "A simple act of kindness can brighten someone's day and create a ripple effect of positivity.":
      [],
    "Life's challenges are opportunities for growth and self-discovery, molding us into stronger individuals.":
      [],
    'Giving without expecting anything in return is a true testament of kindness and compassion.':
      [],
    'Our choices shape our destiny, and it is up to us to create the life we envision.':
      [],
    'Moments may be fleeting, but the memories we create can last a lifetime.':
      [],
    'Love speaks volumes without uttering a single word; it is felt deep within the heart.':
      [],
    'Determination and perseverance are the keys to overcoming obstacles and achieving our goals.':
      [],
    'Embracing change allows us to grow, adapt, and discover new possibilities.':
      [],
    'The world is a canvas, and art has the power to evoke emotions and inspire change.':
      [],
    'Success is not measured by wealth or fame, but by the positive impact we leave on others.':
      [],
    'A genuine smile has the power to brighten the darkest of days and uplift those around us.':
      [],
    'Self-discovery is a lifelong journey of exploration, learning, and personal growth.':
      [],
    'The world is a tapestry of diverse cultures, each with its own unique beauty and perspective.':
      [],
    'Adversity tests our resilience and strength, shaping us into stronger versions of ourselves.':
      [],
    'Kindness has a ripple effect, spreading joy and positivity to all those we encounter.':
      [],
    'Gratitude is the gateway to abundance and a fulfilling life.': [],
    'Courage is not the absence of fear, but the ability to take action despite it.':
      [],
    'Childhood is a time of innocence, wonder, and endless possibilities.':
      [],
    'True happiness comes from within, independent of external circumstances.':
      [],
    'A true leader empowers others to discover their full potential and achieve greatness.':
      [],
    'The beauty of a sunrise reminds us of the limitless potential each day holds.':
      [],
    'A single act of kindness can ignite a spark of positivity that spreads far and wide.':
      [],
    "Life's challenges are opportunities for growth and self-discovery, molding us into better versions of ourselves.":
      [],
    'The joy of giving surpasses any material possession; it is a gift that keeps on giving.':
      [],
    'Our choices shape the trajectory of our lives, and it is up to us to steer it towards success.':
      [],
    'Moments may be fleeting, but the memories we create last a lifetime.':
      [],
    'Love transcends language barriers and is understood by the heart.': [],
    'Determination and perseverance are the driving forces behind achieving our goals and dreams.':
      [],
    'Embracing change opens doors to new possibilities and personal growth.':
      [],
    'The world is a canvas, and art has the power to inspire, provoke, and evoke emotions.':
      [],
    'Success is measured by the impact we have on the lives of others and the legacy we leave behind.':
      [],
    "A genuine smile has the power to brighten someone's day and create a ripple effect of joy.":
      [],
    'Self-discovery is a lifelong journey of exploration, learning, and personal transformation.':
      [],
    'The world is a tapestry of diverse cultures, each contributing its unique perspective and beauty.':
      [],
    'Adversity builds resilience and strength, shaping us into stronger and more resilient individuals.':
      [],
    'Kindness is contagious, spreading warmth, compassion, and positivity to all those we encounter.':
      [],
    'Gratitude is the key that unlocks the door to a more fulfilling and meaningful life.':
      [],
    'Love has the power to heal wounds, mend broken hearts, and ignite the soul.':
      [],
    'A positive mindset is a catalyst for success and personal fulfillment.':
      [],
    'In the midst of chaos, finding inner peace is a testament to our resilience.':
      [],
    'Time is a precious resource; invest it in activities that bring you joy and fulfillment.':
      [],
    "A kind gesture can make a world of difference in someone's day.": [],
    'Mistakes are valuable lessons that pave the way for personal growth and improvement.':
      [],
    'Diversity is a beautiful tapestry that enriches our understanding of the world.':
      [],
    'Strength and character are forged through adversity and challenges.': [],
    'A small act of kindness can create a ripple effect, spreading positivity to others.':
      [],
    'Gratitude attracts abundance and opens the doors to new opportunities.':
      [],
    'Courage is the fuel that propels us forward in the face of fear.': [],
    'Childhood is a magical time filled with wonder, imagination, and endless possibilities.':
      [],
    'True happiness is found within ourselves, independent of external circumstances.':
      [],
    'A true leader inspires others through their actions and empowers them to reach their full potential.':
      [],
    'The sunrise symbolizes hope and new beginnings, reminding us that each day is a fresh start.':
      [],
    "A simple act of kindness can brighten someone's day and create a ripple effect of positivity.":
      [],
    "Life's challenges are opportunities for growth and self-discovery, molding us into stronger individuals.":
      [],
    'Giving without expecting anything in return is a true testament of kindness and compassion.':
      [],
    'Our choices shape our destiny, and it is up to us to create the life we envision.':
      [],
    'Moments may be fleeting, but the memories we create can last a lifetime.':
      [],
    'Love speaks volumes without uttering a single word; it is felt deep within the heart.':
      [],
    'Determination and perseverance are the keys to overcoming obstacles and achieving our goals.':
      [],
    'Embracing change allows us to grow, adapt, and discover new possibilities.':
      [],
    'The world is a canvas, and art has the power to evoke emotions and inspire change.':
      [],
    'Success is not measured by wealth or fame, but by the positive impact we leave on others.':
      [],
    'A genuine smile has the power to brighten the darkest of days and uplift those around us.':
      [],
    'Self-discovery is a lifelong journey of exploration, learning, and personal growth.':
      [],
    'The world is a tapestry of diverse cultures, each with its own unique beauty and perspective.':
      [],
    'Adversity tests our resilience and strength, shaping us into stronger versions of ourselves.':
      [],
    'Kindness has a ripple effect, spreading joy and positivity to all those we encounter.':
      [],
    'Gratitude is the gateway to abundance and a fulfilling life.': [],
    'Courage is not the absence of fear, but the ability to take action despite it.':
      [],
    'Childhood is a time of innocence, wonder, and endless possibilities.':
      [],
    'True happiness comes from within, independent of external circumstances.':
      [],
    'A true leader empowers others to discover their full potential and achieve greatness.':
      [],
    'The beauty of a sunrise reminds us of the limitless potential each day holds.':
      [],
    'A single act of kindness can ignite a spark of positivity that spreads far and wide.':
      [],
    "Life's challenges are opportunities for growth and self-discovery, molding us into better versions of ourselves.":
      [],
    'The joy of giving surpasses any material possession; it is a gift that keeps on giving.':
      [],
    'Our choices shape the trajectory of our lives, and it is up to us to steer it towards success.':
      [],
    'Moments may be fleeting, but the memories we create last a lifetime.':
      [],
    'Love transcends language barriers and is understood by the heart.': [],
    'Determination and perseverance are the driving forces behind achieving our goals and dreams.':
      [],
    'Embracing change opens doors to new possibilities and personal growth.':
      [],
    'The world is a canvas, and art has the power to inspire, provoke, and evoke emotions.':
      [],
    'Success is measured by the impact we have on the lives of others and the legacy we leave behind.':
      [],
    "A genuine smile has the power to brighten someone's day and create a ripple effect of joy.":
      [],
    'Self-discovery is a lifelong journey of exploration, learning, and personal transformation.':
      [],
    'The world is a tapestry of diverse cultures, each contributing its unique perspective and beauty.':
      [],
    'Adversity builds resilience and strength, shaping us into stronger and more resilient individuals.':
      [],
    'Kindness is contagious, spreading warmth, compassion, and positivity to all those we encounter.':
      [],
    'Gratitude is the key that unlocks the door to a more fulfilling and meaningful life.':
      [],
    'Love has the power to heal wounds, mend broken hearts, and ignite the soul.':
      [],
    'A positive mindset is a catalyst for success and personal fulfillment.':
      [],
    'In the midst of chaos, finding inner peace is a testament to our resilience.':
      [],
    'Time is a precious resource; invest it in activities that bring you joy and fulfillment.':
      [],
    "A kind gesture can make a world of difference in someone's day.": [],
    'Mistakes are valuable lessons that pave the way for personal growth and improvement.':
      [],
    'Diversity is a beautiful tapestry that enriches our understanding of the world.':
      [],
    'Strength and character are forged through adversity and challenges.': [],
    'A small act of kindness can create a ripple effect, spreading positivity to others.':
      [],
    'Gratitude attracts abundance and opens the doors to new opportunities.':
      [],
    'Courage is the fuel that propels us forward in the face of fear.': [],
    'Childhood is a magical time filled with wonder, imagination, and endless possibilities.':
      [],
    'True happiness is found within ourselves, independent of external circumstances.':
      [],
    'A true leader inspires others through their actions and empowers them to reach their full potential.':
      [],
    'The sunrise symbolizes hope and new beginnings, reminding us that each day is a fresh start.':
      [],
    "A simple act of kindness can brighten someone's day and create a ripple effect of positivity.":
      [],
    "Life's challenges are opportunities for growth and self-discovery, molding us into stronger individuals.":
      [],
    'Giving without expecting anything in return is a true testament of kindness and compassion.':
      [],
    'Our choices shape our destiny, and it is up to us to create the life we envision.':
      [],
    'Moments may be fleeting, but the memories we create can last a lifetime.':
      [],
    'Love speaks volumes without uttering a single word; it is felt deep within the heart.':
      [],
    'Determination and perseverance are the keys to overcoming obstacles and achieving our goals.':
      [],
    'Embracing change allows us to grow, adapt, and discover new possibilities.':
      [],
    'The world is a canvas, and art has the power to evoke emotions and inspire change.':
      [],
    'Success is not measured by wealth or fame, but by the positive impact we leave on others.':
      [],
    'A genuine smile has the power to brighten the darkest of days and uplift those around us.':
      [],
    'Self-discovery is a lifelong journey of exploration, learning, and personal growth.':
      [],
    'The world is a tapestry of diverse cultures, each with its own unique beauty and perspective.':
      [],
    'Adversity tests our resilience and strength, shaping us into stronger versions of ourselves.':
      [],
    'Kindness has a ripple effect, spreading joy and positivity to all those we encounter.':
      [],
    'Gratitude is the gateway to abundance and a fulfilling life.': [],
    'Courage is not the absence of fear, but the ability to take action despite it.':
      [],
    'Childhood is a time of innocence, wonder, and endless possibilities.':
      [],
    'True happiness comes from within, independent of external circumstances.':
      [],
    'A true leader empowers others to discover their full potential and achieve greatness.':
      [],
    'The beauty of a sunrise reminds us of the limitless potential each day holds.':
      [],
    'A single act of kindness can ignite a spark of positivity that spreads far and wide.':
      [],
    "Life's challenges are opportunities for growth and self-discovery, molding us into better versions of ourselves.":
      [],
    'The joy of giving surpasses any material possession; it is a gift that keeps on giving.':
      [],
    'Our choices shape the trajectory of our lives, and it is up to us to steer it towards success.':
      [],
  },
  */

  allChords: {
    CharaChorder: [],
  },
  supersonic: {
    word: [],
    test: [],
  },
  customtier: {
    sample: [],
    words: [],
  },
  lexicographic: {
    about: [],
    above: [],
    add: [],
    after: [],
    again: [],
    air: [],
    all: [],
    almost: [],
    along: [],
    also: [],
    always: [],
    an: [],
    and: [],
    animal: [],
    another: [],
    answer: [],
    any: [],
    are: [],
    around: [],
    as: [],
    ask: [],
    at: [],
    away: [],
    back: [],
    be: [],
    because: [],
    been: [],
    before: [],
    began: [],
    begin: [],
    being: [],
    below: [],
    between: [],
    big: [],
    book: [],
    both: [],
    boy: [],
    but: [],
    by: [],
    call: [],
    came: [],
    can: [],
    car: [],
    carry: [],
    change: [],
    children: [],
    city: [],
    close: [],
    come: [],
    could: [],
    country: [],
    cut: [],
    day: [],
    did: [],
    different: [],
    do: [],
    does: [],
    "don't": [],
    down: [],
    each: [],
    earth: [],
    eat: [],
    end: [],
    enough: [],
    even: [],
    every: [],
    example: [],
    eye: [],
    face: [],
    family: [],
    far: [],
    father: [],
    feet: [],
    few: [],
    find: [],
    first: [],
    follow: [],
    food: [],
    for: [],
    form: [],
    found: [],
    four: [],
    from: [],
    get: [],
    girl: [],
    give: [],
    go: [],
    good: [],
    got: [],
    great: [],
    group: [],
    grow: [],
    had: [],
    hand: [],
    hard: [],
    has: [],
    have: [],
    he: [],
    head: [],
    hear: [],
    help: [],
    her: [],
    here: [],
    high: [],
    him: [],
    his: [],
    home: [],
    house: [],
    how: [],
    idea: [],
    if: [],
    important: [],
    in: [],
    into: [],
    is: [],
    it: [],
    its: [],
    "it's": [],
    just: [],
    keep: [],
    kind: [],
    know: [],
    land: [],
    large: [],
    last: [],
    later: [],
    learn: [],
    leave: [],
    left: [],
    let: [],
    letter: [],
    life: [],
    light: [],
    like: [],
    line: [],
    list: [],
    little: [],
    live: [],
    long: [],
    look: [],
    made: [],
    make: [],
    man: [],
    many: [],
    may: [],
    me: [],
    mean: [],
    men: [],
    might: [],
    mile: [],
    miss: [],
    more: [],
    most: [],
    mother: [],
    mountain: [],
    move: [],
    much: [],
    must: [],
    my: [],
    name: [],
    near: [],
    need: [],
    never: [],
    new: [],
    next: [],
    night: [],
    no: [],
    not: [],
    now: [],
    number: [],
    of: [],
    off: [],
    often: [],
    old: [],
    on: [],
    once: [],
    one: [],
    only: [],
    open: [],
    or: [],
    other: [],
    our: [],
    out: [],
    over: [],
    own: [],
    page: [],
    paper: [],
    part: [],
    people: [],
    picture: [],
    place: [],
    plant: [],
    play: [],
    point: [],
    put: [],
    question: [],
    quick: [],
    quickly: [],
    quite: [],
    read: [],
    really: [],
    right: [],
    river: [],
    run: [],
    said: [],
    same: [],
    saw: [],
    say: [],
    school: [],
    sea: [],
    second: [],
    see: [],
    seem: [],
    sentence: [],
    set: [],
    she: [],
    should: [],
    show: [],
    side: [],
    small: [],
    so: [],
    some: [],
    something: [],
    sometimes: [],
    song: [],
    soon: [],
    sound: [],
    spell: [],
    start: [],
    state: [],
    still: [],
    stop: [],
    story: [],
    study: [],
    such: [],
    take: [],
    talk: [],
    tell: [],
    than: [],
    that: [],
    the: [],
    their: [],
    them: [],
    then: [],
    there: [],
    these: [],
    they: [],
    thing: [],
    think: [],
    this: [],
    those: [],
    thought: [],
    three: [],
    through: [],
    time: [],
    to: [],
    together: [],
    too: [],
    took: [],
    tree: [],
    try: [],
    turn: [],
    two: [],
    under: [],
    until: [],
    up: [],
    us: [],
    use: [],
    very: [],
    walk: [],
    want: [],
    was: [],
    watch: [],
    water: [],
    way: [],
    we: [],
    well: [],
    went: [],
    were: [],
    what: [],
    when: [],
    where: [],
    which: [],
    while: [],
    white: [],
    who: [],
    why: [],
    will: [],
    with: [],
    without: [],
    word: [],
    work: [],
    world: [],
    would: [],
    write: [],
    year: [],
    you: [],
    young: [],
    your: [],
  },
  specialCharacters: {
    '?': ['407-204'],
    '/': ['407-204'],
    '.': ['169-19'],
    ',': [],
    ';': [],
    "'": [],
    '[': [],
    ']': [],
    '"': [],
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
  },
  letters: {
    e: ['194-82'],
    t: ['324-82'],
    o: ['140-44'],
    n: ['377-44'],
    u: ['71-60'],
    s: ['446-60'],
    c: ['214-146'],
    d: ['303-146'],
    a: ['317-57'],
    r: ['223-56'],
    h: ['333-121'],
    m: ['207-121'],
    i: ['169-18'],
    l: ['371-19'],
    w: ['224-179'],
    f: ['296-121'],
    g: ['187-180'],
    y: ['439-35'],
    p: ['304-110'],
    b: ['316-180'],
    v: ['215-110'],
    k: ['243-121'],
    j: ['407-18'],
    x: ['323-168'],
    q: ['323-204'],
    z: ['224-180'],
  },
  chords: {
    from: ['296-121', '223-56', '140-44', '207-121'],
    get: ['187-180', '194-82', '324-82'],
    her: ['333-121', '223-56'],
    him: ['333-121', '169-18', '207-121'],
    how: ['333-121', '140-44', '224-179'],
    like: ['371-19', '169-18', '243-121'],
    look: ['371-19', '140-44', '243-121'],
    may: ['207-121', '317-57', '439-35'],
    men: ['207-121', '194-82', '377-44'],
    most: ['207-121', '140-44', '446-60', '324-82'],
    new: ['377-44', '194-82', '224-179'],
    not: ['377-44', '140-44', '324-82'],
    now: ['377-44', '140-44', '224-179'],
    one: ['140-44', '377-44', '194-82'],
    open: ['140-44', '304-110', '194-82', '377-44'],
    our: ['140-44', '71-60'],
    out: ['140-44', '71-60', '324-82'],
    part: ['304-110', '317-57', '223-56'],
    people: ['304-110', '371-19'],
    picture: ['304-110', '169-18', '214-146'],
    put: ['304-110', '71-60', '324-82'],
    seem: ['446-60', '194-82', '207-121'],
    set: ['446-60', '194-82', '324-82'],
    she: ['446-60', '333-121', '194-82'],
    show: ['446-60', '333-121', '140-44', '224-179'],
    some: ['446-60', '140-44', '207-121', '194-82'],
    state: ['446-60', '194-82'],
    such: ['446-60', '71-60', '214-146', '333-121'],
    take: ['324-82', '243-121', '194-82'],
    than: ['324-82', '333-121', '377-44'],
    that: ['324-82', '333-121'],
    them: ['324-82', '333-121', '194-82', '207-121'],
    there: ['324-82', '333-121', '194-82'],
    thing: ['324-82', '333-121', '169-18', '377-44', '187-180'],
    think: ['324-82', '333-121', '169-18', '377-44', '243-121'],
    this: ['324-82', '333-121', '169-18', '446-60'],
    time: ['324-82', '169-18', '207-121'],
    too: ['324-82', '140-44', '353-179'],
    try: ['324-82', '223-56', '439-35'],
    two: ['324-82', '224-179', '140-44'],
    use: ['71-60', '446-60', '194-82'],
    well: ['224-179', '194-82', '371-19'],
    were: ['224-179', '223-56'],
    what: ['224-179', '333-121', '317-57'],
    where: ['224-179', '333-121', '194-82', '223-56'],
    which: ['224-179', '333-121', '169-18'],
    why: ['224-179', '333-121', '439-35'],
    will: ['224-179', '169-18', '371-19', '353-179'],
    you: ['439-35', '140-44', '71-60'],
    your: ['439-35', '223-56', '140-44', '71-60'],
    about: ['317-57', '316-180', '140-44', '71-60'],
    above: ['317-57', '316-180', '140-44', '215-110', '194-82'],
    add: ['317-57', '303-146'],
    after: ['317-57', '296-121'],
    again: ['317-57', '187-180', '169-18', '377-44'],
    air: ['317-57', '169-18', '223-56'],
    all: ['317-57', '371-19'],
    almost: ['317-57', '371-19', '207-121'],
    along: ['317-57', '371-19', '140-44', '187-180'],
    also: ['317-57', '371-19', '140-44', '446-60'],
    always: ['317-57', '371-19', '224-179', '439-35'],
    an: ['317-57', '377-44'],
    and: ['317-57', '377-44', '303-146'],
    animal: ['317-57', '377-44', '169-18', '207-121'],
    another: ['317-57', '377-44', '140-44', '333-121'],
    answer: ['317-57', '377-44', '446-60', '224-179', '223-56'],
    any: ['317-57', '377-44', '101-35'],
    are: ['317-57', '223-56'],
    around: ['317-57', '223-56', '140-44', '71-60'],
    as: ['317-57', '446-60'],
    ask: ['317-57', '446-60', '243-121'],
    at: ['317-57', '194-82'],
    away: ['317-57', '224-179', '353-179', '439-35'],
    back: ['316-180', '317-57', '243-121'],
    be: ['316-180', '194-82'],
    because: ['316-180', '214-146'],
    been: ['316-180', '194-82', '377-44'],
    before: ['316-180', '194-82', '296-121'],
    began: ['316-180', '187-180', '40-61'],
    begin: ['316-180', '187-180'],
    being: ['316-180', '194-82', '33-62'],
    below: ['316-180', '194-82', '371-19', '140-44'],
    between: ['316-180', '194-82', '224-179', '324-82'],
    big: ['316-180', '169-18', '187-180'],
    book: ['316-180', '140-44', '243-121'],
    both: ['316-180', '140-44', '324-82'],
    boy: ['316-180', '140-44', '439-35'],
    but: ['316-180', '71-60', '324-82'],
    by: ['316-180', '439-35'],
    call: ['214-146', '317-57', '371-19'],
    came: ['214-146', '317-57', '194-82'],
    can: ['214-146', '317-57', '377-44'],
    car: ['214-146', '317-57', '223-56'],
    carry: ['214-146', '317-57', '223-56', '353-179', '439-35'],
    change: ['214-146', '333-121', '317-57', '377-44'],
    children: ['214-146', '333-121', '169-18', '371-19', '223-56'],
    city: ['214-146', '169-18', '324-82', '439-35'],
    close: ['214-146', '371-19', '140-44', '446-60', '194-82'],
    come: ['214-146', '140-44', '207-121', '194-82'],
    could: ['214-146', '140-44', '71-60', '371-19', '303-146'],
    country: ['214-146', '71-60', '377-44', '324-82'],
    cut: ['214-146', '71-60', '324-82'],
    day: ['303-146', '317-57', '439-35'],
    did: ['303-146', '169-18'],
    different: ['303-146', '169-18', '296-121'],
    do: ['303-146', '140-44'],
    does: ['303-146', '140-44', '194-82', '446-60'],
    down: ['303-146', '140-44', '224-179', '377-44'],
    each: ['194-82', '317-57', '214-146', '333-121'],
    earth: ['194-82', '353-179'],
    eat: ['194-82', '317-57', '324-82'],
    end: ['194-82', '377-44', '303-146'],
    enough: ['194-82', '377-44', '140-44', '71-60'],
    even: ['194-82', '215-110', '377-44'],
    every: ['194-82', '215-110', '439-35', '353-179'],
    example: ['194-82', '323-168'],
    eye: ['194-82', '439-35', '353-179'],
    face: ['296-121', '317-57', '214-146', '194-82'],
    family: ['296-121', '317-57', '207-121'],
    far: ['296-121', '317-57', '223-56'],
    father: ['296-121', '317-57', '194-82'],
    feet: ['296-121', '194-82', '324-82'],
    few: ['296-121', '194-82', '224-179'],
    find: ['296-121', '377-44'],
    first: ['296-121', '169-18', '223-56', '446-60', '324-82'],
    follow: ['296-121', '140-44', '371-19', '224-179'],
    food: ['296-121', '140-44', '303-146'],
    for: ['296-121', '140-44', '223-56'],
    form: ['296-121', '207-121'],
    found: ['296-121', '140-44', '71-60', '377-44'],
    four: ['296-121', '140-44', '71-60', '223-56'],
    girl: ['187-180', '169-18', '223-56', '371-19'],
    give: ['187-180', '169-18'],
    go: ['187-180', '140-44'],
    good: ['187-180', '140-44', '353-179'],
    got: ['187-180', '140-44', '324-82'],
    great: ['187-180', '223-56', '324-82'],
    group: ['187-180', '223-56', '140-44', '71-60'],
    grow: ['187-180', '223-56', '140-44'],
    had: ['333-121', '317-57', '303-146'],
    hand: ['333-121', '317-57', '377-44'],
    hard: ['333-121', '317-57', '223-56'],
    has: ['333-121', '317-57', '446-60'],
    have: ['333-121', '317-57', '215-110', '194-82'],
    he: ['333-121', '194-82'],
    head: ['333-121', '214-146'],
    hear: ['333-121', '194-82', '317-57'],
    help: ['333-121', '194-82', '371-19'],
    here: ['333-121', '187-180'],
    high: ['333-121', '169-18', '187-180'],
    his: ['333-121', '169-18', '446-60'],
    home: ['333-121', '140-44', '207-121', '194-82'],
    house: ['333-121', '140-44', '71-60', '446-60', '194-82'],
    idea: ['169-18', '303-146', '194-82', '317-57'],
    if: ['169-18', '296-121'],
    important: ['169-18', '207-121', '304-110'],
    in: ['169-18', '377-44'],
    into: ['169-18', '377-44', '324-82'],
    is: ['169-18', '446-60'],
    it: ['169-18', '324-82'],
    its: ['169-18', '324-82', '500-61'],
    "it's": ['169-18', '324-82', '101-35'],
    just: ['407-18', '71-60'],
    keep: ['243-121', '194-82'],
    kind: ['243-121', '169-18', '377-44', '303-146'],
    know: ['243-121', '377-44', '140-44'],
    land: ['371-19', '317-57', '303-146'],
    large: ['371-19', '317-57', '223-56', '187-180'],
    last: ['371-19', '317-57', '446-60'],
    later: ['371-19', '215-110', '223-56'],
    learn: ['371-19', '223-56'],
    leave: ['371-19', '194-82', '317-57', '215-110'],
    left: ['371-19', '194-82', '296-121', '324-82'],
    let: ['371-19', '194-82', '324-82'],
    letter: ['371-19', '324-82', '223-56'],
    life: ['371-19', '296-121'],
    light: ['371-19', '169-18', '187-180', '333-121'],
    line: ['371-19', '377-44'],
    list: ['371-19', '169-18'],
    little: ['371-19', '169-18', '324-82', '194-82'],
    live: ['371-19', '169-18', '215-110'],
    long: ['371-19', '187-180'],
    made: ['207-121', '317-57', '303-146', '194-82'],
    make: ['207-121', '317-57', '194-82'],
    man: ['207-121', '317-57', '377-44'],
    many: ['207-121', '317-57', '377-44', '101-35'],
    me: ['207-121', '194-82'],
    mean: ['207-121', '194-82', '317-57', '377-44'],
    might: ['207-121', '169-18', '333-121', '324-82'],
    mile: ['207-121', '169-18', '371-19'],
    miss: ['207-121', '169-18', '446-60', '353-179'],
    more: ['207-121', '140-44', '223-56'],
    mother: ['207-121', '140-44', '324-82', '333-121', '223-56'],
    mountain: ['207-121', '140-44', '71-60', '377-44', '324-82'],
    move: ['207-121', '140-44', '194-82'],
    much: ['207-121', '71-60', '333-121'],
    must: ['207-121', '71-60', '446-60', '324-82'],
    my: ['207-121', '439-35'],
    name: ['377-44', '317-57', '194-82'],
    near: ['377-44', '223-56', '194-82', '317-57'],
    need: ['377-44', '194-82', '353-179'],
    never: ['377-44', '215-110', '223-56'],
    next: ['377-44', '194-82', '323-168', '324-82'],
    night: ['377-44', '169-18', '187-180', '333-121'],
    no: ['377-44', '353-179'],
    number: ['377-44', '71-60', '207-121'],
    of: ['140-44', '296-121'],
    off: ['140-44', '353-179'],
    often: ['140-44', '296-121', '324-82', '194-82', '377-44'],
    old: ['140-44', '371-19', '303-146'],
    on: ['140-44', '377-44'],
    once: ['140-44', '377-44', '214-146', '194-82'],
    only: ['140-44', '371-19', '439-35'],
    or: ['140-44', '223-56'],
    other: ['140-44', '324-82', '333-121', '194-82'],
    over: ['140-44', '215-110', '194-82'],
    own: ['140-44', '224-179'],
    page: ['304-110', '187-180'],
    paper: ['304-110', '317-57', '194-82'],
    place: ['304-110', '371-19', '317-57', '214-146', '194-82'],
    plant: ['304-110', '377-44', '324-82'],
    play: ['304-110', '371-19', '317-57', '439-35'],
    point: ['304-110', '140-44', '377-44', '324-82'],
    question: ['323-204', '71-60', '194-82', '446-60'],
    quick: ['323-204', '243-121'],
    quickly: ['323-204', '71-60', '243-121', '371-19', '439-35'],
    quite: ['323-204', '169-18', '324-82', '194-82'],
    read: ['223-56', '194-82', '317-57', '303-146'],
    really: ['223-56', '317-57', '371-19', '439-35'],
    right: ['223-56', '169-18', '187-180', '333-121', '324-82'],
    river: ['223-56', '215-110', '169-18'],
    run: ['223-56', '71-60', '377-44'],
    said: ['446-60', '317-57', '169-18', '303-146'],
    same: ['446-60', '317-57', '207-121', '194-82'],
    saw: ['446-60', '317-57'],
    say: ['446-60', '353-179'],
    school: ['446-60', '214-146', '333-121', '140-44', '371-19'],
    sea: ['214-146', '353-179'],
    second: ['446-60', '194-82', '214-146'],
    see: ['446-60', '194-82', '353-179'],
    sentence: ['446-60', '194-82', '377-44', '324-82', '214-146'],
    should: ['446-60', '333-121', '140-44', '71-60'],
    side: ['446-60', '169-18', '303-146'],
    small: ['446-60', '207-121', '317-57'],
    so: ['446-60', '140-44'],
    something: ['446-60', '140-44', '207-121', '194-82', '324-82', '333-121'],
    song: ['446-60', '140-44', '377-44', '187-180'],
    soon: ['446-60', '140-44', '353-179', '377-44'],
    sound: ['446-60', '140-44', '71-60', '377-44', '303-146'],
    spell: ['446-60', '304-110', '371-19'],
    start: ['446-60', '324-82', '223-56', '353-179'],
    still: ['446-60', '324-82', '169-18', '353-179'],
    stop: ['446-60', '324-82', '140-44'],
    story: ['446-60', '324-82', '223-56', '101-35'],
    study: ['446-60', '324-82', '71-60', '303-146'],
    talk: ['324-82', '243-121', '371-19'],
    tell: ['324-82', '194-82', '371-19', '353-179'],
    the: ['324-82', '194-82'],
    their: ['324-82', '333-121', '169-18', '223-56'],
    then: ['324-82', '333-121', '194-82', '377-44'],
    these: ['324-82', '333-121', '194-82', '446-60'],
    they: ['324-82', '333-121', '194-82', '439-35'],
    those: ['324-82', '333-121', '140-44', '446-60', '194-82'],
    thought: ['324-82', '333-121', '140-44', '71-60', '187-180'],
    three: ['324-82', '333-121', '223-56', '194-82', '353-179'],
    through: ['324-82', '333-121', '223-56', '71-60'],
    to: ['324-82', '140-44'],
    together: ['324-82', '140-44', '187-180', '194-82', '333-121'],
    took: ['324-82', '140-44', '243-121'],
    tree: ['324-82', '223-56', '353-179'],
    turn: ['324-82', '71-60', '223-56', '377-44'],
    under: ['71-60', '377-44', '303-146', '194-82'],
    until: ['71-60', '377-44', '324-82'],
    up: ['71-60', '304-110'],
    us: ['71-60', '446-60'],
    very: ['215-110', '223-56', '439-35'],
    walk: ['224-179', '317-57', '243-121', '371-19'],
    want: ['224-179', '317-57', '377-44'],
    was: ['224-179', '317-57'],
    watch: ['224-179', '324-82', '317-57'],
    water: ['224-179', '324-82', '223-56'],
    way: ['224-179', '317-57', '439-35'],
    we: ['224-179', '194-82'],
    went: ['224-179', '194-82', '377-44', '324-82'],
    when: ['224-179', '333-121', '194-82', '377-44'],
    while: ['224-179', '333-121', '169-18', '371-19'],
    white: ['224-179', '333-121', '169-18', '324-82', '194-82'],
    who: ['224-179', '333-121'],
    with: ['224-179', '169-18', '324-82', '333-121'],
    without: ['224-179', '324-82'],
    word: ['224-179', '140-44', '223-56', '303-146'],
    work: ['224-179', '140-44', '223-56'],
    world: ['224-179', '140-44', '223-56', '371-19', '303-146'],
    would: ['224-179', '140-44', '71-60', '371-19', '303-146'],
    write: ['224-179', '223-56', '169-18', '324-82'],
    year: ['439-35', '194-82', '317-57'],
    young: ['439-35', '140-44', '71-60', '377-44', '187-180'],
  },
  chordsLite: {
    from: ['223-56', '296-121', '207-121'],
    get: ['187-180', '194-82', '324-82'],
    her: ['333-121', '194-82', '223-56'],
    him: ['333-121', '169-18', '207-121'],
    how: ['333-121', '140-44', '224-179'],
    like: ['371-19', '169-18', '243-121', '194-82'],
    look: ['371-19', '140-44', '243-121'],
    may: ['207-121', '317-57', '439-35'],
    men: ['207-121', '194-82', '377-44'],
    most: ['207-121', '140-44', '446-60', '324-82'],
    new: ['377-44', '194-82', '224-179'],
    not: ['377-44', '140-44', '324-82'],
    now: ['377-44', '140-44', '224-179'],
    one: ['140-44', '377-44', '194-82'],
    open: ['140-44', '304-110', '194-82', '377-44'],
    our: ['140-44', '71-60', '223-56'],
    out: ['140-44', '71-60', '324-82'],
    part: ['304-110', '317-57', '223-56', '324-82'],
    people: ['304-110', '371-19'],
    picture: ['304-110', '169-18', '214-146'],
    put: ['304-110', '71-60', '324-82'],
    she: ['446-60', '333-121', '194-82'],
    set: ['446-60', '194-82', '324-82'],
    seem: ['446-60', '194-82', '207-121'],
    show: ['446-60', '333-121', '140-44', '224-179'],
    state: ['324-82', '446-60', '317-57', '353-179'],
    such: ['446-60', '71-60', '214-146', '333-121'],
    take: ['324-82', '317-57', '243-121', '194-82'],
    that: ['324-82', '333-121', '317-57'],
    than: ['324-82', '333-121', '317-57', '377-44'],
    them: ['324-82', '333-121', '194-82', '207-121'],
    there: ['324-82', '333-121', '194-82', '223-56'],
    thing: ['324-82', '333-121', '169-18', '377-44', '187-180'],
    think: ['324-82', '333-121', '169-18', '377-44', '243-121'],
    this: ['324-82', '333-121', '169-18', '446-60'],
    time: ['169-18', '324-82', '194-82', '207-121'],
    too: ['324-82', '140-44', '353-179'],
    try: ['324-82', '223-56', '439-35'],
    two: ['324-82', '224-179', '140-44'],
    use: ['71-60', '446-60', '194-82'],
    well: ['224-179', '194-82', '371-19'],
    were: ['224-179', '194-82', '223-56'],
    what: ['224-179', '333-121', '317-57', '324-82'],
    where: ['224-179', '333-121', '194-82', '223-56'],
    which: ['224-179', '333-121', '169-18', '214-146'],
    why: ['224-179', '333-121', '439-35'],
    will: ['224-179', '169-18', '371-19'],
    you: ['439-35', '140-44', '71-60'],
    your: ['140-44', '71-60', '439-35', '223-56'],
    about: ['317-57', '316-180', '140-44', '71-60', '324-82'],
    above: ['317-57', '316-180', '140-44', '215-110', '194-82'],
    add: ['317-57', '303-146'],
    after: ['317-57', '296-121', '324-82', '194-82', '223-56'],
    again: ['317-57', '187-180', '169-18', '377-44'],
    air: ['317-57', '169-18', '223-56'],
    all: ['317-57', '371-19'],
    almost: ['317-57', '371-19', '207-121', '140-44', '446-60', '324-82'],
    along: ['317-57', '371-19', '140-44', '377-44', '187-180'],
    also: ['317-57', '371-19', '446-60', '140-44'],
    always: ['317-57', '371-19', '224-179', '439-35', '446-60'],
    an: ['317-57', '377-44'],
    and: ['317-57', '377-44', '303-146'],
    animal: ['169-18', '317-57', '377-44'],
    another: [
      '317-57',
      '377-44',
      '140-44',
      '324-82',
      '333-121',
      '194-82',
      '223-56',
    ],
    answer: ['317-57', '377-44', '446-60', '224-179', '194-82', '223-56'],
    any: ['317-57', '377-44', '101-35'],
    are: ['317-57', '223-56', '194-82'],
    around: ['317-57', '223-56', '140-44', '71-60', '377-44', '303-146'],
    as: ['317-57', '446-60'],
    ask: ['317-57', '446-60', '243-121'],
    at: ['324-82', '317-57'],
    away: ['317-57', '224-179', '353-179', '439-35'],
    back: ['316-180', '317-57', '214-146', '243-121'],
    be: ['316-180', '194-82'],
    because: ['316-180', '214-146'],
    been: ['316-180', '194-82', '377-44'],
    before: ['140-44', '223-56', '194-82', '296-121', '316-180'],
    began: ['316-180', '194-82', '187-180', '317-57', '377-44'],
    begin: ['316-180', '187-180'],
    being: ['316-180', '194-82', '33-62'],
    below: ['316-180', '194-82', '371-19', '140-44'],
    between: ['324-82', '224-179', '377-44', '316-180'],
    big: ['316-180', '169-18', '187-180'],
    book: ['316-180', '140-44', '243-121'],
    both: ['316-180', '140-44', '324-82', '333-121'],
    boy: ['316-180', '140-44', '439-35'],
    but: ['316-180', '71-60', '324-82'],
    by: ['316-180', '439-35'],
    call: ['214-146', '317-57', '371-19'],
    came: ['214-146', '317-57', '207-121', '194-82'],
    can: ['214-146', '317-57', '377-44'],
    car: ['214-146', '317-57', '223-56'],
    carry: ['439-35', '223-56', '317-57', '214-146'],
    change: ['214-146', '333-121', '317-57', '377-44'],
    children: ['214-146', '333-121', '371-19', '223-56', '194-82', '377-44'],
    city: ['214-146', '169-18', '324-82', '439-35'],
    close: ['214-146', '371-19', '140-44', '446-60', '194-82'],
    come: ['214-146', '140-44', '207-121', '194-82'],
    could: ['214-146', '140-44', '71-60', '371-19', '303-146'],
    country: ['214-146', '140-44', '71-60', '377-44', '324-82', '223-56'],
    cut: ['214-146', '71-60', '324-82'],
    day: ['303-146', '317-57', '439-35'],
    did: ['303-146', '169-18'],
    different: ['303-146', '169-18', '296-121'],
    do: ['303-146', '140-44'],
    does: ['303-146', '140-44', '194-82', '446-60'],
    down: ['303-146', '140-44', '224-179', '377-44'],
    each: ['194-82', '317-57', '214-146', '333-121'],
    earth: ['194-82', '317-57', '223-56', '324-82', '333-121'],
    eat: ['194-82', '317-57', '324-82'],
    enough: ['194-82', '377-44', '140-44', '71-60'],
    even: ['194-82', '215-110', '377-44'],
    every: ['439-35', '223-56', '194-82', '215-110', '353-179'],
    example: ['194-82', '323-168'],
    eye: ['194-82', '439-35', '353-179'],
    face: ['296-121', '317-57', '214-146', '194-82'],
    family: ['296-121', '317-57', '207-121'],
    far: ['296-121', '317-57', '223-56'],
    father: ['296-121', '317-57', '324-82', '333-121', '194-82', '223-56'],
    feet: ['296-121', '194-82', '324-82'],
    few: ['296-121', '194-82', '224-179'],
    find: ['296-121', '169-18', '377-44', '303-146'],
    first: ['296-121', '169-18', '223-56', '446-60', '324-82'],
    follow: ['296-121', '140-44', '371-19', '224-179'],
    food: ['296-121', '140-44', '303-146'],
    for: ['296-121', '140-44', '223-56'],
    form: ['296-121', '140-44', '223-56', '207-121'],
    found: ['296-121', '140-44', '71-60', '377-44', '303-146'],
    four: ['296-121', '140-44', '71-60', '223-56'],
    girl: ['187-180', '169-18', '223-56', '371-19'],
    give: ['187-180', '169-18', '215-110', '194-82'],
    go: ['187-180', '140-44'],
    good: ['187-180', '140-44', '303-146', '353-179'],
    got: ['187-180', '140-44', '324-82'],
    great: ['187-180', '223-56', '194-82', '317-57', '324-82'],
    group: ['187-180', '223-56', '140-44', '71-60', '304-110'],
    grow: ['187-180', '223-56', '140-44', '224-179'],
    had: ['333-121', '317-57', '303-146'],
    hand: ['333-121', '317-57', '377-44', '303-146'],
    hard: ['333-121', '317-57', '223-56', '303-146'],
    has: ['333-121', '317-57', '446-60'],
    have: ['333-121', '317-57', '215-110', '194-82'],
    he: ['333-121', '194-82'],
    head: ['194-82', '333-121', '303-146'],
    hear: ['333-121', '194-82', '317-57', '223-56'],
    help: ['333-121', '194-82', '371-19', '304-110'],
    here: ['333-121', '194-82', '223-56', '353-179'],
    high: ['333-121', '169-18', '187-180'],
    his: ['333-121', '169-18', '446-60'],
    home: ['333-121', '140-44', '207-121', '194-82'],
    house: ['333-121', '140-44', '71-60', '446-60', '194-82'],
    idea: ['169-18', '303-146', '194-82', '317-57'],
    if: ['169-18', '296-121'],
    important: ['169-18', '207-121', '304-110'],
    in: ['169-18', '377-44'],
    into: ['169-18', '377-44', '324-82', '140-44'],
    is: ['169-18', '446-60'],
    it: ['169-18', '324-82'],
    its: ['169-18', '324-82', '446-60'],
    "it's": ['169-18', '324-82', '500-61'],
    just: ['407-18', '71-60', '446-60', '324-82'],
    keep: ['243-121', '194-82', '304-110'],
    kind: ['243-121', '377-44', '303-146'],
    know: ['243-121', '377-44', '140-44', '224-179'],
    land: ['371-19', '317-57', '377-44', '303-146'],
    large: ['371-19', '317-57', '223-56', '187-180', '194-82'],
    last: ['371-19', '317-57', '446-60', '324-82'],
    later: ['371-19', '317-57', '324-82', '194-82', '223-56'],
    learn: ['371-19', '194-82', '317-57', '223-56', '377-44'],
    leave: ['371-19', '194-82', '317-57', '215-110'],
    left: ['371-19', '194-82', '296-121', '324-82'],
    let: ['371-19', '194-82', '324-82'],
    letter: ['324-82', '223-56', '194-82', '371-19'],
    life: ['371-19', '169-18', '296-121', '194-82'],
    light: ['371-19', '169-18', '187-180', '333-121', '324-82'],
    line: ['371-19', '169-18', '377-44', '194-82'],
    list: ['371-19', '169-18', '446-60', '324-82'],
    little: ['371-19', '169-18', '324-82', '194-82'],
    live: ['169-18', '194-82', '371-19', '215-110'],
    long: ['371-19', '140-44', '377-44', '187-180'],
    made: ['207-121', '317-57', '303-146', '194-82'],
    make: ['194-82', '243-121', '317-57', '207-121'],
    man: ['207-121', '317-57', '377-44'],
    many: ['207-121', '317-57', '377-44', '101-35'],
    me: ['207-121', '194-82'],
    mean: ['207-121', '194-82', '317-57', '377-44'],
    might: ['207-121', '169-18', '187-180', '333-121'],
    mile: ['207-121', '169-18', '371-19', '194-82'],
    miss: ['169-18', '446-60', '207-121'],
    more: ['207-121', '140-44', '223-56', '194-82'],
    mother: ['140-44', '324-82', '223-56', '207-121'],
    mountain: ['207-121', '324-82'],
    move: ['207-121', '140-44', '215-110', '194-82'],
    much: ['207-121', '214-146', '333-121'],
    must: ['207-121', '71-60', '446-60', '324-82'],
    my: ['207-121', '439-35'],
    name: ['194-82', '317-57', '377-44'],
    near: ['377-44', '194-82', '317-57', '223-56'],
    need: ['377-44', '194-82', '303-146'],
    never: ['377-44', '194-82', '215-110', '223-56'],
    next: ['377-44', '323-168', '324-82'],
    night: ['169-18', '324-82', '187-180', '377-44'],
    no: ['377-44', '353-179'],
    number: ['377-44', '71-60', '207-121'],
    of: ['140-44', '296-121'],
    off: ['140-44', '296-121', '353-179'],
    often: ['140-44', '296-121', '324-82', '194-82', '377-44'],
    old: ['140-44', '371-19', '303-146'],
    on: ['140-44', '377-44'],
    once: ['140-44', '377-44', '214-146', '194-82'],
    only: ['140-44', '371-19', '439-35'],
    or: ['140-44', '223-56'],
    other: ['140-44', '324-82', '333-121', '194-82', '223-56'],
    over: ['140-44', '215-110', '194-82', '223-56'],
    own: ['140-44', '224-179'],
    page: ['304-110', '194-82', '187-180', '317-57'],
    paper: ['304-110', '317-57', '194-82', '223-56'],
    place: ['304-110', '371-19', '317-57', '214-146', '194-82'],
    plant: ['304-110', '377-44', '324-82'],
    play: ['304-110', '371-19', '317-57', '439-35'],
    point: ['304-110', '140-44', '169-18', '377-44', '324-82'],
    question: ['500-61', '353-179'],
    quick: ['71-60', '323-204', '243-121'],
    quickly: ['323-204', '71-60', '243-121', '371-19', '439-35'],
    quite: ['169-18', '71-60', '324-82', '194-82', '323-204'],
    read: ['223-56', '194-82', '317-57', '303-146'],
    really: ['223-56', '194-82', '317-57', '371-19', '439-35'],
    right: ['223-56', '169-18', '187-180', '333-121', '324-82'],
    river: ['169-18', '223-56', '194-82', '215-110'],
    run: ['223-56', '71-60', '377-44'],
    said: ['446-60', '317-57', '169-18', '303-146'],
    same: ['446-60', '317-57', '207-121', '194-82'],
    saw: ['446-60', '224-179'],
    say: ['439-35', '446-60', '317-57'],
    school: ['446-60', '214-146', '333-121', '140-44', '371-19'],
    sea: ['446-60', '194-82', '317-57'],
    second: ['446-60', '194-82', '214-146'],
    see: ['446-60', '194-82', '353-179'],
    sentence: ['446-60', '194-82', '377-44', '324-82', '214-146'],
    should: ['446-60', '333-121', '140-44', '71-60'],
    side: ['446-60', '169-18', '303-146', '194-82'],
    small: ['446-60', '207-121', '317-57', '371-19'],
    so: ['446-60', '140-44'],
    some: ['446-60', '140-44', '207-121', '194-82'],
    something: ['446-60', '140-44', '207-121', '194-82', '324-82', '333-121'],
    sometimes: ['446-60', '140-44', '207-121', '194-82', '324-82', '169-18'],
    song: ['446-60', '140-44', '377-44', '187-180'],
    soon: ['446-60', '140-44', '353-179', '377-44'],
    sound: ['446-60', '140-44', '71-60', '377-44', '303-146'],
    spell: ['304-110', '194-82', '371-19', '446-60'],
    start: ['446-60', '324-82', '317-57', '223-56', '353-179'],
    still: ['169-18', '324-82', '371-19', '446-60', '353-179'],
    stop: ['446-60', '324-82', '140-44', '304-110'],
    story: ['446-60', '324-82', '140-44', '223-56', '101-35'],
    study: ['446-60', '324-82', '71-60', '303-146', '439-35'],
    talk: ['324-82', '317-57', '243-121', '371-19'],
    tell: ['324-82', '194-82', '371-19', '353-179'],
    the: ['324-82', '333-121', '194-82'],
    their: ['324-82', '333-121', '194-82', '169-18', '223-56'],
    then: ['324-82', '333-121', '194-82', '377-44'],
    these: ['324-82', '333-121', '194-82', '446-60'],
    they: ['324-82', '333-121', '194-82', '439-35'],
    those: ['324-82', '333-121', '140-44', '446-60', '194-82'],
    thought: ['324-82', '333-121', '187-180', '353-179'],
    three: ['324-82', '223-56', '194-82', '333-121', '353-179'],
    through: ['71-60', '324-82', '223-56', '333-121'],
    to: ['324-82', '140-44'],
    together: ['324-82', '223-56', '333-121', '187-180'],
    took: ['324-82', '140-44', '243-121'],
    tree: ['324-82', '223-56', '194-82', '353-179'],
    turn: ['324-82', '71-60', '223-56', '377-44'],
    under: ['71-60', '377-44', '303-146', '223-56'],
    until: ['71-60', '377-44', '324-82'],
    up: ['71-60', '304-110'],
    us: ['71-60', '446-60'],
    very: ['215-110', '223-56', '439-35'],
    walk: ['224-179', '317-57', '243-121', '371-19'],
    want: ['324-82', '224-179', '317-57', '377-44'],
    was: ['224-179', '317-57', '446-60'],
    watch: ['224-179', '317-57', '214-146', '333-121'],
    water: ['224-179', '324-82', '223-56'],
    way: ['224-179', '317-57', '439-35'],
    we: ['224-179', '194-82'],
    went: ['224-179', '194-82', '377-44', '324-82'],
    when: ['224-179', '333-121', '194-82', '377-44'],
    while: ['224-179', '333-121', '169-18', '371-19', '194-82'],
    white: ['224-179', '333-121', '169-18', '324-82', '194-82'],
    who: ['224-179', '333-121'],
    with: ['224-179', '169-18', '324-82', '333-121'],
    without: ['224-179', '169-18', '324-82', '333-121', '140-44'],
    word: ['224-179', '140-44', '223-56', '303-146'],
    work: ['224-179', '140-44', '223-56', '243-121'],
    world: ['224-179', '140-44', '223-56', '371-19', '303-146'],
    would: ['224-179', '140-44', '71-60', '371-19', '303-146'],
    write: ['224-179', '223-56', '169-18', '324-82', '194-82'],
    year: ['439-35', '194-82', '317-57', '223-56'],
    young: ['439-35', '140-44', '71-60', '377-44', '187-180'],
  },
  trigrams: {
    the: [],
    tha: [],
    eth: [],
    for: [],
    est: [],
    hes: [],
    oth: [],
    wit: [],
    res: [],
    rth: [],
    you: [],
    edt: [],
    ast: [],
    con: [],
    nce: [],
    man: [],
    out: [],
    she: [],
    eri: [],
    att: [],
    hin: [],
    ine: [],
    rin: [],
    han: [],
    and: [],
    ent: [],
    nth: [],
    all: [],
    tio: [],
    ith: [],
    ate: [],
    ont: [],
    was: [],
    sin: [],
    ons: [],
    era: [],
    ted: [],
    hen: [],
    ort: [],
    ant: [],
    ein: [],
    eco: [],
    hea: [],
    ran: [],
    ill: [],
    com: [],
    ing: [],
    ere: [],
    hat: [],
    sth: [],
    his: [],
    ers: [],
    dth: [],
    rea: [],
    are: [],
    tin: [],
    sof: [],
    sto: [],
    eve: [],
    din: [],
    sta: [],
    ght: [],
    not: [],
    esa: [],
    ngt: [],
    ndt: [],
    ave: [],
    ive: [],
    hec: [],
    nde: [],
    igh: [],
    her: [],
    ion: [],
    int: [],
    ter: [],
    oft: [],
    ati: [],
    ver: [],
    san: [],
    ear: [],
    ess: [],
    ean: [],
    ist: [],
    one: [],
    ome: [],
    our: [],
    hem: [],
    ore: [],
    ert: [],
    edi: [],
    nto: [],
    men: [],
    eda: [],
    tan: [],
    tho: [],
    ain: [],
  },
  lexical: {
    the: [],
    of: [],
    and: [],
    to: [],
    in: [],
    for: [],
    is: [],
    on: [],
    that: [],
    by: [],
    this: [],
    with: [],
    you: [],
    it: [],
    "it's": [],
    not: [],
    or: [],
    be: [],
    are: [],
    from: [],
    at: [],
    as: [],
    your: [],
    all: [],
    have: [],
    new: [],
    more: [],
    an: [],
    was: [],
    we: [],
    will: [],
    home: [],
    can: [],
    us: [],
    about: [],
    if: [],
    page: [],
    my: [],
    has: [],
    but: [],
    our: [],
    one: [],
    other: [],
    do: [],
    "don't": [],
    no: [],
    time: [],
    they: [],
    he: [],
    up: [],
    may: [],
    what: [],
    which: [],
    their: [],
    out: [],
    use: [],
    any: [],
    there: [],
    see: [],
    only: [],
    so: [],
    his: [],
    when: [],
    here: [],
    who: [],
    also: [],
    now: [],
    help: [],
    get: [],
    first: [],
    been: [],
    would: [],
    how: [],
    were: [],
    me: [],
    some: [],
    these: [],
    its: [],
    like: [],
    than: [],
    find: [],
    back: [],
    people: [],
    had: [],
    list: [],
    name: [],
    just: [],
    over: [],
    state: [],
    year: [],
    day: [],
    into: [],
    two: [],
    world: [],
    next: [],
    go: [],
    work: [],
    last: [],
    most: [],
    make: [],
    them: [],
    should: [],
    her: [],
    city: [],
    add: [],
    number: [],
    such: [],
    after: [],
    then: [],
    good: [],
    well: [],
    where: [],
    high: [],
    school: [],
    through: [],
    each: [],
    she: [],
    very: [],
    book: [],
    read: [],
    group: [],
    need: [],
    many: [],
    said: [],
    does: [],
    set: [],
    under: [],
    life: [],
    know: [],
    way: [],
    part: [],
    could: [],
    great: [],
    must: [],
    made: [],
    off: [],
    line: [],
    before: [],
    did: [],
    right: [],
    because: [],
    those: [],
    car: [],
    take: [],
    want: [],
    between: [],
    family: [],
    long: [],
    show: [],
    even: [],
    being: [],
    much: [],
    open: [],
    same: [],
    own: [],
    found: [],
    house: [],
    both: [],
    while: [],
    down: [],
    three: [],
    place: [],
    end: [],
    him: [],
    without: [],
    think: [],
    big: [],
    water: [],
    change: [],
    white: [],
    small: [],
    children: [],
    form: [],
    old: [],
    call: [],
    another: [],
    why: [],
    still: [],
    every: [],
    country: [],
    little: [],
    man: [],
    food: [],
    different: [],
    learn: [],
    around: [],
    too: [],
    point: [],
    men: [],
    look: [],
    left: [],
    live: [],
    large: [],
    really: [],
    start: [],
    air: [],
    second: [],
    say: [],
    come: [],
    study: [],
    again: [],
    play: [],
    never: [],
    below: [],
    got: [],
    let: [],
    above: [],
    side: [],
    give: [],
    story: [],
    young: [],
    important: [],
    few: [],
    paper: [],
    example: [],
    something: [],
    question: [],
    night: [],
    hard: [],
    four: [],
    always: [],
    light: [],
    write: [],
    picture: [],
    might: [],
    hand: [],
    keep: [],
    run: [],
    put: [],
    try: [],
    head: [],
    until: [],
    away: [],
    once: [],
    tell: [],
    close: [],
    ask: [],
    land: [],
    sound: [],
    word: [],
    talk: [],
    thing: [],
    together: [],
    far: [],
    often: [],
    watch: [],
    girl: [],
    quick: [],
    later: [],
    enough: [],
    along: [],
    face: [],
    near: [],
    thought: [],
    turn: [],
    mean: [],
    river: [],
    stop: [],
    soon: [],
    came: [],
    leave: [],
    kind: [],
    move: [],
    follow: [],
    went: [],
    letter: [],
    almost: [],
    took: [],
    song: [],
    idea: [],
    answer: [],
    animal: [],
    sea: [],
    cut: [],
    earth: [],
    tree: [],
    quite: [],
    boy: [],
    mother: [],
    feet: [],
    mountain: [],
    plant: [],
    eye: [],
    father: [],
    saw: [],
    hear: [],
    sometimes: [],
    begin: [],
    quickly: [],
    miss: [],
    walk: [],
    began: [],
    seem: [],
    carry: [],
    eat: [],
    grow: [],
    mile: [],
    sentence: [],
    spell: [],
  },

  get all() {
    return {
      ...this.lexicographic,
      ...this.trigrams,
      ...this.lexical,
      ...this.letters,
      ...this.chords,
      ...this.chordsLite,
      ...this.lexicalSentences,
      ...this.customtier,
      ...this.allChords,
      ...this.specialCharacters,
      ...this.lexicalSentencesDuos,
      ...this.lexicalSentencesTrios,
    };
  },
};
