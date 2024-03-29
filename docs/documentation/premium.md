---
title: Premium setup
description: The Premium setup documentation
sidebar_position: 2
---

import Button from '../../src/components/Button';
import {
  DiscordInteraction,
  DiscordMessage,
  DiscordMessages,
  DiscordMention,
  DiscordEmbed,
  DiscordEmbedField,
  DiscordEmbedFields,
} from "discord-message-components/packages/react";
import "discord-message-components/packages/react/dist/style.css";

:::caution Warning

To use any of these commands, you must have **Premium** and **Manage Guild** perms

:::

## Premium Setup Commands

:::note

Some premium perks may no longer work due to the new discord developer TOS update.

:::

| Usage | Description | Premium |
| ----------- | ----------- | ----------- |
| <code>vb!premium</code> | Shows you all servers you have premium for or tells you how to get it! | <premium>True</premium> |
| <code>vb!premium activate &lt;teir&gt</code> | Activates what premium you want (Check [here](../premium.md) for the list) | <premium>True</premium> |
| <code>vb!premium deavtivate &lt;serverID&gt</code> | Removes the premium from that server | <premium>True</premium> |
| <code>vb!premium &lt;teirs/list&gt</code> | Shows you al permiums and their perks | <premium>True</premium> |
