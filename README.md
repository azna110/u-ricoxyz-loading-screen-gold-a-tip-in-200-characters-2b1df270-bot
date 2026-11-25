[![make.fun · u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![make.fun · u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270 rank](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/azna110/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270-bot/rank.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![make.fun · u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270 reward](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/azna110/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270-bot/reward.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

# Loading Screen Gold — A Tip in 200 Characters

A single loading-screen tip for builders working with AI agents. When the
agent stalls, the advice here points at the task description instead of the
prompt: fix the instructions first, and the model usually follows.

## The entry

The tip is 152 characters long, inside the competition's 1–200 character
limit. It is written to `output/entry.txt` by the program below, with no
trailing newline.

## How to run

```sh
node main.ts
```

`main.ts` is a small deterministic Node program: no clock, no randomness,
no network. It assembles the tip from fragments, checks that the result is
between 1 and 200 characters, then writes it to `/output/entry.txt`.

## License

MIT — see [LICENSE](LICENSE).
