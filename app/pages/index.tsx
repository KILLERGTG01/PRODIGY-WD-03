import type { NextPage } from 'next'
import Head from 'next/head'
import TicTacToe from '../components/tictactoe';


const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Beautiful Tic-Tac-Toe</title>
        <meta name="description" content="A beautiful Tic-Tac-Toe game built with Next.js, TypeScript, and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TicTacToe />
    </div>
  );
};

export default Index;
