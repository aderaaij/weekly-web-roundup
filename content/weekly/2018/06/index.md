# Weekly Web Roundup - Week 06

Another week of broken promises gone by, as I haven't worked on getting either a newsletter out or finishing the site. Making public announcements is kinda confrontatioal like that. Any how, let's have a look at the work of people who _did_ actually got some amazing stuff out there this week.

## News

* [Chrome 65 beta](https://blog.chromium.org/2018/02/chrome-65-beta-css-paint-api-and.html) is released and includes the _CSS Paint API_ and the _ServerTiming API_. I'm not totally sure what the CSS Paint API is good for yet, but the ServerTiming API can be used to deliver performance timing information to the browser via HTTP Headers.
* Google's fundementals documentation
* JS developers rejoice, for there's a [pipeline operator](https://github.com/tc39/proposal-pipeline-operator) in the... pipeline. As someone with no background in any other programming language I never heard of the concept. It seems to improve the readibility of chaining multiple functions a whole lot though, and I'm sure there's other goodness.
* [PWA's are coming to Windows 10](https://blogs.windows.com/msedgedev/2018/02/06/welcoming-progressive-web-apps-edge-windows-10/). About time!
* Vue.js now has an [official news platform](https://news.vuejs.org/) on which you can find all the latest and greatest about the framework. I think it's a great idea and if they update it consistently means that it'll work like a 'single source of truth' as well.

## CSS / SVG

* Digital Designer [Rafaela Ferro](https://medium.com/@rafaelaferro) wrote a [great article on CSS Grid layouts](https://medium.com/deemaze-software/css-grid-layout-crossed-sections-fca9e956e725) and how to get started.
* [Jen Simmons](https://twitter.com/jensimmons)' [Layout Land](https://www.youtube.com/channel/UC7TizprGknbDalbHplROtag?pbjreload=10) videos are quickly becoming my favorite tech video series ever. In this one she will walk you through recreating some classic graphic design layouts with css-grid, transforms and more. [CSS Grid like you are Jan Tschichold](https://youtu.be/OxrsO4aIjyc)
* Designer and coder[Kezz Bracey](https://twitter.com/kezzbracey) has created a great tutorial on [hand coding SVG icons](https://webdesign.tutsplus.com/tutorials/how-to-hand-code-svg--cms-30368). Not only is it more fun than you'd expect, it also helps your understanding of SVG coordinates.

## JavaScript

* [Jake Archibald](https://twitter.com/jaffathecake/) gave a [great talk at JSConf.Asia 2018](https://www.youtube.com/watch?v=cCOL7MC4Pl0). It was all about the event-loop and goes pretty in-depth. It's a very informative and entertaining talk
* "Have you ever experienced the pain of trying to get state from the top of your react tree to the bottom?". If you've worked with React you know exactly what [Kent C. Dodds](https://twitter.com/kentcdodds) is talking about here. Luckily [there's a 'new' context API](https://medium.com/dailyjs/reacts-%EF%B8%8F-new-context-api-70c9fe01596b) in which you can use a context an a provider to pass around props.
* Vanilla JS advocate [Chris Fernandi](https://twitter.com/ChrisFerdinandi) has recently released (vanillajstoolkit.com)[https://vanillajstoolkit.com/], a collection of code snippets, helper functions, boilerplates, polyfills, plugins and learning resources. I'm excited Chris created a dedicated site for this, as I've been following his website (gomakethings.com)[https://gomakethings.com/] for years and he was my spirit guide into ditching jQuery years ago!
* And speaking of spirit guides, [Dr. Axel Rauschmayer](https://twitter.com/rauschma) and his blog [2ality](http://2ality.com) have been my guide to understanding stages, proposals, TC39 and the whole works. in [JavaScript’s a mess – and that’s a good thing](http://2ality.com/2018/02/js-backward-compatibility.html) he explains how JS deals with backwards compatibility and how we can deal with JavaScripts expanding feature set.
* [Duncan Grant](https://twitter.com/TheWebNomad) summed up the things he loves about vue in [10 things I love about Vue on medium.com](https://medium.com/@dalaidunc/10-things-i-love-about-vue-505886ddaff2). As I started to play around with VueJS, it's nice to read why people have been enjoying Vue so much.
* Dan Abramov [explains how React `setState` batching works] on stackoverflow.com
  (https://stackoverflow.com/questions/48563650/does-react-keep-the-order-for-state-updates/48610973#48610973)
* There can never be enough Redux explainer articles, and [Dave Ceddia's](https://twitter.com/dceddia) article on [where and when to fetch data with Redux](https://daveceddia.com/where-fetch-data-redux/) is a detailed explainer on something we often deal with.
* [Sam Williams](https://twitter.com/SamWSoftwares) wrote a useful article on [making your code cleaner, shorter and easier to read](https://medium.freecodecamp.org/make-your-code-cleaner-shorter-and-easier-to-read-es6-tips-and-tricks-afd4ce25977c) with ES6 on freecodecamp.org.
* [The Single Page Application(SPA) Is Not a Silver Bullet](https://blog.bloomca.me/2018/02/04/spa-is-not-silver-bullet.html) is a friendly reminder by [Seva Zaikov](https://twitter.com/blooomca) that not everything is supposed to be a SPA and that running JS can be costly. His examples only show the downloaded files and data on first load, but I guess that's kind of the point. Why should I have to download and parse a whole bunch of JS if all I want to do is look at some content?
* Installing NPM modules globally is messy. It reminds me of working with Ruby Gems and the dependency hell that followed. So [maybe don't globally install that node-js package](https://codeburst.io/maybe-dont-globally-install-that-node-js-package-f1ea20f94a00), written by [Jake Wilson](https://codeburst.io/@jakobud) on codeburst.io
* GraphQL is something you won't stop hearing about this year, and with good reason. [Sacha Greif](https://twitter.com/SachaGreif) wrote [Five Common Problems in GraphQL Apps (And How to Fix Them)](https://medium.freecodecamp.org/five-common-problems-in-graphql-apps-and-how-to-fix-them-ac74d37a293c) which I found insanely useful for reducing GraphQL boilerplate and avoiding performance problems.

## General

* An article in Portuguese today! [Wendell Adriel](https://twitter.com/wendell_adriel) is a Brazilian developer who moved to Portugal and even though he comes from a very different place, his experience here has been as enjoyable as mine! He also explains a bit on the IT market in Portugal, expected salaries and how to position oneself in the market here: [The IT Market in Portugal - A personal experience](https://medium.com/trainingcenter/mercado-de-ti-em-portugal-minha-experi%C3%AAncia-pessoal-3c01b783e30d)
* [Chris Coyier](https://twitter.com/chriscoyier) made some good points on how many websites are the same nowadays in [Website sameness](https://css-tricks.com/website-sameness/) on css-tricks.com. Although I know a boatload of amazing site-designs, most of the designs I come across are a variant of bootstrap. With CSS we have all the tools to create solid yet unique designs. Why don't we? Bootstrap can't be the ultimate webdesign, now can it?
* I kinda enjoy the blogposts by [Delicious Brains](https://deliciousbrains.com/). The WordPress plugin development company has been creating solid blogposts (not to mention solid plugins) for a while now, ranging on all kinds of topics. They're always really in-depth and very honest. That's why I enjoyed this [2017 review](https://deliciousbrains.com/2017-year-in-review/) which is very honest and shows how hard it can be to run and grow a business.
* [The increasing nature of frontend complexity](https://blog.logrocket.com/the-increasing-nature-of-frontend-complexity-b73c784c09ae) by [Kevin Ball](https://twitter.com/kbal11) is exactly about what you think it is about. It's still very worth the read though, as it's as much about complication as tremendous opportunity!
* [When You’re a ‘Digital Nomad,’ the World Is Your Office](https://www.nytimes.com/2018/02/08/magazine/when-youre-a-digital-nomad-the-world-is-your-office.html) - A bleak but, as far as I'm concerned, accurate picture of digital nomadism by [Kyle Chayka](https://twitter.com/chaykak)

## Inspiration

* [Mandy Kerr](https://twitter.com/Mandy_Kerr) gave a great talk @ SingaporeCSS about creative text effects. There's a whole bunch of cool ideas in her video and just skimming through it makes me want to try them out. Enjoy!
  https://youtu.be/9EU7urOl1LE
* [luuuge.fr](https://luuuge.fr) is a mini-site for the promotion of a music album. There's some chill music, nice artwork and springy [popmotion](https://popmotion.io/) action. Created by [Maxime Le Breton](https://twitter.com/maximelebreton)
* [lesfillesdu9novembre.com](http://lesfillesdu9novembre.com/), a super cool and smooth portfolio site.
* Seriously.. OMG
  {% codepen https://codepen.io/Yakudoo/full/prYmKj/ %}
* When parallax makes sense:
  {% twitter 962166832697241602 %}

## OSS

* [Preact Styled template by @NikkitaFTW](https://github.com/SaraVieira/styled)
* [Thanks by @feross](https://github.com/feross/thanks)
* [OSQuery by Facebook](https://osquery.io/)
* [Automerge](https://github.com/automerge/automerge) - A JSON-like data structure that can be modified concurrently by different users, and merged again automatically.

## Public Service Announcements

* Is this a good idea?
  {% twitter 959948647273259008 %}
* `aria-label` doesn't play nice with automatic translation services:
  {% twitter 960551096333819906 %}
* I must admit that I had no idea!
  {% twitter 960907420229881864 %}
* {% twitter 955916279155691523 %}
* The new version of the Vue CLI seems pretty rad
  {% twitter 961253706715942912 %}
* This!
  {% twitter 929593000107196417 %}
* I _need_ to play this!
  {% twitter 961605346518355971 %}

@iamakulov
@ChrisFerdinandi
@swyx
@TheWebNomad
@wendell_adriel
@chriscoyier
@dceddia
@rauschma
@SamWSoftwares
@blooomca
@stefanjudis
@Mandy_Kerr
@codeburstio
@maximelebreton
@jensimmons
@dliciousbrains
@wesbos
@ericlaw
@sarah_edo
@kbal11
@yakudoo
@whitneyhacks
@feross
@chaykak
@jaffathecake
@hj_chen
@SachaGreif
@addyosmani
