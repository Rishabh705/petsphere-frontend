import React from 'react'
import "../styles/About.css"

export default function About() {
  return (
    <div className='about-cont'>
      <section id="about-flixio">
        <h2><span className="beautify">About Flixio</span></h2>
        <p>Flixio is not just another entertainment app; it's a gateway to a world of limitless entertainment options. Whether you're a movie buff, a TV series enthusiast, or a casual viewer, Flixio has something for everyone. Our user-friendly interface, vast library, and personalized recommendations make sure you're always one click away from your next favorite film or show.</p>
        <p>Discover a treasure trove of cinematic experiences, ranging from the golden classics that defined eras, to the latest blockbusters that set trends. With Flixio, you'll embark on a journey through storytelling that knows no bounds.</p>       
      </section>

      <section id="our-mission">
        <h2><span className="beautify">Our Mission</span></h2>
        <p>At Flixio, we're on a mission to revolutionize how you experience entertainment. We aim to provide a seamless and enjoyable platform for discovering, watching, and sharing your favorite content. Our dedicated team of movie enthusiasts and tech experts work tirelessly to bring you a service that not only meets but exceeds your expectations.</p>
        <p>We believe that everyone deserves access to exceptional entertainment, regardless of their tastes or preferences. That's why Flixio is designed to cater to a diverse audience, ensuring there's something for everyone. Whether you're in the mood for heartwarming dramas, edge-of-your-seat thrillers, or side-splitting comedies, Flixio has it all.</p>
        <p>Our commitment goes beyond just providing a platform. We're here to foster a community of passionate cinephiles. Share your thoughts, recommendations, and insights with fellow Flixio users. Together, we'll create an environment where the love for storytelling thrives.</p>
      </section>

      <section id="key-features">
        <h2><span className="beautify">Key Features</span></h2>
        <ol>
          <li>
            <h3>Extensive Library</h3>
            <p>With a vast collection of movies and TV series spanning across genres, languages, and eras, Flixio ensures there's always something for everyone. From classic cinema to the latest blockbusters, we've got it all covered.</p>
          </li>
          <li>
            <h3>User-Friendly Interface</h3>
            <p>Navigating Flixio is a breeze. Our intuitive design allows you to effortlessly search, filter, and discover new content. Finding your next binge-worthy series has never been this easy.</p>
          </li>
        </ol>
      </section>


      <p>For any inquiries, feedback, or support, feel free to contact us at <a href="mailto:support@flixio.com">support@flixio.com</a>. We're here to make sure your Flixio experience is nothing short of exceptional.</p>
      <p>Thank you for choosing Flixio. Happy watching!</p>

    </div>
  )
}
