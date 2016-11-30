import {stringify as stringifyQuery} from 'qs';

const defaultQuery = {
  f1: 'bug_mentor',
  o1: 'isnotempty',
  whiteboard_type: 'contains_all',
  bug_status: ['NEW', 'ASSIGNED', 'REOPENED', 'UNCONFIRMED'],
  include_fields: ['id', 'assigned_to', 'summary', 'last_change_time', 'component', 'whiteboard', 'status', 'severity']
}

export default {
  buildQueryString: filters => filters.reduce((string, query) => string += `&${stringifyQuery(query, {arrayFormat: 'repeat'})}`, stringifyQuery(defaultQuery, {arrayFormat: 'repeat'})),
  groups : [
    {
      label: "Web Platform",
      options: [
        "a11y",
        "gfx",
        "net",
        "jseng",
        "layout",
        "dom",
        "editor",
        "media"
      ]
    }, {
      label: "Firefox",
      options: [
        "ff",
        "devtools",
        "internals",
        "internals_android",
        "internals_gtk",
        "internals_osx",
        "internals_win32",
        "mobileandroid",
        "mobileios",
        "sync",
        "webextensions"
      ]
    }, {
      label: "Other",
      options: [
        "b2g",
        "thunderbird",
        "instantbird",
        "seamonkey",
        "calendar",
        "mdn"
      ]
    }, {
      label: "Support",
      options: [
        "build",
        "releng",
        "taskcluster",
        "reporting",
        "automation",
        "appsengineering"
      ]
    }, {
      label: "Web Development",
      options: ["bugzilla", "contentservices", "addons", "marketplace", "webmaker"]
    }, {
      label: "Do you know",
      options: [
        "py",
        "java",
        "sh",
        "js",
        "cpp",
        "html",
        "xml",
        "perl"
      ]
    }, {
      label: "Display only",
      options: ["unowned", "simple", "diamond"]
    }
  ],
  options : {
    a11y: {
      label: "Accessibility",
      values: [
        {
          component: ["Disability Access APIs"],
          product: "Core"
        }, {
          component: ["Disability Access"],
          product: "Firefox"
        }, {
          keywords: ["access"]
        }
      ]
    },
    addons: {
      label: "addons.mozilla.org",
      values: [
        {
          product: "addons.mozilla.org"
        }
      ]
    },
    appsengineering: {
      label: "Apps Engineering",
      values: [
        {
          component: [
            "App Center", "Apps", "Dev Kit", "Web Components"
          ],
          product: "Developer Ecosystem"
        }
      ]
    },
    automation: {
      label: "Test Automation",
      values: [
        {
          component: ["Gaia::UI Tests"],
          product: "Firefox OS"
        }, {
          component: [
            "Firefox UI Tests", "Infrastructure", "Mozmill Tests"
          ],
          product: "Mozilla QA"
        }, {
          product: "Testing"
        }
      ]
    },
    b2g: {
      label: "Boot2Gecko / Firefox OS",
      values: [
        {
          product: "Firefox OS"
        }, {
          component: [
            "DOM: Device Interfaces", "Hardware Abstraction Layer (HAL)"
          ],
          product: "Core"
        }
      ]
    },
    bugzilla: {
      label: "Bugzilla",
      values: [
        {
          component: [
            "Administration",
            "Attachments & Requests",
            "Bug Import/Export & Moving",
            "Bugzilla-General",
            "bugzilla.org",
            "Creating/Changing Bugs",
            "Documentation",
            "Email Notifications",
            "Extensions",
            "QA Test Scripts",
            "Query/Bug Lists",
            "Testing Suite",
            "User Accounts",
            "User Interface",
            "WebService",
            "Whining"
          ],
          product: "Bugzilla"
        }, {
          component: [
            "Administration",
            "API",
            "Bugzilla Tweaks",
            "Developer Box",
            "Extensions: AntiSpam",
            "Extensions: BMO",
            "Extensions: ComponentWatching",
            "Extensions: MyDashboard",
            "Extensions: Needinfo",
            "Extensions: UserProfile",
            "General",
            "rbbz",
            "Sandstone/Mozilla Skin",
            "User Interface"
          ],
          product: "bugzilla.mozilla.org"
        }
      ]
    },
    build: {
      label: "Build System",
      values: [
        {
          component: ["Build Config"],
          product: "Core"
        }, {
          component: ["Build Config"],
          product: "MailNews Core"
        }
      ]
    },
    calendar: {
      label: "Calendar",
      values: [
        {
          product: "Calendar"
        }
      ]
    },
    contentservices: {
      label: "Firefox Interest Dashboard",
      values: [
        {
          component: ["Interest Dashboard"],
          product: "Content Services"
        }
      ]
    },
    cpp: {
      label: "C/C++",
      values: [
        {
          status_whiteboard: "lang=c++"
        }
      ]
    },
    devtools: {
      label: "Developer Tools",
      values: [
        {
          component: [
            "Developer Tools",
            "Developer Tools: 3D View",
            "Developer Tools: App Manager",
            "Developer Tools: Console",
            "Developer Tools: Debugger",
            "Developer Tools: Framework",
            "Developer Tools: Graphic Commandline and Toolbar",
            "Developer Tools: Inspector",
            "Developer Tools: Netmonitor",
            "Developer Tools: Object Inspector",
            "Developer Tools: Profiler",
            "Developer Tools: Responsive Mode",
            "Developer Tools: Scratchpad",
            "Developer Tools: Source Editor",
            "Developer Tools: Style Editor"
          ],
          product: "Firefox"
        }
      ]
    },
    diamond: {
      label: "Diamond Bugs",
      values: [
        {
          status_whiteboard: "diamond"
        }
      ]
    },
    dom: {
      label: "DOM and CSS technology",
      values: [
        {
          component: [
            "CSS Parsing and Computation",
            "SVG",
            "DOM",
            "DOM: Core & HTML",
            "DOM: CSS Object Model",
            "DOM: Device Interfaces",
            "DOM: Events",
            "DOM: IndexedDB",
            "DOM: Mozilla Extensions",
            "DOM: Other",
            "DOM: Traversal-Range",
            "DOM: Validation",
            "DOM: Workers",
            "Geolocation",
            "HTML: Form Submission",
            "Event Handling",
            "HTML: Parser",
            "MathML",
            "XML",
            "XSLT"
          ],
          product: "Core"
        }
      ]
    },
    editor: {
      label: "Input handling",
      values: [
        {
          component: [
            "Editor", "Selection", "Keyboard: Navigation", "Drag and Drop", "Spelling Checker"
          ],
          product: "Core"
        }
      ]
    },
    ff: {
      label: "User interface",
      values: [
        {
          product: "Firefox"
        }, {
          product: "Toolkit"
        }, {
          component: ["Firefox Sync: UI"],
          product: "Mozilla Services"
        }, {
          component: [
            "Frontend", "General"
          ],
          product: "Input"
        }
      ]
    },
    gfx: {
      label: "Graphics",
      values: [
        {
          component: [
            "Graphics",
            "GFX: Color Management",
            "Canvas: WebGL",
            "Canvas: 2D",
            "ImageLib",
            "Graphics",
            "Graphics: Layers",
            "Graphics: Text",
            "Panning and Zooming"
          ],
          product: "Core"
        }
      ]
    },
    html: {
      label: "HTML/CSS",
      values: [
        {
          product: "Developer Ecosystem"
        }, {
          status_whiteboard: "lang=html"
        }, {
          status_whiteboard: "lang=css"
        }
      ]
    },
    instantbird: {
      label: "Instantbird",
      values: [
        {
          product: "Instantbird"
        }, {
          product: "Chat Core"
        }
      ]
    },
    internals: {
      label: "Internals",
      values: [
        {
          component: [
            "General",
            "Widget",
            "Document Navigation",
            "XPCOM",
            "Embedding: APIs",
            "Embedding: GRE Core",
            "Embedding: Packaging",
            "File Handling",
            "Find Backend",
            "Gecko Profiler",
            "History (Global)",
            "Image Blocking",
            "Installer",
            "IPC",
            "MFBT",
            "Plug-ins",
            "Preferences: Backend",
            "Print Preview",
            "Printing: Output",
            "Printing: Setup",
            "Profile: BackEnd",
            "Profile: Migration",
            "Profile: Roaming",
            "RDF",
            "Rewriting and Analysis",
            "Security",
            "Security: CAPS",
            "Security: PSM",
            "Security: S/MIME",
            "Security: UI",
            "Serializers",
            "SQL",
            "String",
            "XBL",
            "XTF",
            "XUL",
            "Widget",
            "Widget: BeOS",
            "Widget: OS/2",
            "Widget: Photon",
            "Widget: Qt",
            "XP Toolkit/Widgets: XUL",
            "XP Toolkit/Widgets: Menus",
            "Identity",
            "Localization"
          ],
          product: "Core"
        }, {
          product: "NSPR"
        }, {
          product: "NSS"
        }, {
          component: [
            "Telemetry", "Add-ons Manager"
          ],
          product: "Toolkit"
        }
      ]
    },
    internals_android: {
      label: "Internals (Android)",
      values: [
        {
          component: ["Widget: Android"],
          product: "Core"
        }
      ]
    },
    internals_gtk: {
      label: "Internals (GTK)",
      values: [
        {
          component: [
            "Embedding: GTK Widget", "Widget: Gtk"
          ],
          product: "Core"
        }
      ]
    },
    internals_osx: {
      label: "Internals (OSX)",
      values: [
        {
          component: [
            "Embedding: Mac", "Widget: Cocoa"
          ],
          product: "Core"
        }
      ]
    },
    internals_win32: {
      label: "Internals (Windows)",
      values: [
        {
          component: ["Widget: Win32"],
          product: "Core"
        }
      ]
    },
    java: {
      label: "Java",
      values: [
        {
          component: ["Widget: Android"],
          product: "Core"
        }, {
          component: ["Android Sync"],
          product: "Mozilla Services"
        }, {
          status_whiteboard: "lang=java]"
        }
      ]
    },
    js: {
      label: "JavaScript",
      values: [
        {
          product: "Developer Ecosystem"
        }, {
          status_whiteboard: "lang=js"
        }, {
          component: ["Firefox Sync: Backend"],
          product: "Mozilla Services"
        }
      ]
    },
    jseng: {
      label: "JavaScript Engine",
      values: [
        {
          component: [
            "JavaScript Engine",
            "JavaScript Engine: JIT",
            /*eslint-disable */
            // NOTE: We ignore http://eslint.org/docs/rules/no-script-url here
            "JavaScript: GC",
            "JavaScript: Internationalization API",
            "JavaScript: Standard Library",
            /*eslint-enable */
            "js-ctypes",
            "XPConnect"
          ],
          product: "Core"
        }
      ]
    },
    layout: {
      label: "Layout",
      values: [
        {
          component: [
            "Layout",
            "Layout: Block and Inline",
            "Layout: Floats",
            "Layout: Form Controls",
            "Layout: HTML Frames",
            "Layout: Images",
            "Layout: Misc Code",
            "Layout: R & A Pos",
            "Layout: Tables",
            "Layout: Text",
            "Layout: View Rendering"
          ],
          product: "Core"
        }
      ]
    },
    marketplace: {
      label: "Firefox Marketplace",
      values: [
        {
          product: "Marketplace"
        }
      ]
    },
    mdn: {
      label: "MDN / Developer Documentation",
      values: [
        {
          component: [
            "Accessibility",
            "Add-ons",
            "API: CSSOM",
            "API: Device API",
            "API: DOM",
            "API: File API",
            "API: HTML",
            "API: IndexedDB",
            "API: Miscellaneous",
            "API: SVG",
            "API: Web Animations",
            "API: Web Audio",
            "API: Web Sockets",
            "API: Web Workers",
            "API: WebRTC",
            "Apps",
            "CSS",
            "Developer Tools",
            "Emscripten",
            "Firefox OS",
            "Games",
            "General",
            "HTML",
            "JavaScript",
            "Learning Area",
            "Localization",
            "Macros/Templates",
            "Marketplace",
            "MathML",
            "MDN Meta Docs",
            "Mozilla Platform",
            "Protocols",
            "Security",
            "SVG"
          ],
          product: "Developer Documentation"
        }
      ]
    },
    media: {
      label: "Media",
      values: [
        {
          component: [
            "Video/Audio", "WebRTC", "WebRTC: Audio/Video", "WebRTC: Signalling"
          ],
          product: "Core"
        }
      ]
    },
    mobileandroid: {
      label: "Mobile (Android)",
      values: [
        {
          product: "Fennec"
        }, {
          product: "Firefox for Android"
        }, {
          component: [
            "Widget: Android", "mozglue"
          ],
          product: "Core"
        }
      ]
    },
    mobileios: {
      label: "Mobile (iOS)",
      values: [
        {
          product: "Firefox for iOS"
        }
      ]
    },
    net: {
      label: "Networking",
      values: [
        {
          component: [
            "Networking",
            "Networking: HTTP",
            "Networking: Cookies",
            "Networking: File",
            "Networking: JAR",
            "Networking: WebSockets",
            "Networking: DNS",
            "WebRTC: Networking"
          ],
          product: "Core"
        }
      ]
    },
    perl: {
      label: "Perl",
      values: [
        {
          product: "Bugzilla"
        }, {
          product: "bugzilla.mozilla.org"
        }
      ]
    },
    py: {
      label: "Python",
      values: [
        {
          status_whiteboard: "lang=py"
        }
      ]
    },
    releng: {
      label: "Release Engineering",
      values: [
        {
          component: ["Hg: Customizations"],
          product: "mozilla.org"
        }, {
          product: "Release Engineering"
        }
      ]
    },
    reporting: {
      label: "Dashboards and Reporting",
      values: [
        {
          product: "Tree Management"
        }
      ]
    },
    seamonkey: {
      label: "SeaMonkey",
      values: [
        {
          product: "SeaMonkey"
        }
      ]
    },
    sh: {
      label: "Shell/Makefile/Autoconf",
      values: [
        {
          status_whiteboard: "lang=shell"
        }, {
          component: ["Build Config"],
          product: "Core"
        }, {
          component: ["Build Config"],
          product: "MailNews Core"
        }
      ]
    },
    simple: {
      label: "Simple bugs",
      values: [
        {
          status_whiteboard: "good first bug"
        }, {
          keywords: "good-first-bug"
        }
      ]
    },
    sync: {
      label: "Sync",
      values: [
        {
          component: [
            "Firefox Sync: Backend",
            "Firefox Sync: Build",
            "Firefox Sync: Crypto",
            "Firefox Sync: UI",
            "Android Sync",
            "Server: Sync"
          ],
          product: "Mozilla Services"
        }
      ]
    },
    taskcluster: {
      label: "TaskCluster",
      values: [
        {
          product: "TaskCluster"
        }
      ]
    },
    thunderbird: {
      label: "Thunderbird",
      values: [
        {
          product: "Thunderbird"
        }, {
          product: "MailNews Core"
        }
      ]
    },
    unowned: {
      label: "Unassigned bugs",
      values: [
        {
          assigned_to: ["nobody@mozilla.org", "general@js.bugs"]
        }
      ]
    },
    webextensions: {
      label: "Web Extensions",
      values: [
        {
          component: [
            "WebExtensions: Android",
            "WebExtensions: Compatibility",
            "WebExtensions: Developer tools",
            "WebExtensions: Experiments",
            "WebExtensions: Frontend",
            "WebExtensions: General",
            "WebExtensions: Request Handling",
            "WebExtensions: Untriaged"
          ],
          product: "Toolkit"
        }
      ]
    },
    webmaker: {
      label: "Webmaker",
      values: [
        {
          component: [
            "Badges",
            "Community",
            "DevOps",
            "Events",
            "General",
            "Login",
            "MakeAPI",
            "Marketing",
            "Popcorn Maker",
            "Projects",
            "Thimble",
            "popcorn.js",
            "webmaker.org"
          ],
          product: "Webmaker"
        }
      ]
    },
    xml: {
      label: "XML/XUL",
      values: [
        {
          status_whiteboard: "lang=xul"
        }, {
          status_whiteboard: "lang=xml"
        }
      ]
    }
  }
}
