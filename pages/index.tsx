import Head from 'next/head';
import CustomDatePicker from '../components/DatePicker';
import CalendarPreview from '../components/CalenderPreview';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Date Picker</title>
        <meta name="description" content="Reusable date picker component with recurrence options" />
      </Head>

      <main className="p-4 min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <h1 className="text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Date Picker with Recurrence Options
        </h1>
        <CustomDatePicker />
        <CalendarPreview />
      </main>
    </div>
  );
};

export default Home;
