export const PROJECTS = [
  {
    id: 1,
    title: "React Native LinkedIn Login (Library)",
    tags: ["React-Native", "TypeScript", "NPM Package", "Auth"],
    link: "https://www.npmjs.com/package/@kristalpithwa/react-native-linkedin-login",
    color: "border-blue-500",
    shortDescription:
      "A React Native library that simplifies LinkedIn login integration using a WebView modal. It provides a ready-to-use component for handling TypeScript-based authentication flows with ease.",
    fullDescription: (
      <>
        <p>
          I developed this library to solve the complexity of integrating
          LinkedIn OAuth2 authentication in React Native apps. Existing
          solutions were often outdated or lacked proper TypeScript support.
        </p>
        <h3 className="text-xl text-white font-medium mt-4 mb-2">
          Key Features
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Easy Integration:</strong> Drop-in component that handles
            the entire login flow.
          </li>
          <li>
            <strong>TypeScript Support:</strong> Fully typed props and
            responses.
          </li>
          <li>
            <strong>WebView Based:</strong> Uses{" "}
            <code>react-native-webview</code> for a seamless in-app experience.
          </li>
          <li>
            <strong>Customizable:</strong> Supports custom styling and container
            configurations.
          </li>
        </ul>
        <h3 className="text-xl text-white font-medium mt-4 mb-2">
          Usage Example
        </h3>
        <div className="bg-black/50 p-4 rounded-lg font-mono text-sm border border-white/10">
          <pre>
            {`<LinkedInModal
  clientID="YOUR_CLIENT_ID"
  clientSecret="YOUR_CLIENT_SECRET"
  redirectUri="YOUR_REDIRECT_URI"
  onSuccess={(token) => console.log(token)}
/>`}
          </pre>
        </div>
      </>
    ),
  },
  {
    id: 2,
    title: "React Native Open Street Map View (Library)",
    tags: [
      "React-Native",
      "OpenStreetMap",
      "Maps",
      "TypeScript",
      "NPM Package",
    ],
    link: "https://www.npmjs.com/package/react-native-open-street-map-view",
    color: "border-emerald-500",
    shortDescription:
      "A React Native component for rendering OpenStreetMap on Android and iOS. It serves as a drop-in replacement for Google Maps, offering features like zoom, routing, and markers.",
    fullDescription: (
      <>
        <p>
          This package allows developers to integrate OpenStreetMap (OSM) into
          their React Native applications without relying on Google Maps API
          keys for basic usage. It wraps native map implementations to provide a
          consistent JS API.
        </p>
        <h3 className="text-xl text-white font-medium mt-4 mb-2">
          Why OpenStreetMap?
        </h3>
        <p>
          OpenStreetMap is a free, editable map of the whole world that is being
          built by volunteers predominantly from scratch and released with an
          open-content license.
        </p>
        <h3 className="text-xl text-white font-medium mt-4 mb-2">
          Component Features
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Zoom & Pan:</strong> Smooth intuitive map interactions.
          </li>
          <li>
            <strong>Markers:</strong> Add custom markers to specific
            coordinates.
          </li>
          <li>
            <strong>Polylines:</strong> Draw routes and shapes on the map.
          </li>
          <li>
            <strong>Cross-Platform:</strong> Works on both iOS and Android.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: "Social Music App - Dedicated Developer",
    tags: [
      "React-Native",
      "JavaScript",
      "RestAPI",
      "Firebase",
      "Spotify SDK",
      "iOS",
      "Android",
    ],
    link: "https://apps.apple.com/in/app/record-social/id6446630104",
    color: "border-blue-500",
    shortDescription:
      "The Social Music App is the ultimate social platform for music enthusiasts worldwide, designed to connect friends based on music taste with GPS features.",
    fullDescription: (
      <>
        <p>
          As the dedicated developer, I built the "Social Music App" to be the
          ultimate social platform for music enthusiasts. It features a stunning
          user interface designed to connect friends based on their music
          preferences.
        </p>
        <h3 className="text-xl text-white font-medium mt-4 mb-2">
          Core Functionalities
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Spotify Integration:</strong> Users can share and listen to
            tracks directly within the app.
          </li>
          <li>
            <strong>Geolocation:</strong> A GPS feature allows users to see what
            music is trending around them, from schools to workplaces.
          </li>
          <li>
            <strong>Real-time Chat:</strong> Connect with other music lovers
            instantly.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: "Clinic System App - Dedicated Developer",
    tags: [
      "React-Native",
      "JavaScript",
      "RestAPI",
      "Firebase",
      "Spotify SDK",
      "iOS",
      "Android",
    ],
    link: "https://apps.apple.com/us/app/validi-clinic-system/id1049757545",
    color: "border-purple-500",
    shortDescription:
      "Clinic Management System App designed for registered staff, providing seamless access to client profiles, medical history, and detailed journal entries.",
    fullDescription: (
      <>
        <p>
          Designed and developed for registered medical staff, this application
          provides seamless access to client profiles and enables the creation
          of detailed journal entries.
        </p>
        <h3 className="text-xl text-white font-medium mt-4 mb-2">
          System Capabilities
        </h3>
        <p>Profiles include vital information such as:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Medical History</li>
          <li>Prescribed Treatments</li>
          <li>Allergies</li>
          <li>Emergency Contacts</li>
        </ul>
        <p className="mt-4">
          The app ensures data security and compliance while improving the
          efficiency of clinic operations.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Learning App for students",
    tags: [
      "React-Native",
      "JavaScript",
      "RestAPI",
      "ChatGPT",
      "iOS",
      "Android",
    ],
    link: "https://apps.apple.com/us/app/adaptive-instruction-advisor/id6461770153?uo=2",
    color: "border-purple-500",
    shortDescription:
      "Adaptive learning applications help students of all ages improve their writing skills with AI-powered instant feedback on responses.",
    fullDescription: (
      <>
        <p>
          This adaptive learning application mimics a personal tutor for writing
          skills. By leveraging Artificial Intelligence, specifically ChatGPT
          integration, the program provides instant, personalized feedback on
          student responses to writing prompts.
        </p>
        <h3 className="text-xl text-white font-medium mt-4 mb-2">
          Adaptive Learning
        </h3>
        <p>
          The system adapts to the student's writing style, providing
          progressively more challenging prompts and feedback as the student's
          skills improve. It tracks progress over time and offers insights to
          teachers and parents.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Battle Rap Live App - Dedicated Developer",
    tags: [
      "React-Native",
      "JavaScript",
      "RestAPI",
      "Firebase",
      "iOS",
      "Android",
    ],
    link: "https://apps.apple.com/us/app/battleraplive/id346512771",
    color: "border-yellow-500",
    shortDescription:
      "Discover your rap potential with BattleRapLive, the ultimate freestyle and battle rap app. Designed to awaken the MC within.",
    fullDescription: (
      <>
        <p>
          BattleRapLive brings a mobile recording studio right to your pocket.
          Whether you're a seasoned rapper or a newcomer looking to step into
          the cypher, this app is perfect for every skill level.
        </p>
        <h3 className="text-xl text-white font-medium mt-4 mb-2">
          Key Features
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Mobile Studio:</strong> High-quality voice recording with
            beat overlays.
          </li>
          <li>
            <strong>Battle Mode:</strong> Challenge friends or random opponents
            to rap battles.
          </li>
          <li>
            <strong>Community:</strong> Share your tracks and get rated by the
            community.
          </li>
        </ul>
      </>
    ),
  },
];
