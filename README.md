# to build new version with ui changes only:

essentially all you have to do is just build the ui statically in the `memedeck-monorepo/ui`, and then copy that output to `pkg/ui` here.

this works for me locally:
```
rm -rf pkg/ui/* && cp -r ~/code/memedeck-monorepo/ui/out/* pkg/ui/
```

easier said than done.

```bash
NEXT_PUBLIC_IS_KINODE=true pnpm build
```

is the monorepo command to run, but it will probably fail. There are many reasons it could fail but they all boil down to, "the ui changed in a way the kfiles.json file didn't know about"

kfiles.json is just an array of all the static pages in the app which need to be built. If we added or removed pages from the actual app, we need to update the `kfiles.json` to match that actual structure of the app. The point of the kfiles was to handle the dynamic url segments thing, which may not be happening anymore but the build system still depends on it.

so update the kfiles list.

Then, it seems that some changes to the code have occured such that the build process is trying to hit the backend/api while building... since it expects to be running on kinode in this context your options are:

1. update the ui code to not do that during build. ideally the static build process should be doable without external api calls
2. run a fake kinode and install this repo on it and let the build process hit that kinode api, which will probably need to be authed somehow... sounds complicated
3. update the logic in `getApiBaseUrl` to just call out to api.memedeck.xyz production in this specific case

anyway, once you finally get the static html files to build, nextjs saves them in a dir called `out` right there. so copy that out to `pkg/ui` in this repo
now, do a `kit b` and `kit s` onto a local fakenode and click around in the ui there to make sure it looks like everything works. fix bugs if found
if new pages were created, you may need to add those paths to the init function in `memedeck/src/lib.rs` where it has a bunch like:
```rust
    let _ = bind_http_path("/u/:uid/bookmarks", true, false);
    let _ = bind_http_path("/u/:uid/drafts", true, false);
    let _ = bind_http_path("/u/:uid/decks", true, false);
```

and you will also want to ensure this line is using production api url in `crate/shared/src/lib.rs`
 
```
const MEMEDECK_API: &str = "https://api.memedeck.xyz";
```

anyway, once all that's build and the app looks like it functions well, commit your changes and push to this repo.

then, follow the instructions here: https://book.kinode.org/my_first_app/chapter_5.html

our `meme-deck.os` kinode is running on the rabbitmq server in azure, inside a tmux. so just ssh in there and `tmux a` to attach to the kinode.

inside that rabbitmq server, you can `cd kinode-memedeck` and `git pull` and `kit bs` to install the new version on the `meme-deck.os` kinode

make sure to update `metadata.json` in this repo with the new version number and code-hash like they say in their deployment guide

# to test tg bot:

```
m our@memedeck:memedeck:meme-deck.os '{"SetToken":"7021724700:AAEOjrR4_S0Pp_jaIGVQB6aCAW90Y9UmRYw"}'
m our@memedeck:memedeck:meme-deck.os '{"StartCharacterMonitorBot":{"chat_id":-4278984459,"character":"pepe"}}'
```

# to run the auto-generations:

1. make sure you're up to date on memedeck app v0.2.17 on your kinode by checking the App Store -> Memedeck
2. open the memedeck app from your kinode and try to generate an image (to make sure you are signed in)
3. Install the [kinode chrome extension](https://github.com/Tenari/kinode_chrome_extension) by going into `chrome://extensions/` in your browser, setting "Developer Mode" to on, click "Load Unpacked" and select the browser extension.
4. open the extension and set the url to `https://YOURNODE.hosting.uncentered.systems` NO TRAILING SLASH and set the port to `443`, and (optionally) set the groq key, and click Save
5. scroll twitter a bit with the extension running, to ingest some tweets
6. ssh to your kinode (go to https://valet.uncentered.systems/ and click the gear icon and click "show advanced details")
7. see that your tweets are successfully ingesting with logs like `Mon 16:23 memedeck:meme-deck.os: Inserted tweet 1823026845928870164`
8. run `m our@memedeck:memedeck:meme-deck.os '"StartLLMBatchTimer"'` in your kinode console to start the daily batch meme generation
9. run `m our@memedeck:memedeck:meme-deck.os '"CreatePromptBatchFromTweets"'` in your kinode console to manually trigger a batch at any time

