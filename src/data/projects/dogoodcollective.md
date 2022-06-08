---
title: 'Do Good Collective'
partner: 'Do Good Collective'
url: 'https://dogoodcollective.net'
logo: 'dogood-logo.png'
imageFile: 'dcg.fund.png'
description: ''
repo: 'https://github.com/lukeshafer/do-good'
---

## [dcg.fund](https://dogoodcollective.net/) _a work in progress_

After our successful fundraiser for Enny's wheelchair, we felt we had momentum and could build a collective of people who provided support for each other and our community. With this momentum, we formed Do Good Collective, with the goal of providing mutual aid for our communities.

### The Website

Like other recent projects, I decided to use SvelteKit for this project. While the site is fully static right now, I wanted something that could scale with the organization. I also wanted to use something opinionated as I knew multiple people would be contributing to this project.

As I said, I am working with other developers on this project, so right from the start I knew I needed to approach structure and design a little differently than I would for a solo project. I'm working with a friend who is not very familiar with web development, so I've been working hard to make sure my code is readable and understandable for someone with less familiarity.

### Planning the Future

To get the website up quickly, we're hard-coding all the content for the time being. However, we're planning to transition to a headless CMS for content creation, so that all of our content team can add new content regularly without needing direct access to one of the three developers in the collective.

While we haven't decided a CMS, I'm leaning toward Strapi, as it's open-source and can be self-hosted. Since we have very limited funding, we want a hosting solution which has little to no cost. I'll probably self-host for the time-being to get off the ground, and then we'll most likely move the CMS instance to a hosted solution like Heroku. Since the site is fully static right now, it will only need to call the API on build, which will reduce costs.

We are also aiming to add resources to the site for people needing support, along with an e-commerce marketplace to sell donated goods to raise money for active fundraisers.
