/**
 * Split a block of text into individual sentences.
 *
 * @param {string} text - The text to split.
 * @return {string[]} - An array of sentences.
 */
function splitIntoSentences(text) {
    // Remove line breaks
    text = text.replace(/(\r\n|\n|\r)/gm, '');

    // Replace ellipses with a temporary placeholder
    const ellipsisPlaceholder = '__ELLIPSIS__';
    text = text.replace(/\.\.\./g, ellipsisPlaceholder);

    // Replace periods, exclamations, and question marks followed by quotation mark with placeholder
    const periodQuotationPlaceholder = '__PERIOD_QUOTE__'
    text = text.replace(/\."/g, periodQuotationPlaceholder)
    const exclamationQuotationPlaceholder = '__EXCLAMATION_QUOTE__'
    text = text.replace(/!"/g, exclamationQuotationPlaceholder)
    const questionQuotationPlaceholder = '__QUESTION_QUOTE__'
    text = text.replace(/\?"/g, questionQuotationPlaceholder)

    // Regular expression to match sentence endings (period, exclamation mark, or question mark)
    // followed by optional whitespace characters and then another sentence or the end of the string
    const sentenceRegex = /(?<=[.!?])\s*/g;

    // Split the text into sentences
    const sentences = text.split(sentenceRegex);

    // Replace the placeholder with the original ellipses
    return sentences.map(sentence => sentence.replace(ellipsisPlaceholder, '. . .')).filter(sentence => sentence.trim() !== '');
}

// Example usage
const warbreakerText = `
It’s funny, Vasher thought, how many things begin with my getting thrown into prison.

The guards laughed to one another, slamming the cell door shut with a clang. Vasher stood and dusted himself off, rolling his shoulder and wincing. While the bottom half of his cell door was solid wood, the top half was barred, and he could see the three guards open his large duffel and rifle through his possessions.

One of them noticed him watching. The guard was an oversized beast of a man with a shaved head and a dirty uniform that barely retained the bright yellow and blue coloring of the T’Telir city guard.

Bright colors, Vasher thought. I’ll have to get used to those again. In any other nation, the vibrant blues and yellows would have been ridiculous on soldiers. This, however, was Hallandren: land of Returned gods, Lifeless servants, BioChromatic research, and—of course—color.

The large guard sauntered up to the cell door, leaving his friends to amuse themselves with Vasher’s belongings. “They say you’re pretty tough,” the man said, sizing up Vasher.

Vasher did not respond.

“The bartender says you beat down some twenty men in the brawl.” The guard rubbed his chin. “You don’t look that tough to me. Either way, you should have known better than to strike a priest. The others, they’ll spend a night locked up. You, though ... you’ll hang. Colorless fool.”

Vasher turned away. His cell was functional, if unoriginal. A thin slit at the top of one wall let in light, the stone walls dripped with water and moss, and a pile of dirty straw decomposed in the corner.

“You ignoring me?” the guard asked, stepping closer to the door. The colors of his uniform brightened, as if he’d stepped into a stronger light. The change was slight. Vasher didn’t have much Breath remaining, and so his aura didn’t do much to the colors around him. The guard didn’t notice the change in color—just as he hadn’t noticed back in the bar, when he and his buddies had picked Vasher up off the floor and thrown him in their cart. Of course, the change was so slight to the unaided eye that it would have been nearly impossible to pick out.

“Here, now,” said one of the men looking through Vasher’s duffel. “What’s this?” Vasher had always found it interesting that the men who watched dungeons tended to be as bad as, or worse than, the men they guarded. Perhaps that was deliberate. Society didn’t seem to care if such men were outside the cells or in them, so long as they were kept away from more honest men.

Assuming that such a thing existed.

From Vasher’s bag, a guard pulled free a long object wrapped in white linen. The man whistled as he unwrapped the cloth, revealing a long, thin-bladed sword in a silver sheath. The hilt was pure black. “Who do you suppose he stole this from?”

The lead guard eyed Vasher, likely wondering if Vasher was some kind of nobleman. Though Hallandren had no aristocracy, many neighboring kingdoms had their lords and ladies. Yet what lord would wear a drab brown cloak, ripped in several places? What lord would sport bruises from a bar fight, a half-grown beard, and boots worn from years of walking? The guard turned away, apparently convinced that Vasher was no lord.

He was right. And he was wrong.

“Let me see that,” the lead guard said, taking the sword. He grunted, obviously surprised by its weight. He turned it about, noting the clasp that tied sheath to hilt, keeping the blade from being drawn. He undid the clasp.

The colors in the room deepened. They didn’t grow brighter—not the way the guard’s vest had when he approached Vasher. Instead, they grew stronger. Darker. Reds became maroon. Yellows hardened to gold. Blues approached navy.

“Be careful, friend,” Vasher said softly, “that sword can be dangerous.”

The guard looked up. All was still. Then the guard snorted and walked away from Vasher’s cell, still carrying the sword. The other two followed, bearing Vasher’s duffel, entering the guard room at the end of the hallway.

The door thumped shut. Vasher immediately knelt beside the patch of straw, selecting a handful of sturdy lengths. He pulled threads from his cloak—it was beginning to fray at the bottom—and tied the straw into the shape of a small person, perhaps three inches high, with bushy arms and legs. He plucked a hair from one of his eyebrows, set it against the straw figure’s head, then reached into his boot and pulled out a brilliant red scarf.

Then Vasher Breathed.

It flowed out of him, puffing into the air, translucent yet radiant, like the color of oil on water in the sun. Vasher felt it leave: BioChromatic Breath, scholars called it. Most people just called it Breath. Each person had one. Or, at least, that was how it usually went. One person, one Breath.

Vasher had around fifty Breaths, just enough to reach the First Heightening. Having so few made him feel poor compared with what he’d once held, but many would consider fifty Breaths to be a great treasure. Unfortunately, even Awakening a small figure made from organic material—using a piece of his own body as a focus—drained away some half of his Breaths.

The little straw figure jerked, sucking in the Breath. In Vasher’s hand, half of the brilliant red scarf faded to grey. Vasher leaned down—imagining what he wanted the figure to do—and completed the final step of the process as he gave the Command.

“Fetch keys,” he said.

The straw figure stood and raised its single eyebrow toward Vasher.

Vasher pointed toward the guard room. From it, he heard sudden shouts of surprise.

Not much time, he thought.

The straw person ran along the floor, then jumped up, vaulting between the bars. Vasher pulled off his cloak and set it on the floor. It was the perfect shape of a person—marked with rips that matched the scars on Vasher’s body, its hood cut with holes to match Vasher’s eyes. The closer an object was to human shape and form, the fewer Breaths it took to Awaken.

Vasher leaned down, trying not to think of the days when he’d had enough Breaths to Awaken without regard for shape or focus. That had been a different time. Wincing, he pulled a tuft of hair from his head, then sprinkled it across the hood of the cloak.

Once again, he Breathed.

It took the rest of his Breath. With it gone—the cloak trembling, the scarf losing the rest of its color—Vasher felt ... dimmer. Losing one’s Breath was not fatal. Indeed, the extra Breaths Vasher used had once belonged to other people. Vasher didn’t know who they were; he hadn’t gathered these Breaths himself. They had been given to him. But, of course, that was the way it was always supposed to work. One could not take Breath by force.

Being void of Breath did change him. Colors didn’t seem as bright. He couldn’t feel the bustling people moving about in the city above, a connection he normally took for granted. It was the awareness all men had for others—that thing which whispered a warning, in the drowsiness of sleep, when someone entered the room. In Vasher, that sense had been magnified fifty times.

And now it was gone. Sucked into the cloak and the straw person, giving them power.

The cloak jerked. Vasher leaned down. “Protect me,” he Commanded, and the cloak grew still. He stood, throwing it back on.

The straw figure returned to his window. It carried a large ring of keys. The figure’s straw feet were stained red. The crimson blood seemed so dull to Vasher now.

He took the keys. “Thank you,” he said. He always thanked them. He didn’t know why, particularly considering what he did next. “Your Breath to mine,” he commanded, touching the straw person’s chest. The straw person immediately fell backward off the door—life draining from it—and Vasher got his Breath back. The familiar sense of awareness returned, the knowledge of connectedness, of fitting. He could only take the Breath back because he’d Awakened this creature himself—indeed, Awakenings of this sort were rarely permanent. He used his Breath like a reserve, doling it out, then recovering it.

Compared with what he had once held, twenty-five Breaths was a laughably small number. However, compared with nothing, it seemed infinite. He shivered in satisfaction.

The yells from the guard room died out. The dungeon fell still. He had to keep moving.

Vasher reached through the bars, using the keys to unlock his cell. He pushed the thick door open, rushing out into the hallway, leaving the straw figure discarded on the ground. He didn’t walk to the guard room—and the exit beyond it—but instead turned south, penetrating deeper into the dungeon.

This was the most uncertain part of his plan. Finding a tavern that was frequented by priests of the Iridescent Tones had been easy enough. Getting into a bar fight—then striking one of those same priests—had been equally simple. Hallandren took their religious figures very seriously, and Vasher had earned himself not the usual imprisonment in a local jail, but a trip to the God King’s dungeons.

Knowing the kind of men who tended to guard such dungeons, he’d had a pretty good idea that they would try to draw Nightblood. That had given him the diversion he’d needed to get the keys.

But now came the unpredictable part.

Vasher stopped, Awakened cloak rustling. It was easy to locate the cell he wanted, for around it a large patch of stone had been drained of color, leaving both walls and doors a dull grey. It was a place to imprison an Awakener, for no color meant no Awakening. Vasher stepped up to the door, looking through the bars. A man hung by his arms from the ceiling, naked and chained. His color was vibrant to Vasher’s eyes, his skin a pure tan, his bruises brilliant splashes of blue and violet.

The man was gagged. Another precaution. In order to Awaken, the man would need three things: Breath, color, and a Command. The harmonics and the hues, some called it. The Iridescent Tones, the relationship between color and sound. A Command had to be spoken clearly and firmly in the Awakener’s native language—any stuttering, any mispronunciation, would invalidate the Awakening. The Breath would be drawn out, but the object would be unable to act.

Vasher used the prison keys to unlock the cell door, then stepped inside. This man’s aura made colors grow brighter by sharp measure when they got close to him. Anyone would be able to notice an aura that strong, though it was much easier for someone who had reached the First Heightening.

It wasn’t the strongest BioChromatic aura Vasher had ever seen—those belonged to the Returned, known as gods here in Hallandren. Still, the prisoner’s BioChroma was very impressive and much, much stronger than Vasher’s own. The prisoner held a lot of Breaths. Hundreds upon hundreds of them.

The man swung in his bonds, studying Vasher, gagged lips bleeding from lack of water. Vasher hesitated only briefly, then reached up and pulled the gag free.

“You,” the prisoner whispered, coughing slightly. “Are you here to free me?”

“No, Vahr,” Vasher said quietly. “I’m here to kill you.”

Vahr snorted. Captivity hadn’t been easy on him. When Vasher had last seen Vahr, he’d been plump. Judging by his emaciated body, he’d been without food for some time now. The cuts, bruises, and burn marks on his flesh were fresh.

Both the torture and the haunted look in Vahr’s bag-rimmed eyes bespoke a solemn truth. Breath could only be transferred by willing, intentional Command. That Command could, however, be encouraged.

“So,” Vahr croaked, “you judge me, just like everyone else.”

“Your failed rebellion is not my concern. I just want your Breath.”

“You and the entire Hallandren court.”

“Yes. But you’re not going to give it to one of the Returned. You’re going to give it to me. In exchange for killing you.”

“Doesn’t seem like much of a trade.” There was a hardness—a void of emotion—in Vahr that Vasher had not seen the last time they had parted, years before.

Odd, Vasher thought, that I should finally, after all of this time, find something in the man that I can identify with.

Vasher kept a wary distance from Vahr. Now that the man’s voice was free, he could Command. However, he was touching nothing except for the metal chains, and metal was very difficult to Awaken. It had never been alive, and it was far from the form of a man. Even during the height of his power, Vasher himself had only managed to Awaken metal on a few select occasions. Of course, some extremely powerful Awakeners could bring objects to life that they weren’t touching, but that were in the sound of their voice. That, however, required the Ninth Heightening. Even Vahr didn’t have that much Breath. In fact, Vasher knew of only one living person who did: the God King himself.

That meant Vasher was probably safe. Vahr contained a great wealth of Breath, but had nothing to Awaken. Vasher walked around the chained man, finding it very difficult to offer any sympathy. Vahr had earned his fate. Yet the priests would not let him die while he held so much Breath; if he died, it would be wasted. Gone. Irretrievable.

Not even the government of Hallandren—which had such strict laws about the buying and passing of Breath—could let such a treasure slip away. They wanted it badly enough to forestall the execution of even a high-profile criminal like Vahr. In retrospect, they would curse themselves for not leaving him better guarded.

But, then, Vasher had been waiting two years for an opportunity like this one.

“Well?” Vahr asked.

“Give me the Breath, Vahr,” Vasher said, stepping forward.

Vahr snorted. “I doubt you have the skill of the God King’s torturers, Vasher—and I’ve withstood them for two weeks now.”

“You’d be surprised. But that doesn’t matter. You are going to give me your Breath. You know you have only two choices. Give it to me, or give it to them.”

Vahr hung by his wrists, rotating slowly. Silent.

“You don’t have much time to consider,” Vasher said. “Any moment now, someone is going to discover the dead guards outside. The alarm will be raised. I’ll leave you, you will be tortured again, and you will eventually break. Then all the power you’ve gathered will go to the very people you vowed to destroy.”

Vahr stared at the floor. Vasher let him hang for a few moments, and could see that the reality of the situation was clear to him. Finally, Vahr looked up atVasher. “That ... thing you bear. It’s here, in the city?”

Vasher nodded.

“The screams I heard earlier? It caused them?”

Vasher nodded again.

“How long will you be in T’Telir?”

“For a time. A year, perhaps.”

“Will you use it against them?”

“My goals are my own to know, Vahr. Will you take my deal or not? Quick death in exchange for those Breaths. I promise you this. Your enemies will not have them.”

Vahr grew quiet. “It’s yours,” he finally whispered.

Vasher reached over, resting his hand on Vahr’s forehead—careful not to let any part of his clothing touch the man’s skin, lest Vahr draw forth color for Awakening.

Vahr didn’t move. He looked numb. Then, just as Vasher began to worry that the prisoner had changed his mind, Vahr Breathed. The color drained from him. The beautiful Iridescence, the aura that had made him look majestic despite his wounds and chains. It flowed from his mouth, hanging in the air, shimmering like mist. Vasher drew it in, closing his eyes.

“My life to yours,” Vahr Commanded, a hint of despair in his voice. “My Breath become yours.”

The Breath flooded into Vasher, and everything became vibrant. His brown cloak now seemed deep and rich in color. The blood on the floor was intensely red, as if aflame. Even Vahr’s skin seemed a masterpiece of color, the surface marked by deep black hairs, blue bruises, and sharp red cuts. It had been years since Vasher had felt such ... life.

He gasped, falling to his knees as it overwhelmed him, and he had to drop a hand to the stone floor to keep himself from toppling over. How did I live without this?

He knew that his senses hadn’t actually improved, yet he felt so much more alert. More aware of the beauty of sensation. When he touched the stone floor, he marveled at its roughness. And the sound of wind passing through the thin dungeon window up above. Had it always been that melodic? How could he not have noticed?

“Keep your part of the bargain,” Vahr said. Vasher noted the tones in his voice, the beauty of each one, how close they were to harmonics. Vasher had gained perfect pitch. A gift for anyone who reached the Second Heightening. It would be good to have that again.

Vasher could, of course, have up to the Fifth Heightening at any time, if he wished. That would require certain sacrifices he wasn’t willing to make. And so he forced himself to do it the old-fashioned way, by gathering Breaths from people like Vahr.

Vasher stood, then pulled out the colorless scarf he had used earlier. He tossed it over Vahr’s shoulder, then Breathed.

He didn’t bother making the scarf have human shape, didn’t need to use a bit of his hair or skin for a focus—though he did have to draw the color from his shirt.

Vasher met Vahr’s resigned eyes.

“Strangle things,” Vasher Commanded, fingers touching the quivering scarf.

It twisted immediately, pulling away a large—yet now inconsequential—amount of Breath. The scarf quickly wrapped around Vahr’s neck, tightening, choking him. Vahr didn’t struggle or gasp; he simply watched Vasher with hatred until his eyes bulged and he died.

Hatred. Vasher had known enough of that in his time. He quietly reached up and recovered his Breath from the scarf, then left Vahr dangling in his cell. Vasher passed quietly through the prison, marveling at the color of the woods and the stones. After a few moments of walking, he noticed a new color in the hallway. Red.

He stepped around the pool of blood—which was seeping down the inclined dungeon floor—and moved into the guard room. The three guards lay dead. One of them sat in a chair. Nightblood, still mostly sheathed, had been rammed through the man’s chest. About an inch of a dark black blade was visible beneath the silver sheath.

Vasher carefully slid the weapon fully back into its sheath. He did up the clasp.

I did very well today, a voice said in his mind.

Vasher didn’t respond to the sword.

I killed them all, Nightblood continued. Aren’t you proud of me?

Vasher picked up the weapon, accustomed to its unusual weight, and carried it in one hand. He recovered his duffel and slung it over his shoulder.

I knew you’d be impressed, Nightblood said, sounding satisfied.
`;

const warbreakerSentences = splitIntoSentences(warbreakerText);
console.log(warbreakerSentences);