const modal = document.querySelector('.speakers-list');
const modal1 = document.querySelector('.brack1');
const modal2 = document.querySelector('.brack2');
const modal3 = document.querySelector('.brack3');
const speakers = [
  {
    name: 'Yochai Benkler',
    quote: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    message: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    image: 'images/speaker_01.png',
  },
  {
    name: 'SohYeong Noh',
    quote: 'Director of Art Centre Nabi and a board member of CC Korea',
    message: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    image: 'images/speaker_03.png',
  },
  {
    name: 'Chester',
    quote: 'Executive Director of the Wikimedia Foundation',
    message: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
    image: 'images/speaker_02.png',
  },
  {
    name: 'Henly',
    quote: 'Spokesperson',
    message: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
    image: 'images/speaker_04.png',
  },
  {
    name: 'Maynard',
    quote: 'President of Young Pirates of Europe',
    message: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
    image: 'images/speaker_05.png',
  },
  {
    name: 'Ethan',
    quote: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    message: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
    image: 'images/speaker_06.png',
  },
];
let num = 0;
for (let i = num; i < 2; i += 1) {
  modal1.innerHTML += `
    <div class="speakers-card show-${i}">
    <img src="${speakers[i].image}" alt="Speaker-image">
    <div class="speaker-details">
        <h3>${speakers[i].name}</h3>
        <p class="quote"><q>${speakers[i].quote}</q></p>
        <p>${speakers[i].message}</p>
    </div>
    </div>
    `;
  num = i;
}
for (let i = num + 1; i < speakers.length - 2; i += 1) {
  modal2.innerHTML += `
            <div class="speakers-card">
            <img src="${speakers[i].image}" alt="Speaker-image">
            <div class="speaker-details">
                <h3>${speakers[i].name}</h3>
                <p class="quote"><q>${speakers[i].quote}</q></p>
                <p>${speakers[i].message}</p>
            </div>
            </div>
            `;
  num = i;
}
for (let i = num + 1; i < speakers.length; i += 1) {
  modal3.innerHTML += `
            <div class="speakers-card">
            <img src="${speakers[i].image}" alt="Speaker-image">
            <div class="speaker-details">
                <h3>${speakers[i].name}</h3>
                <p class="quote"><q>${speakers[i].quote}</q></p>
                <p>${speakers[i].message}</p>
            </div>
            </div>
            `;
}
const btnSpeakers = document.querySelector('.btn-speakers');
btnSpeakers.addEventListener('click', () => {
  modal.classList.toggle('hidebtn');
});