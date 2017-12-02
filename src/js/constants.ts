export const requestDefaults = {
  status: ['NEW', 'ASSIGNED', 'REOPENED', 'UNCONFIRMED'],
  include_fields: ['id', 'assigned_to', 'summary', 'last_change_time', 'component', 'whiteboard', 'status', 'severity']

  // not sure
  // whiteboard_type: 'contains_all',

  // These are related to a has mentor check? needed?
  // f1: 'bug_mentor',
  // o1: 'isnotempty'
}

export const FilterGroups = [
  {
    label: 'Display only',
    options: [
      {
        key: 'unowned',
        label: 'Unassigned bugs'
      }, {
        key: 'simple',
        label: 'Simple bugs'
      }, {
        key: 'diamond',
        label: 'Diamond Bugs'
      }, {
        key: 'createdLast30',
        label: 'Bugs created in the last 30 days'
      }
    ]
  }, {
    label: 'Languages',
    options: [
      {
        key: 'py',
        label: 'Python'
      }, {
        key: 'java',
        label: 'Java'
      }, {
        key: 'sh',
        label: 'Shell/Makefile/Autoconf'
      }, {
        key: 'js',
        label: 'JavaScript'
      }, {
        key: 'cpp',
        label: 'C/C++'
      }, {
        key: 'html',
        label: 'HTML/CSS'
      }, {
        key: 'xml',
        label: 'XML/XUL'
      }, {
        key: 'perl',
        label: 'Perl'
      }
    ]
  }, {
    label: 'Web Platform',
    options: [
      {
        key: 'a11y',
        label: 'Accessibility'
      }, {
        key: 'gfx',
        label: 'Graphics'
      }, {
        key: 'net',
        label: 'Networking'
      }, {
        key: 'jseng',
        label: 'JavaScript Engine'
      }, {
        key: 'layout',
        label: 'Layout'
      }, {
        key: 'dom',
        label: 'DOM and CSS technology'
      }, {
        key: 'editor',
        label: 'Input handling'
      }, {
        key: 'media',
        label: 'Media'
      }
    ]
  }, {
    label: 'Firefox',
    options: [
      {
        key: 'ff',
        label: 'User interface'
      }, {
        key: 'devtools',
        label: 'Developer Tools'
      }, {
        key: 'internals',
        label: 'Internals'
      }, {
        key: 'internals_android',
        label: 'Internals (Android)'
      }, {
        key: 'internals_gtk',
        label: 'Internals (GTK)'
      }, {
        key: 'internals_osx',
        label: 'Internals (OSX)'
      }, {
        key: 'internals_win32',
        label: 'Internals (Windows)'
      }, {
        key: 'mobileandroid',
        label: 'Mobile (Android)'
      }, {
        key: 'mobileios',
        label: 'Mobile (iOS)'
      }, {
        key: 'sync',
        label: 'Sync'
      }, {
        key: 'webextensions',
        label: 'Web Extensions'
      }
    ]
  }, {
    label: 'Other',
    options: [
      {
        key: 'b2g',
        label: 'Boot2Gecko / Firefox OS'
      }, {
        key: 'thunderbird',
        label: 'Thunderbird'
      }, {
        key: 'instantbird',
        label: 'Instantbird'
      }, {
        key: 'seamonkey',
        label: 'SeaMonkey'
      }, {
        key: 'calendar',
        label: 'Calendar'
      }, {
        key: 'mdn',
        label: 'MDN / Developer Documentation'
      }
    ]
  }, {
    label: 'Support',
    options: [
      {
        key: 'build',
        label: 'Build System'
      }, {
        key: 'releng',
        label: 'Release Engineering'
      }, {
        key: 'taskcluster',
        label: 'TaskCluster'
      }, {
        key: 'reporting',
        label: 'Dashboards and Reporting'
      }, {
        key: 'automation',
        label: 'Test Automation'
      }, {
        key: 'appsengineering',
        label: 'Apps Engineering'
      }
    ]
  }, {
    label: 'Web Development',
    options: [
      {
        key: 'bugzilla',
        label: 'Bugzilla'
      }, {
        key: 'contentservices',
        label: 'Firefox Interest Dashboard'
      }, {
        key: 'addons',
        label: 'addons.mozilla.org'
      }, {
        key: 'marketplace',
        label: 'Firefox Marketplace'
      }, {
        key: 'webmaker',
        label: 'Webmaker'
      }
    ]
  }
]

