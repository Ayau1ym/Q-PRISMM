# GitHub Pages-ке жариялау

## 1. GitHub репозиторийін жасаңыз

GitHub-та жаңа бос репозиторий ашып, мысалы `q-prism` атауын беріңіз. Репозиторий ашық болса, оның ішіндегінің бәрі жұртқа көрінетінін ескеріңіз.

## 2A. GitHub Desktop арқылы

1. GitHub Desktop орнатып, аккаунтыңызға кіріңіз.
2. **File → Add Local Repository** таңдап, Q-PRISM бумасын көрсетіңіз. Git репозиторийі болмаса, **Create a Repository** таңдаңыз.
3. Commit сипаттамасын `Create Q-PRISM demo` деп енгізіп, **Commit to main** басыңыз.
4. **Publish repository** арқылы жаңа GitHub репозиторийіне жүктеңіз.

## 2B. Командалық жол арқылы

PowerShell/Terminal-де Q-PRISM бумасына кіріп:

```bash
git init
git add .
git commit -m "Create Q-PRISM demo"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

`USERNAME` және `REPOSITORY` мәндерін өз репозиторийіңізге ауыстырыңыз. GitHub аутентификациясын ресми Git Credential Manager немесе браузер логині арқылы орындаңыз. Токенді бастапқы кодқа жазбаңыз.

## 3. GitHub Pages-ті қосыңыз

Репозиторийдің **Settings → Pages → Build and deployment → Source** бөлімінде **GitHub Actions** таңдаңыз. `.github/workflows/deploy.yml` `main` тармағына push болған сайын сайтты құрастырып жариялайды.

## 4. Workflow нәтижесін тексеріңіз

**Actions** бөлімінен `Deploy Q-PRISM to GitHub Pages` процесін ашыңыз. Құрастыру және жариялау қадамдары жасыл аяқталғанда deploy сәтті өтті. Қате шықса, workflow логын оқып, қатені түзетіп қайта push жасаңыз.

## 5. Жарияланған URL

**Settings → Pages** ішіндегі **Visit site** сілтемесін басыңыз. Жоба сайты әдетте `https://USERNAME.github.io/REPOSITORY/` болады. Алғашқы жариялану біраз уақыт алуы мүмкін.

## 6. `base` параметрін өзгерту

`vite.config.ts` GitHub Actions-та репозиторий атауын автоматты оқып, `/<REPOSITORY>/` base қолданады; локалды әзірлеуде `/` қолданылады. Егер custom domain қолдансаңыз, base параметрін `/` етіп қойыңыз. `USERNAME.github.io` жеке репозиторийі де root `/` қолданады.

## 7. Жаңарту

Өзгерістерді commit жасап, `main` тармағына push етіңіз. GitHub Desktop-та commit-тен соң **Push origin** басыңыз. Actions жаңа нұсқаны автоматты жариялайды.

## 8. Құпия деректер

GitHub Pages — ашық статикалық сайт: браузерге жеткізілген файлдардың бәрін келуші көре алады. Репозиторийге құпия/жеке ақпарат, ішкі пікір, расталмаған айыптау немесе API кілттерін салмаңыз. GitHub Actions secrets браузердегі клиенттік кодтан деректі жасыра алмайды. Бұл прототипте сервер мен қорғалған аккаунт жоқ.
