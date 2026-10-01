# DMD Domy — synchronizacja produkcji 2026-10-01

Źródła frontendu z `/home/johndoe/app/dmddomy-frontend-next` są w katalogu
głównym repozytorium. Backend z `/home/johndoe/app/dmddomy-backend` jest w `api/`.
Frontend nadal używa Create React App; nazwa katalogu na VPS nie oznacza Next.js.

Wymagany jest Node.js 24.x. Instalacja i build:

```powershell
npm ci
npm run build
npm --prefix api ci
```

Backend wymaga hasła lokalnej bazy w zmiennej środowiskowej `DB_PASSWORD`.
Pozostałe ustawienia: `DB_HOST` (domyślnie `127.0.0.1`), `DB_PORT` (`3306`),
`DB_USER` (`informatyk`), `DB_NAME` (`dmd`). Do testów należy używać osobnej bazy.
Hasło można podać w lokalnym PowerShellu bez zapisywania go w pliku lub historii:

```powershell
$env:DB_PASSWORD = [Net.NetworkCredential]::new('', (Read-Host 'Hasło lokalnej bazy' -AsSecureString)).Password
node api/api_mysql.js
```

Backend nasłuchuje po HTTP wyłącznie na `127.0.0.1:5100`, po pomyślnym `SELECT 1`.
Przy uruchomieniu przez PM2 wysyła `ready`. Konfiguracja PM2: `api/ecosystem.config.js`.
Zmienne bazy należy przekazać w środowisku procesu; pliki `.env` nie są ładowane automatycznie.

Frontend korzysta z `/api/` na tym samym originie. Serwer obsługujący frontend musi
przekazywać `/api/` do backendu; samo `npm start` nie konfiguruje tego proxy.
HTTPS obsługuje reverse proxy. Backend ufa nagłówkom proxy wyłącznie od loopback.

Domyślny log lokalny to `api/logs/server.log`. Zmienna `SERVER_LOG_PATH` pozwala
wskazać inną ścieżkę. Na VPS dotychczasowa ścieżka współdzielona to
`/home/johndoe/app/dmddomy_stats/server.log`; przy przyszłym wdrożeniu należy ją
przekazać w środowisku, aby zachować współpracę ze statystykami. Format wpisów
`IP: ..., Time: ..., Endpoint: ..., Method: ...` nie został zmieniony.

Odstępstwa od kopii produkcyjnej: hasło bazy zastąpiono zmienną środowiskową,
ścieżki PM2 i lokalnego logu są przenośne, a pomocniczy podgląd konfiguracji API
również wskazuje `/api/`. Lockfile obu części zachowują wersje z produkcji.
Stare PHP, kopie `_old`, pliki SQL i nieobecne w nowych źródłach kopie logo
z `public/post/images` usunięto z aktywnego drzewa projektu.

Media produkcyjne pozostają poza synchronizacją: `/var/www/html/appdmddomy/public/images`
i `/var/www/html/appdmddomy/public/downloads`. Nie należy pobierać ich do Git.
Już śledzone lokalne media w `public/images` i `public/downloads` pozostawiono bez zmian;
nowe pliki w tych katalogach są ignorowane. Logi, sekrety, dumpy i backupy też są ignorowane.

## Oryginalna dokumentacja Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
