import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import AboutHeader from '../../components/AboutHeader';
import AnsweredQuestion from '../../components/AnsweredQuestion';
import PendingQuestion from '../../components/PendingQuestion';
import { ColorScheme } from '../../utilities/colorScheme';
import { fakeAnsweredQuestions, fakePendingQuestions } from '../../lib/data';

/**
 * The about / questions.
 *
 * Landing: /questions
 */
export default function Questions() {
  const [loading, setLoading] = useState(true);
  const [answeredQuestions, setAnsweredQuestions] = useState<AnsweredQuestion[]>([]);
  const [pendingQuestions, setPendingQuestions] = useState<PendingQuestion[]>([]);

  const getMyAnsweredQuestions = () => {
    /* TODO: Work out on how these data will be stored in the backend and replace this code
    with logic to fetch real data from backend */
    return fakeAnsweredQuestions;
  };

  const getMyPendingQuestion = () => {
    /* TODO: Work out on how these data will be stored in the backend and replace this code
    with logic to fetch real data from backend */
    return fakePendingQuestions;
  };

  useEffect(() => {
    setAnsweredQuestions(getMyAnsweredQuestions());
    setPendingQuestions(getMyPendingQuestion());
    setLoading(false);
  }, []);

  const colorSchemes: ColorScheme[] = [
    {
      light: '#F2F3FF',
      dark: '#9CA6FF',
    },
    {
      light: '#D8F8FF',
      dark: '#00E0FF',
    },
    {
      dark: '#F8ACFF',
      light: '#FDECFF',
    },
  ];

  if (loading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  return (
    <div className="flex flex-col flex-grow">
      <Head>
        <title>HackerPacks</title>
        <meta name="description" content="HackPortal's Quesiton and Answer Page " />
      </Head>
      <section id="subheader" className="p-4">
        <AboutHeader active="/about/questions" />
      </section>
      <div className="top-6 p-4 flex flex-col gap-y-3">
        <h4 className="font-bold text-3xl">Ask the organizers a question!</h4>
        <div id="submit-question">
          <textarea
            className="w-full rounded-xl p-4"
            rows={5}
            style={{ backgroundColor: '#F2F3FF' }}
            placeholder="Type your question here"
          ></textarea>
          <div className="flex flex-row justify-end my-4">
            <button
              type="button"
              className="p-2 rounded-lg"
              style={{ backgroundColor: '#9CA6FF', color: 'black' }}
            >
              Submit Question
            </button>
          </div>
        </div>

        <div id="pending-question">
          <h4 className="font-bold text-2xl">My Pending Question</h4>
          {pendingQuestions.map(({ question }, idx) => (
            <PendingQuestion key={idx} question={question} />
          ))}
        </div>

        <div id="answered-question" className="my-4">
          <h4 className="font-bold text-2xl">My Answered Question</h4>
          {answeredQuestions.map(({ question, answer }, idx) => (
            <AnsweredQuestion
              key={idx}
              question={question}
              answer={answer}
              colorCode={colorSchemes[idx % 3].light}
              iconColorCode={colorSchemes[idx % 3].dark}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
