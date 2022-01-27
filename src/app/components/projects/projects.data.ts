import { Project } from './project.model';

export const Projects: Project[] = [
  {
    name: 'Dance Beat',
    description: '<p>Dance studio in Channahon, Il</p>',
    category: 'website',
    thumbnail: 'assets/projects/images/dance-beat.png',
    website: 'https://dancebeat.studio'
  },
  {
    name: 'Binary Alchemist',
    description: '<p>This website</p>',
    category: 'website',
    thumbnail: 'assets/projects/images/binary-alchemist.png',
    website: 'https://binaryalchemist.com'
  },
  {
    name: 'Answers',
    description: '<p>A <em>Stack Overflow</em> port to Drupal</p>',
    category: 'drupal',
    thumbnail: 'assets/projects/images/drupal-answers.png',
    website: 'https://www.drupal.org/project/answers'
  },
  {
    name: 'Pager Serializer',
    description: '<p>De-coupled ui utility.</p>',
    category: 'drupal',
    thumbnail: 'assets/projects/images/drupal-answers.png',
    website: 'https://www.drupal.org/project/pager_serializer'
  },
  {
    name: 'Open LotR2',
    description:
      '<p><em>Lords of the Ream 2</em> port to Electron & Phaser3</p>',
    category: 'game',
    thumbnail: 'assets/projects/images/220x165.png',
    website: 'https://github.com/s-ayers/OpenLotR2'
  },
  {
    name: 'Pl8 Magic',
    description:
      '<p></p>',
    category: 'utility',
    thumbnail: 'assets/projects/images/220x165.png',
    website: 'https://pl8magic.binaryalchemist.com/'
  },
  {
    name: 'LoTR2 Editor',
    description:
      '<p>Lords of the Realm 2 game editor.</p>',
    category: 'utility',
    thumbnail: 'assets/projects/images/220x165.png',
    website: 'https://lotr2-editor.binaryalchemist.com/'
  },

  // /lotr2-editor
  {
    name: 'Conway\'s Game of Life',
    description: '<p>The Game of Life, is a cellular automaton.</p>',
    category: 'game',
    thumbnail: 'assets/projects/images/220x165.png',
    website: 'https://s-ayers.github.io/conways-crafty-life/'
  }
];