export const FilterOptions = {
  createdLast30: [
    {
      creation_time: new Date(new Date().setDate(new Date().getDate() - 30))
    }
  ],
  a11y: [
    {
      component: ['Disability Access APIs'],
      product: 'Core'
    }, {
      component: ['Disability Access'],
      product: 'Firefox'
    }, {
      keywords: ['access']
    }
  ],
  addons: [
    {
      product: 'addons.mozilla.org'
    }
  ],
  appsengineering: [
    {
      component: [
        'App Center', 'Apps', 'Dev Kit', 'Web Components'
      ],
      product: 'Developer Ecosystem'
    }
  ],
  automation: [
    {
      component: ['Gaia::UI Tests'],
      product: 'Firefox OS'
    }, {
      component: [
        'Firefox UI Tests', 'Infrastructure', 'Mozmill Tests'
      ],
      product: 'Mozilla QA'
    }, {
      product: 'Testing'
    }
  ],
  b2g: [
    {
      product: 'Firefox OS'
    }, {
      component: [
        'DOM: Device Interfaces', 'Hardware Abstraction Layer (HAL)'
      ],
      product: 'Core'
    }
  ],
  bugzilla: [
    {
      component: [
        'Administration',
        'Attachments & Requests',
        'Bug Import/Export & Moving',
        'Bugzilla-General',
        'bugzilla.org',
        'Creating/Changing Bugs',
        'Documentation',
        'Email Notifications',
        'Extensions',
        'QA Test Scripts',
        'Query/Bug Lists',
        'Testing Suite',
        'User Accounts',
        'User Interface',
        'WebService',
        'Whining'
      ],
      product: 'Bugzilla'
    },
    {
      component: [
        'Administration',
        'API',
        'Bugzilla Tweaks',
        'Developer Box',
        'Extensions: AntiSpam',
        'Extensions: BMO',
        'Extensions: ComponentWatching',
        'Extensions: MyDashboard',
        'Extensions: Needinfo',
        'Extensions: UserProfile',
        'General',
        'rbbz',
        'Sandstone/Mozilla Skin',
        'User Interface'
      ],
      product: 'bugzilla.mozilla.org'
    }
  ],
  build: [
    {
      component: ['Build Config'],
      product: 'Core'
    }, {
      component: ['Build Config'],
      product: 'MailNews Core'
    }
  ],
  calendar: [
    {
      product: 'Calendar'
    }
  ],
  contentservices: [
    {
      component: ['Interest Dashboard'],
      product: 'Content Services'
    }
  ],
  cpp: [
    {
      whiteboard: 'lang=c++'
    }
  ],
  devtools: [
    {
      component: [
        'Developer Tools',
        'Developer Tools: 3D View',
        'Developer Tools: App Manager',
        'Developer Tools: Console',
        'Developer Tools: Debugger',
        'Developer Tools: Framework',
        'Developer Tools: Graphic Commandline and Toolbar',
        'Developer Tools: Inspector',
        'Developer Tools: Netmonitor',
        'Developer Tools: Object Inspector',
        'Developer Tools: Profiler',
        'Developer Tools: Responsive Mode',
        'Developer Tools: Scratchpad',
        'Developer Tools: Source Editor',
        'Developer Tools: Style Editor'
      ],
      product: 'Firefox'
    }
  ],
  diamond: [
    {
      whiteboard: 'diamond'
    }
  ],
  dom: [
    {
      component: [
        'CSS Parsing and Computation',
        'SVG',
        'DOM',
        'DOM: Core & HTML',
        'DOM: CSS Object Model',
        'DOM: Device Interfaces',
        'DOM: Events',
        'DOM: IndexedDB',
        'DOM: Mozilla Extensions',
        'DOM: Other',
        'DOM: Traversal-Range',
        'DOM: Validation',
        'DOM: Workers',
        'Geolocation',
        'HTML: Form Submission',
        'Event Handling',
        'HTML: Parser',
        'MathML',
        'XML',
        'XSLT'
      ],
      product: 'Core'
    }
  ],
  editor: [
    {
      component: [
        'Editor', 'Selection', 'Keyboard: Navigation', 'Drag and Drop', 'Spelling Checker'
      ],
      product: 'Core'
    }
  ],
  ff: [
    {
      product: 'Firefox'
    }, {
      product: 'Toolkit'
    }, {
      component: ['Firefox Sync: UI'],
      product: 'Mozilla Services'
    }, {
      component: [
        'Frontend', 'General'
      ],
      product: 'Input'
    }
  ],
  gfx: [
    {
      component: [
        'Graphics',
        'GFX: Color Management',
        'Canvas: WebGL',
        'Canvas: 2D',
        'ImageLib',
        'Graphics',
        'Graphics: Layers',
        'Graphics: Text',
        'Panning and Zooming'
      ],
      product: 'Core'
    }
  ],
  html: [
    {
      product: 'Developer Ecosystem'
    }, {
      whiteboard: 'lang=html'
    }, {
      whiteboard: 'lang=css'
    }
  ],
  instantbird: [
    {
      product: 'Instantbird'
    }, {
      product: 'Chat Core'
    }
  ],
  internals: [
    {
      component: [
        'General',
        'Widget',
        'Document Navigation',
        'XPCOM',
        'Embedding: APIs',
        'Embedding: GRE Core',
        'Embedding: Packaging',
        'File Handling',
        'Find Backend',
        'Gecko Profiler',
        'History (Global)',
        'Image Blocking',
        'Installer',
        'IPC',
        'MFBT',
        'Plug-ins',
        'Preferences: Backend',
        'Print Preview',
        'Printing: Output',
        'Printing: Setup',
        'Profile: BackEnd',
        'Profile: Migration',
        'Profile: Roaming',
        'RDF',
        'Rewriting and Analysis',
        'Security',
        'Security: CAPS',
        'Security: PSM',
        'Security: S/MIME',
        'Security: UI',
        'Serializers',
        'SQL',
        'String',
        'XBL',
        'XTF',
        'XUL',
        'Widget',
        'Widget: BeOS',
        'Widget: OS/2',
        'Widget: Photon',
        'Widget: Qt',
        'XP Toolkit/Widgets: XUL',
        'XP Toolkit/Widgets: Menus',
        'Identity',
        'Localization'
      ],
      product: 'Core'
    }, {
      product: 'NSPR'
    }, {
      product: 'NSS'
    }, {
      component: [
        'Telemetry', 'Add-ons Manager'
      ],
      product: 'Toolkit'
    }
  ],
  internals_android: [
    {
      component: ['Widget: Android'],
      product: 'Core'
    }
  ],
  internals_gtk: [
    {
      component: [
        'Embedding: GTK Widget', 'Widget: Gtk'
      ],
      product: 'Core'
    }
  ],
  internals_osx: [
    {
      component: [
        'Embedding: Mac', 'Widget: Cocoa'
      ],
      product: 'Core'
    }
  ],
  internals_win32: [
    {
      component: ['Widget: Win32'],
      product: 'Core'
    }
  ],
  java: [
    {
      component: ['Widget: Android'],
      product: 'Core'
    }, {
      component: ['Android Sync'],
      product: 'Mozilla Services'
    }, {
      whiteboard: 'lang=java]'
    }
  ],
  js: [
    {
      product: 'Developer Ecosystem'
    }, {
      whiteboard: 'lang=js'
    }, {
      component: ['Firefox Sync: Backend'],
      product: 'Mozilla Services'
    }
  ],
  jseng: [
    {
      component: [
        'JavaScript Engine', 'JavaScript Engine: JIT',
        /*eslint-disable */
        // NOTE: We ignore http://eslint.org/docs/rules/no-script-url here
        "JavaScript: GC",
        "JavaScript: Internationalization API",
        "JavaScript: Standard Library",
        /*eslint-enable */
        'js-ctypes',
        'XPConnect'
      ],
      product: 'Core'
    }
  ],
  layout: [
    {
      component: [
        'Layout',
        'Layout: Block and Inline',
        'Layout: Floats',
        'Layout: Form Controls',
        'Layout: HTML Frames',
        'Layout: Images',
        'Layout: Misc Code',
        'Layout: R & A Pos',
        'Layout: Tables',
        'Layout: Text',
        'Layout: View Rendering'
      ],
      product: 'Core'
    }
  ],
  marketplace: [
    {
      product: 'Marketplace'
    }
  ],
  mdn: [
    {
      component: [
        'Accessibility',
        'Add-ons',
        'API: CSSOM',
        'API: Device API',
        'API: DOM',
        'API: File API',
        'API: HTML',
        'API: IndexedDB',
        'API: Miscellaneous',
        'API: SVG',
        'API: Web Animations',
        'API: Web Audio',
        'API: Web Sockets',
        'API: Web Workers',
        'API: WebRTC',
        'Apps',
        'CSS',
        'Developer Tools',
        'Emscripten',
        'Firefox OS',
        'Games',
        'General',
        'HTML',
        'JavaScript',
        'Learning Area',
        'Localization',
        'Macros/Templates',
        'Marketplace',
        'MathML',
        'MDN Meta Docs',
        'Mozilla Platform',
        'Protocols',
        'Security',
        'SVG'
      ],
      product: 'Developer Documentation'
    }
  ],
  media: [
    {
      component: [
        'Video/Audio', 'WebRTC', 'WebRTC: Audio/Video', 'WebRTC: Signalling'
      ],
      product: 'Core'
    }
  ],
  mobileandroid: [
    {
      product: 'Fennec'
    }, {
      product: 'Firefox for Android'
    }, {
      component: [
        'Widget: Android', 'mozglue'
      ],
      product: 'Core'
    }
  ],
  mobileios: [
    {
      product: 'Firefox for iOS'
    }
  ],
  net: [
    {
      component: [
        'Networking',
        'Networking: HTTP',
        'Networking: Cookies',
        'Networking: File',
        'Networking: JAR',
        'Networking: WebSockets',
        'Networking: DNS',
        'WebRTC: Networking'
      ],
      product: 'Core'
    }
  ],
  perl: [
    {
      product: 'Bugzilla'
    }, {
      product: 'bugzilla.mozilla.org'
    }
  ],
  py: [
    {
      whiteboard: 'lang=py'
    }
  ],
  releng: [
    {
      component: ['Hg: Customizations'],
      product: 'mozilla.org'
    }, {
      product: 'Release Engineering'
    }
  ],
  reporting: [
    {
      product: 'Tree Management'
    }
  ],
  seamonkey: [
    {
      product: 'SeaMonkey'
    }
  ],
  sh: [
    {
      whiteboard: 'lang=shell'
    }, {
      component: ['Build Config'],
      product: 'Core'
    }, {
      component: ['Build Config'],
      product: 'MailNews Core'
    }
  ],
  simple: [
    {
      whiteboard: 'good first bug'
    }, {
      keywords: 'good-first-bug'
    }
  ],
  sync: [
    {
      component: [
        'Firefox Sync: Backend',
        'Firefox Sync: Build',
        'Firefox Sync: Crypto',
        'Firefox Sync: UI',
        'Android Sync',
        'Server: Sync'
      ],
      product: 'Mozilla Services'
    }
  ],
  taskcluster: [
    {
      product: 'TaskCluster'
    }
  ],
  thunderbird: [
    {
      product: 'Thunderbird'
    }, {
      product: 'MailNews Core'
    }
  ],
  unowned: [
    {
      assigned_to: ['nobody@mozilla.org', 'general@js.bugs']
    }
  ],
  webextensions: [
    {
      component: [
        'WebExtensions: Android',
        'WebExtensions: Compatibility',
        'WebExtensions: Developer tools',
        'WebExtensions: Experiments',
        'WebExtensions: Frontend',
        'WebExtensions: General',
        'WebExtensions: Request Handling',
        'WebExtensions: Untriaged'
      ],
      product: 'Toolkit'
    }
  ],
  webmaker: [
    {
      component: [
        'Badges',
        'Community',
        'DevOps',
        'Events',
        'General',
        'Login',
        'MakeAPI',
        'Marketing',
        'Popcorn Maker',
        'Projects',
        'Thimble',
        'popcorn.js',
        'webmaker.org'
      ],
      product: 'Webmaker'
    }
  ],
  xml: [
    {
      whiteboard: 'lang=xul'
    }, {
      whiteboard: 'lang=xml'
    }
  ]
}
