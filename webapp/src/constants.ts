const APP_NAME = 'Share Board';

const SERVICE_API_URL = `http://localhost:3000`;

const THROTTLE_TIME = 1000;

const LANGUAGES_LIST = [{
    label: 'HTML',
    value: 'html'
}, {
    label: 'CSS',
    value: 'css'
}, {
    label: 'Javascript',
    value: 'javascript'
}]

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
    SERVICE_API_URL,
    THROTTLE_TIME,
    LANGUAGES_LIST,
    SPLIT_PANE_SIZE_KEY,
    CODE_EDITOR_CONFIG,
    TEXT_EDITOR_CONFIG
}