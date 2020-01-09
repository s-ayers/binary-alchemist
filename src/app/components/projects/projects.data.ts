import { Project } from './project.model';
declare var require: any;

export const Projects: Project[] = [
  {
    name: 'Dance Beat',
    description: '<p>Dance studio in Channahon, Il</p>',
    category: 'website',
    thumbnail: require('./dance-beat.png'),
    website: 'https://dancebeat.studio'
  },
  {
    name: 'Binary Alchemist',
    description: '<p>This website</p>',
    category: 'website',
    thumbnail: require('./binary-alchemist.png'),
    website: 'https://binaryalchemist.com'
  },
  {
    name: 'Answers',
    description: '<p>A <em>Stack Overflow</em> port to Drupal</p>',
    category: 'drupal',
    thumbnail: require('./drupal-answers.png'),
    website: 'https://www.drupal.org/project/answers'
  },
  {
    name: 'Open LotR2',
    description:
      '<p><em>Lords of the Ream 2</em> port to Electron & Phaser3</p>',
    category: 'game',
    thumbnail: require('./220x165.png'),
    website: 'https://github.com/s-ayers/OpenLotR2'
  },
  {
    name: 'Conway\'s Game of Life',
    description: '<p>The Game of Life, is a cellular automaton.</p>',
    category: 'game',
    thumbnail: require('./220x165.png'),
    website: 'https://s-ayers.github.io/conways-crafty-life/'
  }
];
