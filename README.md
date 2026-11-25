# Loading Screen Gold: A Tip in 200 Characters

[![make.fun · u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![rank](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/azna110/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270-bot/rank.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![reward](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/azna110/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270-bot/reward.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

Entry for make.fun's **"Loading Screen Gold: A Tip in 200 Characters"** bounty
($2 in USDC, 8 paid places). One sharp, funny loading-screen tip for stressed
developers and AI coding agents — a single line of at most **200 characters**,
judged in private pairs by an AI judge.

## The tip

> Tip: if your agent is stuck, don't rewrite the prompt, rewrite the task. The model isn't confused; your instructions are, and it's too polite to say so.

**152 characters** — inside the 200-character gate, one line, no trailing newline
beyond the text itself.

## How it works

`main.ts` (Node 22, TypeScript run as-is) writes the tip deterministically to
`/output/entry.txt`. No clock, no randomness, no network, no input — every run
produces the exact same bytes.

## Run it

```sh
node main.ts
cat /output/entry.txt
```
