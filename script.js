// Fetch lyrics from an API or a local file
const lyrics = `
First things first
I'ma say all the words inside my head
I'm fired up and tired of the way that things have been, oh-ohed
The way that things have been, oh-ohed

Second thing second
Don't you tell me what you think that I could be
I'm the one at the sail, I'm the master of my sea, oh-ohed
The master of my sea, oh-ohed

[Chorus]
I was broken from a young age
Taking my sulking to the masses
Writing my poems for the few
That looked at me, took to me, shook to me, feeling me
Singing from heartache from the pain
Taking my message from the veins
Speaking my lesson from the brain
Seeing the beauty through the...

[Verse 2]
Pain, you break me down, you build me up, believer, believer
Pain, oh let the bullets fly, oh let them rain
My life, my love, my drive, it came from...
Pain, you break me down, you build me up, believer, believer
Pain, oh let the bullets fly, oh let them rain
My life, my love, my drive, it came from...
Pain, you break me down, you build me up, believer, believer

[Bridge]
Last things last
By the grace of the fire and the flames
You're the face of the future, the blood in my veins, oh-ohed
The blood in my veins, oh-ohed
But they never did, ever lived, ebbing and flowing
Inhibited, limited 'til it broke up and it rained down
It rained down, like...

[Chorus]
Pain, you break me down, you build me up, believer, believer
Pain, oh let the bullets fly, oh let them rain
My life, my love, my drive, it came from...
Pain, you break me down, you build me up, believer, believer
Pain, oh let the bullets fly, oh let them rain
My life, my love, my drive, it came from...
Pain, you break me down, you build me up, believer, believer

[Outro]
They're gonna leave you alone
But you're never gonna be alone
You'll never gonna be alone
You'll never gonna be alone
You'll never gonna be alone
You'll never gonna be alone
You'll never gonna be alone
You'll never gonna be alone
`;

// Split lyrics into lines
const lyricsLines = lyrics.split('\n');

// Insert lyrics into the #lyrics div
const lyricsDiv = document.getElementById('lyrics');
lyricsDiv.innerHTML = lyricsLines.map(line => `<span>${line}</span>`).join('<br>');

// Get all span elements in the #lyrics div
const lyricsSpans = lyricsDiv.querySelectorAll('span');

// Get the audio element
const audio = document.getElementById('audio');
