let baseURL;

switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = "https://ahao.com/api";
        break;
    case 'production':
        baseURL = "https://ahaow.com/api";
        break;
    default:
        baseURL = "https://ahao.com/api";
        break;
}

export default baseURL;
