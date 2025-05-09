 // JavaScript code from earlier to dynamically display events
       // List of 52 events for each week of the year
const events = [
    { date: '2025-01-01', title: 'January 1st, 1801: The Act of Union', description: 'The Act of Union merges the Kingdom of Great Britain and the Kingdom of Ireland, creating the United Kingdom of Great Britain and Ireland.' },
    { date: '2025-01-08', title: 'January 8th, 1835: The Battle of the Alamo', description: 'A key event in the Texas Revolution, the Battle of the Alamo is remembered for the sacrifice and bravery of its defenders.' },
    { date: '2025-01-15', title: 'January 15th, 1919: The Great Molasses Flood', description: 'In Boston, a tank filled with molasses burst, flooding the streets and creating one of the oddest disasters in history.' },
    { date: '2025-01-22', title: 'January 22nd, 1901: Queen Victoria’s Death', description: 'Queen Victoria, who reigned over the British Empire for 63 years, passes away, marking the end of the Victorian era.' },
    { date: '2025-01-29', title: 'January 29th, 1959: The Day the Music Died', description: 'Buddy Holly, Ritchie Valens, and J.P. "The Big Bopper" Richardson tragically die in a plane crash, marking a major moment in rock n\' roll history.' },
    { date: '2025-02-05', title: 'February 5th, 1971: The Apollo 14 Moon Landing', description: 'Apollo 14 lands on the Moon, making it the third successful landing in the Apollo program.' },
    { date: '2025-02-12', title: 'February 12th, 2005: YouTube Is Founded', description: 'The first video-sharing platform, YouTube, is launched, revolutionizing the way we share and watch videos online.' },
    { date: '2025-02-19', title: 'February 19th, 1473: Copernicus Is Born', description: 'Nicolaus Copernicus, who proposed the heliocentric model of the solar system, is born in Poland.' },
    { date: '2025-02-26', title: 'February 26th, 1936: The Winter Olympics in Germany', description: 'The 1936 Winter Olympics are held in Garmisch-Partenkirchen, Germany, amidst the rise of the Nazi regime.' },
    { date: '2025-03-05', title: 'March 5th, 1946: Churchill’s Iron Curtain Speech', description: 'Winston Churchill delivers his famous "Iron Curtain" speech in Fulton, Missouri, marking the beginning of the Cold War.' },
    { date: '2025-03-12', title: 'March 12th, 1930: Gandhi’s Salt March', description: 'Mahatma Gandhi begins the Salt March to protest British rule in India, becoming a turning point in India’s independence movement.' },
    { date: '2025-03-19', title: 'March 19th, 1973: The Great Emu War', description: 'Australia’s military attempts to combat a massive emu population in Western Australia, an amusing and failed effort.' },
    { date: '2025-03-26', title: 'March 26th, 1971: Bangladesh Liberation War Begins', description: 'The Bangladesh Liberation War begins, ultimately leading to the independence of Bangladesh from Pakistan.' },
    { date: '2025-04-02', title: 'April 2nd, 1513: Ponce de León Discovers Florida', description: 'Spanish explorer Juan Ponce de León lands on the coast of Florida, marking the first recorded European contact with the area.' },
    { date: '2025-04-09', title: 'April 9th, 1865: Lee Surrenders at Appomattox', description: 'General Robert E. Lee surrenders to Ulysses S. Grant, effectively ending the American Civil War.' },
    { date: '2025-04-16', title: 'April 16th, 1963: Martin Luther King Jr.’s “Letter from Birmingham Jail”', description: 'Martin Luther King Jr. writes his famous "Letter from Birmingham Jail," which becomes a pivotal document in the Civil Rights Movement.' },
    { date: '2025-04-23', title: 'April 23rd, 1564: Shakespeare’s Birthday', description: 'William Shakespeare, one of the most celebrated playwrights in history, is born in Stratford-upon-Avon.' },
    { date: '2025-04-30', title: 'April 30th, 1789: George Washington’s Inauguration', description: 'George Washington is inaugurated as the first President of the United States, setting the tone for the nation’s future.' },
    { date: '2025-05-07', title: 'May 7th, 1992: The First McDonald’s in Russia', description: 'The first McDonald’s in Russia opens in Moscow, symbolizing the country’s move towards the West.' },
    { date: '2025-05-14', title: 'May 14th, 1948: Edward Jenner administers the first smallpox vaccine', description: 'Dr. Edward Jenner gave the first successful smallpox vaccination, laying the groundwork for modern immunology. His work would eventually lead to the eradication of smallpox — the first disease to be wiped out by human effort!' },
    { date: '2025-05-21', title: 'May 21st, 1881: The American Red Cross is Founded', description: 'Clara Barton establishes the American Red Cross, an organization that would go on to provide disaster relief around the world.' },
    { date: '2025-05-28', title: 'May 28th, 1937: The Golden Gate Bridge Opens', description: 'The Golden Gate Bridge, an iconic symbol of San Francisco, officially opens to traffic after four years of construction.' },
    { date: '2025-06-04', title: 'June 4th, 1940: The Dunkirk Evacuation', description: 'During WWII, British and Allied forces successfully evacuate from Dunkirk, France, in an operation that would boost morale.' },
    { date: '2025-06-11', title: 'June 11th, 1963: The University of Alabama Desegregation', description: 'Governor George Wallace stands in front of the University of Alabama’s doors in a stand against desegregation, which is eventually overcome by federal intervention.' },
    { date: '2025-06-18', title: 'June 18th, 1815: The Battle of Waterloo', description: 'Napoleon Bonaparte is defeated at the Battle of Waterloo, marking the end of his reign and the Napoleonic Wars.' },
    { date: '2025-06-25', title: 'June 25th, 1950: Korean War Begins', description: 'The Korean War breaks out when North Korea invades South Korea, eventually involving the United States and China in the conflict.' },
    { date: '2025-07-02', title: 'July 2nd, 1964: Civil Rights Act Signed', description: 'President Lyndon B. Johnson signs the Civil Rights Act, a landmark piece of legislation that outlaws discrimination based on race, color, religion, sex, or national origin.' },
    { date: '2025-07-09', title: 'July 9th, 1900: The Boxer Rebellion in China', description: 'Chinese rebels known as the Boxers attack foreign nationals and Chinese Christians, leading to an international intervention.' },
    { date: '2025-07-16', title: 'July 16th, 1969: Apollo 11 Launches', description: 'Apollo 11 launches from Kennedy Space Center, leading to the first successful manned mission to the Moon.' },
    { date: '2025-07-23', title: 'July 23rd, 1973: The Watergate Scandal Begins', description: 'The Watergate scandal begins with the break-in at the Democratic National Committee headquarters, leading to the resignation of President Nixon.' },
    { date: '2025-07-30', title: 'July 30th, 1965: Medicare is Signed Into Law', description: 'President Lyndon B. Johnson signs Medicare into law, providing health insurance to Americans aged 65 and older.' },
    { date: '2025-08-06', title: 'August 6th, 1945: Hiroshima Bombing', description: 'The United States drops an atomic bomb on Hiroshima, Japan, marking the first use of nuclear weapons in warfare.' },
    { date: '2025-08-13', title: 'August 13th, 1961: Berlin Wall Construction Begins', description: 'East Germany begins building the Berlin Wall, a symbol of the Cold War division between East and West.' },
    { date: '2025-08-20', title: 'August 20th, 1968: Prague Spring Ends', description: 'The Soviet Union invades Czechoslovakia to halt reforms during the Prague Spring, a period of political liberalization.' },
    { date: '2025-08-27', title: 'August 27th, 1957: Soviet Union Tests Intercontinental Ballistic Missile', description: 'The Soviet Union tests its first Intercontinental Ballistic Missile (ICBM), intensifying the arms race during the Cold War.' },
    { date: '2025-09-03', title: 'September 3rd, 1939: Britain Declares War on Germany', description: 'Britain declares war on Germany, officially entering World War II following the German invasion of Poland.' },
    { date: '2025-09-10', title: 'September 10th, 1977: The First Star Wars Film is Released', description: 'The first Star Wars film is released, forever changing the landscape of cinema and pop culture.' },
    { date: '2025-09-17', title: 'September 17th, 1787: U.S. Constitution Signed', description: 'The U.S. Constitution is signed in Philadelphia, laying the foundation for the United States government.' },
    { date: '2025-09-24', title: 'September 24th, 1968: The First Episode of "Mister Rogers’ Neighborhood" Airs', description: 'Fred Rogers’ beloved children’s television show makes its debut, becoming a cultural institution for decades.' },
    { date: '2025-10-01', title: 'October 1st, 1949: The Founding of the People’s Republic of China', description: 'Mao Zedong declares the founding of the People’s Republic of China, shifting the nation to Communist rule.' },
    { date: '2025-10-08', title: 'October 8th, 1871: The Great Chicago Fire', description: 'A devastating fire consumes much of Chicago, destroying thousands of buildings and displacing thousands of people.' },
    { date: '2025-10-15', title: 'October 15th, 1582: The Gregorian Calendar Introduced', description: 'Pope Gregory XIII introduces the Gregorian calendar, which is now the most widely used civil calendar.' },
    { date: '2025-10-22', title: 'October 22nd, 1962: Cuban Missile Crisis', description: 'The Cuban Missile Crisis begins, bringing the United States and the Soviet Union to the brink of nuclear war.' },
    { date: '2025-10-29', title: 'October 29th, 1929: The Great Depression Begins', description: 'The U.S. stock market crashes, marking the beginning of the Great Depression, a period of severe economic downturn worldwide.' },
    { date: '2025-11-05', title: 'November 5th, 1605: Guy Fawkes and the Gunpowder Plot', description: 'Guy Fawkes is arrested in the Gunpowder Plot, a failed attempt to blow up the British Parliament.' },
    { date: '2025-11-12', title: 'November 12th, 1918: World War I Armistice', description: 'World War I ends with the signing of the armistice, bringing an end to four years of devastating global conflict.' },
    { date: '2025-11-19', title: 'November 19th, 1863: Lincoln’s Gettysburg Address', description: 'President Abraham Lincoln delivers his iconic speech at the dedication of the Soldiers’ National Cemetery in Gettysburg.' },
    { date: '2025-11-26', title: 'November 26th, 1977: Elvis Presley’s Death', description: 'The King of Rock n’ Roll, Elvis Presley, passes away at the age of 42, leaving behind a monumental legacy in music.' }
];

        function getCurrentEvent() {
            const currentDate = new Date();
            const weekOfYear = getWeekOfYear(currentDate);

            // Get the event corresponding to the current week of the year
            const event = events[weekOfYear % events.length]; // Wrap around if there are more weeks than events
            return event;
        }

        // Helper function to get the current week number of the year
        function getWeekOfYear(date) {
            const startDate = new Date(date.getFullYear(), 0, 1);
            const days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
            return Math.ceil((days + startDate.getDay() + 1) / 7);
        }

        function displayEvent(event) {
            const contentDiv = document.getElementById('history-content');
            contentDiv.innerHTML = `
                <div class="history-item">
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-description">${event.description}</p>
                </div>
            `;
        }

        // Initialize and display the current week's event
        const currentEvent = getCurrentEvent();
        displayEvent(currentEvent);





// Below is the code for one of the hidden easter eggs s



let inputSequence = '';
  document.addEventListener('keydown', (e) => {
    inputSequence += e.key.toLowerCase();
    if (inputSequence.includes('1066')) {
      document.getElementById('easter-egg').style.display = 'block';
      document.getElementById('danceMusic').play();
    }
    if (inputSequence.length > 10) inputSequence = '';
  });

  function closeEasterEgg() {
    document.getElementById('easter-egg').style.display = 'none';
    const music = document.getElementById('danceMusic');
    music.pause();
    music.currentTime = 0;
  }
