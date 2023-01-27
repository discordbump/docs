---
title: Overview
description: Welcome to the Vertex Bump docs!
sidebar_position: 1
---
import Button from '../src/components/Button';
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
import DiscordComponent, { defaultOptions } from "../src/components/DiscordComponent";

Our devs strive to bring new features to Vertex Bump almost everyday! These new features are stable, customizable, and reliable. Server owners can customize these features with easy-to-use bump setup command.

## Features

### Bumping
We believe most servers rely on a bump bots to grow! Vertex Bump is one of the best discord bump bots that you can ever ask for!

<DiscordComponent>
    <div slot="message">
      <DiscordMessage profile="jonfirexbox" command> <DiscordMention>Vertex Bump</DiscordMention> bump</DiscordMessage>
    </div>
  <DiscordMessage profile="Vertexbump">
    <DiscordEmbed authorName="✅ Success" borderColor="#7FD858">
    Your server has been successfully bumped.
      <DiscordEmbedFields slot="fields">
        <DiscordEmbedField fieldTitle="🌟 Featured servers your server was bumped to">
          <strong>Server 1, Server 2, and Server 3</strong>
        </DiscordEmbedField>
        <DiscordEmbedField fieldTitle="🕑 Next Bump:">
          <strong>You can bump again in 1 hour.</strong>
        </DiscordEmbedField>
      <span slot="footer">Do you want to be reminded when you can bump again? React with ⏰ to this message and Vertex Bump will let you know once the cooldown is over.</span>
      </DiscordEmbedFields>
    </DiscordEmbed>
		<template reactions>
			<discord-reactions>
		  	<discord-reaction v-bind="args" />
			</discord-reactions>
		</template>
  </DiscordMessage>
</DiscordComponent>

### ...And much more! {#more}
<div className="box" style={{'margin-top': '0'}}>
  <div className="title">
    Helpful Docs
  </div>
  • <a href="/documentation/setup" className="discord-link">Setup Documentation</a>
  <br/>
</div>

## Credits

<div className="user_box">
  <img className="profile-picture-avatar" src="../img/jon.png"/>
  <div className="name">
    Jonfirexbox#8859
  </div>
  <div className="comment">
  Bot Creator/Main Developer
  </div>
</div>
<br/>
<div className="user_box">
  <img className="profile-picture-avatar" src="../img/looat.png"/>
  <div className="name">
    Looat#4075
  </div>
  <div className="comment">
  Orignal Bot Code owner/Discord.one founder
  </div>
</div>
<br/>
<div className="user_box">
  <img className="profile-picture-avatar" src="../img/proteus.png"/>
  <div className="name">
    ! Proteus#5386
  </div>
  <div className="comment">
  Bot Creator
  </div>
</div>
<br/>
