import { Link } from 'react-router-dom';
import { Button } from './components/ui/button';
import { TbMessageChatbotFilled } from 'react-icons/tb';
import { MdSummarize } from 'react-icons/md';

const Home = () => {
   return (
      <div className="min-h-screen flex justify-center items-center gap-5">
         <Link to="/chatbot">
            <Button className="p-6 bg-red-500 hover:bg-red-300 ">
               <TbMessageChatbotFilled /> Chatbot
            </Button>
         </Link>
         <Link to="/summarizer">
            <Button className="p-6">
               <MdSummarize /> Review Summarizer
            </Button>
         </Link>
      </div>
   );
};

export default Home;
