const APP_NAME = 'Share Board';

const THROTTLE_TIME = 1000;

const LANGUAGES_LIST = [
    'apex',
    'azcli',
    'bat',
    'c',
    'clojure',
    'coffeescript',
    'cpp',
    'csharp',
    'csp',
    'css',
    'dockerfile',
    'fsharp',
    'go',
    'graphql',
    'handlebars',
    'html',
    'ini',
    'java',
    'javascript',
    'json',
    'kotlin',
    'less',
    'lua',
    'markdown',
    'msdax',
    'mysql',
    'objective-c',
    'pascal',
    'perl',
    'pgsql',
    'php',
    'plaintext',
    'postiats',
    'powerquery',
    'powershell',
    'pug',
    'python',
    'r',
    'razor',
    'redis',
    'redshift',
    'ruby',
    'rust',
    'sb',
    'scheme',
    'scss',
    'shell',
    'sol',
    'sql',
    'st',
    'swift',
    'tcl',
    'typescript',
    'vb',
    'xml',
    'yaml'
]

const SPLIT_PANE_SIZE_KEY = 'splitPos';

const CODE_EDITOR_CONFIG = {
    minimap: {
        enabled: false
    }
}

const TEXT_EDITOR_CONFIG = {
    namespace: 'shareboard',
    onError(error: any) {
        throw error;
    },
    nodes: []
};

export {
    APP_NAME,
    THROTTLE_TIME,
    LANGUAGES_LIST,
    SPLIT_PANE_SIZE_KEY,
    CODE_EDITOR_CONFIG,
    TEXT_EDITOR_CONFIG
}