# kaue.dev — Hub de Produtos & Serviços

Site de apresentação e conversão dos produtos e serviços de Kauê Lima.

## Stack
- Next.js 15 (App Router, SSG)
- TypeScript
- CSS puro (sem Tailwind — design system próprio em globals.css)
- Deploy: Vercel (gratuito)

## Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Hub principal com seleção de produtos e CTA para WhatsApp |
| `/condohub` | Página completa do CondoHub (screenshots, features, roadmap) |
| `/freightflow` | Página completa do FreightFlow (screenshots, features, roadmap, stack) |
| `/servicos-dev` | Serviços de desenvolvimento: processo, preços, CMS explicado, manutenção |

## Setup

```bash
npm install
npm run dev
```

Abre em http://localhost:3000

## Deploy na Vercel

```bash
npm i -g vercel
vercel --prod
```

Ou conecte o repositório GitHub em vercel.com e o deploy é automático.

## Adicionando as screenshots reais

As páginas de produto têm placeholders indicando onde colocar cada screenshot. Para ativar as imagens reais:

### 1. Coloque os arquivos em `/public/screenshots/`

**CondoHub:**
- `condohub-login.png` → tela de login
- `condohub-dashboard.png` → dashboard de condomínios  
- `condohub-moradores.png` → lista de moradores
- `condohub-reservas.png` → reservas de áreas comuns
- `condohub-os.png` → ordens de serviço
- `condohub-vagas.png` → vagas de estacionamento
- `condohub-assembleias.png` → assembleias
- `condohub-financeiro.png` → módulo financeiro
- `condohub-auditoria.png` → auditoria

**FreightFlow:**
- `ff-tracking-public.png` → tracking público
- `ff-login.png` → login
- `ff-dashboard.png` → shipment dashboard
- `ff-tracking-detail.png` → tracking detalhado com timeline
- `ff-customers.png` → customers
- `ff-users.png` → user management
- `ff-fleetmap.png` → fleet map

### 2. Substitua os placeholders por `<Image>`

Em `/app/condohub/page.tsx` e `/app/freightflow/page.tsx`, localize os blocos com o comentário `📸 Adicione a screenshot` e substitua pelo componente:

```tsx
import Image from 'next/image'

// Substitua o <div> placeholder por:
<Image
  src={`/screenshots/${current.file}`}
  alt={current.label}
  width={900}
  height={600}
  className="screenshot-img"
  style={{ borderRadius: 'var(--radius-md)' }}
/>
```

## Personalizando

### Número de WhatsApp
Está definido como constante `PHONE = '5513988026188'` em cada arquivo de página.

### Domínio
Configure em `vercel.com/domains` após o deploy.

### Preços
Editáveis diretamente nos arrays `PRICING` e `RETAINER` em `/app/servicos-dev/page.tsx`.

## Estrutura de arquivos

```
kaue-dev/
├── app/
│   ├── globals.css          # Design system completo
│   ├── layout.tsx           # Root layout + metadata
│   ├── page.tsx             # Homepage (hub)
│   ├── condohub/
│   │   └── page.tsx         # Página CondoHub
│   ├── freightflow/
│   │   └── page.tsx         # Página FreightFlow
│   └── servicos-dev/
│       └── page.tsx         # Página de serviços dev
├── components/
│   ├── Nav.tsx              # Navegação sticky
│   └── Footer.tsx           # Rodapé com links
├── public/
│   └── screenshots/         # Coloque as screenshots aqui
├── next.config.js
├── tsconfig.json
└── package.json
```
