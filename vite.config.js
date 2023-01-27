import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
import fs from 'fs';
const host = 'accounts-app.local';
export default defineConfig({
    plugins: [

        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),

    ],
    server: {
        host,
        hmr: { host },
        https: {
            key: fs.readFileSync(`D:/laragon/etc/ssl/laragon.key`),
            cert: fs.readFileSync(`D:/laragon/etc/ssl/laragon.crt`),
        },
    },
});

