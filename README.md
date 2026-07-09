# Portfólio — Vinicius Adati

Site estático (React + TypeScript + Vite + Tailwind CSS) hospedado gratuitamente no GitHub Pages.

## Estrutura do projeto

```
portfolio/
├── .github/workflows/deploy.yml   # pipeline de deploy automático
├── public/
│   ├── favicon.svg
│   └── projects/                  # imagens de capa dos projetos (adicionar aqui)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx                # apresentação + espaço do vídeo
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   └── Contact.tsx
│   ├── data/projects.ts            # mock dos projetos (SegurAÍ, FarmTech...)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Como rodar localmente

```bash
npm install
npm run dev
```

## Antes de publicar (checklist)

1. **Vídeo do Hero** (`src/components/Hero.tsx`): substitua `SEU_VIDEO_ID` pelo ID do seu vídeo do YouTube (suba como "Não Listado"). Ex: se a URL for `youtube.com/watch?v=AbCdEfGhIjK`, o ID é `AbCdEfGhIjK`.
2. **Imagens dos projetos**: adicione os arquivos em `public/projects/` com os nomes referenciados em `src/data/projects.ts` (`seguraí-cover.png`, `farmtech-cover.png`).
3. **Links reais**: ajuste GitHub, LinkedIn e e-mail em `src/components/Contact.tsx`, e os links de repositório em `src/data/projects.ts`.
4. **Currículo**: adicione seu PDF em `public/curriculo-vinicius-adati.pdf`.
5. **base do Vite**: em `vite.config.ts`, troque `'/portfolio/'` pelo nome exato do seu repositório no GitHub (ou `'/'` se for um repositório `usuario.github.io`).

## Deploy no GitHub Pages (automático via GitHub Actions)

1. Crie um repositório no GitHub e suba este projeto:
   ```bash
   git init
   git add .
   git commit -m "chore: setup inicial do portfólio"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
   git push -u origin main
   ```
2. No GitHub, vá em **Settings → Pages**.
3. Em **Build and deployment → Source**, selecione **GitHub Actions**.
4. Pronto! O workflow em `.github/workflows/deploy.yml` já está configurado para:
   - Rodar a cada push na branch `main`.
   - Instalar dependências, buildar o projeto (`npm run build`) e publicar o conteúdo de `dist/` no GitHub Pages.
5. Após o primeiro push, acompanhe o progresso na aba **Actions** do repositório. Em alguns minutos o site estará disponível em:
   ```
   https://SEU_USUARIO.github.io/NOME_DO_REPO/
   ```

## Deploy manual (alternativa, sem Actions)

```bash
npm run build
npm run deploy   # usa o pacote gh-pages para publicar dist/ na branch gh-pages
```
Nesse caso, em **Settings → Pages → Source**, selecione a branch `gh-pages` em vez de "GitHub Actions".
