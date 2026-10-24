# 🇧🇷⚽ Astrum Football Manager — Edição Brasil **v4.0**

Manager de futebol no navegador: **Brasileirão (Séries A–D)**, **Copa do Brasil**, **Supercopa do Brasil**, **Copa Continental (Libertadores)**, **Gestão de Estádio & Simulador de Renda**, **Galeria de Troféus & Conquistas**, evolução de elenco e PWA offline. Arquivo de jogo único (`index.html`), sem build.

## Novidades da v4.0

| Área | O que mudou |
|------|-------------|
| 🏟️ **Complexo & Estádio 2.0** | Diagrama visual SVG interativo da arena, batismo/renomeação do estádio, contratos de **Naming Rights**, **Camarotes VIP**, **Iluminação LED & Cobertura**, **Centro de Base** e expansão de anel (+5.000 lugares) |
| 🧮 **Simulador e Estimativa de Renda** | Controle do **preço do ingresso** (R$ 10 a R$ 200) com elasticidade de público, botão de **Receita Máxima**, cenários (*Jogo Comum, Clássico/G-4, Copa, Final*), quadro de **Sócios-Torcedores**, bônus de **Caldeirão** (+força em casa com lotação ≥80%), projeção anual e histórico de **Borderôs & Recordes** |
| 🌎 **Central de Competições** | Lista completa das **6 competições oficiais**: Séries A–D, Copa do Brasil, **Supercopa do Brasil** (Rodada 3) e **Copa Continental / Libertadores** (16 clubes sul-americanos nas rodadas 8, 16, 24 e 32) |
| 💰 **Premiações Detalhadas** | Premiação por posição na tabela nas 4 divisões (1º ao 14º na Série A, G-6 nas demais), cotas acumuladas nas copas e bônus individuais de fim de ano (**Chuteira de Ouro**, **Garçom de Ouro** e **Treinador do Ano**) |
| 🏆 **Sala de Troféus & Conquistas** | Vitrine visual de taças conquistadas, sistema de **Reputação e Ranking do Treinador** e **12 Medalhas/Conquistas Desbloqueáveis** |


## Capturas de tela

<p align="center">
  <img src="screenshots/menu.png" alt="Menu inicial do Astrum Football Manager v4.0" width="49%">
  <img src="screenshots/carreira.png" alt="Painel principal de uma carreira" width="49%">
</p>
<p align="center">
  <img src="screenshots/estadio.png" alt="Stadium complex and revenue estimate" width="49%">
  <img src="screenshots/trofeus.png" alt="Trophy room and achievements gallery" width="49%">
</p>
<p align="center">
  <img src="screenshots/classificacao.png" alt="Championship standings" width="80%">
</p>

## Novidades da v3.0

| Área | O que mudou |
|------|-------------|
| 🔁 **Pirâmide completa** | G-4 sobe e Z-4 desce em *todas* as divisões (antes só o seu clube se movia) |
| 📅 **Calendário real** | Turno e returno (34 rodadas) nas 4 séries; antes as séries da IA repetiam 9 confrontos |
| 📈 **Evolução de elenco** | Jovens crescem (potencial oculto), veteranos declinam e se aposentam; revelações da base |
| 👤 **Agentes livres** | Contratação a qualquer rodada (luvas = 8% do valor) + dispensa de jogadores |
| ⚖️ **Equilíbrio tático** | Goleiro e posições da formação afetam a força; formações alteram gols esperados |
| ⚽ **Motor de jogo** | Gols com minuto e assistência coerentes com a artilharia; Copa com pênaltis e desgaste do XI |
| 💼 **Demissão** | Propostas de outros clubes; carreira, histórico e troféus continuam |
| 📊 **Interface** | Tabela das 4 séries, artilharia por divisão/Copa, histórico de temporadas, filtros de mercado, forma recente |
| 💾 **Saves** | 3 slots, autosave, exportar/importar `.json`; saves da v2.x migram automaticamente |
| 📲 **PWA de verdade** | `manifest.webmanifest`, ícones, service worker com atualização e instalação |
| ♿ **Acessibilidade** | Zoom liberado, foco visível, Tailwind CDN removido (jogo 100% offline) |

### Correções
- Rebaixamento deixava divisões com 17/19 clubes e um time jogando **contra si mesmo**.
- Bônus de formação beneficiava o adversário quando você jogava fora.
- Prêmio da Copa pago com uma fase de atraso; gols da Copa contavam na artilharia do Brasileirão.
- Lesões de 1 rodada se curavam na mesma rodada.
- Nome de clube com HTML/aspas (e saves importados) agora são validados.

## Jogar
Abra `index.html` no navegador **ou** publique no GitHub Pages (Settings → Pages → `main` / root).
Para **instalar como app** é preciso servir por `https://` ou `localhost` (o Pages já serve).

- **Android:** Chrome → ⋮ → *Instalar app*
- **iPhone:** Safari → Compartilhar → *Adicionar à Tela de Início*

## Atalhos (PC)
`P` jogar · `M` auto · `A` Auto XI · `S` salvar · `F` tela cheia · `1`–`9`/`0` abas · `←` `→` abas · `↑` `↓` linhas · `Tab` seções do mercado · `Esc` parar/voltar

## Estrutura
```
astrum-fm-brasil/
├── index.html            # jogo
├── sw.js                 # service worker
├── manifest.webmanifest  # PWA
├── icons/                # 192, 512, maskable, apple-touch
├── README.md  LICENSE  .gitignore
```

## Licença
MIT — veja `LICENSE`.
