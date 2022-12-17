// Replace `astro/client` with `@astrojs/image/client`
/// <reference types="@astrojs/image/client" />
// / <reference types="astro/client" />
declare module 'virtual:pwa-register' {
    export type RegisterSWOptions = {
        immediate?: boolean;
        onNeedRefresh?: () => void;
        onOfflineReady?: () => void;
        onRegistered?: (registration: ServiceWorkerRegistration | undefined) => void;
        onRegisterError?: (error: any) => void;
    };

    export function registerSW(options?: RegisterSWOptions): (reloadPage?: boolean) => Promise<void>;
}


// declare module './src/links.json' {
//     declare module "*.json" {
//         const value: any;
//         export default value;
//       }
// }