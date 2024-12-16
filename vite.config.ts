import {defineConfig} from 'vite'
import {fileURLToPath, URL} from 'url';

export default defineConfig({
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@scripts': fileURLToPath(new URL('./src/scripts', import.meta.url)),
            '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
            '@shared': fileURLToPath(new URL('./src/components/shared', import.meta.url))
        }
    },
})