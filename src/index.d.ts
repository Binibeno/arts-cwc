declare module "*.svg" {
    const content: any;
    export default content;
}
declare module 'i18next' {
    interface CustomTypeOptions {
        returnNull: false;
    }
}