import SpeakerCard from '../components/SpeakerCard';

export default function speakers() {
  return (
    <div className="speakersPage">
      <div className="speakersMainPage flex flex-col items-center">
        <h4 className="speakersTitle">Speakers</h4>
        <div id="SpeakerCards" className="flex flex-col gap-y-4 w-full">
          {/* path is relative path from speakers.tsx file(this file) to assets*/}
          {/* general path -  /../public/assets/speakerImages/{speaker file}*/}
          <SpeakerCard
            path="/../public/assets/speaker.jpg"
            name="Paul Bailo"
            company="OrangeShine"
            description="Paul Bailo is widely recognized by industry thought leaders for his C-level executive skills in Digital Transformation, Marketing and Business Operations. 
            He has earned deep career success in multiple fields, along with an outstanding industry reputation and important executive roles as Digital Innovator, Strategic Thinker, 
            Change Agent, Customer Champion, Industry Author and Creative Entrepreneur. He has built and led top performing teams, start-up entities and world-class organizations. 
            His background in digital transformation, digital communications, emerging payments, operational excellence, data-driven decision-making and ongoing product innovation is unparalleled. 
            His blue-chip background encompasses Google, Apple, ATT, Bank of America, 
            Goldman Sachs, MasterCard, American Express, GE, Citibank, Federal Reserve Bank of New York, NYC Transit Authority and US Department of Transportation."
            website="linkedin.com/in/paulbailo"
          />
        </div>
      </div>
    </div>
  );
}
