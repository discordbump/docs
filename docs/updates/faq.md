---
title: FAQ
description: Here is some basic questions and answer that our devs get asked!
tags:
  - Questions
  - Info
  - Update
authors: jonfirexbox
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import Button from '../../src/components/Button';
import {
  DiscordButton,
  DiscordButtons,
  DiscordInteraction,
  DiscordMessage,
  DiscordMessages,
  DiscordMention,
  DiscordEmbed,
  DiscordEmbedField,
  DiscordEmbedFields,
} from "discord-message-components/packages/react";
import "discord-message-components/packages/react/dist/style.css";
import DiscordComponent, { defaultOptions } from "../../src/components/DiscordComponent";

## Why does the bot always act so strange/get weird uptime

Well let me tell you, out bot dev Jon, made an announcement to our support server letting us know what was going on, and he told us it was due to a server that once had the bot in theit server but when the transfer of databses was happening it was stuck, and now its stuck, so it can't bump to that server and thats why!

## How come no slash commands?

Well people, you may not know this, but this bot's was original made back in 2018 or 2019 and ended in 2020, due to the old bot devloper no longer wanting to keep up with discords changes, so they no longer ran the bot, and so when it was done the developer never made the code into slash commands, so it was where bots could still use prefixes, and so it was ok, and oit dev Jon, was looking for a better code for Vertex Bump and found this old bot (known as Open Bump, which was developed by Looat) and originally he though the bot should be fine with pit slash commands, but then discord rolled out the huge update for bots, where you must have slash commands, so the api was deprecated for prefixed (its not fully as bots that use prefixs/no slash commands) can use it, but sadly Vertex Bump got effected by this huge reset of bots, and so it had problems, so Jon changed from prefix to mention (and its still working)

But to get off my tangent story, really the truth is its not easy to take a bot that was coded with very old versions of packages (thats what we devs use make the cool things the bot has!) and with going from **Discord.js version 12.3.1** all the way to **Discord.js version 14.7.1** is a big jump (if we do change to slash we will use Discord.js v13 first then to v14 so its not to much) but thats the full reason why Jon hasn't done it yet, its in the works just not going to be any time soon!

## Why are you using the old Open Bump code? Why not your own?

"I love when I get this question, since i never though i would find/be able to use this code" - Jon
I started to use this code because the original Vertex Bump code wasn't the best, we didn't have the premium features we do now, since the code was small so it was big but didn't have a lot, so I decided that i wanted to update, so Jon went on a hunt on GitHub to find some code (and yes i would have credited the owner of the code) but I came across Open Bumps old code, and i talked to the original developer Looat, and we had a conversation about it, and he said thats fine (as he no longer uses the code but i give credit) and so i started to use it and it worked so much better then the original code we used, but if we never made the switch you **all** wouldn't have the premium things you do!!!

## Where do you get those cool emojis that you use?

Well im glad you asked! I get them from 2 places (Well i also have them from the last bump bot) But the places i get them from are:
  - [Icons](https://discord.gg/aPvvhefmt3) | I have seen many bots will most of these emojis and i though why not join them! You may use these emojis any where but please make sure you check out their FAQ channel before you use them!
  - [Emoji.gg](https://emoji.gg) | As you know this is the largets discord emoji website, i found some of the emojis I use from here, and they never let me down to find the perfect ones!
  - For other emojis they are either found and recolored or are from a server!

  # Where did you get the bot icon from?

Well we got that icon from our other Bot Owner <DiscordMention>! Proteus</DiscordMention>, we bought the icons form a place and we got them for all of our [Vertex Network](https://vertexnetwork.carrd.co) bots.

<strong>More things will be added soon!</strong>

<h3>Need support?</h3>

<div className="pyc-hero__actions">
  <Button link="https://discordone.tk/support">Join our Support Server</Button>
</div>
