const img = document.createElement('img');
img.setAttribute('src', 'https://fastly.picsum.photos/id/405/1400/800.jpg?hmac=4CRI7OpfDWtP4EydVd4Z-1NKSGhBmpZq8OaEXVu3be8');    
img.setAttribute('alt', 'street');
img.setAttribute('style', 'width: 50%; margin-top:20px;');
document.body.appendChild(img);



const imagesList = [
  {
    webImage: 'https://lh3.googleusercontent.com/SsEIJWka3_cYRXXSE8VD3XNOgtOxoZhqW1uB6UFj78eg8gq3G4jAqL4Z_5KwA12aD7Leqp27F653aBkYkRBkEQyeKxfaZPyDx0O8CzWg=s0',
    guid: "bbd1fae8-4023-4859-8ed1-d38616aec96c",
    offsetPercentageX: 0,
    offsetPercentageY: 1,
    width: 5656,
    height: 4704,
    title: 'The Night Watch',
    longtitle: "The Night Watch, Rembrandt van Rijn, 1642",
  },
  {
    webImage: 'https://lh3.googleusercontent.com/mAyAjvYjIeAIlByhJx1Huctgeb58y7519XYP38oL1FXarhVlcXW7kxuwayOCFdnwtOp6B6F0HJmmws-Ceo5b_pNSSQs=s0',
    guid: "bbd1fae8-4023-4859-8ed1-d38616aec96c",
    offsetPercentageX: 0,
    offsetPercentageY: 1,
    width: 5656,
    height: 4704,
    title: "Isaac and Rebecca, Known as ‘The Jewish Bride’",
    longtitle: "Isaac and Rebecca, Known as ‘The Jewish Bride’, Rembrandt van Rijn, c. 1665 - c. 1669",
  },
  {
    webImage: "https://lh3.googleusercontent.com/gShVRyvLLbwVB8jeIPghCXgr96wxTHaM4zqfmxIWRsUpMhMn38PwuUU13o1mXQzLMt5HFqX761u8Tgo4L_JG1XLATvw=s0",
    guid: "bbd1fae8-4023-4859-8ed1-d38616aec96c",
    offsetPercentageX: 0,
    offsetPercentageY: 1,
    width: 5656,
    height: 4704,
    title: "The Sampling Officials of the Amsterdam Drapers’ Guild, Known as ‘The Syndics’",
  },
  {
   webImage: "https://lh3.googleusercontent.com/NrCcfeY0r2F3M2hIQe5SLDRofR2tVzeOH18VjflOYGj88v4clb4v2H_VgCZR4nJhYsxxH9ATzfkL2tRqOWEK5-gPVEE=s0",
    guid: "bbd1fae8-4023-4859-8ed1-d38616aec96c",
    offsetPercentageX: 0,
    offsetPercentageY: 1,
    width: 5656,
    height: 4704,
    title: "Self-portrait as the Apostle Paul",
  },
  {
    webImage: "https://lh3.googleusercontent.com/AyiKhdEWJ7XmtPXQbRg_kWqKn6mCV07bsuUB01hJHjVVP-ZQFmzjTWt7JIWiQFZbb9l5tKFhVOspmco4lMwqwWImfgg=s0",
    guid: "bbd1fae8-4023-4859-8ed1-d38616aec96c",
    offsetPercentageX: 0,
    offsetPercentageY: 1,
    width: 5656,
    height: 4704,
    title: "Portrait of a Woman, Possibly Maria Trip",
  },
  {
    webImage: "https://lh3.googleusercontent.com/7qzT0pbclLB7y3fdS1GxzMnV7m3gD3gWnhlquhFaJSn6gNOvMmTUAX3wVlTzhMXIs8kM9IH8AsjHNVTs8em3XQI6uMY=s0",
    guid: "bbd1fae8-4023-4859-8ed1-d38616aec96c",
    offsetPercentageX: 0,
    offsetPercentageY: 1,
    width: 5656,
    height: 4704,
    title: "Self-portrait",
  },
];


const imagesContainer = document.getElementById('images-list');

const createCard = ({ webImage, title, longtitle }, index) => {
  const card = document.createElement('div');
  card.className = 'card';

  const image = document.createElement('img');
  image.src = webImage;
  image.alt = title;

  const cardTitle = document.createElement('h2');
  cardTitle.className = 'card-title';
  cardTitle.innerText = title;

  let cardSubtitle1, cardSubtitle2;
  if (index === 0) {
    cardSubtitle1 = document.createElement('p');
    cardSubtitle1.className = 'card-subtitle';
    cardSubtitle1.innerText = longtitle;

    cardSubtitle2 = document.createElement('p');
    cardSubtitle2.className = 'card-subtitle';
    cardSubtitle2.innerText = 'for more information visit';
    const link = document.createElement('a');
    link.href = '#';
    link.innerText = 'here';
    link.style.marginLeft = '0.5em';
    cardSubtitle2.appendChild(link);
  } else {
    cardSubtitle1 = document.createElement('p');
    cardSubtitle1.className = 'card-subtitle';
    cardSubtitle1.style.display = 'none';

    cardSubtitle2 = document.createElement('p');
    cardSubtitle2.className = 'card-subtitle';
    cardSubtitle2.style.display = 'none';
  }

  const seeDetailsButton = document.createElement('button');
  seeDetailsButton.className = 'card-button';
  seeDetailsButton.innerText = 'See more details';

  const removeButton = document.createElement('button');
  removeButton.className = 'card-button remove-button';
  removeButton.innerText = 'Remove card';
  

  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'card-buttons-container';
  buttonsContainer.append(seeDetailsButton, removeButton);

  const textContainer = document.createElement('div');
  textContainer.className = 'card-text-container';
  textContainer.style.height = '120px';
  textContainer.append(cardTitle, cardSubtitle1, cardSubtitle2);

  card.append(image, textContainer, buttonsContainer);

  return card;
};

const cards = imagesList.map(createCard);
imagesContainer.append(...cards);
  
