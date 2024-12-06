import Hero from "@/components/hero";
import Sidebar from "@/components/side-bar";
import Videocart from "@/components/videocart";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import "../public/styles/mainpage.scss";

export default async function Index() {
  // Create an array with 4 elements to map over
  const videoCards = Array.from({ length: 4 });

  return (
    <div className="page-container">
      <Sidebar />
      <div className="video-grid">
        {videoCards.map((_, index) => (
          <Videocart key={index} />
        ))}
      </div>
    </div>
  );
}
