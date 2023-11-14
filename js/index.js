let dateOfBirth = document.querySelector("input[type='date']");

const findZodiac = (event) => {
  event.preventDefault();
  dateOfBirth = new Date(dateOfBirth.value);
  const month = dateOfBirth.getMonth();
  const day = dateOfBirth.getDate();
  let zodiacSign = "";
  let zodiacDate = "";
  let zodiacDescription = "";

  if ((month === 0 && day >= 20) || (month === 1 && day <= 18)) {
    zodiacSign = "Aquarius";
    zodiacDate = "January 20th — February 18th";
    zodiacDescription = "Innovative and eccentric, Aquarians are known for their forward-thinking and humanitarian nature. They value individuality and often champion social causes.";
  } else if ((month === 1 && day >= 19) || (month === 2 && day <= 20)) {
    zodiacSign = "Pisces";
    zodiacDate = "February 19th — March 20th";
    zodiacDescription = "Dreamy and empathetic, Pisceans are intuitive and compassionate. They are artistic souls with a deep connection to their emotions and the world around them.";
  } else if ((month === 2 && day >= 21) || (month === 3 && day <= 19)) {
    zodiacSign = "Aries";
    zodiacDate = "March 21 — April 19th";
    zodiacDescription = "Energetic and bold, Aries individuals are natural-born leaders. They thrive on challenges, are fiercely competitive, and are known for their adventurous spirit.";
  } else if ((month === 3 && day >= 20) || (month === 4 && day <= 20)) {
    zodiacSign = "Taurus";
    zodiacDate = "April 20th — May 20th";
    zodiacDescription = "Reliable and grounded, Taureans are known for their practicality and determination. They appreciate the finer things in life and are deeply connected to the material world.";
  } else if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
    zodiacSign = "Gemini";
    zodiacDate = "May 21 — June 20th";
    zodiacDescription = "Curious and adaptable, Geminis are social butterflies with a quick wit. They love to communicate and are often seen as the life of the party due to their dynamic and lively nature.";
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 22)) {
    zodiacSign = "Cancer";
    zodiacDate = "June 21 —July 22";
    zodiacDescription = "Nurturing and emotional, Cancerians are deeply connected to family and home. They are intuitive and empathetic, often taking on the role of caregivers in their relationships.";
  } else if ((month === 6 && day >= 23) || (month === 7 && day <= 22)) {
    zodiacSign = "Leo";
    zodiacDate = "July 23rd — August 22";
    zodiacDescription = "Confident and charismatic, Leos are natural-born leaders with a flair for the dramatic. They love to be in the spotlight and are generous and warm-hearted.";
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    zodiacSign = "Virgo";
    zodiacDate = "August 23 — September 22nd";
    zodiacDescription = "Detail-oriented and analytical, Virgos are perfectionists with a strong sense of duty. They are practical and diligent, often excelling in tasks that require precision.";
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    zodiacSign = "Libra";
    zodiacDate = "September 23 — October 22";
    zodiacDescription = "Charming and diplomatic, Librans seek balance and harmony in all aspects of life. They value relationships, beauty, and fairness, and often play the role of peacemakers.";
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 21)) {
    zodiacSign = "Scorpio";
    zodiacDate = "October 23rd — November 21";
    zodiacDescription = "Intense and mysterious, Scorpios are known for their passion and determination. They are fiercely loyal and often have a magnetic and transformative presence.";
  } else if ((month === 10 && day >= 22) || (month === 11 && day <= 21)) {
    zodiacSign = "Sagittarius";
    zodiacDate = "November 22 — December 21";
    zodiacDescription = "Adventurous and optimistic, Sagittarians are lovers of freedom and exploration. They have a philosophical nature and are always seeking new experiences and knowledge.";
  } else if ((month === 11 && day >= 22) || (month === 0 && day <= 19)) {
    zodiacSign = "Capricorn";
    zodiacDate = "December 22nd — January 19th";
    zodiacDescription = "Ambitious and disciplined, Capricorns are hardworking individuals with a strong sense of responsibility. They are practical, reliable, and often excel in leadership roles.";
  }

  sessionStorage.setItem("zodiacSign", zodiacSign);
  sessionStorage.setItem("zodiacDate", zodiacDate);
  sessionStorage.setItem("zodiacDescription", zodiacDescription);
  location.href = "./result.html";
};
