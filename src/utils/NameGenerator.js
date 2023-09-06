export default function NameGenerator() {
    const firstNames = [
      "John",
      "Emily",
      "Michael",
      "Sophia",
      "William",
      "Olivia",
      // Add more first names as needed
    ];
  
    const lastNames = [
      "Smith",
      "Johnson",
      "Brown",
      "Lee",
      "Garcia",
      "Martinez",
      // Add more last names as needed
    ];
  
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  
    return `${randomFirstName} ${randomLastName}`;
  }

  export function GenerateRandomMessage() {
    const messages = [
      "Hello there!",
      "How are you doing?",
      "Just checking in.",
      "Hope you're having a great day!",
      "Remember to stay hydrated.",
      "Have a fantastic day ahead!",
      "What's your favorite hobby?",
      "Keep up the good work!",
      "Sending you positive vibes.",
      "Don't forget to take breaks.",
      "You're awesome!",
      "Smile, it's contagious!",
      // Add more messages as needed
    ];
  
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
    return randomMessage;
  }