import './App.css';
import SimpsonCharacter from "./components/SimpsonCharacter/SimpsonCharacter";
import Heading from "./components/Heading/Heading";

function App() {
  return (
    <div className="App">
        <Heading title={'Task 1 - Family Simpson'} />
        <SimpsonCharacter
            name={'Homer Jay Simpson'}
            age={39}
            personInfo={'Homer Jay Simpson (born May 12, 1956)[36] is the main protagonist of The Simpsons series (or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be ~240 pounds), lazy, and often ignorant to the world around him. Although Homer has many flaws, he has shown to have great caring, love, and even bravery to those he cares about and, sometimes, even others he doesn\'t. He also serves as the main protagonist of the The Simpsons Movie.'}
            picture={'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'}/>
        <SimpsonCharacter
            name={'Bartholomew JoJo Simpson'}
            age={10}
            personInfo={'Bartholomew "Bart" Jojo Simpson (born April 1[7] or February 23[8]) is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons. He is the only son of Homer and Marge Simpson, and the older brother of Lisa and Maggie. He also has been nicknamed "Cosmo", after discovering a comet in "Bart\'s Comet". Bart has also been on the cover on numerous comics, such as "Critical Hit", "Simpsons Treasure Trove #11", and "Winter Wingding". Bart also has a 100-issue comic series entitled the Simpson Comics Presents Bart Simpson. Bart is loosely based on Matt Groening and his older brother, Mark Groening.'}
            picture={'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png'}
        />
        <SimpsonCharacter
            name={'Marjorie Jacqueline "Marge" Simpson'}
            age={37}
            personInfo={'Marjorie Jacqueline "Marge" Simpson (née Bouvier[11]) is the homemaker and matriarch of the Simpson family. She is also one of the five main characters in The Simpsons TV series. Marge is 37 years of age. She and her husband Homer have three children: Bart, Lisa, and Maggie. Marge is the moralistic force in her family and often provides a grounding voice in the midst of her family\'s antics by trying to maintain order in the Simpson household. Aside from her duties at home, Marge has flirted briefly with a number of careers ranging from a police officer to an anti-violence activist.'}
            picture={'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png'}
        />
        <SimpsonCharacter
            name={'Lisa Marie Simpson'}
            age={8}
            personInfo={'Lisa Marie Simpson (born May 9)[9] is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons series.\n' +
                '\n' +
                'In "Homer and Lisa Exchange Cross Words" she is also known as Lisa Bouvier. She was named after a train called Lil\' Lisa on her parents\' 1st anniversary. She is a charismatic 8-year-old girl, who exceeds the standard achievement of the intelligence level of children her age. Not to everyone\'s surprise, she is also the moral center of her family. In her upbringing, Lisa lacks parental involvement of Homer and Marge, which leads to hobbies such as playing saxophone and guitar, riding and caring for horses, and interest in advanced studies.'}
            picture={'https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png'}
        />
        <SimpsonCharacter
          name={'Charles Montgomery Plantagenet Schicklgruber Burns'}
          age={81}
          personInfo={'Charles Montgomery Plantagenet Schicklgruber Burns[12], also known as Monty Burns, Montgomery Burns, C.M. Burns, and Mr. Burns, is the owner of the Springfield Nuclear Power Plant and the main antagonist of The Simpsons franchise. He is Springfield\'s richest, oldest, and most powerful citizen. His net worth has been stated to be in the billions and in one instance was pegged at exactly $1,800,037,022.[13]\n' +
              '\n' +
              'He had, on three occasions, lost his entire fortune,[14][15][16] and at another time slipped to "only" $996 million ($996,036,000), leading to his expulsion from Billionaire Camp.[13] Despite his proficiency with firearms, Burns is very elderly and physically frail but employs relentless and ruthless tactics to get whatever he wants.'}
          picture={'https://static.wikia.nocookie.net/simpsons/images/a/a7/Montgomery_Burns.png'}
        />
    </div>
  );
}

export default App;
